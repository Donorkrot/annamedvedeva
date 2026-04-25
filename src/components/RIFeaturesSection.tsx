'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function RIFeaturesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s5" className="section s5-figma">
      <div className="s5-bg desktop-only">
        <Image src="/images/backgrounds/bg-s5-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s5-bg mobile-only">
        <Image src="/images/backgrounds/bg-s5-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      {/* Frosted lead — Reality Intelligence | desktop top-left | mobile #1 */}
      <article className="s5-card s5-card--frosted s5-card--ri">
        <h2 className="s5-card__title s5-card__title--ri">Reality Intelligence</h2>
        <p className="s5-card__body s5-card__body--lead">{tr('s5_item4_body')}</p>
      </article>

      {/* Plain — Устойчивость | desktop bottom-left | mobile #2 */}
      <article className="s5-card s5-card--plain s5-card--stab">
        <h3 className="s5-card__title">{tr('s5_item3_title')}</h3>
        <p className="s5-card__body">{tr('s5_item3_body')}</p>
      </article>

      {/* Frosted — Управляемая реальность | desktop bottom-right | mobile #3 */}
      <article className="s5-card s5-card--frosted s5-card--manage">
        <h3 className="s5-card__title">{tr('s5_item1_title')}</h3>
        <p className="s5-card__body">{tr('s5_item1_body')}</p>
      </article>

      {/* Plain — Ясность решений | desktop top-right | mobile #4 */}
      <article className="s5-card s5-card--plain s5-card--clear">
        <h3 className="s5-card__title">{tr('s5_item2_title')}</h3>
        <p className="s5-card__body">{tr('s5_item2_body')}</p>
      </article>
    </section>
  );
}
