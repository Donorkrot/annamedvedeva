'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function RIFeaturesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s5" className="section s5-figma">

      {/* ── Desktop ── */}
      <div className="s5-bg desktop-only">
        <Image src="/images/backgrounds/bg-s5-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <article className="s5-card s5-card--frosted s5-card--ri desktop-only">
        <h2 className="s5-card__title s5-card__title--ri">Reality Intelligence</h2>
        <p className="s5-card__body s5-card__body--lead">{tr('s5_item4_body')}</p>
      </article>

      <article className="s5-card s5-card--plain s5-card--stab desktop-only">
        <h3 className="s5-card__title">{tr('s5_item3_title')}</h3>
        <p className="s5-card__body">{tr('s5_item3_body')}</p>
      </article>

      <article className="s5-card s5-card--frosted s5-card--manage desktop-only">
        <h3 className="s5-card__title">{tr('s5_item1_title')}</h3>
        <p className="s5-card__body">{tr('s5_item1_body')}</p>
      </article>

      <article className="s5-card s5-card--plain s5-card--clear desktop-only">
        <h3 className="s5-card__title">{tr('s5_item2_title')}</h3>
        <p className="s5-card__body">{tr('s5_item2_body')}</p>
      </article>

      {/* ── Mobile: HTML from Figma node 1:289 (375×716) ── */}
      <div className="s5-mobile-html mobile-only">

        {/* Background */}
        <div className="s5-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src="/images/backgrounds/bg-s5-mobile.jpg"
            alt=""
            className="s5-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Gradient top — y:0 h:239 #fff5ef → transparent */}
        <div className="s5-m-grad-top" aria-hidden="true" />

        {/* Gradient bottom — bottom 373px transparent → #f8e8e0 */}
        <div className="s5-m-grad-bot" aria-hidden="true" />

        {/* Cards container — left:30 top:30 w:315 h:626 */}
        <div className="s5-m-cards">

          {/* Card RI frosted — y:0 h:189 */}
          <div className="s5-m-card s5-m-card--ri">
            {/* Title — y:20 x:20, Cormorant 28px */}
            <p className="s5-m-card-title s5-m-card-title--ri">Reality Intelligence</p>
            {/* Body — y:74 x:20, Raleway 16px */}
            <p className="s5-m-card-body">{tr('s5_item4_body')}</p>
          </div>

          {/* Card Устойчивость plain — y:209 h:96 */}
          <div className="s5-m-card s5-m-card--stab">
            {/* Title — y:0 x:20 */}
            <p className="s5-m-card-title">{tr('s5_item3_title')}</p>
            {/* Body — y:39 x:20, op:0.7 */}
            <p className="s5-m-card-body s5-m-card-body--dim">{tr('s5_item3_body')}</p>
          </div>

          {/* Card Управляемая реальность frosted — y:325 h:204 */}
          <div className="s5-m-card s5-m-card--manage">
            {/* Title — y:20 x:20 */}
            <p className="s5-m-card-title">{tr('s5_item1_title')}</p>
            {/* Body — y:108 x:20, op:0.7 */}
            <p className="s5-m-card-body s5-m-card-body--dim">{tr('s5_item1_body')}</p>
          </div>

          {/* Card Ясность решений plain — y:549 h:77 */}
          <div className="s5-m-card s5-m-card--clear">
            {/* Title — y:0 x:20 */}
            <p className="s5-m-card-title">{tr('s5_item2_title')}</p>
            {/* Body — y:39 x:20, op:0.7 */}
            <p className="s5-m-card-body s5-m-card-body--dim">{tr('s5_item2_body')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
