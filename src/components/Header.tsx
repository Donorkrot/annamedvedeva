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
    // Hide when scrolling DOWN, reveal when scrolling UP. Threshold-based
    // so iOS Safari momentum scrolling (which fires events with sub-pixel
    // deltas) doesn't make the header flicker. lastY only resets on a
    // confirmed direction change of ≥ 8px. requestAnimationFrame coalesces
    // multiple scroll events per frame so the React state updates stay
    // smooth even when the OS fires scroll at 120Hz.
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 60);

      if (y < 80) {
        setHidden(false);
        lastY = y;
      } else if (y > lastY + 8) {
        setHidden(true);
        lastY = y;
      } else if (y < lastY - 8) {
        setHidden(false);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
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
