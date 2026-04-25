'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';

export default function Footer() {
  const { tr } = useTranslation();

  return (
    <footer id="s12" className="s12-footer s12-figma">
      <div className="s12-bg desktop-only">
        <Image src="/images/backgrounds/bg-s12-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s12-bg mobile-only">
        <Image src="/images/backgrounds/bg-s12-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      {/* Headline left */}
      <div className="s12-headline-block">
        <h2 className="s12-headline">
          <span className="s12-headline__hl">{tr('s12_headline_hl')}</span>
          <span className="s12-headline__rest">{tr('s12_headline')}</span>
        </h2>
        <p className="s12-tagline">{tr('s12_tagline')}</p>
      </div>

      {/* Currency text right */}
      <div className="s12-currency-block">
        <h3 className="s12-currency-title">{tr('s12_currency_title')}</h3>
        <p className="s12-currency-body">{tr('s12_currency_body')}</p>
      </div>

      {/* Book block */}
      <a
        href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V"
        target="_blank"
        rel="noopener noreferrer"
        className="s12-book"
        aria-label={tr('s12_dna_book')}
      >
        <span className="s12-book__title">{tr('s12_dna_book')}</span>
        <span className="s12-book__sub">{tr('s12_book')}</span>
      </a>

      {/* Social icons — plain <img> for SVGs (Next/Image disallows SVG by default). */}
      <div className="s12-social">
        <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" className="s12-social__link" aria-label="Instagram">
          <img src="/images/icons/instagram.svg" alt="" width={40} height={40} draggable={false} />
        </a>
        <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" className="s12-social__link" aria-label="YouTube">
          <img src="/images/icons/youtube.svg" alt="" width={40} height={40} draggable={false} />
        </a>
        <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" className="s12-social__link" aria-label="Telegram">
          <img src="/images/icons/telegram.svg" alt="" width={40} height={40} draggable={false} />
        </a>
      </div>

      {/* Legal */}
      <div className="s12-legal">
        <Link href="/offer" className="s12-legal__link">{tr('s12_offer')}</Link>
        <span className="s12-legal__sep" aria-hidden="true">|</span>
        <Link href="/privacy" className="s12-legal__link">{tr('s12_privacy')}</Link>
      </div>

      {/* Logo */}
      <p className="s12-logo">REALITY DNA <span className="s12-logo__year">© 2026</span></p>
    </footer>
  );
}
