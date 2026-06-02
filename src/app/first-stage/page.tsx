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


        {/* Заголовок — отдельным слоем (на мобиле поднят над воротами) */}
        <h1 className="first-hero-title">{tr('first_stage_title')}</h1>

        {/* Bottom content block */}
        <div className="first-hero-content">
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
            {tr('first_stage_hero_desc_1').split('\n').map((line, i) => (
              <span key={`a${i}`}>{line}</span>
            ))}
            {tr('first_stage_hero_desc_2').split('\n').map((line, i) => (
              <span key={`b${i}`} className={i === 0 ? 'first-hero-desc-break' : undefined}>
                {line}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ── Section 2 — "О чём эта ступень" — Figma 781:628 (1672×850) ── */}
      <section className="first-about">
        {/* Desktop bg — landscape */}
        <div className="first-about-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/about-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait (Figma 853:418) */}
        <div className="first-about-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/about-m-bg.jpg"
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
            <li className="first-about-card">
              <span className="first-about-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="3.4" />
                  <path d="M5.5 19c0-3.6 2.9-6.2 6.5-6.2S18.5 15.4 18.5 19" />
                </svg>
              </span>
              <span className="first-about-card-text">{tr('first_stage_about_card_1')}</span>
            </li>
            <li className="first-about-card">
              <span className="first-about-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10.5" cy="10.5" r="6" />
                  <path d="M19.5 19.5 15 15" />
                </svg>
              </span>
              <span className="first-about-card-text">{tr('first_stage_about_card_2')}</span>
            </li>
            <li className="first-about-card">
              <span className="first-about-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3 21 8l-9 5-9-5z" />
                  <path d="M3 12.5 12 17.5l9-5" />
                  <path d="M3 16.5 12 21.5l9-5" />
                </svg>
              </span>
              <span className="first-about-card-text">{tr('first_stage_about_card_3')}</span>
            </li>
            <li className="first-about-card">
              <span className="first-about-card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12a8 8 0 0 1-13.7 5.6M4 12a8 8 0 0 1 13.7-5.6" />
                  <path d="M18 3v3.5h-3.5M6 21v-3.5h3.5" />
                </svg>
              </span>
              <span className="first-about-card-text">{tr('first_stage_about_card_4')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section 3 — "Как проходит обучение" — Figma 772:504 (1672×850) ── */}
      <section className="first-how">
        {/* Desktop bg — landscape */}
        <div className="first-how-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/how-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait (Figma 855:473) */}
        <div className="first-how-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/how-m-bg.jpg"
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
        {/* Desktop bg — landscape */}
        <div className="first-matters-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/whatmatters-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
          />
        </div>
        {/* Mobile bg — portrait (Figma 859:504) */}
        <div className="first-matters-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/whatmatters-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <h2 className="first-matters-title">{tr('first_stage_matters_title')}</h2>
        <p className="first-matters-desc">{tr('first_stage_matters_desc')}</p>
        <p className="first-matters-before">{tr('first_stage_matters_before')}</p>
        {/* Desktop — цитата одной строкой */}
        <p className="first-matters-quote desktop-only">{tr('first_stage_matters_quote')}</p>
        {/* Mobile — цитата в три строки: крупная «Я», ниже мельче (Figma 859:505) */}
        <p className="first-matters-quote first-matters-quote--m mobile-only">
          <span className="first-matters-quote-lead">{tr('first_stage_matters_quote_1')}</span>
          <span>{tr('first_stage_matters_quote_2')}</span>
          <span>{tr('first_stage_matters_quote_3')}</span>
        </p>
      </section>

      {/* ── Section 5 — "Глубина" — Figma 812:695 (1672×850) ── */}
      <section className="first-depth">
        {/* Desktop bg — landscape */}
        <div className="first-depth-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/depth-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait (Figma 859:506) */}
        <div className="first-depth-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/depth-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={95}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <h2 className="first-depth-title">{tr('first_stage_depth_title')}</h2>
        <p className="first-depth-desc">{tr('first_stage_depth_desc')}</p>

        {/* Mobile — горизонтальная ось с 4 узлами (Figma 859:507) */}
        <div className="first-depth-axis mobile-only" aria-hidden="true">
          <span className="first-depth-axis-line" />
          <span className="first-depth-node" style={{ left: '12.5%' }} />
          <span className="first-depth-node" style={{ left: '37.5%' }} />
          <span className="first-depth-node" style={{ left: '62.5%' }} />
          <span className="first-depth-node" style={{ left: '87.5%' }} />
        </div>

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
