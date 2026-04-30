'use client';
import { useTranslation } from '@/components/LanguageProvider';
import Image from 'next/image';

export default function OldCodeSection() {
  const { tr } = useTranslation();

  return (
    <section id="s3" className="section s3-figma">

      {/* ── Desktop ── */}
      <div className="s3-bg desktop-only">
        <Image src="/images/backgrounds/bg-s3-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <p className="s3-kicker desktop-only">{tr('s3_kicker')}</p>
      <h2 className="s3-title desktop-only">{tr('s3_title_1')} {tr('s3_title_2')}</h2>
      <p className="s3-body desktop-only">{tr('s3_body')}</p>

      {/* ── Mobile: HTML from Figma node 1-208 (375×635) ── */}
      <div className="s3-mobile-html mobile-only">

        {/* Background — 105.67% × 105.67%, offset left −0.03%, top −2.83% */}
        <div className="s3-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" decoding="async"
            src="/images/backgrounds/s3-bg-mobile-clean.jpg"
            alt=""
            className="s3-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Kicker "Код прошлого устарел" — top:39px, Raleway 16px, opacity:0.6 */}
        <p className="s3-m-kicker">{tr('s3_kicker')}</p>

        {/* Title — top:268px, Cormorant Garamond Light 20px */}
        <p className="s3-m-title">{tr('s3_title_1')}<br />{tr('s3_title_2')}</p>

        {/* Body — top:447px, Raleway 16px, opacity:0.8 */}
        <p className="s3-m-body">{tr('s3_body')}</p>

      </div>
    </section>
  );
}
