import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'node:crypto';

/**
 * WayForPay Service URL webhook.
 *
 * WayForPay шлёт POST после оплаты. Мы проверяем входящую подпись
 * (HMAC-MD5 по merchantSecretKey), логируем платёж и возвращаем
 * подписанный JSON-ответ — иначе WayForPay будет ретраить.
 *
 * Документация:
 *   https://wiki.wayforpay.com/uk/view/852091  (Service URL)
 *   https://wiki.wayforpay.com/en/view/608067  (HMAC_MD5 signature)
 */

// Запуск только в node-runtime (нужен `crypto` и формирование сырого тела)
export const runtime = 'nodejs';
// На Vercel этот роут НЕ кэшируется
export const dynamic = 'force-dynamic';

// ────────────────────────────────────────────────────────────────────────
// Типы

type WayForPayWebhookBody = {
  merchantAccount: string;
  orderReference: string;
  merchantSignature: string;
  amount: number | string;
  currency: string;
  authCode?: string;
  email?: string;
  phone?: string;
  createdDate?: number;
  processingDate?: number;
  cardPan?: string;
  cardType?: string;
  issuerBankCountry?: string;
  issuerBankName?: string;
  recToken?: string;
  transactionStatus: 'Approved' | 'Declined' | 'Refunded' | 'Voided' | 'Expired' | 'Pending' | 'InProcessing' | 'WaitingAuthComplete' | 'RefundInProcessing';
  reason?: string;
  reasonCode?: number | string;
  fee?: number | string;
  paymentSystem?: string;
};

type WayForPayResponseStatus = 'accept' | 'decline';

// ────────────────────────────────────────────────────────────────────────
// Подпись

/**
 * Считает HMAC-MD5 по массиву полей, соединённых ";", с ключом
 * merchantSecretKey. Возвращает hex-строку (как ожидает WayForPay).
 */
function hmacMd5(secret: string, fields: Array<string | number | undefined | null>): string {
  const payload = fields.map((v) => (v === undefined || v === null ? '' : String(v))).join(';');
  return createHmac('md5', secret).update(payload, 'utf8').digest('hex');
}

/**
 * Поля для проверки подписи входящего webhook (порядок строго по спецификации).
 *   merchantAccount;orderReference;amount;currency;authCode;cardPan;
 *   transactionStatus;reasonCode
 */
function buildIncomingSignature(secret: string, b: WayForPayWebhookBody): string {
  return hmacMd5(secret, [
    b.merchantAccount,
    b.orderReference,
    b.amount,
    b.currency,
    b.authCode,
    b.cardPan,
    b.transactionStatus,
    b.reasonCode,
  ]);
}

/**
 * Поля для ответной подписи (мы → WayForPay):
 *   orderReference;status;time
 */
function buildResponseSignature(secret: string, orderReference: string, status: WayForPayResponseStatus, time: number): string {
  return hmacMd5(secret, [orderReference, status, time]);
}

// ────────────────────────────────────────────────────────────────────────
// Парсинг тела

/**
 * WayForPay может прислать тело несколькими форматами:
 *   1. application/json — обычный JSON
 *   2. application/x-www-form-urlencoded — единственное поле, где key или value
 *      содержат JSON-строку (исторический legacy-формат, иногда встречается)
 *   3. text/plain — голый JSON в теле
 *
 * Возвращаем распарсенный объект либо null если разобрать не удалось.
 */
async function parseBody(req: NextRequest): Promise<unknown> {
  const contentType = req.headers.get('content-type') ?? '';
  const raw = await req.text();

  // 1. JSON
  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  // 2. form-urlencoded — WayForPay иногда шлёт JSON в виде единственного
  //    поля, где ключ ИЛИ значение — JSON-строка.
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(raw);
    for (const [k, v] of params.entries()) {
      const candidate = v && v !== 'undefined' ? v : k;
      try {
        return JSON.parse(candidate);
      } catch {
        // continue
      }
    }
    return null;
  }

  // 3. Plain или неизвестный content-type — пробуем как JSON
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// ────────────────────────────────────────────────────────────────────────
// Handler

export async function POST(req: NextRequest) {
  const merchantSecretKey = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;
  if (!merchantSecretKey) {
    console.error('[wayforpay] WAYFORPAY_MERCHANT_SECRET_KEY is not set');
    // 500: WayForPay будет ретраить — починим конфиг и платёж дойдёт повторно
    return NextResponse.json({ error: 'server_not_configured' }, { status: 500 });
  }

  // 1. Парсим тело
  const parsed = await parseBody(req);
  if (!parsed || typeof parsed !== 'object') {
    console.error('[wayforpay] failed to parse body');
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }
  const body = parsed as WayForPayWebhookBody;

  // 2. Проверяем подпись от WayForPay
  const expectedSignature = buildIncomingSignature(merchantSecretKey, body);
  const signatureValid = body.merchantSignature === expectedSignature;

  if (!signatureValid) {
    console.error('[wayforpay] signature mismatch', {
      orderReference: body.orderReference,
      received: body.merchantSignature,
      expected: expectedSignature,
    });
    // 200 + status=decline — WayForPay перестанет ретраить, но мы не приняли
    const time = Math.floor(Date.now() / 1000);
    const responseSignature = buildResponseSignature(
      merchantSecretKey,
      body.orderReference ?? '',
      'decline',
      time,
    );
    return NextResponse.json({
      orderReference: body.orderReference ?? '',
      status: 'decline',
      time,
      signature: responseSignature,
    });
  }

  // 3. Логируем (тут может быть запись в БД, отправка email и т.д.)
  console.log('[wayforpay] webhook received', {
    orderReference: body.orderReference,
    transactionStatus: body.transactionStatus,
    amount: body.amount,
    currency: body.currency,
    email: body.email,
    phone: body.phone,
    cardPan: body.cardPan,
    paymentSystem: body.paymentSystem,
    reasonCode: body.reasonCode,
  });

  if (body.transactionStatus === 'Approved') {
    console.log('[wayforpay] ✅ APPROVED:', body.orderReference, body.amount, body.currency);
    // TODO: пометить заказ как оплаченный (БД), отправить email пользователю и т.п.
  } else {
    console.log('[wayforpay] ℹ status:', body.transactionStatus, body.orderReference);
  }

  // 4. Подписываем ответ
  const time = Math.floor(Date.now() / 1000);
  const responseSignature = buildResponseSignature(
    merchantSecretKey,
    body.orderReference,
    'accept',
    time,
  );

  return NextResponse.json({
    orderReference: body.orderReference,
    status: 'accept',
    time,
    signature: responseSignature,
  });
}

// Опциональный GET для health-check / проверки в браузере: убедиться что
// роут жив и доступен по правильному URL. WayForPay сам шлёт только POST.
export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'wayforpay-webhook',
    methods: ['POST'],
  });
}
