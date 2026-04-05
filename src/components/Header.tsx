'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/components/LanguageProvider';
import AuthModal from '@/components/AuthModal';
import SideMenu from '@/components/SideMenu';
import type { Lang } from '@/lib/translations';

export default function Header() {
  const { lang, setLang, tr } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="header-logo">
          <span className="header-logo-text">REALITY DNA</span>
        </a>

        <div className="header-right">
          <div className="lang-switcher">
            {(['ru', 'ua', 'en'] as Lang[]).map((l) => (
              <a
                key={l}
                className={lang === l ? 'active' : ''}
                onClick={() => setLang(l)}
                style={{ cursor: 'pointer' }}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Hamburger / burger menu */}
          <button
            className="header-burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Меню"
          >
            <span /><span /><span />
          </button>

          <button
            className="btn-site header-btn"
            onClick={() => document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {tr('nav_btn')}
          </button>
        </div>
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
