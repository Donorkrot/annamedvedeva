'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function HeroSection() {
  const { lang } = useTranslation();

  return (
    <section id="s1" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }} />
    </section>
  );
}
