# WayForPay Webhook

Production-эндпоинт: `https://www.anna-medvedeva.space/api/wayforpay`

## Архитектура

```
src/
  app/api/wayforpay/route.ts      ← тонкий handler (POST + GET health-check)
  lib/wayforpay/
    types.ts                      ← TypeScript-типы payload/response
    signature.ts                  ← HMAC-MD5 (timing-safe сравнение)
    parser.ts                     ← разбор тела (JSON / form / plain)
    dedupe.ts                     ← in-memory idempotency cache
    notify.ts                     ← логирование + Resend email (опционально)
```

Handler делает 6 шагов:
1. Парсит тело (3 формата контента).
2. Валидирует структуру payload.
3. Проверяет `merchantAccount` совпадает с `WAYFORPAY_MERCHANT_ACCOUNT`.
4. Считает HMAC-MD5 и сверяет с `merchantSignature` (constant-time через `timingSafeEqual`).
5. Через `dedupe` проверяет — не дубликат ли (orderReference + status, TTL 24h).
6. Передаёт в `notify` → console.log + опциональный email.
7. Возвращает подписанный JSON: `{ orderReference, status: "accept", time, signature }`.

## Где хранить секреты

**НИКОГДА не коммитить в Git.** `.env*` уже в `.gitignore`.

### Локально
Создать `.env.local` (next.js автоматически подтянет):
```
WAYFORPAY_MERCHANT_ACCOUNT=...
WAYFORPAY_MERCHANT_SECRET_KEY=...
```

### Vercel (production)
1. Vercel Dashboard → Project `annamedvedeva` → **Settings** → **Environment Variables**
2. Добавить переменные с пометкой **Production**:
   - `WAYFORPAY_MERCHANT_ACCOUNT`
   - `WAYFORPAY_MERCHANT_SECRET_KEY`
   - (опционально) `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `WAYFORPAY_NOTIFY_EMAIL`
3. Redeploy после изменения env vars.

## Настройка кабинета WayForPay

Кабинет → Merchants → выбрать merchant → **Setup**:

| Поле | Значение |
|---|---|
| Service URL | `https://www.anna-medvedeva.space/api/wayforpay` |
| Method | POST |
| Format | JSON или form-urlencoded — оба поддерживаются |

После настройки — нажать в кабинете "Resend webhook" по тестовой транзакции и проверить логи Vercel.

## Локальное тестирование

WayForPay не сможет достучаться до `localhost:3000`. Решения:

### Вариант 1: ngrok (рекомендуется)
```bash
# терминал 1
npm run dev

# терминал 2
ngrok http 3000
# → https://abc123.ngrok.io
```

В кабинете WayForPay временно пропиши:
`https://abc123.ngrok.io/api/wayforpay`

### Вариант 2: curl с подделкой подписи

```bash
# Псевдо-payload (для теста парсинга/ответа, не валидной подписи)
curl -X POST http://localhost:3000/api/wayforpay \
  -H "Content-Type: application/json" \
  -d '{
    "merchantAccount": "anna_medvedeva_space",
    "orderReference": "TEST_ORDER_001",
    "amount": 1500,
    "currency": "UAH",
    "transactionStatus": "Approved",
    "merchantSignature": "abc...",
    "authCode": "12345",
    "cardPan": "44**44"
  }'
```

Для валидной подписи: посчитать HMAC-MD5:
```bash
node -e '
const { createHmac } = require("crypto");
const secret = "YOUR_SECRET_KEY";
const fields = ["anna_medvedeva_space","TEST_ORDER_001",1500,"UAH","12345","44**44","Approved",""];
console.log(createHmac("md5", secret).update(fields.join(";")).digest("hex"));
'
```

### Health-check
```bash
curl https://www.anna-medvedeva.space/api/wayforpay
# → {"ok":true,"service":"wayforpay-webhook","methods":["POST"],"configured":true}
```

## Логи

На Vercel: Dashboard → Project → **Logs** (фильтр по `[wayforpay]`).

Локально: смотри терминал с `npm run dev`.

## Что делает notify

Сейчас:
- Структурированный `console.log` для всех webhook'ов.
- Email на `WAYFORPAY_NOTIFY_EMAIL` для статусов `Approved` / `Declined` / `Refunded` (если задан `RESEND_API_KEY`).

Что добавить когда появится БД:
- В `src/lib/wayforpay/notify.ts` → `notify()` дописать `await db.orders.update(...)`.
- Не трогать `route.ts` — он остаётся тонким.

## Idempotency

In-memory `Map` с TTL 24ч в `dedupe.ts`. На Vercel живёт в рамках одной serverless-инстанции — после cold start кеш пустой → возможна повторная обработка.

Для production-grade idempotency → заменить на Vercel KV (Redis):
```ts
// dedupe.ts
import { kv } from '@vercel/kv';
export async function tryMarkProcessed(orderRef: string, status: string) {
  const key = `wfp:${orderRef}:${status}`;
  const set = await kv.set(key, '1', { ex: 86400, nx: true });
  return set === 'OK'; // null если ключ уже был
}
```
И `notify` сделать `await`.

## Безопасность

- ✅ Подпись валидируется HMAC-MD5 с timing-safe сравнением
- ✅ Проверка `merchantAccount` (защита от чужих webhook'ов с правильной подписью)
- ✅ Дедупликация (TTL 24h)
- ✅ Секреты только в env, не в коде
- ✅ Сетевой запрос к Resend через native fetch (нет лишних зависимостей)
- ⚠️ На cold start Vercel idempotency сбрасывается — для high-volume использовать Vercel KV
