import { NextResponse } from 'next/server';
import { isValidPhone } from '@/lib/phone';

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
    const { name, phone, source, topic, message, messenger, telegram } = body as {
      name?: string; phone?: string; source?: string; topic?: string; message?: string;
      messenger?: string; telegram?: string;
    };

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    const messengerNorm = messenger === 'telegram' || messenger === 'whatsapp' ? messenger : '';
    if (!messengerNorm) {
      return NextResponse.json({ ok: false, error: 'Missing messenger' }, { status: 400 });
    }
    if (messengerNorm === 'telegram' && !telegram) {
      return NextResponse.json({ ok: false, error: 'Missing telegram nick' }, { status: 400 });
    }

    // Серверная проверка телефона (UA-форматы с кодом/без + международный E.164),
    // чтобы не приходили неполные номера.
    if (!isValidPhone(String(phone))) {
      return NextResponse.json({ ok: false, error: 'Invalid phone' }, { status: 400 });
    }

    const lead = {
      name: String(name).slice(0, 200),
      phone: String(phone).slice(0, 50),
      source: String(source || 'unknown').slice(0, 100),
      topic: topic ? String(topic).slice(0, 200) : '',
      message: message ? String(message).slice(0, 2000) : '',
      messenger: messengerNorm,
      telegram: messengerNorm === 'telegram' && telegram ? String(telegram).slice(0, 100) : '',
      ts: new Date().toISOString(),
    };

    // eslint-disable-next-line no-console
    console.log('[lead]', lead);

    // Читаемые названия страницы/формы по коду источника.
    const SOURCE_LABELS: Record<string, string> = {
      'first-stage': 'Первая ступень — кнопка «Вход в метод» (/first-stage)',
      'academy-hero': 'Академия — кнопка «Подать заявку» в шапке (/academy)',
      'academy-step1': 'Академия — блок «1 ступень», «Оставить заявку» (/academy)',
      'consultation-card-1': 'Консультация — карточка «Индивидуальная консультация», Техподдержка (/consultation)',
      'consultation-card-2': 'Консультация — карточка «Срочная консультация», Техподдержка (/consultation)',
      'consultation-card-3': 'Консультация — карточка «Дистанционная консультация», Техподдержка (/consultation)',
    };
    const sourceLabel = SOURCE_LABELS[lead.source] || lead.source;
    const timeKyiv = new Date(lead.ts).toLocaleString('ru-RU', {
      timeZone: 'Europe/Kyiv',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });

    // Telegram-доставка (опционально, если есть env)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (token && chatId) {
      const text =
        `🆕 Новая заявка с сайта\n\n` +
        `👤 Имя: ${lead.name}\n` +
        `📞 Телефон: ${lead.phone}\n` +
        (lead.messenger === 'telegram'
          ? `💬 Telegram: ${lead.telegram}\n`
          : `💬 Мессенджер: WhatsApp (по номеру телефона)\n`) +
        `📄 Форма: ${sourceLabel}\n` +
        (lead.topic ? `💼 Услуга: ${lead.topic}\n` : '') +
        (lead.message ? `✍️ Сообщение: ${lead.message}\n` : '') +
        `🕐 Время (Киев): ${timeKyiv}`;
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

    // Google Sheets-доставка через Apps Script Web App (опционально, если есть env).
    // Скрипт принимает POST с {name, phone, source, ts} и добавляет строку.
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead),
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('[lead] google sheets delivery failed', e);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
