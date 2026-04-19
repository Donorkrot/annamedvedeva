'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260418-hq3x';
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

          {/* c2 = "Прайс-лист". Buttons ("Оплатить" / "Техподдержка") are
              drawn inside the background image for every language. The overlays
              below are transparent, clickable hit-zones aligned pixel-precisely
              to each drawn button (positions measured from the RU reference
              `консультации прайс лист кнопки референс.png` at 4320×2889). */}
          {n === 2 && (
            <>
              {/* Card 1 — Индивидуальная */}
              <a href="#" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-1" />
              <a href="#" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-1" />
              {/* Card 2 — Срочная */}
              <a href="#" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-2" />
              <a href="#" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-2" />
              {/* Card 3 — Дистанционная */}
              <a href="#" aria-label={tr('consult_pay')}     className="cons-hit cons-pay cons-col-3" />
              <a href="#" aria-label={tr('consult_support')} className="cons-hit cons-support cons-col-3" />
            </>
          )}
        </section>
      ))}
      <Footer />
    </main>
  );
}
