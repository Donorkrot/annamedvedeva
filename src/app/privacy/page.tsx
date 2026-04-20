'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import Footer from '@/components/Footer';

const ASSET_VERSION = '20260420-privacy';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

function privacyPath(lang: string): string {
  const langDir = lang === 'ru' ? '' : `/${lang}`;
  return v(`/images/backgrounds/privacy${langDir}/privacy.jpg`);
}

export default function PrivacyPage() {
  const { lang } = useTranslation();

  return (
    <main>
      <section
        className="consult-section"
        style={{ aspectRatio: '4320 / 4185', background: '#f5f0eb' }}
      >
        <div className="s10-bg desktop-only">
          <Image
            src={privacyPath(lang)}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={90}
            priority
          />
        </div>
        <div className="s10-bg mobile-only">
          <Image
            src={privacyPath(lang)}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            quality={90}
            priority
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
