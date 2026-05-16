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
    // Hide on scroll-down, reveal on scroll-up. Asymmetric thresholds with
    // direction-accumulators eliminate the flicker the previous "± 8px from
    // lastY" logic produced: momentum scrolls and trackpad bounce often emit
    // brief reverse-deltas mid-flight, which used to flip the hidden state
    // back on for a frame. Now the accumulator resets when direction changes
    // and only triggers state changes once the user has deliberately moved
    // 5px down (hide fast) or 30px up (reveal only on intent).
    let lastY = window.scrollY;
    let accDown = 0;
    let accUp = 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      setScrolled(y > 60);

      // At the very top of the page the header is always visible.
      if (y <= 0) {
        accDown = 0;
        accUp = 0;
        setHidden(false);
        ticking = false;
        return;
      }

      if (dy > 0) {
        accDown += dy;
        accUp = 0;
        if (accDown > 5) setHidden(true);
      } else if (dy < 0) {
        accUp += -dy;
        accDown = 0;
        if (accUp > 30) setHidden(false);
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
            aria-label={tr('a11y_menu')}
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
