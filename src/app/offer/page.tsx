'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260418-hq3x';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function offerPath(name: string, lang: string): string {
  const langDir = lang === 'ru' ? '' : `/${lang}`;
  return v(`/images/backgrounds/offer${langDir}/${name}.jpg`);
}

// Main offer text (footer is separate component; global site-header handles nav).
const SECTIONS = [
  { name: 'offer',  ratio: '1076 / 1440', bg: '#f5f0eb' },
];

export default function OfferPage() {
  const { lang } = useTranslation();

  return (
    <main>
      {SECTIONS.map((s, i) => (
        <section
          key={s.name}
          className="consult-section"
          style={{ aspectRatio: s.ratio, background: s.bg }}
        >
          <div className="s10-bg desktop-only">
            <Image
              src={offerPath(s.name, lang)}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              quality={90}
              {...(i === 0 ? { priority: true } : {})}
            />
          </div>
          <div className="s10-bg mobile-only">
            <Image
              src={offerPath(s.name, lang)}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              quality={90}
              {...(i === 0 ? { priority: true } : {})}
            />
          </div>
        </section>
      ))}
      <Footer />
    </main>
  );
}
