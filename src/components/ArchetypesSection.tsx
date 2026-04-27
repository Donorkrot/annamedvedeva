'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function ArchetypesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s9" className="section s9-figma">

      {/* ── Desktop ── */}
      <div className="s9-bg desktop-only">
        <Image src="/images/backgrounds/bg-s9-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <h2 className="s9-title desktop-only">{tr('s9_title_1')} {tr('s9_title_2')}</h2>

      <div className="s9-venn desktop-only">
        <div className="s9-venn__art">
          <Image src="/images/content/s9-venn-desktop.png" alt="" fill sizes="28vw" />
        </div>
        <p className="s9-vlabel s9-vlabel--top">
          {tr('s9_v_top1')} {tr('s9_v_top2')} {tr('s9_v_top3')}
        </p>
        <p className="s9-vlabel s9-vlabel--bl">
          {tr('s9_v_bl1')} {tr('s9_v_bl2')} {tr('s9_v_bl3')} {tr('s9_v_bl4')}
        </p>
        <p className="s9-vlabel s9-vlabel--br">
          {tr('s9_v_br1')} {tr('s9_v_br2')} {tr('s9_v_br3')} {tr('s9_v_br4')}
        </p>
        <p className="s9-vlabel s9-vlabel--c">
          {tr('s9_v_c1')} {tr('s9_v_c2')}
        </p>
      </div>

      <p className="s9-caption desktop-only">{tr('s9_caption')}</p>

      {/* ── Mobile: HTML from Figma node 1:248 (375×994) ── */}
      <div className="s9-mobile-html mobile-only">

        {/* Background — x:0 y:0 w:375 h:994 */}
        <div className="s9-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/bg-s9-mobile.jpg"
            alt=""
            className="s9-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Gradient top — h:189 #f8e8e0 solid→transparent */}
        <div className="s9-m-grad-top" aria-hidden="true" />

        {/* Title — x:30 y:60 w:315, Cormorant SemiBold 36px center #332000 */}
        <p className="s9-m-title">{tr('s9_title_1')} {tr('s9_title_2')}</p>

        {/* Card — x:24 y:348 w:326 h:294 (Figma node 1:253) */}
        <div className="s9-m-card">
          {/* Venn diagram image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/content/s9-venn-mobile.png"
            alt=""
            className="s9-m-venn-img"
            draggable={false}
          />
          {/* Top descriptor — x:91 y:26 w:145, Raleway 12px center */}
          <p className="s9-m-label s9-m-label--top">
            {tr('s9_v_top1')} {tr('s9_v_top2')} {tr('s9_v_top3')}
          </p>
          {/* Center "Структурная магия" — x:103 y:162 w:121, Raleway 16px center */}
          <p className="s9-m-label s9-m-label--c">
            {tr('s9_v_c1')} {tr('s9_v_c2')}
          </p>
          {/* Left descriptors — x:37 y:200 w:111, Raleway 12px left */}
          <p className="s9-m-label s9-m-label--bl">
            {tr('s9_v_bl1')} {tr('s9_v_bl2')} {tr('s9_v_bl3')} {tr('s9_v_bl4')}
          </p>
          {/* Right descriptors — x:235 y:200 w:86, Raleway 12px left */}
          <p className="s9-m-label s9-m-label--br">
            {tr('s9_v_br1')} {tr('s9_v_br2')} {tr('s9_v_br3')} {tr('s9_v_br4')}
          </p>
        </div>

        {/* Caption — x:30 y:869 w:315, Cormorant Light 24px left #332000 */}
        <p className="s9-m-caption">{tr('s9_caption')}</p>

      </div>
    </section>
  );
}
