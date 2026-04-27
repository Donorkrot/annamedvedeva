'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/components/LanguageProvider';

const BOOK_HREF = 'https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V';

export default function Footer() {
  const { tr } = useTranslation();

  return (
    <footer id="s12" className="s12-footer s12-figma">

      {/* ── Desktop ── */}
      <div className="s12-bg desktop-only">
        <Image src="/images/backgrounds/bg-s12-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <div className="s12-headline-block desktop-only">
        <h2 className="s12-headline">
          <span className="s12-headline__hl">{tr('s12_headline_hl')}</span>
          <span className="s12-headline__rest">{tr('s12_headline')}</span>
        </h2>
        <p className="s12-tagline">{tr('s12_tagline')}</p>
      </div>

      <div className="s12-currency-block desktop-only">
        <h3 className="s12-currency-title">{tr('s12_currency_title')}</h3>
        <p className="s12-currency-body">{tr('s12_currency_body')}</p>
      </div>

      <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className="s12-book desktop-only" aria-label={tr('s12_dna_book')}>
        <span className="s12-book__title">{tr('s12_dna_book')}</span>
        <span className="s12-book__sub">{tr('s12_book')}</span>
      </a>

      <div className="s12-social desktop-only">
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

      <div className="s12-legal desktop-only">
        <Link href="/offer" className="s12-legal__link">{tr('s12_offer')}</Link>
        <span className="s12-legal__sep" aria-hidden="true">|</span>
        <Link href="/privacy" className="s12-legal__link">{tr('s12_privacy')}</Link>
      </div>

      <p className="s12-logo desktop-only">REALITY DNA <span className="s12-logo__year">© 2026</span></p>

      {/* ── Mobile: HTML from Figma node 1:469 (375×600) ── */}
      <div className="s12-mobile-html mobile-only">

        {/* Background image */}
        <div className="s12-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/bg-s12-mobile.jpg"
            alt=""
            className="s12-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Gradient top — h:180 dark→transparent */}
        <div className="s12-m-grad-top" aria-hidden="true" />

        {/* Gradient bottom — top:229px dark from below */}
        <div className="s12-m-grad-bot" aria-hidden="true" />

        {/* Left text block — element centre at (50%, calc(50%−244px)) = y≈56 */}
        {/* x:30 y:~16, Cormorant Medium 28px + Raleway 16px */}
        <div className="s12-m-left">
          <p className="s12-m-left-heading">
            <span className="s12-m-left-hl">{tr('s12_headline_hl')}</span>
            {' '}{tr('s12_headline')}
          </p>
          <p className="s12-m-left-tagline">{tr('s12_tagline')}</p>
        </div>

        {/* Right text block — element centre at (calc(50%+66.7px), calc(50%−9px)) */}
        {/* x:163 y:~241, Cormorant Medium 28px + Raleway 12px */}
        <div className="s12-m-right">
          <p className="s12-m-right-heading">{tr('s12_currency_title')}</p>
          <p className="s12-m-right-body">{tr('s12_currency_body')}</p>
        </div>

        {/* Book — x:162.2 y:377.5, Raleway 12px + Cormorant Light 20px */}
        <a href={BOOK_HREF} target="_blank" rel="noopener noreferrer" className="s12-m-book">
          <span className="s12-m-book-label">{tr('s12_book')}</span>
          <span className="s12-m-book-title">{tr('s12_dna_book')}</span>
        </a>

        {/* Logo "REALITY DNA" — x:33 y:465 w:92 */}
        <p className="s12-m-logo">REALITY DNA</p>

        {/* Social icons — x:158.2 y:455.5 w:190 */}
        <div className="s12-m-social">
          <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/instagram.svg" alt="" width={40} height={40} draggable={false} />
          </a>
          <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/youtube.svg" alt="" width={40} height={40} draggable={false} />
          </a>
          <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/icons/telegram.svg" alt="" width={40} height={40} draggable={false} />
          </a>
        </div>

        {/* Legal links — x:30 y:515.5 w:315, gap:25, Raleway 12px opacity:50% */}
        <div className="s12-m-legal">
          <Link href="/offer" className="s12-m-legal-link">{tr('s12_offer')}</Link>
          <Link href="/privacy" className="s12-m-legal-link">{tr('s12_privacy')}</Link>
        </div>

        {/* Copyright — bottom centred */}
        <p className="s12-m-copy">© 2026</p>

      </div>
    </footer>
  );
}
