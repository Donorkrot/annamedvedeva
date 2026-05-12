'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';
import LiteYouTube from '@/components/LiteYouTube';

const ASSET_VERSION = '20260418-hq3x';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function aboutPath(type: 'desk' | 'mob', section: number, lang: string): string {
  const base = type === 'desk' ? '/images/backgrounds/about' : '/images/mobile/about';
  // EN desktop exports exist; EN mobile falls back to RU until those are ready.
  let langDir = '';
  if (lang === 'ua') langDir = '/ua';
  else if (lang === 'en' && type === 'desk') langDir = '/en';
  return v(`${base}${langDir}/a${section}.jpg`);
}

// Desktop aspect ratios from actual image dimensions (a1–a10, footer is separate)
const DESKTOP_RATIOS = [
  '1440 / 700',  // a1
  '1440 / 807',  // a2
  '1440 / 700',  // a3
  '1440 / 700',  // a4
  '1440 / 700',  // a5
  '1440 / 685',  // a6
  '1440 / 700',  // a7
  '1440 / 700',  // a8
  '1440 / 700',  // a9
  '1440 / 700',  // a10
];

const DESKTOP_BGS = [
  '#1a0d05', '#e0d0c4', '#e8ddd4', '#e8ddd4', '#e8ddd4',
  '#2a1a42', '#3d2a1a', '#e8ddd4', '#1a0d05', '#1a0d05',
];

export default function AboutPage() {
  const { lang, tr } = useTranslation();

  return (
    <main>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
        <section
          key={`a${n}`}
          className={`consult-section${i === 0 ? ' a1-figma' : i === 1 ? ' a2-figma' : i === 2 ? ' a3-figma' : i === 3 ? ' a4-figma' : i === 4 ? ' a5-figma' : i === 5 ? ' a6-figma' : i === 6 ? ' a7-figma' : i === 7 ? ' a8-figma' : i === 8 ? ' a9-figma' : i === 9 ? ' a10-figma' : ''}`}
          style={{ aspectRatio: DESKTOP_RATIOS[i], background: DESKTOP_BGS[i] }}
        >
          {i === 0 ? (
            <>
              {/* Desktop a1 — Figma node 1-2008 (1440×700): clean bg + photo + HTML text */}
              <div className="a1-d desktop-only">
                <div className="a1-d-bg" aria-hidden="true">
                  <Image src="/images/about/a1-d-bg.png" alt="" fill sizes="83vw" priority />
                </div>
                <div className="a1-d-photo" aria-hidden="true">
                  <Image src="/images/about/a1-d-photo.png" alt="" fill sizes="42vw" priority />
                </div>
                <div className="a1-d-text">
                  <h2 className="a1-title">
                    <span className="a1-title__name">{tr('about_a1_title_name')}</span>
                    <span className="a1-title__sep">{' — '}</span>
                    <span className="a1-title__rest">{tr('about_a1_title_rest')}</span>
                  </h2>
                  <div className="a1-body">
                    <p>{tr('about_a1_body_1')}</p>
                    <p>{tr('about_a1_body_2')}</p>
                  </div>
                </div>
              </div>
              {/* Mobile a1 — Figma node 1-1804 (375×854): bg(top) + photo(bottom) + HTML text */}
              <div className="a1-m mobile-only">
                <div className="a1-m-bg" aria-hidden="true">
                  <Image src="/images/about/a1-m-bg.jpg" alt="" fill sizes="100vw" priority />
                </div>
                <div className="a1-m-photo" aria-hidden="true">
                  <Image src="/images/about/a1-m-photo.png" alt="" fill sizes="100vw" priority />
                </div>
                <div className="a1-m-text">
                  <h2 className="a1-title">
                    <span className="a1-title__name">{tr('about_a1_title_name')}</span>
                    <br />
                    <span className="a1-title__rest">{tr('about_a1_title_rest')}</span>
                  </h2>
                  <div className="a1-body">
                    <p>{tr('about_a1_body_1')}</p>
                    <p>{tr('about_a1_body_2')}</p>
                  </div>
                </div>
              </div>
            </>
          ) : i === 1 ? (
            <>
              {/* ── Desktop a2 "Путь" — Figma 1:2022 (1440×807) ── */}
              <div className="a2-d desktop-only">
                <div className="a2-d-bg" aria-hidden="true">
                  <Image src="/images/about/a2-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <div className="a2-d-photo" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/about/a2-d-photo.jpg" alt="" className="a2-d-photo__img" />
                </div>
                <h2 className="a2-d-title">{tr('about_a2_title')}</h2>
                <div className="a2-d-cards">
                  {/* Card 1: "9 лет практики" — Figma 1:2026, text group left=20 top=32 w=153 h=34 */}
                  <div className="a2-d-card">
                    <div className="a2-d-card__bg" />
                    <div className="a2-dc1-tg">
                      <span className="a2-dc1-num">{tr('about_a2_s1_num')}</span>
                      <span className="a2-dc1-sub">{tr('about_a2_s1_sub')}</span>
                    </div>
                  </div>
                  {/* Card 2: "7 лет личной терапии" — Figma 1:2031, text group left=20 top=25 w=306 flex-col */}
                  <div className="a2-d-card">
                    <div className="a2-d-card__bg" />
                    <div className="a2-dc2-tg">
                      <div className="a2-dc2-row">
                        <span className="a2-dc2-num">{tr('about_a2_s2_num')}</span>
                        <span className="a2-dc2-sub">{tr('about_a2_s2_sub')}</span>
                      </div>
                      <span className="a2-dc2-note">{tr('about_a2_s2_note')}</span>
                    </div>
                  </div>
                  {/* Card 3: "более / $100 тыс / вложено в обучение" — Figma 1:2038, text group left=20 top=20 h=58 w=301 */}
                  <div className="a2-d-card">
                    <div className="a2-d-card__bg" />
                    <div className="a2-dc3-tg">
                      <span className="a2-dc3-pre">{tr('about_a2_s3_pre')}</span>
                      <span className="a2-dc3-num">{tr('about_a2_s3_num')}</span>
                      <span className="a2-dc3-sub">{tr('about_a2_s3_sub')}</span>
                    </div>
                  </div>
                </div>
                {/* Right text: 4 группы с разделителем между ними, как в Figma */}
                <div className="a2-d-text">
                  <p>{tr('about_a2_r1')}</p>
                  <p className="a2-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r2')}</p>
                  <p>{tr('about_a2_r3')}</p>
                  <p className="a2-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r4')}</p>
                  <p>{tr('about_a2_r4b')}</p>
                  <p>{tr('about_a2_r4c')}</p>
                  <p className="a2-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r5')}</p>
                  <p>{tr('about_a2_r5b')}</p>
                </div>
              </div>

              {/* ── Mobile a2 "Путь" — Figma 1:1813 (375×1460) ── */}
              <div className="a2-m mobile-only">
                <div className="a2-m-bg" aria-hidden="true">
                  <Image src="/images/about/a2-m-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a2-m-title">
                  {tr('about_a2_title').split(' → ')[0]}
                  <br aria-hidden="true" />
                  {tr('about_a2_title').split(' → ')[1]}
                </h2>
                <div className="a2-m-cards">
                  <div className="a2-m-card a2-m-card--1">
                    <span className="a2-m-card__num">{tr('about_a2_s1_num')}</span>
                    <span className="a2-m-card__sub">{tr('about_a2_s1_sub')}</span>
                  </div>
                  <div className="a2-m-card a2-m-card--2">
                    <span className="a2-m-card__num">{tr('about_a2_s2_num')}</span>
                    <span className="a2-m-card__sub">{tr('about_a2_s2_sub')}</span>
                    <span className="a2-m-card__note">{tr('about_a2_s2_note')}</span>
                  </div>
                  <div className="a2-m-card a2-m-card--3">
                    <span className="a2-m-card__pre">{tr('about_a2_s3_pre')}</span>
                    <span className="a2-m-card__num">{tr('about_a2_s3_num')}</span>
                    <span className="a2-m-card__sub">{tr('about_a2_s3_sub')}</span>
                  </div>
                </div>
                <div className="a2-m-photo" aria-hidden="true">
                  <Image src="/images/about/a2-m-photo.jpg" alt="Анна Медведева" fill sizes="100vw" quality={90}
                    style={{ objectFit: 'cover', objectPosition: 'center bottom' }} />
                </div>
                <div className="a2-m-text">
                  <p>{tr('about_a2_r1')}</p>
                  <p className="a2-m-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r2')}</p>
                  <p>{tr('about_a2_r3')}</p>
                  <p className="a2-m-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r4')}</p>
                  <p>{tr('about_a2_r4b')}</p>
                  <p>{tr('about_a2_r4c')}</p>
                  <p className="a2-m-text__sep" aria-hidden="true" />
                  <p>{tr('about_a2_r5')}</p>
                  <p>{tr('about_a2_r5b')}</p>
                </div>
              </div>
            </>
          ) : i === 2 ? (
            <>
              {/* ── Desktop a3 «Роль: Мастер состояния» — Figma 1:2045 (1440×700) ── */}
              <div className="a3-d desktop-only">
                <div className="a3-d-bg" aria-hidden="true">
                  <Image src="/images/about/a3-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a3-d-title">{tr('about_a3_title')}</h2>
                <div className="a3-d-text">
                  <p>{tr('about_a3_p1')}</p>
                  <p>{tr('about_a3_p1b')}</p>
                  <p className="a3-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a3_p2')}</p>
                  <p className="a3-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a3_p3')}</p>
                </div>
              </div>
              {/* Mobile a3 — пока на запечённом фоне (HTML-вариант для мобильного будет отдельной задачей) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 3 ? (
            <>
              {/* ── Desktop a4 «RI / Reality Intelligence» — Figma 1:2049 (1440×700) ── */}
              <div className="a4-d desktop-only">
                <div className="a4-d-bg" aria-hidden="true">
                  <Image src="/images/about/a4-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a4-d-h1">{tr('about_a4_h1')}</h2>
                <p className="a4-d-subtitle">{tr('about_a4_subtitle')}</p>
                <p className="a4-d-p a4-d-p--1">{tr('about_a4_p1')}</p>
                <p className="a4-d-p a4-d-p--2">{tr('about_a4_p2')}</p>
              </div>
              {/* Mobile a4 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 4 ? (
            <>
              {/* ── Desktop a5 «Метод: ДНК Реальности» — Figma 1:2056 (1440×700) ── */}
              <div className="a5-d desktop-only">
                <div className="a5-d-bg" aria-hidden="true">
                  <Image src="/images/about/a5-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a5-d-title">{tr('about_a5_title')}</h2>
                <div className="a5-d-intro">
                  <p>{tr('about_a5_intro')}</p>
                  <p>{tr('about_a5_intro2')}</p>
                </div>
                <h3 className="a5-d-list-title">{tr('about_a5_list_title')}</h3>
                <ul className="a5-d-list">
                  <li>{tr('about_a5_li1')}</li>
                  <li>{tr('about_a5_li2')}</li>
                  <li>{tr('about_a5_li3')}</li>
                  <li>{tr('about_a5_li4')}</li>
                </ul>
                <div className="a5-d-body">
                  <p>{tr('about_a5_body')}</p>
                  <p>{tr('about_a5_body2')}</p>
                </div>
              </div>
              {/* ── Mobile a5 «Метод: ДНК Реальности» — Figma 1:1846 (375×766) ── */}
              <div className="a5-m mobile-only">
                <div className="a5-m-bg" aria-hidden="true">
                  <Image src="/images/about/a5-m-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a5-m-title">{tr('about_a5_title')}</h2>
                <div className="a5-m-intro">
                  <p>{tr('about_a5_intro')}</p>
                  <p>{tr('about_a5_intro2')}</p>
                </div>
                <h3 className="a5-m-list-title">{tr('about_a5_list_title')}</h3>
                <ul className="a5-m-list">
                  <li>{tr('about_a5_li1')}</li>
                  <li>{tr('about_a5_li2')}</li>
                  <li>{tr('about_a5_li3')}</li>
                  <li>{tr('about_a5_li4')}</li>
                </ul>
                <div className="a5-m-body">
                  <p>{tr('about_a5_body')}</p>
                  <p>{tr('about_a5_body2')}</p>
                </div>
              </div>
            </>
          ) : i === 9 ? (
            <>
              {/* ── Desktop a10 «Примеры работы» — Figma 1:2117 (1440×700) ── */}
              <div className="a10-d desktop-only">
                <div className="a10-d-bg" aria-hidden="true">
                  <Image src="/images/about/a10-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a10-d-title">{tr('about_a10_title')}</h2>
                <div className="a10-d-text">
                  <p>{tr('about_a10_p1')}</p>
                  <p className="a10-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a10_p2')}</p>
                </div>
                <div className="a10-d-how">
                  <p className="a10-d-how__title">{tr('about_a10_how_title')}</p>
                  <p className="a10-d-how__body">{tr('about_a10_how_body')}</p>
                </div>
              </div>
              {/* Mobile a10 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 8 ? (
            <>
              {/* ── Desktop a9 «Почему именно я» — Figma 1:2091 (1440×700) ── */}
              <div className="a9-d desktop-only">
                <div className="a9-d-bg" aria-hidden="true">
                  <Image src="/images/about/a9-d-bg.jpg" alt="" fill sizes="67vw" quality={90} />
                </div>
                <div className="a9-d-photo" aria-hidden="true">
                  <Image src="/images/about/a9-d-photo.jpg" alt="" fill sizes="34vw" quality={90} />
                </div>
                <h2 className="a9-d-title">{tr('about_a9_title')}</h2>
                <div className="a9-d-stats">
                  <h3 className="a9-d-stats__heading">{tr('about_a9_exp')}</h3>
                  <div className="a9-d-stats__list">
                    <div className="a9-d-stat a9-d-stat--1">
                      <span className="a9-d-stat__num">{tr('about_a9_s1_num')}</span>
                      <span className="a9-d-stat__sub">{tr('about_a9_s1_sub')}</span>
                    </div>
                    <div className="a9-d-stat a9-d-stat--2">
                      <span className="a9-d-stat__num">{tr('about_a9_s2_num')}</span>
                      <span className="a9-d-stat__sub">{tr('about_a9_s2_sub')}</span>
                    </div>
                    <div className="a9-d-stat a9-d-stat--3">
                      <span className="a9-d-stat__num">{tr('about_a9_s3_num')}</span>
                      <span className="a9-d-stat__sub">{tr('about_a9_s3_sub')}</span>
                    </div>
                  </div>
                </div>
                <div className="a9-d-right">
                  <p>{tr('about_a9_r1')}</p>
                  <p>{tr('about_a9_r2')}</p>
                  <p>{tr('about_a9_r3')}</p>
                  <div className="a9-d-right__statement">
                    <p className="a9-d-right__r4">{tr('about_a9_r4')}</p>
                    <p>{tr('about_a9_r5')}</p>
                  </div>
                </div>
                <h2 className="a9-d-cta-title">{tr('about_a9_cta_title')}</h2>
                <p className="a9-d-cta-sub">
                  <span>{tr('about_a9_cta_sub_pre')}</span>
                  <span className="a9-d-cta-sub__em">{tr('about_a9_cta_sub_em')}</span>
                </p>
              </div>
              {/* Mobile a9 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 7 ? (
            <>
              {/* ── Desktop a8 «Как проходит работа» — Figma 1:2081 (1440×700) ── */}
              <div className="a8-d desktop-only">
                <div className="a8-d-bg" aria-hidden="true">
                  <Image src="/images/about/a8-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a8-d-title">{tr('about_a8_title')}</h2>
                <div className="a8-d-text a8-d-text--1">
                  <p>{tr('about_a8_p1')}</p>
                  <p>{tr('about_a8_p1b')}</p>
                  <p className="a8-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a8_p2')}</p>
                </div>
                <div className="a8-d-text a8-d-text--2">
                  <p>{tr('about_a8_p3')}</p>
                  <p className="a8-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a8_p3b')}</p>
                </div>
                <span className="a8-d-d a8-d-d--ekol">{tr('about_a8_d1')}</span>
                <span className="a8-d-d a8-d-d--bere">{tr('about_a8_d4')}</span>
                <span className="a8-d-d a8-d-d--bezd">{tr('about_a8_d5')}</span>
                <span className="a8-d-d a8-d-d--glub">{tr('about_a8_d2')}</span>
                <span className="a8-d-result">
                  <span>{tr('about_a8_d3').split(' ')[0]}</span>
                  <span>{tr('about_a8_d3').split(' ').slice(1).join(' ')}</span>
                </span>
              </div>
              {/* Mobile a8 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 6 ? (
            <>
              {/* ── Desktop a7 «С какими запросами приходят» — Figma 1:2071 (1440×700) ── */}
              <div className="a7-d desktop-only">
                <div className="a7-d-bg" aria-hidden="true">
                  <Image src="/images/about/a7-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a7-d-title">{tr('about_a7_title')}</h2>
                <ul className="a7-d-list">
                  <li>{tr('about_a7_li1')}</li>
                  <li>{tr('about_a7_li2')}</li>
                  <li>{tr('about_a7_li3')}</li>
                  <li>{tr('about_a7_li4')}</li>
                  <li>{tr('about_a7_li5')}</li>
                </ul>
                <p className="a7-d-quote">{tr('about_a7_li6')}</p>
              </div>
              {/* Mobile a7 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : i === 5 ? (
            <>
              {/* ── Desktop a6 «Книга: ДНК Реальности» — Figma 1:2064 (1440×685) ── */}
              <div className="a6-d desktop-only">
                <div className="a6-d-bg" aria-hidden="true">
                  <Image src="/images/about/a6-d-bg.jpg" alt="" fill sizes="100vw" quality={90} />
                </div>
                <h2 className="a6-d-title">{tr('about_a6_title')}</h2>
                <div className="a6-d-text">
                  <p>{tr('about_a6_p1')}</p>
                  <p className="a6-d-text__sep" aria-hidden="true" />
                  <p>{tr('about_a6_p2')}</p>
                  <p>{tr('about_a6_p2b')}</p>
                </div>
              </div>
              {/* Mobile a6 — пока на запечённом фоне (отдельная задача) */}
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          ) : (
            <>
              <div className="s10-bg desktop-only">
                <Image
                  src={aboutPath('desk', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  quality={90}
                />
              </div>
              <div className="s10-bg mobile-only">
                <Image
                  src={aboutPath('mob', n, lang)}
                  alt=""
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  quality={90}
                />
              </div>
            </>
          )}

          {/* a4 — YouTube video embed */}
          {i === 3 && (
            <>
              <div className="about-video about-video--a4 desktop-only">
                <LiteYouTube id="i6vCzyWnE-o" title="Reality Intelligence" />
              </div>
              <div className="about-video about-video--a4-m mobile-only">
                <LiteYouTube id="i6vCzyWnE-o" title="Reality Intelligence" />
              </div>
            </>
          )}

          {/* a5 — "Подробнее о методе" button */}
          {i === 4 && (
            <a href="/method" className="about-btn-method">
              <span>Подробнее о методе</span>
            </a>
          )}

          {/* a6 — book buttons */}
          {i === 5 && (
            <div className="about-btn-book-group">
              <a href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V" target="_blank" rel="noopener noreferrer" className="about-btn-book"><span>Читать книгу</span></a>
              <a href="https://t.me/+VvkBk9x7J6cxNWQ6" target="_blank" rel="noopener noreferrer" className="about-btn-book"><span>Слушать книгу</span></a>
            </div>
          )}

          {/* a9 — consultation button */}
          {i === 8 && (
            <a href="/consultation" className="about-btn-consult">
              <span>Запись на консультацию</span>
            </a>
          )}

          {/* a10 — YouTube video embed */}
          {i === 9 && (
            <div className="about-video about-video--a10">
              <LiteYouTube id="pWpNN4YhNsc" title="Reality Intelligence — Examples" />
            </div>
          )}
        </section>
      ))}
      <Footer />
    </main>
  );
}
