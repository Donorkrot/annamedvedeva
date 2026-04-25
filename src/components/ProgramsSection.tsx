'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

const CTA_HREF = 'https://t.me/medvedieva_anna';

export default function ProgramsSection() {
  const { tr } = useTranslation();

  return (
    <section id="s11" className="section s11-figma">
      <div className="s11-bg desktop-only">
        <Image src="/images/backgrounds/bg-s11-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s11-bg mobile-only">
        <Image src="/images/backgrounds/bg-s11-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <h2 className="s11-title">{tr('s11_title')}</h2>

      <div className="s11-grid">
        <article className="s11-card s11-card--orange">
          <h3 className="s11-card__title">{tr('s11_c1_title')}</h3>
          <p className="s11-card__body">{tr('s11_c1_body')}</p>
          <p className="s11-card__sub">{tr('s11_c1_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>

        <article className="s11-card s11-card--yellow">
          <h3 className="s11-card__title">{tr('s11_c2_title')}</h3>
          <p className="s11-card__body">{tr('s11_c2_body')}</p>
          <p className="s11-card__sub">{tr('s11_c2_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>

        <article className="s11-card s11-card--gold">
          <h3 className="s11-card__title">{tr('s11_c3_title')}</h3>
          <p className="s11-card__body">{tr('s11_c3_body')}</p>
          <p className="s11-card__sub">{tr('s11_c3_sub')}</p>
          <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn"><span>{tr('s11_btn')}</span></a>
        </article>
      </div>
    </section>
  );
}
