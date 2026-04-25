'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/components/LanguageProvider';
import AuthModal from '@/components/AuthModal';
import SideMenu from '@/components/SideMenu';
import type { Lang } from '@/lib/translations';

export default function Header() {
  const { lang, setLang, tr } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Auto-hide on scroll down past the hero, re-show on scroll up.
      // Avoids the sticky header "chasing" over baked-in block content
      // on mobile. Stays pinned at the very top (< 80px).
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY + 4) {
        setHidden(true);
      } else if (y < lastY - 4) {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}`}>
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

          <a
            href="/consultation"
            className="btn-site header-btn"
          >
            {tr('nav_consult')}
          </a>
        </div>
      </header>

      <SideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
