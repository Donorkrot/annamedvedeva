import type { NextRequest } from 'next/server';

/**
 * WayForPay может прислать тело тремя форматами:
 *   1. application/json — нормальный JSON.
 *   2. application/x-www-form-urlencoded — JSON в виде единственного поля,
 *      где ключ ИЛИ значение содержат сериализованный JSON (legacy-формат).
 *   3. text/plain — голый JSON.
 *
 * Возвращаем распарсенный объект либо null если ничего не распозналось.
 */
export async function parseWebhookBody(req: NextRequest): Promise<unknown> {
  const contentType = req.headers.get('content-type') ?? '';
  const raw = await req.text();

  if (!raw) return null;

  // 1. JSON
  if (contentType.includes('application/json')) {
    return safeJsonParse(raw);
  }

  // 2. form-urlencoded — пробуем ключи И значения как кандидаты на JSON-строку
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(raw);
    for (const [k, v] of params.entries()) {
      const candidate = v && v !== 'undefined' ? v : k;
      const parsed = safeJsonParse(candidate);
      if (parsed) return parsed;
    }
    return null;
  }

  // 3. fallback — пробуем как JSON
  return safeJsonParse(raw);
}

function safeJsonParse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/**
 * Минимальная валидация структуры: убеждаемся что обязательные поля есть и
 * имеют правильный тип. Возвращаем true/false без модификации payload.
 */
export function isValidPayloadShape(parsed: unknown): boolean {
  if (!parsed || typeof parsed !== 'object') return false;
  const p = parsed as Record<string, unknown>;
  return (
    typeof p.merchantAccount === 'string' &&
    typeof p.orderReference === 'string' &&
    typeof p.merchantSignature === 'string' &&
    typeof p.transactionStatus === 'string' &&
    (typeof p.amount === 'string' || typeof p.amount === 'number') &&
    typeof p.currency === 'string'
  );
}
