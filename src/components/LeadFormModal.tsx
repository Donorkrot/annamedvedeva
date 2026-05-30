'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/components/LanguageProvider';

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
  /** Источник — например "first-stage" для маркировки лида */
  source?: string;
}

/**
 * Модальная форма обратной связи: имя + телефон + submit.
 * Используется со страницы /first-stage по кнопке «Вход в метод».
 */
export default function LeadFormModal({ open, onClose, source = 'first-stage' }: LeadFormModalProps) {
  const { tr } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), source }),
      });
      if (!res.ok) throw new Error('Submit failed');
      setStatus('success');
      setName('');
      setPhone('');
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
                placeholder="+7 999 000-00-00"
              />
            </div>

            {errorMsg && <p className="lead-error">{errorMsg}</p>}

            <button className="lead-submit" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? tr('lead_form_sending') : tr('lead_form_submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
