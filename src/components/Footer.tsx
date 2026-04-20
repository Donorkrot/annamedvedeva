'use client';
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile, btnDesktop, btnMobile } from '@/lib/imagePaths';
import SeoText from '@/components/SeoText';

export default function Footer() {
  const { lang } = useTranslation();

  return (
    <footer id="s12" className="s12-footer">
      <SeoText section="s12" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(12, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(12, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} quality={90} />
      </div>
      {/* Background JPG is clean (no buttons). Buttons live as separate
          transparent PNGs (desktop + mobile variants) on top so each one
          can lift in brightness / scale on hover. */}
      <a href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V" target="_blank" rel="noopener noreferrer" className="s12-book-overlay" aria-label="ДНК Реальности">
        <img className="desktop-only" src={btnDesktop(12, lang, 'book')} alt="" draggable={false} />
        <img className="mobile-only" src={btnMobile(12, lang, 'book')} alt="" draggable={false} />
      </a>
      <div className="s12-social-block">
        <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" className="s12-social-hit s12-ig-hit" aria-label="Instagram" />
        <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" className="s12-social-hit s12-yt-hit" aria-label="YouTube" />
        <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" className="s12-social-hit s12-tg-hit" aria-label="Telegram" />
      </div>
      <div className="s12-legal-block">
        <img className="desktop-only" src={btnDesktop(12, lang, 'oferta')} alt="" draggable={false} />
        <img className="mobile-only" src={btnMobile(12, lang, 'oferta')} alt="" draggable={false} />
        <Link href="/offer"   className="s12-legal-hit s12-legal-left"  aria-label="Публичная оферта"><span className="sr-only">Публичная оферта</span></Link>
        <Link href="/privacy" className="s12-legal-hit s12-legal-right" aria-label="Политика конфиденциальности"><span className="sr-only">Политика конфиденциальности</span></Link>
      </div>
    </footer>
  );
}
