'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';
import { localizePath } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';

/**
 * Личный кабинет — первичная заглушка.
 *
 * Сессия — клиентская (localStorage, см. @/lib/auth). Если пользователь не
 * авторизован, после готовности хука уводим на главную. Контент — приветствие
 * + список «скоро будет» (курсы/материалы/консультации) + выход.
 */
export default function AccountClient() {
  const { tr, lang } = useTranslation();
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace(localizePath('/', lang));
  }, [ready, user, router, lang]);

  // До готовности или без сессии — лёгкий каркас (без мигания контентом).
  if (!ready || !user) {
    return <main className="account-page account-page--empty" />;
  }

  const initial = (user.name || user.email || '?').trim().charAt(0).toUpperCase();
  const soon = [
    tr('account_soon_courses'),
    tr('account_soon_materials'),
    tr('account_soon_consults'),
  ];

  return (
    <main className="account-page">
      <div className="account-card">

          <div className="account-head">
            <div className="account-avatar" aria-hidden="true">{initial}</div>
            <div className="account-head-text">
              <p className="account-greeting">{tr('account_greeting')},</p>
              <h1 className="account-name">{user.name}</h1>
              <p className="account-email">
                <span className="account-email-label">{tr('account_email_label')}:</span>{' '}
                {user.email}
              </p>
            </div>
          </div>

          <p className="account-subtitle">{tr('account_subtitle')}</p>

          <div className="account-soon">
            <p className="account-soon-title">{tr('account_soon_title')}</p>
            <ul className="account-soon-list">
              {soon.map((label) => (
                <li key={label} className="account-soon-item">
                  <span className="account-soon-dot" aria-hidden="true" />
                  <span className="account-soon-label">{label}</span>
                  <span className="account-soon-badge">{tr('account_soon_badge')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="account-actions">
            <Link href={localizePath('/', lang)} className="account-btn account-btn--ghost">{tr('account_back_home')}</Link>
          </div>

      </div>
    </main>
  );
}
