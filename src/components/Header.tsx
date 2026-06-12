'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/components/LanguageProvider';
import AuthModal from '@/components/AuthModal';
import SideMenu from '@/components/SideMenu';
import type { Lang } from '@/lib/translations';

export default function Header() {
  const { lang, setLang, tr } = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Закрытие дропдауна языков по клику вне и по Esc.
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  useEffect(() => {
    // Hide on scroll-down, reveal on scroll-up. Direction-accumulators reset
    // when the scroll direction flips, so momentum/trackpad bounce (brief
    // reverse-deltas mid-flight) can't flicker the state.
    //
    // Smoothness tuning:
    //  - REVEAL_ZONE: near the top the header is ALWAYS visible, so it never
    //    flickers away the instant you begin scrolling.
    //  - hide after a deliberate ~14px of downward scroll.
    //  - reveal only after ~18px of SUSTAINED upward scroll, AND any single
    //    downward frame fully resets the up-accumulator. During a fast/momentum
    //    flick down the OS emits brief reverse-delta "bounces" — with a low
    //    reveal threshold one bounce would flash the header in, then the next
    //    down-frame hides it again (the jitter). Requiring sustained up-movement
    //    that resets on every down-frame makes momentum bounce unable to trigger
    //    a reveal, so fast scrolling stays rock-steady.
    // REVEAL_ZONE держим МАЛЕНЬКИМ (только у самой кромки): иначе при старте
    // скролла вниз шапка остаётся видимой в этой зоне и именно там темнеет +
    // ужимается (shrink-on-scroll при y>60) — это выглядит как «появление».
    // С малой зоной шапка прячется ДО затемнения/ужатия, поэтому на скролле
    // вниз она просто уезжает вверх. На скролле вверх её возвращает accUp.
    const REVEAL_ZONE = 8;           // px from top where header always shows
    const HIDE_AT = 10;              // sustained down px before hiding
    const REVEAL_AT = 18;            // sustained up px before revealing
    let lastY = window.scrollY;
    let accDown = 0;
    let accUp = 0;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      setScrolled(y > 60);

      // Near the top — header always visible (no hide right under the fold).
      if (y <= REVEAL_ZONE) {
        accDown = 0;
        accUp = 0;
        setHidden(false);
        ticking = false;
        return;
      }

      if (dy > 0) {
        // any downward movement → grow hide-accumulator, ZERO the up one
        accDown += dy;
        accUp = 0;
        if (accDown > HIDE_AT) setHidden(true);
      } else if (dy < 0) {
        // upward — needs to be sustained (reset by any down-frame above)
        accUp -= dy;
        accDown = 0;
        if (accUp > REVEAL_AT) setHidden(false);
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
      <header className={`site-header${scrolled ? ' scrolled' : ''}${hidden ? ' hidden' : ''}${isHome ? ' site-header--home' : ''}`}>
        <Link href="/" className="header-logo">
          <span className="header-logo-text">REALITY DNA</span>
        </Link>

        <div className="header-right">
          {/* Переключатель языка — компактный дропдаун: глобус + текущий код,
              по клику открывается список RU/UA/EN. Смена языка — клиентское
              действие (без смены URL), поэтому это <button>. */}
          <div className="lang-dd" ref={langRef}>
            <button
              type="button"
              className={`lang-dd__toggle${langOpen ? ' open' : ''}`}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label="Язык сайта / Language"
              onClick={() => setLangOpen((o) => !o)}
            >
              <svg className="lang-dd__globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9S9.5 5.5 12 3z" />
              </svg>
              <span className="lang-dd__code">{lang.toUpperCase()}</span>
              <svg className="lang-dd__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {langOpen && (
              <ul className="lang-dd__menu" role="listbox" aria-label="Язык сайта / Language">
                {(['ru', 'ua', 'en'] as Lang[]).map((l) => (
                  <li key={l}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang === l}
                      className={`lang-dd__item${lang === l ? ' active' : ''}`}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                    >
                      {l.toUpperCase()}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Hamburger / burger menu */}
          <button
            className="header-burger"
            onClick={() => setMenuOpen(true)}
            aria-label={tr('a11y_menu')}
          >
            <span /><span /><span />
          </button>

          <Link
            href="/consultation"
            className="btn-site header-btn"
          >
            {tr('nav_consult')}
          </Link>
        </div>
      </header>

      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLogin={() => setAuthOpen(true)}
      />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
