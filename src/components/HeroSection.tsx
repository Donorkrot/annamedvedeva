'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import { btnDesktop } from '@/lib/imagePaths';

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
      {/* ── Desktop: layered animated background ── */}
      <div className="s1-bg-layer desktop-only" aria-hidden="true" />
      <div className="s1-detail-layer desktop-only" aria-hidden="true" />
      <div className="s1-darken desktop-only" aria-hidden="true" />

      {/* Desktop: HTML text overlay */}
      <div className="s1-text-layer desktop-only">{heroTextChildren}</div>

      {/* Desktop: image CTA button (hidden on mobile — replaced by s1-m-btn) */}
      <a
        href="#s11"
        className="s1-btn-overlay desktop-only"
        onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
      >
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>

      {/* ── Mobile: pure HTML hero (Figma node 1-73, 375×716) ── */}
      <div className="s1-mobile-hero mobile-only">
        {/* Layered animated background — same pattern as desktop */}
        <div className="s1-m-bg-layer" aria-hidden="true" />
        <div className="s1-m-detail-layer" aria-hidden="true" />
        <div className="s1-m-darken" aria-hidden="true" />

        {/* "Новый / Интеллект / Реальности" — opacity 70% tagline */}
        <p className="s1-m-tagline">
          <span>{tr('hero_tagline_1')}</span>
          <span>{tr('hero_tagline_2')}</span>
          <span>{tr('hero_tagline_3')}</span>
        </p>

        {/* АКАДЕМИЯ */}
        <p className="s1-m-title1">{tr('hero_m_line1')}</p>

        {/* УПРАВЛЕНИЯ СОСТОЯНИЕМ */}
        <p className="s1-m-title2">{tr('hero_m_line2')}</p>

        {/* Golden glow divider line */}
        <div className="s1-m-glow-line" aria-hidden="true" />

        {/* АННЫ МЕДВЕДЕВОЙ */}
        <p className="s1-m-title3">{tr('hero_m_line3')}</p>

        {/* Description subtitle */}
        <p className="s1-m-subtitle">{tr('hero_subtitle')}</p>

        {/* CTA Button */}
        <a
          href="#s11"
          className="s1-m-btn"
          onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          {tr('nav_btn')}
        </a>
      </div>
    </section>
  );
}
