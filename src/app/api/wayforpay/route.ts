import { NextRequest, NextResponse } from 'next/server';
import { isValidPayloadShape, parseWebhookBody } from '@/lib/wayforpay/parser';
import {
  computeIncomingSignature,
  computeResponseSignature,
  signaturesMatch,
} from '@/lib/wayforpay/signature';
import { tryMarkProcessed } from '@/lib/wayforpay/dedupe';
import { notify } from '@/lib/wayforpay/notify';
import type { WebhookPayload, WebhookResponse } from '@/lib/wayforpay/types';

/**
 * WayForPay Service URL webhook endpoint.
 *
 * URL для прописки в личном кабинете WayForPay:
 *   https://www.anna-medvedeva.space/api/wayforpay
 *
 * Поток:
 *   1. Парсим тело (JSON / form-urlencoded / plain).
 *   2. Минимальная валидация структуры.
 *   3. Проверяем merchantAccount совпадает с нашим (защита от подделки).
 *   4. Считаем HMAC-MD5 от полей и сверяем с merchantSignature (timing-safe).
 *   5. Идемпотентность: пропускаем дубликаты (orderReference + status).
 *   6. Передаём в notify() — логирование + email админу (если настроено).
 *   7. Возвращаем подписанный JSON-ответ — иначе WayForPay будет ретраить.
 *
 * Доки:
 *   https://wiki.wayforpay.com/uk/view/852091  (Service URL)
 *   https://wiki.wayforpay.com/en/view/608067  (HMAC_MD5 signature)
 */

export const runtime = 'nodejs';        // нужен node:crypto
export const dynamic = 'force-dynamic'; // не кэшируем

export async function POST(req: NextRequest): Promise<NextResponse> {
  const secret = process.env.WAYFORPAY_MERCHANT_SECRET_KEY;
  const expectedAccount = process.env.WAYFORPAY_MERCHANT_ACCOUNT;

  if (!secret) {
    console.error('[wayforpay] WAYFORPAY_MERCHANT_SECRET_KEY not configured');
    return jsonError('server_not_configured', 500);
  }

  // 1. Парсим
  const parsed = await parseWebhookBody(req);
  if (!isValidPayloadShape(parsed)) {
    console.error('[wayforpay] invalid payload shape');
    return jsonError('invalid_body', 400);
  }
  const body = parsed as WebhookPayload;

  // 2. Проверяем merchantAccount (если задан в env — должен совпадать)
  if (expectedAccount && body.merchantAccount !== expectedAccount) {
    console.error('[wayforpay] merchantAccount mismatch', {
      received: body.merchantAccount,
      expected: expectedAccount,
    });
    return signedDecline(secret, body.orderReference);
  }

  // 3. Проверяем подпись
  const expectedSig = computeIncomingSignature(secret, body);
  if (!signaturesMatch(body.merchantSignature, expectedSig)) {
    console.error('[wayforpay] signature mismatch', {
      orderReference: body.orderReference,
      received: body.merchantSignature,
      expected: expectedSig,
    });
    return signedDecline(secret, body.orderReference);
  }

  // 4. Идемпотентность: дубликаты webhook (retry от WayForPay) обрабатываем,
  //    но без побочных эффектов (email не шлём повторно). Ответ всё равно
  //    шлём с status=accept чтобы WayForPay прекратил ретрай.
  const firstTime = tryMarkProcessed(body.orderReference, body.transactionStatus);

  // 5. Бизнес-логика (логирование + email)
  try {
    await notify(body, { isDuplicate: !firstTime });
  } catch (err) {
    // Падение notify не должно ломать ответ — иначе WayForPay будет ретраить
    // и спам с email-ами усилится. Просто логируем.
    console.error('[wayforpay] notify error', err);
  }

  // 6. Подписанный ответ
  return signedAccept(secret, body.orderReference);
}

/**
 * Health-check эндпоинт. WayForPay шлёт только POST — GET для удобной
 * проверки руками что URL прописан правильно.
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    ok: true,
    service: 'wayforpay-webhook',
    methods: ['POST'],
    configured: Boolean(process.env.WAYFORPAY_MERCHANT_SECRET_KEY),
  });
}

// ────────────────────────────────────────────────────────────────────────
// Helpers

function jsonError(code: string, status: number): NextResponse {
  return NextResponse.json({ error: code }, { status });
}

function signedAccept(secret: string, orderReference: string): NextResponse {
  const time = nowSec();
  const signature = computeResponseSignature(secret, orderReference, 'accept', time);
  const body: WebhookResponse = { orderReference, status: 'accept', time, signature };
  return NextResponse.json(body);
}

function signedDecline(secret: string, orderReference: string): NextResponse {
  const time = nowSec();
  const safeRef = orderReference ?? '';
  const signature = computeResponseSignature(secret, safeRef, 'decline', time);
  const body: WebhookResponse = { orderReference: safeRef, status: 'decline', time, signature };
  // 200 + decline — WayForPay прекратит ретрай, но мы не приняли платёж
  return NextResponse.json(body);
}

function nowSec(): number {
  return Math.floor(Date.now() / 1000);
}
