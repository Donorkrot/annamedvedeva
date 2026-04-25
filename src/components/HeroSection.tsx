'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import { bgMobile, btnDesktop } from '@/lib/imagePaths';

export default function HeroSection() {
  const { lang, tr } = useTranslation();

  const heroTextChildren = (
    <>
      <p className="hero-tagline">
        <span className="hero-tagline__line">{tr('hero_tagline_1')}</span>
        <span className="hero-tagline__line">{tr('hero_tagline_2')}</span>
        <span className="hero-tagline__line">{tr('hero_tagline_3')}</span>
      </p>
      <h1 className="hero-title-v2 hero-title-row-1">{tr('hero_title')}</h1>
      <h1 className="hero-title-v2 hero-title-row-2">{tr('hero_title_2')}</h1>
      <div className="hero-glow-line-v2" aria-hidden="true" />
      <h2 className="hero-subtitle-v2">{tr('hero_subtitle')}</h2>
    </>
  );

  return (
    <section id="s1" className="section">
      {/* Desktop: clean layered bg (no baked text) so the HTML overlay below
          is the only visible copy of the hero text — selectable & translatable. */}
      <div className="s1-bg-layer desktop-only" aria-hidden="true" />
      <div className="s1-detail-layer desktop-only" aria-hidden="true" />
      <div className="s1-darken desktop-only" aria-hidden="true" />

      {/* Mobile: keep the existing baked composite (text already in JPG). */}
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority quality={95} sizes="100vw" />
      </div>

      {/* Desktop: visible HTML text overlay. */}
      <div className="s1-text-layer desktop-only">{heroTextChildren}</div>
      {/* Mobile: clipped (1×1px) variant — invisible but selectable for copy/SEO,
          so it doesn't double-render over the baked-in mobile JPG text. */}
      <div className="s1-text-layer s1-text-layer--copy mobile-only">{heroTextChildren}</div>

      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
