'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function ProblemSection() {
  const { tr } = useTranslation();

  return (
    <section id="s2" className="section s2-figma">
      <div className="s2-bg desktop-only">
        <Image src="/images/backgrounds/bg-s2-desktop.jpg" alt="" fill sizes="100vw" priority={false} />
      </div>
      <div className="s2-bg mobile-only">
        <Image src="/images/backgrounds/bg-s2-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <h4 className="s2-title">{tr('s2_tagline')}</h4>

      <article className="s2-card s2-card--left">
        <div className="s2-card__panel">
          <Image src="/images/backgrounds/s2-card-left.png" alt="" fill sizes="(max-width:768px) 84vw, 22vw" />
        </div>
        <div className="s2-card__inner">
          <h2>{tr('s2_card1_title')}</h2>
          <p>{tr('s2_card1_body')}</p>
        </div>
      </article>

      <article className="s2-card s2-card--right">
        <div className="s2-card__panel">
          <Image src="/images/backgrounds/s2-card-right.png" alt="" fill sizes="(max-width:768px) 84vw, 22vw" />
        </div>
        <div className="s2-card__inner">
          <h2>{tr('s2_card2_title')}</h2>
          <p>{tr('s2_card2_body')}</p>
        </div>
      </article>
    </section>
  );
}
