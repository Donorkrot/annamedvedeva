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
          className={`consult-section${i === 0 ? ' a1-figma' : ''}`}
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
                  <Image src="/images/about/a1-m-bg.png" alt="" fill sizes="100vw" priority />
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

          {/* a4 — RI block. Embed YouTube video into the white placeholder
             (measured from a4.jpg: left:50.74% top:25.57% w:39.84% h:51.29%). */}
          {i === 3 && (
            <div className="about-video about-video--a4">
              <LiteYouTube id="i6vCzyWnE-o" title="Reality Intelligence" />
            </div>
          )}

          {/* a5 — Метод: ДНК Реальности (Figma 1:2056). Single button at top:550 / 700, centered. */}
          {i === 4 && (
            <a href="/method" className="about-btn-method">
              <span>Подробнее о методе</span>
            </a>
          )}

          {/* a6 — Книга: ДНК Реальности (Figma 1:2064). Two stacked buttons at left:500/1440, top:531/685, w:440. */}
          {i === 5 && (
            <div className="about-btn-book-group">
              <a href="#" className="about-btn-book"><span>Читать книгу</span></a>
              <a href="#" className="about-btn-book"><span>Слушать книгу</span></a>
            </div>
          )}

          {/* a10 — "Примеры работы" block. Embed YouTube video into the grey
             placeholder (measured from a10.jpg: left:42.71% top:24.86% w:46.94% h:54.29%). */}
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
