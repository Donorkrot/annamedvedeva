'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function Footer() {
  const { tr } = useTranslation();

  return (
    <footer id="s12" className="s12-footer">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s12-new.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="s12-layout">
        {/* Logo — bottom left */}
        <a href="/" className="s12-logo-wrap">
          <Image
            src="/images/icons/DNA.png"
            alt="Reality DNA"
            width={60}
            height={42}
            style={{ width: 'auto', height: 'auto' }}
          />
          <span className="s12-logo-text">Reality DNA</span>
        </a>

        {/* Headline */}
        <div className="s12-headline">
          <span className="hl">{tr('s12_headline_hl')}</span> {tr('s12_headline')}
        </div>

        {/* Tagline */}
        <p className="s12-tagline">{tr('s12_tagline')}</p>

        {/* Currency — right side */}
        <div className="s12-currency">
          <div className="s12-currency-title">{tr('s12_currency_title')}</div>
          <p className="s12-currency-body">{tr('s12_currency_body')}</p>
        </div>

        {/* Social + copyright — bottom center */}
        <div className="s12-social-wrap">
          <div className="s12-social">
            <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" title="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1.5" y="4.5" width="21" height="15" rx="4"/>
                <polygon points="10,8.5 16,12 10,15.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" title="Telegram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M22 2L11 13"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"/>
              </svg>
            </a>
          </div>
          <div className="s12-copyright">&copy; 2026</div>
        </div>

        {/* Book + links — bottom right */}
        <div className="s12-right">
          <div className="s12-book-label">{tr('s12_book')}</div>
          <a
            href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V"
            target="_blank"
            rel="noopener noreferrer"
            className="s12-book-title"
          >
            {tr('s12_dna_book')}
          </a>
          <div className="s12-links">
            <a href="#">{tr('s12_offer')}</a>
            <a href="#">{tr('s12_privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
