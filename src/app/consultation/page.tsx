'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260420-c2-ref';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function consultPath(type: 'desk' | 'mob', section: number, lang: string): string {
  const base = type === 'desk' ? '/images/backgrounds/consultation' : '/images/mobile/consultation';
  const langDir = lang === 'ru' ? '' : `/${lang}`;
  return v(`${base}${langDir}/c${section}.jpg`);
}

const DESKTOP_RATIOS = ['1440 / 700', '1440 / 963', '1440 / 732'];
// Fallback mobile aspect ratios (RU baseline). Mobile CSS overrides .consult-section
// to `aspect-ratio: auto`, so the section actually takes the image's natural height;
// these values are only used during SSR before the media query kicks in.
const MOBILE_RATIOS  = ['375 / 827', '375 / 2184', '375 / 929'];
const DESKTOP_BGS    = ['#1a0d05', '#1a0d05', '#1a0d05'];

export default function ConsultationPage() {
  const { lang, tr } = useTranslation();

  return (
    // `data-lang` lets CSS target language-specific button positions for c2
    // (exports have slightly different vertical alignment per language).
    <main data-lang={lang}>
      {[1, 2, 3].map((n, i) => (
        <section
          key={`c${n}`}
          className="consult-section"
          style={{ aspectRatio: DESKTOP_RATIOS[i], background: DESKTOP_BGS[i] }}
        >
          {/* Desktop bg:
              c1 — чистые ассеты из Figma (copper + фото отдельно)
              c2 — чистый фон без карточек (ниже HTML 3 карточки)
              c3 — старый bake-in (пока) */}
          {n === 1 ? (
            <>
              <div className="c1-d-bg desktop-only">
                <Image
                  src="/images/backgrounds/consultation/c1-bg.png"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  quality={90}
                  priority
                />
              </div>
              <div className="c1-d-photo desktop-only">
                <Image
                  src="/images/backgrounds/consultation/c1-photo.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 37vw"
                  style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                  quality={90}
                />
              </div>
            </>
          ) : n === 2 ? (
            <div className="c2-d-bg desktop-only">
              <Image
                src="/images/backgrounds/consultation/c2-bg.png"
                alt=""
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                quality={90}
              />
            </div>
          ) : n === 3 ? (
            <>
              <div className="c3-d-bg desktop-only">
                <Image
                  src="/images/backgrounds/consultation/c3-bg.png"
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                  quality={90}
                />
              </div>
              <div className="c3-d-photo desktop-only">
                <Image
                  src="/images/backgrounds/consultation/c3-photo.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                  quality={90}
                />
              </div>
            </>
          ) : (
            <div className="s10-bg desktop-only">
              <Image
                src={consultPath('desk', n, lang)}
                alt=""
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                quality={90}
                {...(i === 0 ? { priority: true } : {})}
              />
            </div>
          )}
          <div className="s10-bg mobile-only">
            <Image
              src={consultPath('mob', n, lang)}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              quality={90}
              {...(i === 0 ? { priority: true } : {})}
            />
          </div>

          {/* c1 — HTML текст селектируемый, координаты из Figma node 1:1319. */}
          {n === 1 && (
            <div className="c1-text desktop-only">
              <h1 className="c1-title">{tr('c1_title')}</h1>
              <p className="c1-body">{tr('c1_body')}</p>
            </div>
          )}

          {/* c2 desktop — 3 HTML карточки (селектируемый текст), позиции
              и размеры из Figma node 1:1323. Mobile продолжает использовать
              запечённое изображение + cons-hit overlay. */}
          {n === 2 && (
            <>
              <div className="c2-d-cards desktop-only">
                {[1, 2, 3].map((k) => {
                  const titleKey = `c2_card${k}_title` as const;
                  const bodyKey = `c2_card${k}_body` as const;
                  const priceKey = `c2_card${k}_price` as const;
                  const descKey = `c2_card${k}_desc` as const;
                  // Платёжные ссылки WayForPay по каждой карточке.
                  // Card 1 — временная (тестовая), поменяем позже.
                  const payHrefs: Record<number, string> = {
                    1: 'https://secure.wayforpay.com/button/b2d184be4c5c8',
                    2: 'https://secure.wayforpay.com/button/bfb1bc2d0ff4a',
                    3: 'https://secure.wayforpay.com/button/be98247d8ff2f',
                  };
                  const payHref = payHrefs[k];
                  return (
                    <article key={`c2-card-${k}`} className={`c2-card c2-card--${k}`}>
                      {/* Заменяем первый пробел на \n, чтобы заголовок
                          гарантированно шёл в 2 строки (как в Figma). */}
                      <h3 className="c2-card-title">{tr(titleKey).replace(' ', '\n')}</h3>
                      <div className="c2-line" aria-hidden="true" />
                      <p className="c2-card-body">{tr(bodyKey)}</p>
                      <div className="c2-line" aria-hidden="true" />
                      <div className="c2-row c2-row-price">
                        <span className="c2-row-label">{tr('c2_cost_label')}</span>
                        <span className="c2-price">{tr(priceKey)}</span>
                      </div>
                      <div className="c2-buttons">
                        <a href={payHref} target="_blank" rel="noopener noreferrer" className="c2-btn c2-btn-primary">{tr('consult_pay')}</a>
                        <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="c2-btn c2-btn-secondary">{tr('consult_support')}</a>
                      </div>
                      <div className="c2-row">
                        <span className="c2-row-label">{tr('c2_duration_label')}</span>
                        <span className="c2-row-val">{tr('c2_duration_val')}</span>
                      </div>
                      <div className="c2-line" aria-hidden="true" />
                      <p className="c2-card-desc">{tr(descKey)}</p>
                      <ul className="c2-feelings">
                        <li className="c2-feelings-h">{tr('c2_feelings_header')}</li>
                        <li>{tr('c2_feelings_emo')}</li>
                        <li>{tr('c2_feelings_body')}</li>
                        <li>{tr('c2_feelings_perception')}</li>
                        <li className="c2-feelings-f">{tr('c2_feelings_footer')}</li>
                      </ul>
                    </article>
                  );
                })}
              </div>
              {/* Mobile only — старая раскладка с baked image + hit overlays */}
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-1 mobile-only" />
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-1 mobile-only" />
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-2 mobile-only" />
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-2 mobile-only" />
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-3 mobile-only" />
              <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-3 mobile-only" />
            </>
          )}

          {/* c3 — HTML текст селектируемый, координаты из Figma node 1:1384. */}
          {n === 3 && (
            <div className="c3-text desktop-only">
              <h2 className="c3-title">{tr('c3_title')}</h2>
              <ul className="c3-bullets">
                <li>{tr('c3_bullet_1')}</li>
                <li>{tr('c3_bullet_2')}</li>
                <li>{tr('c3_bullet_3')}</li>
              </ul>
              <div className="c3-notes">
                <p>
                  {tr('c3_note_1_l1')}<br />
                  {tr('c3_note_1_l2')}
                </p>
                <p>
                  {tr('c3_note_2_l1')}<br />
                  {tr('c3_note_2_l2')}
                </p>
              </div>
            </div>
          )}
        </section>
      ))}
      <Footer />
    </main>
  );
}
