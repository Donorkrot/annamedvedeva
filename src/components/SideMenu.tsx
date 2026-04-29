'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';
import type { Lang } from '@/lib/translations';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

const NAV_ITEMS = [
  { key: 'menu_ri',       href: '#s4'  },
  { key: 'menu_key_ri',   href: '#s7'  },
  { key: 'menu_dna',      href: '#s8'  },
  { key: 'menu_archetypes', href: '#s9' },
  { key: 'menu_unity',    href: '#s10' },
  { key: 'menu_contact',  href: '#s12' },
] as const;

const PAGE_ITEMS = [
  { key: 'nav_consult', href: '/consultation' },
  { key: 's7_btn2',     href: '/about' },
] as const;

const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/medvedieva.anna',
  youtube:   'https://www.youtube.com/@medvedievaanna',
  telegram:  'https://t.me/wayofsoulanna',
} as const;

export default function SideMenu({ open, onClose }: SideMenuProps) {
  const { lang, setLang, tr } = useTranslation();

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

  const scrollTo = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: 'smooth' });
    }, 320);
  };

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
          {NAV_ITEMS.map(item => (
            <a
              key={item.key}
              className="sidemenu-link"
              onClick={() => scrollTo(item.href)}
            >
              {tr(item.key as Parameters<typeof tr>[0])}
            </a>
          ))}
          {PAGE_ITEMS.map(item => (
            <Link
              key={item.key}
              href={item.href}
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

        {/* Login / Register — placeholder for future auth modal */}
        <button
          className="sidemenu-cta"
          style={{ marginTop: 0, opacity: 0.85 }}
          onClick={onClose}
        >
          {tr('nav_login')}
        </button>

        {/* CTA button */}
        <button
          className="sidemenu-cta"
          onClick={() => scrollTo('#s12')}
        >
          {tr('nav_btn')}
        </button>

        {/* Language switcher */}
        <div className="sidemenu-lang">
          {(['ru', 'ua', 'en'] as Lang[]).map((l) => (
            <a
              key={l}
              className={`sidemenu-lang-item${lang === l ? ' active' : ''}`}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </a>
          ))}
        </div>

      </aside>
    </>
  );
}
