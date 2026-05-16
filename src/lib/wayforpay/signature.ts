import { createHmac, timingSafeEqual } from 'node:crypto';
import type { ResponseStatus, WebhookPayload } from './types';

/**
 * HMAC-MD5 подпись по WayForPay-спецификации.
 * Поля соединяются через ";", пустые значения остаются пустыми (но разделитель есть).
 * Доки: https://wiki.wayforpay.com/en/view/608067
 */
function hmacMd5(secret: string, fields: Array<string | number | undefined | null>): string {
  const payload = fields
    .map((v) => (v === undefined || v === null ? '' : String(v)))
    .join(';');
  return createHmac('md5', secret).update(payload, 'utf8').digest('hex');
}

/**
 * Подпись входящего webhook от WayForPay.
 * Порядок полей строго фиксирован спецификацией:
 *   merchantAccount;orderReference;amount;currency;authCode;cardPan;transactionStatus;reasonCode
 */
export function computeIncomingSignature(secret: string, body: WebhookPayload): string {
  return hmacMd5(secret, [
    body.merchantAccount,
    body.orderReference,
    body.amount,
    body.currency,
    body.authCode,
    body.cardPan,
    body.transactionStatus,
    body.reasonCode,
  ]);
}

/**
 * Подпись ответа (мы → WayForPay):
 *   orderReference;status;time
 */
export function computeResponseSignature(
  secret: string,
  orderReference: string,
  status: ResponseStatus,
  time: number,
): string {
  return hmacMd5(secret, [orderReference, status, time]);
}

/**
 * Constant-time сравнение подписей — защита от timing-атак.
 * Длины строк должны совпадать (MD5 = 32 hex char), иначе сразу false.
 */
export function signaturesMatch(received: string, expected: string): boolean {
  if (typeof received !== 'string' || received.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  } catch {
    return false;
  }
}
