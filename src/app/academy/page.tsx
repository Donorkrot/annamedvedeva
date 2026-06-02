'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import type { TranslationKey } from '@/lib/translations';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';

/**
 * /academy — Академия мастеров.
 * Будет собираться по блокам. Сейчас здесь только hero.
 *
 * Figma:
 *  - Desktop: 668:466 (1440×700)
 *  - Mobile:  2138:744 (375×716) — другой bg-кадрировка + title в 2 строки + divider
 */
export default function AcademyPage() {
  const { tr } = useTranslation();
  const [leadOpen, setLeadOpen] = useState(false);
  const [leadSource, setLeadSource] = useState('academy-step1');
  const openLead = (src: string) => { setLeadSource(src); setLeadOpen(true); };
  // На проде страница /first-stage ещё не готова — скрываем кнопку «Вход в метод».
  const hideFirstStage = process.env.NEXT_PUBLIC_HIDE_FIRST_STAGE === '1';
  // Title рендерится в 2 строки на mobile (по Figma "АКАДЕМИЯ" / "МАСТЕРОВ").
  // На desktop spans схлопываются в одну inline-строку через CSS.
  const titleWords = tr('academy_hero_title').split(' ');

  return (
    <main className="academy">
      {/* ── Hero — Figma 668:466 (desktop) + 2138:744 (mobile) ── */}
      <section className="acad-hero">
        {/* Desktop bg — full-width 1440×700 cathedral */}
        <div className="acad-hero-bg acad-hero-bg--desk desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/hero-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Mobile bg — portrait 375×716 (другой кадр с тем же собором) */}
        <div className="acad-hero-bg acad-hero-bg--mob mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/hero-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Title + decorative divider + subtitle */}
        <div className="acad-hero-content">
          <h1 className="acad-hero-title">
            <span className="acad-hero-title__line">{titleWords[0]}</span>
            <span className="acad-hero-title__line">{titleWords.slice(1).join(' ')}</span>
          </h1>
          {/* Декоративный divider — только mobile (per Figma 2138:751) */}
          <span className="acad-hero-divider mobile-only" aria-hidden="true" />
          <p className="acad-hero-subtitle">{tr('academy_hero_subtitle')}</p>
        </div>

        <button type="button" className="acad-hero-cta" onClick={() => openLead('academy-hero')}>
          <span>{tr('academy_hero_cta')}</span>
        </button>
      </section>

      {/* ── About block — Figma desktop 2140:499 (1440×700) / mobile 2143:559 (375×766) ──
          Слева: title "О чём ЭТО" + subtitle.
          Справа: card "В процессе ВЫ:" + 5 строк-чипов с иконками.
          Mobile: title сверху центр, card снизу full-width. */}
      <section className="acad-about">
        {/* Desktop bg — 1440×700 cathedral with open book */}
        <div className="acad-about-bg acad-about-bg--desk desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/about-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — 432×766 same scene portrait composition */}
        <div className="acad-about-bg acad-about-bg--mob mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/about-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Right-side dark gradient overlay — затемняет правую половину для card.
            Desktop-only — на mobile весь bg уже затемнённый. */}
        <div className="acad-about-grad desktop-only" aria-hidden="true" />

        {/* Left text block — title + subtitle */}
        <div className="acad-about-text">
          <h2 className="acad-about-title">
            <span>{tr('academy_about_title_1')} </span>
            <span className="acad-about-title__em">{tr('academy_about_title_2')}</span>
          </h2>
          <p className="acad-about-subtitle">{tr('academy_about_subtitle')}</p>
        </div>

        {/* Right info card "В процессе вы:" + 5 cards */}
        <div className="acad-about-info">
          <p className="acad-about-info-title">
            <span>{tr('academy_about_process_pre')} </span>
            <span className="acad-about-info-title__em">{tr('academy_about_process_em')}</span>
          </p>
          <ul className="acad-about-tags">
            <li className="acad-about-tag">
              <span className="acad-about-tag-icon acad-about-tag-icon--wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-wrap.svg" alt="" className="acad-about-tag-icon__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-dna.svg" alt="" className="acad-about-tag-icon__fg" />
              </span>
              <span className="acad-about-tag-text">{tr('academy_about_card_1')}</span>
            </li>
            <li className="acad-about-tag">
              <span className="acad-about-tag-icon acad-about-tag-icon--wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-wrap.svg" alt="" className="acad-about-tag-icon__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-people.svg" alt="" className="acad-about-tag-icon__fg" />
              </span>
              <span className="acad-about-tag-text">{tr('academy_about_card_2')}</span>
            </li>
            <li className="acad-about-tag">
              <span className="acad-about-tag-icon acad-about-tag-icon--wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-wrap.svg" alt="" className="acad-about-tag-icon__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-scales.svg" alt="" className="acad-about-tag-icon__fg" />
              </span>
              <span className="acad-about-tag-text">{tr('academy_about_card_3')}</span>
            </li>
            <li className="acad-about-tag">
              <span className="acad-about-tag-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-chart.svg" alt="" />
              </span>
              <span className="acad-about-tag-text">{tr('academy_about_card_4')}</span>
            </li>
            <li className="acad-about-tag">
              <span className="acad-about-tag-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/about-icon-brain.svg" alt="" />
              </span>
              <span className="acad-about-tag-text">{tr('academy_about_card_5')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Section 3 — "Reality Intelligence" — Figma desk 686:1369 (1440×700) / mob 686:1277 (375×?) ── */}
      <section className="acad-ri">
        {/* Desktop bg — Figma 724:1628 (обновлённый ассет с тёмной библиотекой) */}
        <div className="acad-ri-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/ri-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — отдельный ассет (с feathered-patch удалённой ✦), зеркалится через scaleX(-1) */}
        <div className="acad-ri-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/ri-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile darkening overlay (Figma: rgba(17,5,0,0.7)) */}
        <div className="acad-ri-overlay mobile-only" aria-hidden="true" />

        <div className="acad-ri-content">
          {/* Title block: label + heading */}
          <div className="acad-ri-title-block">
            <p className="acad-ri-label">{tr('academy_ri_label')}</p>
            <h2 className="acad-ri-title">{tr('academy_ri_title')}</h2>
          </div>

          {/* Description: two paragraph blocks */}
          <div className="acad-ri-desc">
            <div className="acad-ri-desc-1">
              <p>{tr('academy_ri_desc_1_a')}</p>
              <p>{tr('academy_ri_desc_1_b')}</p>
              <p>{tr('academy_ri_desc_1_c')}</p>
              <p>{tr('academy_ri_desc_1_d')}</p>
            </div>
            <div className="acad-ri-desc-2">
              <p>{tr('academy_ri_desc_2_a')}</p>
              <p>{tr('academy_ri_desc_2_b')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4 — "Как проходит обучение" — Figma 673:724 (1440×700) ── */}
      <section className="acad-study">
        {/* Desktop bg — full-width stairs + AI figure scene */}
        <div className="acad-study-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/study-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait scene (Figma 676:887, 767×1363) */}
        <div className="acad-study-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/study-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Bottom-half blur/darken panel — за карточками для читаемости */}
        <div className="acad-study-grad desktop-only" aria-hidden="true" />

        {/* Title */}
        <h2 className="acad-study-title">
          <span>{tr('academy_study_title_1')} </span>
          <span className="acad-study-title__em">{tr('academy_study_title_2')}</span>
        </h2>

        {/* Cards grid: 3 col × 2 rows + 1 wide */}
        <ul className="acad-study-cards">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <li className="acad-study-card" key={n}>
              <span className="acad-study-card-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    n === 3
                      ? '/images/academy/study-icon-clock.svg'
                      : n === 6
                        ? '/images/academy/study-icon-cert.svg'
                        : '/images/academy/study-icon-arrow.svg'
                  }
                  alt=""
                />
              </span>
              <div className="acad-study-card-text">
                <p className="acad-study-card-title">{tr(`academy_study_card_${n}_title` as TranslationKey)}</p>
                <p className="acad-study-card-sub">{tr(`academy_study_card_${n}_sub` as TranslationKey)}</p>
                {tr(`academy_study_card_${n}_extra` as TranslationKey) && (
                  <p className="acad-study-card-extra">{tr(`academy_study_card_${n}_extra` as TranslationKey)}</p>
                )}
              </div>
            </li>
          ))}
          {/* Wide card (full row) */}
          <li className="acad-study-card acad-study-card--wide">
            <span className="acad-study-card-icon">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/academy/study-icon-arrow.svg" alt="" />
            </span>
            <div className="acad-study-card-text">
              <p className="acad-study-card-title">{tr('academy_study_card_7_title')}</p>
              <p className="acad-study-card-sub">{tr('academy_study_card_7_sub')}</p>
            </div>
          </li>
        </ul>
      </section>

      {/* ── Section 5 — "Что с вами произойдёт" — Figma desk 673:797 (1440×700) / mob 686:1049 (375×1075) ── */}
      <section className="acad-whatif">
        {/* Desktop bg — full-width cathedral/library scene */}
        <div className="acad-whatif-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/whatif-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait version of same scene */}
        <div className="acad-whatif-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/whatif-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Title — top-left desktop / top-center mobile */}
        <h2 className="acad-whatif-title">
          <span className="acad-whatif-title__line">{tr('academy_whatif_title_1')}</span>
          <span className="acad-whatif-title__line acad-whatif-title__em">{tr('academy_whatif_title_2')}</span>
        </h2>

        {/* Subtitle — under title */}
        <p className="acad-whatif-subtitle">
          <span>{tr('academy_whatif_subtitle_1')} </span>
          <span className="acad-whatif-subtitle__em">{tr('academy_whatif_subtitle_2')}</span>
        </p>

        {/* Cards — 3 cards с разными иконками (колонна / мишень / звезда).
            Desktop horizontal row, mobile vertical stack. */}
        <ul className="acad-whatif-cards">
          {[1, 2, 3].map((n) => (
            <li className="acad-whatif-card" key={n}>
              <span className="acad-whatif-card-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/whatif-icon-circle.svg" alt="" className="acad-whatif-card-icon__bg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/academy/whatif-icon-${n}.svg`} alt="" className="acad-whatif-card-icon__fg" />
              </span>
              <div className="acad-whatif-card-text">
                <p className="acad-whatif-card-title">{tr(`academy_whatif_card_${n}_title` as TranslationKey)}</p>
                <p className="acad-whatif-card-desc">{tr(`academy_whatif_card_${n}_desc` as TranslationKey)}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer text — italic-ish quote at bottom */}
        <p className="acad-whatif-footer">{tr('academy_whatif_footer')}</p>
      </section>

      {/* ── Section 6 — "Результат" — Figma desk 673:831 (1440×810) / mob 686:1096 (375×1162) ── */}
      <section className="acad-result">
        {/* Desktop bg — full-width golden portal scene */}
        <div className="acad-result-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/result-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait scene */}
        <div className="acad-result-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/result-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Backdrop blur panel — за текстом на desktop для читаемости */}
        <div className="acad-result-grad desktop-only" aria-hidden="true" />

        {/* Title */}
        <h2 className="acad-result-title">{tr('academy_result_title')}</h2>

        {/* Info block — two lists */}
        <div className="acad-result-lists">
          <div className="acad-result-list">
            <p className="acad-result-list-title">{tr('academy_result_list_1_title')}</p>
            <ul className="acad-result-list-items">
              {[1, 2, 3, 4].map((n) => (
                <li className="acad-result-list-item" key={n}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/academy/result-bullet.svg" alt="" className="acad-result-bullet" />
                  <span>{tr(`academy_result_list_1_item_${n}` as TranslationKey)}</span>
                </li>
              ))}
            </ul>
            <div className="acad-result-divider" aria-hidden="true" />
          </div>
          <div className="acad-result-list">
            <p className="acad-result-list-title">{tr('academy_result_list_2_title')}</p>
            <ul className="acad-result-list-items">
              {[1, 2, 3, 4].map((n) => (
                <li className="acad-result-list-item" key={n}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/academy/result-bullet.svg" alt="" className="acad-result-bullet" />
                  <span>{tr(`academy_result_list_2_item_${n}` as TranslationKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right key-message card */}
        <div className="acad-result-card">
          {/* DNA icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/academy/result-icon-dna.svg" alt="" className="acad-result-card-icon" />
          {/* Decoration: line — star — line */}
          <div className="acad-result-card-deco">
            <span className="acad-result-card-deco__line" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/academy/result-star-deco.svg" alt="" className="acad-result-card-deco__star" />
            <span className="acad-result-card-deco__line" />
          </div>
          <p className="acad-result-card-title">{tr('academy_result_card_title')}</p>
          <div className="acad-result-card-deco">
            <span className="acad-result-card-deco__line" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/academy/result-star-deco.svg" alt="" className="acad-result-card-deco__star" />
            <span className="acad-result-card-deco__line" />
          </div>
          <div className="acad-result-card-quote">
            <p>{tr('academy_result_card_quote_1')}</p>
            <p>{tr('academy_result_card_quote_2')}</p>
          </div>
        </div>
      </section>

      {/* ── Section 7 — "Кому подойдёт / Кому не подойдёт" — Figma desk 687:1503 (1440×762) / mob 686:1154 (375×853) ── */}
      <section className="acad-forwho">
        {/* Desktop bg */}
        <div className="acad-forwho-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/forwho-d-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg */}
        <div className="acad-forwho-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/forwho-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Left column (gold) — "Кому подойдёт" */}
        <div className="acad-forwho-col acad-forwho-col--left">
          <h2 className="acad-forwho-title acad-forwho-title--gold">{tr('academy_forwho_yes_title')}</h2>
          <ul className="acad-forwho-list">
            {[1, 2, 3, 4, 5].map((n) => (
              <li className="acad-forwho-item" key={n}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/forwho-bullet.svg" alt="" className="acad-forwho-bullet" />
                <span>{tr(`academy_forwho_yes_item_${n}` as TranslationKey)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column (cream) — "Кому не подойдёт" */}
        <div className="acad-forwho-col acad-forwho-col--right">
          <h2 className="acad-forwho-title acad-forwho-title--cream">{tr('academy_forwho_no_title')}</h2>
          <ul className="acad-forwho-list">
            {[1, 2, 3, 4].map((n) => (
              <li className="acad-forwho-item" key={n}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/academy/forwho-bullet.svg" alt="" className="acad-forwho-bullet" />
                <span>{tr(`academy_forwho_no_item_${n}` as TranslationKey)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Section 8 — "Важное условие" — Figma desk 759:412 (1440×700) / mob 740:529 (375×755) ── */}
      <section className="acad-condition">
        {/* Desktop bg */}
        <div className="acad-condition-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/condition-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait, две руки сверху/снизу */}
        <div className="acad-condition-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/condition-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="acad-condition-content">
          <h2 className="acad-condition-title">{tr('academy_condition_title')}</h2>
          <div className="acad-condition-desc">
            <p className="acad-condition-desc-1">{tr('academy_condition_desc_1')}</p>
            <p className="acad-condition-desc-2">{tr('academy_condition_desc_2')}</p>
          </div>
          <p className="acad-condition-tagline">{tr('academy_condition_tagline')}</p>
        </div>
      </section>

      {/* ── Section 9 — "Первая ступень" — Figma desk 740:557 (1440×700) / mob 740:537 (375×755) ── */}
      <section className="acad-step1">
        {/* Desktop bg */}
        <div className="acad-step1-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/academy/step1-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — арка с рунами внизу */}
        <div className="acad-step1-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/academy/step1-m-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          />
        </div>

        {/* Main title centered at top */}
        <h2 className="acad-step1-title">{tr('academy_step1_title')}</h2>

        <div className="acad-step1-cols">
          {/* Left column — Вход в метод */}
          <div className="acad-step1-col acad-step1-col--left">
            <h3 className="acad-step1-subtitle">{tr('academy_step1_left_title')}</h3>
            <p className="acad-step1-text">{tr('academy_step1_left_text')}</p>
            {!hideFirstStage && (
              <a href="/first-stage" className="acad-step1-btn">
                <span>{tr('academy_step1_left_btn')}</span>
              </a>
            )}
          </div>

          {/* Right column — Записаться в Академию */}
          <div className="acad-step1-col acad-step1-col--right">
            <h3 className="acad-step1-subtitle">{tr('academy_step1_right_title')}</h3>
            <div className="acad-step1-text">
              <p>{tr('academy_step1_right_line_1')}</p>
              <p>
                <span className="acad-step1-line-prefix">{tr('academy_step1_right_line_2')}</span>{' '}
                <span className="acad-step1-date">{tr('academy_step1_right_date')}</span>
              </p>
            </div>
            <button type="button" className="acad-step1-btn" onClick={() => openLead('academy-step1')}>
              <span>{tr('academy_step1_right_btn')}</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <LeadFormModal open={leadOpen} onClose={() => setLeadOpen(false)} source={leadSource} />
    </main>
  );
}
