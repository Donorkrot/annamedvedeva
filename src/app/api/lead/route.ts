import { NextResponse } from 'next/server';

/**
 * POST /api/lead
 * Приём заявок с формы обратной связи (имя + телефон + источник).
 *
 * MVP: логирует в server console. Позже можно подключить отправку в Telegram
 * (TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID env), email через resend/sendgrid,
 * или запись в БД.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, source } = body as { name?: string; phone?: string; source?: string };

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const lead = {
      name: String(name).slice(0, 200),
      phone: String(phone).slice(0, 50),
      source: String(source || 'unknown').slice(0, 100),
      ts: new Date().toISOString(),
    };

    // eslint-disable-next-line no-console
    console.log('[lead]', lead);

    // Telegram-доставка (опционально, если есть env)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
      const text = `🆕 Заявка (${lead.source})\n👤 ${lead.name}\n📞 ${lead.phone}\n🕐 ${lead.ts}`;
      try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text }),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[lead] telegram delivery failed', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
