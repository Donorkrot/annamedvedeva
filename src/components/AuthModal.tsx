'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/components/LanguageProvider';
import { setUser } from '@/lib/auth';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const { tr } = useTranslation();
  const router = useRouter();
  const [tab, setTab] = useState<'login' | 'register'>('login');

  // Поля форм (контролируемые)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Сброс состояния при каждом открытии
  useEffect(() => {
    if (open) {
      setTab('login');
      setName('');
      setEmail('');
      setPassword('');
      setError('');
    }
  }, [open]);

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

  if (!open) return null;

  // Завершение входа/регистрации — заглушка: пишем пользователя в localStorage
  // и уводим в личный кабинет. Реального бэкенда нет, поэтому пароль не
  // проверяется, а имя для входа берём из части email до «@».
  const finish = (user: { name: string; email: string }) => {
    setUser({ ...user, since: Date.now() });
    onClose();
    router.push('/account');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const mail = email.trim();
    if (!mail || !password) { setError(tr('auth_error_fill')); return; }
    finish({ name: mail.split('@')[0], email: mail });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const mail = email.trim();
    const nm = name.trim();
    if (!nm || !mail || !password) { setError(tr('auth_error_fill')); return; }
    finish({ name: nm, email: mail });
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>

        {/* Close button */}
        <button className="auth-close" onClick={onClose} aria-label="Close">×</button>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab${tab === 'login' ? ' active' : ''}`}
            onClick={() => { setTab('login'); setError(''); }}
          >
            {tr('auth_login_tab')}
          </button>
          <button
            className={`auth-tab${tab === 'register' ? ' active' : ''}`}
            onClick={() => { setTab('register'); setError(''); }}
          >
            {tr('auth_register_tab')}
          </button>
        </div>

        {/* Login form */}
        {tab === 'login' && (
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_email_label')}</label>
              <input
                className="auth-input"
                type="text"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_password_label')}</label>
              <input
                className="auth-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit">{tr('auth_login_btn')}</button>
            <p className="auth-switch">
              {tr('auth_no_account')}&nbsp;
              <span className="auth-switch-link" onClick={() => { setTab('register'); setError(''); }}>
                {tr('auth_go_register')}
              </span>
            </p>
          </form>
        )}

        {/* Register form */}
        {tab === 'register' && (
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_name_label')}</label>
              <input
                className="auth-input"
                type="text"
                autoFocus
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_email_label')}</label>
              <input
                className="auth-input"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="auth-field">
              <label className="auth-label">{tr('auth_password_label')}</label>
              <input
                className="auth-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit">{tr('auth_register_btn')}</button>
            <p className="auth-switch">
              {tr('auth_have_account')}&nbsp;
              <span className="auth-switch-link" onClick={() => { setTab('login'); setError(''); }}>
                {tr('auth_go_login')}
              </span>
            </p>
          </form>
        )}

      </div>
    </div>
  );
}
