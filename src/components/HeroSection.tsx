'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile, btnDesktop } from '@/lib/imagePaths';

export default function HeroSection() {
  const { lang, tr } = useTranslation();

  return (
    <section id="s1" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(1, lang)} alt="Reality DNA" fill style={{ objectFit: 'cover', objectPosition: 'center center' }} priority quality={95} sizes="100vw" />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority quality={95} sizes="100vw" />
      </div>

      {/*
        HTML text overlay positioned exactly over the baked-in text in the
        background JPG. Color is transparent so we don't double-render the
        text visually, but user-select / Ctrl+C / screen readers all see
        real translatable text.
      */}
      <div className="s1-text-layer s1-text-layer--copy">
        <p className="hero-tagline">
          {tr('hero_tagline_1')} {tr('hero_tagline_2')} {tr('hero_tagline_3')}
        </p>
        <h1 className="hero-title-v2 hero-title-row-1">{tr('hero_title')}</h1>
        <div className="hero-glow-line-v2" aria-hidden="true" />
        <h2 className="hero-subtitle-v2">{tr('hero_subtitle')}</h2>
      </div>

      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
