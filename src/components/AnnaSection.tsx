'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function AnnaSection() {
  const { lang } = useTranslation();

  return (
    <section id="s7" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(7, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(7, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="#s7" className="s7-btn-overlay s7-btn-about" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s7-btn-overlay s7-btn-consult" />
    </section>
  );
}
