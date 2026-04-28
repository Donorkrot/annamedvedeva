'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function HeroSection() {
  const { tr } = useTranslation();

  return (
    <section id="s1" className="section">
      {/* ── Desktop — Figma node 1-64 (1440×700) ── */}
      <div className="s1-d desktop-only">
        {/* Ambient particle background — full bleed, centered vertically */}
        <div className="s1-d-bg" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-d-ambient.webp" alt="" fill sizes="100vw" priority />
        </div>
        {/* Lightning audio-wave overlay — 1440×700, centered */}
        <div className="s1-d-light" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-d-lightning.webp" alt="" fill sizes="100vw" priority />
        </div>

        {/* Tagline "Новый / Интеллект / Реальности" — page-centered top */}
        <p className="s1-d-tagline">
          <span>{tr('hero_tagline_1')}</span>
          <span>{tr('hero_tagline_2')}</span>
          <span>{tr('hero_tagline_3')}</span>
        </p>

        {/* Title — 2 rows per Figma; row 1 above the line, row 2 below */}
        <h1 className="s1-d-title s1-d-title--row1">{tr('hero_title')}</h1>
        <h1 className="s1-d-title s1-d-title--row2">{tr('hero_title_2')}</h1>

        {/* Golden glow divider line — full bleed at y=327 */}
        <div className="s1-d-line" aria-hidden="true">
          <Image src="/images/effects/line.png" alt="" fill sizes="100vw" />
        </div>

        {/* Subtitle */}
        <h2 className="s1-d-subtitle">{tr('hero_subtitle')}</h2>

        {/* CTA Button — Figma node 1:69 */}
        <a
          href="#s11"
          className="s1-d-btn"
          onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          {tr('nav_btn')}
        </a>
      </div>

      {/* ── Mobile — Figma node 1-73 (375×716) ── */}
      <div className="s1-m mobile-only">
        {/* Clean audio-wave bg from Figma 255:299 — line is rendered as a
            separate `s1-m-line` layer below to avoid the double-line bug
            (the previous bg-s1-m-figma.png had the divider baked in). */}
        <div className="s1-m-bg" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-m-clean.webp" alt="" fill sizes="100vw" priority />
        </div>

        <p className="s1-m-tagline">
          <span>{tr('hero_tagline_1')}</span>
          <span>{tr('hero_tagline_2')}</span>
          <span>{tr('hero_tagline_3')}</span>
        </p>

        <p className="s1-m-title1">{tr('hero_m_line1')}</p>
        <p className="s1-m-title2">{tr('hero_m_line2')}</p>

        <div className="s1-m-line" aria-hidden="true" />

        <p className="s1-m-title3">{tr('hero_m_line3')}</p>

        <p className="s1-m-subtitle">{tr('hero_subtitle')}</p>

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
