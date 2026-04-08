'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function Footer() {
  const { lang } = useTranslation();

  return (
    <footer id="s12" className="s12-footer">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(12, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(12, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V" target="_blank" rel="noopener noreferrer" className="s12-book-overlay" />
      <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-ig" />
      <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-yt" />
      <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-tg" />
      <a href="#" className="s12-offer-overlay s12-oferta" />
      <a href="#" className="s12-offer-overlay s12-privacy" />
    </footer>
  );
}
