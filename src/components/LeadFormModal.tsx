'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/components/LanguageProvider';
import { isValidPhone } from '@/lib/phone';

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
  /** Источник — например "first-stage" для маркировки лида */
  source?: string;
  /** Услуга/тариф для показа в форме и передачи в заявку — например "Срочная консультация — 400$" */
  topic?: string;
}

/**
 * Модальная форма обратной связи: имя + телефон + submit.
 * Используется со страницы /first-stage по кнопке «Вход в метод».
 */
export default function LeadFormModal({ open, onClose, source = 'first-stage', topic }: LeadFormModalProps) {
  const { tr } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [messenger, setMessenger] = useState<'' | 'telegram' | 'whatsapp'>('');
  const [tgNick, setTgNick] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Reset state when reopened
  useEffect(() => {
    if (open) {
      setStatus('idle');
      setErrorMsg('');
      setMessage('');
      setMessenger('');
      setTgNick('');
      setAgreed(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg(tr('lead_form_error_required'));
      setStatus('error');
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorMsg(tr('lead_form_error_phone'));
      setStatus('error');
      return;
    }
    if (!messenger) {
      setErrorMsg(tr('lead_form_error_messenger'));
      setStatus('error');
      return;
    }
    if (messenger === 'telegram' && !tgNick.trim()) {
      setErrorMsg(tr('lead_form_error_tg_nick'));
      setStatus('error');
      return;
    }
    if (!agreed) {
      setErrorMsg(tr('lead_form_error_consent'));
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          source,
          topic,
          message: message.trim(),
          messenger,
          telegram: messenger === 'telegram' ? tgNick.trim() : '',
        }),
      });
      if (!res.ok) throw new Error('Submit failed');
      setStatus('success');
      setName('');
      setPhone('');
      setMessenger('');
      setTgNick('');
    } catch {
      setErrorMsg(tr('lead_form_error_network'));
      setStatus('error');
    }
  };

  return (
    <div className="lead-overlay" onClick={onClose}>
      <div className="lead-modal" onClick={e => e.stopPropagation()}>
        <button className="lead-close" onClick={onClose} aria-label="Close">×</button>

        {status === 'success' ? (
          <div className="lead-success">
            <h3 className="lead-title">{tr('lead_form_success_title')}</h3>
            <p className="lead-success-text">{tr('lead_form_success_text')}</p>
            <button className="lead-submit" onClick={onClose}>{tr('lead_form_close')}</button>
          </div>
        ) : (
          <form className="lead-form" onSubmit={handleSubmit}>
            <h3 className="lead-title">{tr('lead_form_title')}</h3>
            <p className="lead-sub">{tr('lead_form_sub')}</p>
            {topic && <p className="lead-topic">{topic}</p>}

            <div className="lead-field">
              <label className="lead-label">{tr('lead_form_name')}</label>
              <input
                className="lead-input"
                type="text"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={tr('lead_form_name_ph')}
              />
            </div>

            <div className="lead-field">
              <label className="lead-label">{tr('lead_form_phone')}</label>
              <input
                className="lead-input"
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+380 67 000 00 00"
              />
            </div>

            <div className="lead-field">
              <label className="lead-label">{tr('lead_form_messenger')}</label>
              <div className="lead-messenger" role="radiogroup">
                <button
                  type="button"
                  role="radio"
                  aria-checked={messenger === 'telegram'}
                  className={`lead-messenger-btn${messenger === 'telegram' ? ' active' : ''}`}
                  onClick={() => setMessenger('telegram')}
                >
                  {tr('lead_form_messenger_telegram')}
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={messenger === 'whatsapp'}
                  className={`lead-messenger-btn${messenger === 'whatsapp' ? ' active' : ''}`}
                  onClick={() => setMessenger('whatsapp')}
                >
                  {tr('lead_form_messenger_whatsapp')}
                </button>
              </div>
            </div>

            {messenger === 'telegram' && (
              <div className="lead-field">
                <label className="lead-label">{tr('lead_form_tg_nick')}</label>
                <input
                  className="lead-input"
                  type="text"
                  value={tgNick}
                  onChange={e => setTgNick(e.target.value)}
                  placeholder={tr('lead_form_tg_nick_ph')}
                />
              </div>
            )}

            <div className="lead-field">
              <label className="lead-label">{tr('lead_form_message')}</label>
              <textarea
                className="lead-input lead-textarea"
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder={tr('lead_form_message_ph')}
              />
            </div>

            <label className="lead-consent">
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
              />
              <span>
                {tr('lead_form_consent_pre')}{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">{tr('lead_form_consent_link')}</a>
              </span>
            </label>

            {errorMsg && <p className="lead-error">{errorMsg}</p>}

            <button className="lead-submit" type="submit" disabled={status === 'submitting' || !agreed}>
              {status === 'submitting' ? tr('lead_form_sending') : tr('lead_form_submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
