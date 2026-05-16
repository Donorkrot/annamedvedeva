/**
 * In-memory idempotency cache.
 *
 * WayForPay может прислать один и тот же webhook несколько раз (retry при
 * таймауте, ручной resend из админки). Мы запоминаем (orderReference +
 * transactionStatus) и игнорируем повторы в течение TTL.
 *
 * ОГРАНИЧЕНИЯ:
 * - Память живёт в рамках одной serverless-инстанции на Vercel. На cold
 *   start кеш пустой → возможна повторная обработка. Для полной защиты
 *   нужна внешняя память: Vercel KV (Redis), Upstash, БД.
 * - На бесплатных Vercel-инстансах живёт ~5 минут idle, ~12 часов под
 *   нагрузкой. TTL=24h покрывает реалистичные retry-окна WayForPay.
 *
 * Если кол-во заказов в час высокое — заменить на Vercel KV:
 *   await kv.set(key, '1', { ex: 86400, nx: true })  // только если ключа нет
 */

const SEEN = new Map<string, number>();
const TTL_MS = 24 * 60 * 60 * 1000; // 24h
const MAX_ENTRIES = 5000;

function gc(now: number): void {
  if (SEEN.size < MAX_ENTRIES) return;
  for (const [key, ts] of SEEN.entries()) {
    if (now - ts > TTL_MS) SEEN.delete(key);
  }
  // Если ещё переполнено — выкидываем самые старые (Map сохраняет порядок вставки)
  while (SEEN.size > MAX_ENTRIES) {
    const oldest = SEEN.keys().next().value;
    if (oldest === undefined) break;
    SEEN.delete(oldest);
  }
}

/**
 * Возвращает true если этот webhook ещё не обрабатывался — и сразу
 * помечает его как обработанный. Возвращает false если дубликат.
 */
export function tryMarkProcessed(orderReference: string, transactionStatus: string): boolean {
  const key = `${orderReference}::${transactionStatus}`;
  const now = Date.now();
  const seenAt = SEEN.get(key);

  if (seenAt !== undefined && now - seenAt < TTL_MS) {
    return false; // дубликат в пределах TTL
  }

  SEEN.set(key, now);
  gc(now);
  return true;
}
