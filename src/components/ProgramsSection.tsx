'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

const CTA_HREF = 'https://t.me/medvedieva_anna';

export default function ProgramsSection() {
  const { tr } = useTranslation();

  return (
    <section id="s11" className="section s11-figma">

      {/* ── Desktop ── */}
      <div className="s11-bg desktop-only">
        <Image src="/images/backgrounds/bg-s11-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <h2 className="s11-title desktop-only">{tr('s11_title')}</h2>

      <div className="s11-grid desktop-only">
        <article className="s11-card s11-card--orange">
          <h3 className="s11-card__title">{tr('s11_c1_title')}</h3>
          <p className="s11-card__body">{tr('s11_c1_body')}</p>
          <p className="s11-card__sub">{tr('s11_c1_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>

        <article className="s11-card s11-card--yellow">
          <h3 className="s11-card__title">{tr('s11_c2_title')}</h3>
          <p className="s11-card__body">{tr('s11_c2_body')}</p>
          <p className="s11-card__sub">{tr('s11_c2_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>

        <article className="s11-card s11-card--gold">
          <h3 className="s11-card__title">{tr('s11_c3_title')}</h3>
          <p className="s11-card__body">{tr('s11_c3_body')}</p>
          <p className="s11-card__sub">{tr('s11_c3_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>
      </div>

      {/* ── Mobile: HTML from Figma node 1:442 (375×1239) ── */}
      <div className="s11-mobile-html mobile-only">

        {/* Background image */}
        <div className="s11-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/bg-s11-mobile.jpg"
            alt=""
            className="s11-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Gradient top — h:300 black→transparent */}
        <div className="s11-m-grad-top" aria-hidden="true" />

        {/* Title — top:82 center, Cormorant SemiBold 36px */}
        <p className="s11-m-title">{tr('s11_title')}</p>

        {/* Cards — top:174, flex column */}
        <div className="s11-m-cards">

          {/* Card 1 — orange gradient (node 1:447) */}
          <div className="s11-m-card s11-m-card--1">
            <p className="s11-m-card-title">{tr('s11_c1_title')}</p>
            <p className="s11-m-card-body">{tr('s11_c1_body')}</p>
            <p className="s11-m-card-sub">{tr('s11_c1_sub')}</p>
            <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-m-btn">
              <span>{tr('s11_btn')}</span>
            </a>
          </div>

          {/* Card 2 — yellow gradient (node 1:454) */}
          <div className="s11-m-card s11-m-card--2">
            <p className="s11-m-card-title">{tr('s11_c2_title')}</p>
            <p className="s11-m-card-body">{tr('s11_c2_body')}</p>
            <p className="s11-m-card-sub">{tr('s11_c2_sub')}</p>
            <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-m-btn">
              <span>{tr('s11_btn')}</span>
            </a>
          </div>

          {/* Card 3 — gold gradient (node 1:461) */}
          <div className="s11-m-card s11-m-card--3">
            <p className="s11-m-card-title">{tr('s11_c3_title')}</p>
            <p className="s11-m-card-body">{tr('s11_c3_body')}</p>
            <p className="s11-m-card-sub">{tr('s11_c3_sub')}</p>
            <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-m-btn">
              <span>{tr('s11_btn')}</span>
            </a>
          </div>

        </div>

        {/* Gradient bottom — h:71 dark */}
        <div className="s11-m-grad-bot" aria-hidden="true" />

      </div>
    </section>
  );
}
