'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function OldCodeSection() {
  const { tr } = useTranslation();

  return (
    <section id="s3" className="section s3-figma">
      <div className="s3-bg desktop-only">
        <Image src="/images/backgrounds/bg-s3-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s3-bg mobile-only">
        <Image src="/images/backgrounds/bg-s3-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <p className="s3-kicker">{tr('s3_kicker')}</p>
      <h2 className="s3-title">{tr('s3_title_1')} {tr('s3_title_2')}</h2>
      <p className="s3-body">{tr('s3_body')}</p>
    </section>
  );
}
