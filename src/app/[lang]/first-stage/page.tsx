'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';
import LeadFormModal from '@/components/LeadFormModal';
import MattersEnergy from '@/components/MattersEnergy';
import ReviewsMarquee from '@/components/ReviewsMarquee';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CourseJsonLd } from '@/components/JsonLd';

/**
 * /first-stage — Первая ступень.
 * Hero — Figma 772:448 (1672×941). Текст HTML-овый поверх bg-изображения,
 * чтобы оставался копируемым (визуально совпадает с запечённым в макете).
 */
export default function FirstStagePage() {
  const { tr, lang } = useTranslation();
  const [leadOpen, setLeadOpen] = useState(false);

  // Блок 6 (мобайл): все карточки одной ширины — по самой длинной строке среди всех.
  // Текст остаётся в 2 строки, справа нет пустого места, карточки выровнены.
  useEffect(() => {
    const fit = () => {
      const texts = Array.from(document.querySelectorAll<HTMLElement>('.first-result-m-text'));
      if (!texts.length) return;
      // 1) сбросить инлайн-ширину → перенос по CSS-ширине (2 строки)
      texts.forEach((t) => { t.style.width = ''; });
      // 2) найти максимальную длину строки среди всех карточек
      let globalMax = 0;
      texts.forEach((t) => {
        const range = document.createRange();
        range.selectNodeContents(t);
        Array.from(range.getClientRects()).forEach((r) => {
          if (r.width > globalMax) globalMax = r.width;
        });
      });
      // 3) задать всем одинаковую ширину
      if (globalMax > 0) {
        const w = `${Math.ceil(globalMax)}px`;
        texts.forEach((t) => { t.style.width = w; });
      }
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [lang]);

  return (
    <main className="first-stage">
      <CourseJsonLd
        lang={lang}
        name="Первая ступень Академии Reality DNA"
        description="Программа первой ступени Reality DNA: содержание обучения, формат занятий, практика и вход в метод управления состоянием."
        path="/first-stage"
      />
      <Breadcrumbs
        lang={lang}
        items={[
          { name: 'Главная', path: '/' },
          { name: 'Академия', path: '/academy' },
          { name: 'Первая ступень', path: '/first-stage' },
        ]}
      />
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
            quality={70}
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
            quality={70}
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
            quality={70}
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
            quality={70}
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
            src="/images/first-stage/how-bg-3.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — portrait (Figma 861:511) */}
        <div className="first-how-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/how-m-bg-2.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className="first-how-content">
          <h2 className="first-how-title">
            <span>{tr('first_stage_how_title_1')}</span>
            <span>{tr('first_stage_how_title_2')}</span>
          </h2>
          <p className="first-how-desc">
            {(() => {
              const d = tr('first_stage_how_desc');
              const i = d.indexOf(', ');
              if (i < 0) return d;
              return (
                <>
                  <span>{d.slice(0, i + 2)}</span>
                  <span>{d.slice(i + 2)}</span>
                </>
              );
            })()}
          </p>
          <ul className="first-how-chips">
            {/* Порядок: «Демонстрации и разборы» → «Живая работа в группе» →
                «Практика в парах» → «Супервизия» (chip_2 раньше chip_1). */}
            <li className="first-how-chip">{tr('first_stage_how_chip_2')}</li>
            <li className="first-how-chip">{tr('first_stage_how_chip_1')}</li>
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
            quality={70}
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
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Анимированный слой энергии (руки ⇄ круг) */}
        <MattersEnergy />

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
        {/* Desktop bg — звёзды + светящаяся ось (макет 927:443, без артефакта/текста).
            ?v=2 — сброс кэша браузера после замены содержимого файла. */}
        <div className="first-depth-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/depth-bg.jpg?v=2"
            alt=""
            fill
            sizes="100vw"
            quality={70}
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
            quality={75}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Артефакт-спираль — отдельный прозрачный слой по центру (desktop).
            Фон depth-bg теперь чистый (звёзды+ось), артефакт сверху. */}
        <div className="first-depth-artifact desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/depth-artifact.png"
            alt=""
            fill
            sizes="20vw"
            quality={75}
          />
        </div>

        <h2 className="first-depth-title">{tr('first_stage_depth_title')}</h2>
        <p className="first-depth-desc">{tr('first_stage_depth_desc')}</p>

        {/* Mobile — светящийся шар по центру (Figma 928:450) */}
        <div className="first-depth-orb mobile-only" aria-hidden="true" />

        {/* Mobile — горизонтальная ось с 4 узлами (Figma 859:507) */}
        <div className="first-depth-axis mobile-only" aria-hidden="true">
          <span className="first-depth-axis-line" />
          <span className="first-depth-node" style={{ left: '12.5%' }} />
          <span className="first-depth-node" style={{ left: '37.5%' }} />
          <span className="first-depth-node" style={{ left: '62.5%' }} />
          <span className="first-depth-node" style={{ left: '87.5%' }} />
        </div>

        {/* 4 уровня. Desktop — вдоль горизонтальной оси; mobile — вертикальный
            funnel под шаром (Figma 928:450). */}
        <p className="first-depth-label first-depth-label--1">{tr('first_stage_depth_label_1')}</p>
        <p className="first-depth-label first-depth-label--2">{tr('first_stage_depth_label_2')}</p>
        <p className="first-depth-label first-depth-label--3">{tr('first_stage_depth_label_3')}</p>
        <p className="first-depth-label first-depth-label--4">{tr('first_stage_depth_label_4')}</p>

        {/* Подписи-карточки. Desktop — внизу слева/справа; mobile — две рядом
            вверху с иконками (Figma 928:450). */}
        <p className="first-depth-caption first-depth-caption--left">
          <span className="first-depth-card-ic mobile-only" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12a2 2 0 1 1 2.4 1.96A4 4 0 1 1 8 11.5a6 6 0 1 1 9.6 3.3" />
            </svg>
          </span>
          {tr('first_stage_depth_caption_left')}
        </p>
        <p className="first-depth-caption first-depth-caption--right">
          <span className="first-depth-card-ic mobile-only" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 7.5v10" />
              <path d="M12 8.5C12 5 9.2 3 6.7 3 4.6 3 3.2 4.7 3.2 6.9c0 3 2.9 5.1 6 5.1 1.4 0 2.8-1.1 2.8-3.5z" />
              <path d="M12 8.5C12 5 14.8 3 17.3 3 19.4 3 20.8 4.7 20.8 6.9c0 3-2.9 5.1-6 5.1-1.4 0-2.8-1.1-2.8-3.5z" />
              <path d="M12 12.5c-.8 2-2 3.3-3.6 4.2 1.4.9 2.8.4 3.6-1z" />
              <path d="M12 12.5c.8 2 2 3.3 3.6 4.2-1.4.9-2.8.4-3.6-1z" />
            </svg>
          </span>
          <span>{tr('first_stage_depth_caption_right_1')}</span>
          <span>{tr('first_stage_depth_caption_right_2')}</span>
        </p>
      </section>

      {/* ── Section 6 — "Результат" — Figma 855:449 (1672×941) ── */}
      <section className="first-result">
        {/* Desktop bg — арка/руины (макет 942:519). ?v=2 — сброс кэша браузера. */}
        <div className="first-result-bg desktop-only" aria-hidden="true">
          <Image
            src="/images/first-stage/result-bg.jpg?v=2"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        {/* Mobile bg — чистый фон Figma 873:6001 (текст/карточки — живой HTML поверх) */}
        <div className="first-result-bg mobile-only" aria-hidden="true">
          <Image
            src="/images/first-stage/result-m-clean.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Desktop content (горизонтальные пилюли) */}
        <div className="first-result-content">
          <h2 className="first-result-title">{tr('first_stage_result_title')}</h2>
          <p className="first-result-subtitle">{tr('first_stage_result_subtitle')}</p>
          <ul className="first-result-cards">
            <li className="first-result-card">{tr('first_stage_result_card_1')}</li>
            <li className="first-result-card">{tr('first_stage_result_card_2')}</li>
            <li className="first-result-card">{tr('first_stage_result_card_3')}</li>
          </ul>
          <p className="first-result-before">{tr('first_stage_result_before')}</p>
          <p className="first-result-quote">{tr('first_stage_result_quote')}</p>
        </div>

        {/* Mobile content — Figma 873:6000 (карточки с иконками, живой текст) */}
        <div className="first-result-m mobile-only">
          <h2 className="first-result-m-title">{tr('first_stage_result_title')}</h2>
          <p className="first-result-m-subtitle">{tr('first_stage_result_subtitle')}</p>
          <ul className="first-result-m-cards">
            <li className="first-result-m-card">
              <span className="first-result-m-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
              </span>
              <span className="first-result-m-text">{tr('first_stage_result_card_1')}</span>
            </li>
            <li className="first-result-m-card">
              <span className="first-result-m-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </span>
              <span className="first-result-m-text">{tr('first_stage_result_card_2')}</span>
            </li>
            <li className="first-result-m-card">
              <span className="first-result-m-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </span>
              <span className="first-result-m-text">{tr('first_stage_result_card_3')}</span>
            </li>
          </ul>
          <p className="first-result-m-before">{tr('first_stage_result_before')}</p>
          <p className="first-result-m-quote">{tr('first_stage_result_quote')}</p>
        </div>
      </section>

      {/* ── Section 7 — Отзывы (слайдер-лента, авто-прокрутка) ── */}
      <section className="first-reviews" id="reviews">
        <h2 className="first-reviews-title">{tr('first_stage_reviews_title')}</h2>
        <p className="first-reviews-subtitle">{tr('first_stage_reviews_subtitle')}</p>
        <ReviewsMarquee />
      </section>

      {/* ── Section 8 — "Формат" — Figma 873:5995 (1672×1048) ── */}
      <section className="first-format">
        {/* Правая светящаяся сфера */}
        <div className="first-format-img" aria-hidden="true">
          <Image
            src="/images/first-stage/format-sphere.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 51vw"
            quality={70}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>

        {/* Левая колонка */}
        <div className="first-format-content">
          <h2 className="first-format-title">{tr('first_stage_format_title')}</h2>
          <p className="first-format-desc">{tr('first_stage_format_desc')}</p>
          <ul className="first-format-pills">
            <li className="first-format-pill">{tr('first_stage_format_pill_1')}</li>
            <li className="first-format-pill">{tr('first_stage_format_pill_2')}</li>
            <li className="first-format-pill">{tr('first_stage_format_pill_3')}</li>
            <li className="first-format-pill">{tr('first_stage_format_pill_4')}</li>
          </ul>
          {/* Стоимость + рассрочка */}
          <div className="first-format-price">
            <p className="first-format-price-title">{tr('first_stage_format_price_title')}</p>
            <p className="first-format-price-sub">{tr('first_stage_format_price_sub')}</p>
            <ul className="first-format-price-list">
              <li>{tr('first_stage_format_price_1')}</li>
              <li>{tr('first_stage_format_price_2')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 8.5 — Эссе для поступления — Figma 986:452 (1672×850) ── */}
      <section className="first-essay">
        <div className="first-essay-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/essay-bg.jpg?v=5"
            alt=""
            fill
            sizes="100vw"
            quality={75}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className="first-essay-content">
          <h2 className="first-essay-title">{tr('first_stage_essay_title')}</h2>
          <div className="first-essay-panel">
            <p className="first-essay-note first-essay-note--top">
              {tr('first_stage_essay_note')}
              <br />
              {tr('first_stage_essay_note2')}
            </p>
            <p className="first-essay-subtitle">{tr('first_stage_essay_subtitle')}</p>
            <ul className="first-essay-points">
              <li>{tr('first_stage_essay_point_1')}</li>
              <li>{tr('first_stage_essay_point_2')}</li>
              <li>{tr('first_stage_essay_point_3')}</li>
              <li>{tr('first_stage_essay_point_4')}</li>
            </ul>
            <p className="first-essay-note">
              {tr('first_stage_essay_anna_1')}
              <br />
              {tr('first_stage_essay_anna_2')}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA-баннер «Запись в Академию» — Figma 949:520 (1672×392) ── */}
      <section className="first-enroll">
        <div className="first-enroll-bg" aria-hidden="true">
          <Image
            src="/images/first-stage/enroll-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={70}
            style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
          />
        </div>
        <div className="first-enroll-content">
          <div className="first-enroll-text">
            <h2 className="first-enroll-title">{tr('s12_fs_academy')}</h2>
            <p className="first-enroll-sub">
              {tr('s12_fs_cohorts')}
              <br />
              {tr('s12_fs_start')}
              <span className="first-enroll-date">{tr('s12_fs_date')}</span>
            </p>
          </div>
          <button type="button" className="first-enroll-btn" onClick={() => setLeadOpen(true)}>
            {tr('academy_hero_cta')}
          </button>
          <p className="first-enroll-note">{tr('s12_fs_note')}</p>
        </div>
      </section>

      <Footer onApply={() => setLeadOpen(true)} />

      <LeadFormModal open={leadOpen} onClose={() => setLeadOpen(false)} source="first-stage" />
    </main>
  );
}
