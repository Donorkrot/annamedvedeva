'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function DNASection() {
  const { tr } = useTranslation();

  return (
    <section id="s8" className="section s8-figma">
      <div className="s8-bg desktop-only">
        <Image src="/images/backgrounds/bg-s8-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s8-bg mobile-only">
        <Image src="/images/backgrounds/bg-s8-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <h2 className="s8-title">DNA</h2>

      <div className="s8-dna desktop-only">
        <Image src="/images/content/s8-dna-desktop.png" alt="" fill sizes="(max-width:768px) 0px, 53vw" />
      </div>
      <div className="s8-dna mobile-only">
        <Image src="/images/content/s8-dna-mobile.png" alt="" fill sizes="100vw" />
      </div>

      <article className="s8-trait s8-trait-1">
        <h3>{tr('s8_title1')}</h3>
        <p>{tr('s8_body1')}</p>
      </article>
      <article className="s8-trait s8-trait-2">
        <h3>{tr('s8_title2')}</h3>
        <p>{tr('s8_body2')}</p>
      </article>
      <article className="s8-trait s8-trait-3">
        <h3>{tr('s8_title3')}</h3>
        <p>{tr('s8_body3')}</p>
      </article>
      <article className="s8-trait s8-trait-4">
        <h3>{tr('s8_title4')}</h3>
        <p>{tr('s8_body4')}</p>
      </article>
    </section>
  );
}
