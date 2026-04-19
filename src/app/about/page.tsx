'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260418-hq3x';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function aboutPath(type: 'desk' | 'mob', section: number, lang: string): string {
  const base = type === 'desk' ? '/images/backgrounds/about' : '/images/mobile/about';
  const langDir = lang === 'ua' ? '/ua' : '';
  // EN not available yet — fall back to RU
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
  const { lang } = useTranslation();

  return (
    <main>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n, i) => (
        <section
          key={`a${n}`}
          className="consult-section"
          style={{ aspectRatio: DESKTOP_RATIOS[i], background: DESKTOP_BGS[i] }}
        >
          <div className="s10-bg desktop-only">
            <Image
              src={aboutPath('desk', n, lang)}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center center' }}
              unoptimized
              {...(i === 0 ? { priority: true } : {})}
            />
          </div>
          <div className="s10-bg mobile-only">
            <Image
              src={aboutPath('mob', n, lang)}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              unoptimized
              {...(i === 0 ? { priority: true } : {})}
            />
          </div>
        </section>
      ))}
      <Footer />
    </main>
  );
}
