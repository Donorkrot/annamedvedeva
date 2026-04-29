'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function UnitySection() {
  const { tr } = useTranslation();

  return (
    <section id="s10" className="section s10-figma">

      {/* ── Desktop ── */}
      <div className="s10-bg-img desktop-only">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/backgrounds/bg-s10-desktop.jpg" alt="" />
      </div>

      <div className="s10-header desktop-only">
        <h2 className="s10-title">{tr('s10_title_1')} {tr('s10_title_2')}</h2>
        <p className="s10-intro">{tr('s10_intro')}</p>
      </div>

      <div className="s10-step s10-step-1 desktop-only">
        <p className="s10-step__text">{tr('s10_item1')}</p>
        <div className="s10-step__line" aria-hidden="true">
          <Image src="/images/content/s10-line.png" alt="" fill sizes="555px" />
        </div>
      </div>
      <div className="s10-step s10-step-2 desktop-only">
        <p className="s10-step__text">{tr('s10_item2')}</p>
        <div className="s10-step__line" aria-hidden="true">
          <Image src="/images/content/s10-line.png" alt="" fill sizes="555px" />
        </div>
      </div>
      <div className="s10-step s10-step-3 desktop-only">
        <p className="s10-step__text">{tr('s10_item3')}</p>
        <div className="s10-step__line" aria-hidden="true">
          <Image src="/images/content/s10-line.png" alt="" fill sizes="555px" />
        </div>
      </div>

      {/* ── Mobile: HTML from Figma node 1:425 (375×788) ── */}
      <div className="s10-mobile-html mobile-only">

        {/* Image — x:0 y:163 w:375 h:295 (Figma node 1:429) */}
        <div className="s10-m-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/bg-s10-mobile.jpg"
            alt=""
            className="s10-m-img-bg"
            draggable={false}
          />
        </div>

        {/* Title "СИЛА В ЕДИНСТВЕ" — x:30 y:40 w:315, Cormorant SemiBold 36px #fff5ef */}
        <p className="s10-m-title">{tr('s10_title_1')} {tr('s10_title_2')}</p>

        {/* Intro "Живая экосистема…" — x:30 y:110 w:315, Raleway Medium 18px #fff5ef */}
        <p className="s10-m-intro">{tr('s10_intro')}</p>

        {/* Item 1 — text x:20 y:488 w:203 h:57 | line y:575 w:352 h:2 */}
        <div className="s10-m-item s10-m-item--1">
          <p className="s10-m-item-text">{tr('s10_item1')}</p>
          <div className="s10-m-line" aria-hidden="true" />
        </div>

        {/* Item 2 — text x:20 y:605 w:200 h:38 | line y:673 w:301 h:2 */}
        <div className="s10-m-item s10-m-item--2">
          <p className="s10-m-item-text">{tr('s10_item2')}</p>
          <div className="s10-m-line" aria-hidden="true" />
        </div>

        {/* Item 3 — text x:20 y:703 w:272 h:38 | line y:771 w:245 h:2 */}
        <div className="s10-m-item s10-m-item--3">
          <p className="s10-m-item-text">{tr('s10_item3')}</p>
          <div className="s10-m-line" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}
