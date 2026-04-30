'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function AnnaSection() {
  const { tr } = useTranslation();

  return (
    <section id="s7" className="section s7-figma">

      {/* ── Desktop ── */}
      <div className="s7-bg desktop-only">
        <Image src="/images/backgrounds/bg-s7-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <div className="s7-photo desktop-only">
        <Image src="/images/content/s7-photo-desktop.jpg" alt="Анна Медведева" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
      </div>

      <div className="s7-block s7-block-1 desktop-only">
        <p className="s7-kicker">{tr('s7_kicker')}:</p>
        <h2 className="s7-title">{tr('s7_title_1')} {tr('s7_title_2')}</h2>
        <p className="s7-desc">{tr('s7_desc')}</p>
      </div>

      <div className="s7-block s7-block-2 desktop-only">
        <h3 className="s7-name">
          <span className="s7-name__accent">{tr('s7_name')}</span>
          <span className="s7-name__suffix">{tr('s7_name_suffix')}</span>
        </h3>
        <p className="s7-name-title">{tr('s7_name_title')}</p>
        <p className="s7-bio">{tr('s7_bio')}</p>
      </div>

      <div className="s7-buttons desktop-only">
        <a href="/about" className="s7-btn"><span>{tr('s7_btn2')}</span></a>
        <a href="/consultation" className="s7-btn"><span>{tr('s7_btn')}</span></a>
      </div>

      {/* ── Mobile: HTML from Figma node 1:993 (375×1019) ── */}
      <div className="s7-mobile-html mobile-only">

        {/* Background — x:0 y:0 w:375 h:1019, #332000 dark overlay + 60% photo */}
        <div className="s7-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src="/images/backgrounds/bg-s7-mobile.jpg"
            alt=""
            className="s7-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Title block — x:30 y:40 w:315 h:146 */}
        <div className="s7-m-title-block">
          {/* Kicker "Key to RI:" — y:0, Raleway Medium 18px */}
          <p className="s7-m-kicker">{tr('s7_kicker')}:</p>
          {/* "STATE MASTERY" — y:31, Cormorant Light 24px uppercase */}
          <p className="s7-m-heading">{tr('s7_title_1')} {tr('s7_title_2')}</p>
          {/* Desc — y:70, Raleway Regular 16px */}
          <p className="s7-m-desc">{tr('s7_desc')}</p>
        </div>

        {/* Subtitle — x:30 y:207 w:291 h:63 */}
        <div className="s7-m-subtitle">
          {/* "Anna Medvedieva" — y:0, Cormorant SemiBold 36px #de8b23 */}
          <p className="s7-m-name">{tr('s7_name')}</p>
          {/* "State Master" — y:39, Cormorant Light 24px #fff5ef
              s7_name_suffix = " — Мастер Состояния" — split off the dash prefix */}
          <p className="s7-m-role">{tr('s7_name_suffix').split(/\s*[—–]\s*/).pop()}</p>
        </div>

        {/* Photo — x:0 y:298 w:375 h:288 (Figma node 1:995) */}
        <div className="s7-m-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src="/images/content/s7-photo-mobile.jpg"
            alt="Анна Медведева"
            className="s7-m-photo-img"
            draggable={false}
          />
        </div>

        {/* Main text — x:30 y:596 w:315 h:256 */}
        <div className="s7-m-main">
          {/* Lead "A specialist…" — y:0, Cormorant Light 24px */}
          <p className="s7-m-specialist">{tr('s7_name_title')}</p>
          {/* Bio — y:85, Raleway Regular 16px */}
          <p className="s7-m-bio">{tr('s7_bio')}</p>
        </div>

        {/* Button "About the Master" — x:30 y:870 w:315 h:49 r:10 stroke:#fff5ef */}
        <a href="/about" className="s7-m-btn s7-m-btn--about">
          <span>{tr('s7_btn2')}</span>
        </a>

        {/* Button "Individual Session" — x:30 y:939 w:315 h:49 r:10 stroke:#fff5ef */}
        <a href="/consultation" className="s7-m-btn s7-m-btn--consult">
          <span>{tr('s7_btn')}</span>
        </a>

      </div>
    </section>
  );
}
