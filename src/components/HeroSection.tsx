'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile, btnDesktop } from '@/lib/imagePaths';
import SeoText from '@/components/SeoText';

export default function HeroSection() {
  const { lang } = useTranslation();

  return (
    <section id="s1" className="section">
      <SeoText section="s1" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority quality={90} />
      </div>
      {/* Single particle layer drifting on top of the baked-in sparks.
          Low opacity + screen blend so it feels like the existing
          lightning is breathing, not like a second image on top. */}
      <div className="s1-particles desktop-only" aria-hidden="true" />
      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
