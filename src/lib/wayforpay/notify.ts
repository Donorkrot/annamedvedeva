import type { WebhookPayload } from './types';

/**
 * Adapter для бизнес-действий после получения подтверждённого webhook.
 * Сейчас поддерживаются два канала:
 *   1. console (структурированный лог — всегда работает на Vercel)
 *   2. Resend transactional email (если задан RESEND_API_KEY и
 *      WAYFORPAY_NOTIFY_EMAIL — отправляем admin-уведомление)
 *
 * Если в будущем появится БД — добавь сюда update заказа. Это единственное
 * место в коде, которое знает о бизнес-логике; route.ts остаётся чистым.
 */

interface NotifyContext {
  isDuplicate: boolean;
}

export async function notify(payload: WebhookPayload, ctx: NotifyContext): Promise<void> {
  logStructured(payload, ctx);

  // Email отправляем только для финальных статусов — иначе будем спамить
  // promo-копии для Pending / InProcessing webhook'ов.
  if (shouldSendEmail(payload.transactionStatus) && !ctx.isDuplicate) {
    await sendAdminEmail(payload);
  }
}

function shouldSendEmail(status: string): boolean {
  return status === 'Approved' || status === 'Declined' || status === 'Refunded';
}

function logStructured(payload: WebhookPayload, ctx: NotifyContext): void {
  const tag =
    payload.transactionStatus === 'Approved'
      ? '✅ APPROVED'
      : payload.transactionStatus === 'Declined'
        ? '❌ DECLINED'
        : payload.transactionStatus === 'Refunded'
          ? '↩️  REFUNDED'
          : `ℹ ${payload.transactionStatus}`;

  console.log('[wayforpay]', tag, {
    orderReference: payload.orderReference,
    amount: payload.amount,
    currency: payload.currency,
    email: payload.email,
    phone: payload.phone,
    paymentSystem: payload.paymentSystem,
    cardPan: payload.cardPan,
    reasonCode: payload.reasonCode,
    reason: payload.reason,
    duplicate: ctx.isDuplicate,
  });
}

async function sendAdminEmail(payload: WebhookPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.WAYFORPAY_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? 'noreply@anna-medvedeva.space';

  if (!apiKey || !to) {
    // Не сконфигурировано — это OK, idempotent, просто пропускаем
    return;
  }

  const subject = subjectFor(payload);
  const html = renderHtml(payload);

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ from, to, subject, html }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error('[wayforpay] resend send failed', res.status, body.slice(0, 200));
    }
  } catch (err) {
    console.error('[wayforpay] resend fetch error', err);
  }
}

function subjectFor(p: WebhookPayload): string {
  const status = p.transactionStatus;
  const order = p.orderReference;
  const amount = `${p.amount} ${p.currency}`;
  if (status === 'Approved') return `✅ Оплата ${amount} • ${order}`;
  if (status === 'Declined') return `❌ Отклонено ${amount} • ${order}`;
  if (status === 'Refunded') return `↩ Возврат ${amount} • ${order}`;
  return `[${status}] ${amount} • ${order}`;
}

function renderHtml(p: WebhookPayload): string {
  const rows: Array<[string, string]> = [
    ['Статус', String(p.transactionStatus)],
    ['Order', String(p.orderReference)],
    ['Сумма', `${p.amount} ${p.currency}`],
    ['Email клиента', String(p.email ?? '—')],
    ['Телефон', String(p.phone ?? '—')],
    ['Способ оплаты', String(p.paymentSystem ?? '—')],
    ['Карта', String(p.cardPan ?? '—')],
    ['Auth code', String(p.authCode ?? '—')],
    ['Reason code', String(p.reasonCode ?? '—')],
    ['Reason', String(p.reason ?? '—')],
  ];
  const tableRows = rows
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666"><b>${escape(k)}</b></td><td style="padding:4px 0">${escape(v)}</td></tr>`)
    .join('');
  return `<div style="font-family:system-ui,sans-serif;font-size:14px;color:#222"><h2 style="margin:0 0 16px">WayForPay webhook</h2><table>${tableRows}</table></div>`;
}

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
