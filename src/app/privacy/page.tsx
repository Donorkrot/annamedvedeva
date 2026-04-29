'use client';
import { useEffect } from "react";
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260420-privacy';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function privacyPath(lang: string): string {
  const langDir = lang === 'ru' ? '' : `/${lang}`;
  return v(`/images/backgrounds/privacy${langDir}/privacy.jpg`);
}

export default function PrivacyPage() {
  const { lang } = useTranslation();

  // Privacy JPEG bg is light cream so the global transparent header is invisible —
  // force a dark bg AND shrink the header so it doesn't eat half the page on
  // mobile. Scoped to /privacy only via mount/unmount.
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-privacy-header-fix', '');
    style.textContent = `
      .site-header {
        background: rgba(26, 13, 5, 0.95) !important;
        height: calc(24px + env(safe-area-inset-top)) !important;
      }
      .site-header .header-logo-text { font-size: 9px !important; letter-spacing: 1px !important; }
      .site-header .header-btn { padding: 3px 10px !important; font-size: 9px !important; }
      .site-header .lang-switcher a { font-size: 9px !important; }
      .site-header .header-burger { transform: scale(0.55); }
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);

  return (
    <main>
      <section
        className="consult-section"
        style={{ aspectRatio: '4320 / 4185', background: '#f5f0eb' }}
      >
        <div className="s10-bg desktop-only">
          <Image
            src={privacyPath(lang)}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={90}
            priority
          />
        </div>
        <div className="s10-bg mobile-only">
          <Image
            src={privacyPath(lang)}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={90}
            priority
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
