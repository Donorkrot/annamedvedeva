'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';

/**
 * /first-stage — Первая ступень.
 * Hero — Figma 772:448 (1672×941). Текст HTML-овый поверх bg-изображения,
 * чтобы оставался копируемым (визуально совпадает с запечённым в макете).
 */
export default function FirstStagePage() {
  const { tr } = useTranslation();
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <main className="first-stage">
      {/* ── Hero — Figma 772:448 ── */}
      <section className="first-hero">
        {/* Desktop bg — Figma 772:456 (1672×941, landscape) */}
        <div className="first-hero-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/hero-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — Figma 774:616 (941×1672, portrait) */}
        <div className="first-hero-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/hero-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>


        {/* Bottom content block */}
        <div className="first-hero-content">
          <h1 className="first-hero-title">{tr('first_stage_title')}</h1>
          <button
            type="button"
            className="first-hero-subtitle-row first-hero-subtitle-btn"
            onClick={() => setLeadOpen(true)}
          >
            <span className="first-hero-divider-line" aria-hidden="true" />
            <span className="first-hero-divider-diamond" aria-hidden="true" />
            <span className="first-hero-subtitle">{tr('first_stage_subtitle')}</span>
            <span className="first-hero-divider-diamond" aria-hidden="true" />
            <span className="first-hero-divider-line" aria-hidden="true" />
          </button>
          <p className="first-hero-desc">
            <span>{tr('first_stage_hero_desc_1')}</span>
            <span>{tr('first_stage_hero_desc_2')}</span>
          </p>
        </div>
      </section>

      {/* ── Section 2 — "О чём эта ступень" — Figma 781:628 (1672×850) ── */}
      <section className="first-about">
        <div className="first-about-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/about-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className="first-about-content">
          <h2 className="first-about-title">{tr('first_stage_about_title')}</h2>
          <p className="first-about-desc">{tr('first_stage_about_desc')}</p>
          <p className="first-about-list-title">{tr('first_stage_about_list_title')}</p>
          <ul className="first-about-cards">
            <li className="first-about-card">{tr('first_stage_about_card_1')}</li>
            <li className="first-about-card">{tr('first_stage_about_card_2')}</li>
            <li className="first-about-card">{tr('first_stage_about_card_3')}</li>
            <li className="first-about-card">{tr('first_stage_about_card_4')}</li>
          </ul>
        </div>
      </section>

      {/* ── Section 3 — "Как проходит обучение" — Figma 772:504 (1672×850) ── */}
      <section className="first-how">
        <div className="first-how-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/how-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className="first-how-content">
          <h2 className="first-how-title">
            <span>{tr('first_stage_how_title_1')}</span>
            <span>{tr('first_stage_how_title_2')}</span>
          </h2>
          <p className="first-how-desc">{tr('first_stage_how_desc')}</p>
          <ul className="first-how-chips">
            <li className="first-how-chip">{tr('first_stage_how_chip_1')}</li>
            <li className="first-how-chip">{tr('first_stage_how_chip_2')}</li>
            <li className="first-how-chip">{tr('first_stage_how_chip_3')}</li>
            <li className="first-how-chip">{tr('first_stage_how_chip_4')}</li>
          </ul>
          <p className="first-how-footer">
            <span>{tr('first_stage_how_footer_1')}</span>
            <span>{tr('first_stage_how_footer_2')}</span>
          </p>
        </div>
      </section>

      {/* ── Section 4 — "Что важно" — Figma 804:678 (1672×850) ── */}
      <section className="first-matters">
        <div className="first-matters-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/whatmatters-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>

        <h2 className="first-matters-title">{tr('first_stage_matters_title')}</h2>
        <p className="first-matters-desc">{tr('first_stage_matters_desc')}</p>
        <p className="first-matters-before">{tr('first_stage_matters_before')}</p>
        <p className="first-matters-quote">{tr('first_stage_matters_quote')}</p>
      </section>

      {/* ── Section 5 — "Глубина" — Figma 812:695 (1672×850) ── */}
      <section className="first-depth">
        <div className="first-depth-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/depth-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <h2 className="first-depth-title">{tr('first_stage_depth_title')}</h2>
        <p className="first-depth-desc">{tr('first_stage_depth_desc')}</p>

        {/* 4 уровня вдоль горизонтальной линии */}
        <p className="first-depth-label first-depth-label--1">{tr('first_stage_depth_label_1')}</p>
        <p className="first-depth-label first-depth-label--2">{tr('first_stage_depth_label_2')}</p>
        <p className="first-depth-label first-depth-label--3">{tr('first_stage_depth_label_3')}</p>
        <p className="first-depth-label first-depth-label--4">{tr('first_stage_depth_label_4')}</p>

        {/* Подписи внизу */}
        <p className="first-depth-caption first-depth-caption--left">
          {tr('first_stage_depth_caption_left')}
        </p>
        <p className="first-depth-caption first-depth-caption--right">
          <span>{tr('first_stage_depth_caption_right_1')}</span>
          <span>{tr('first_stage_depth_caption_right_2')}</span>
        </p>
      </section>

      <Footer />

      <LeadFormModal open={leadOpen} onClose={() => setLeadOpen(false)} source="first-stage" />
    </main>
  );
}
