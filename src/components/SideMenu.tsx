'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';
import { localizePath } from '@/lib/i18n';
import { useAuth } from '@/lib/auth';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
  /** Открыть модалку входа/регистрации (передаётся из Header). */
  onLogin: () => void;
}

const PAGE_ITEMS = [
  { key: 'menu_home',          href: '/' },
  { key: 'menu_academy',       href: '/academy' },
  { key: 's7_btn2',            href: '/about' },
  { key: 'menu_consultations', href: '/consultation' },
  { key: 'menu_first_stage',   href: '/first-stage' },
] as const;

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/medvedieva.anna',
  youtube:   'https://www.youtube.com/@medvedievaanna',
  telegram:  'https://t.me/wayofsoulanna',
} as const;

export default function SideMenu({ open, onClose, onLogin }: SideMenuProps) {
  const { tr, lang } = useTranslation();
  const { user } = useAuth();

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`sidemenu-overlay${open ? ' open' : ''}`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside className={`sidemenu-panel${open ? ' open' : ''}`}>

        {/* Close button */}
        <button className="sidemenu-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Logo */}
        <div className="sidemenu-logo">
          <Image src="/images/icons/DNA.png" alt="Reality DNA" width={52} height={36} style={{ width: 'auto', height: 'auto' }} />
          <span className="sidemenu-logo-text">REALITY DNA</span>
        </div>

        {/* Nav links */}
        <nav className="sidemenu-nav">
          {PAGE_ITEMS.map(item => (
            <Link
              key={item.key}
              href={localizePath(item.href, lang)}
              className="sidemenu-link"
              onClick={onClose}
            >
              {tr(item.key as Parameters<typeof tr>[0])}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="sidemenu-socials">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="sidemenu-social" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="sidemenu-social" aria-label="YouTube">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="2" y="5" width="20" height="14" rx="4"/>
              <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="sidemenu-social" aria-label="Telegram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M22 3L2 10.5l7 2.5M22 3L9.5 13m0 0v7l3.5-3.5M9.5 13L16 18l6-15"/>
            </svg>
          </a>
        </div>

        {/* Вход/Регистрация — если пользователь уже вошёл, ведём в личный
            кабинет; иначе открываем модалку авторизации. */}
        {user ? (
          <Link
            href={localizePath('/account', lang)}
            className="sidemenu-cta"
            style={{ marginTop: 0 }}
            onClick={onClose}
          >
            {tr('nav_account')}
          </Link>
        ) : (
          <button
            className="sidemenu-cta"
            style={{ marginTop: 0 }}
            onClick={() => { onClose(); onLogin(); }}
          >
            {tr('nav_login')}
          </button>
        )}

      </aside>
    </>
  );
}
