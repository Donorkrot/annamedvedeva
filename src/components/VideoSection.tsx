'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop } from '@/lib/imagePaths';
import LiteYouTube from '@/components/LiteYouTube';

export default function VideoSection() {
  const { lang, tr } = useTranslation();

  return (
    <section id="s6" className="section s6-video">

      {/* ── Desktop ── */}
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(6, lang)} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center center' }} quality={95} sizes="100vw" />
      </div>

      <div className="s6-gradient desktop-only" aria-hidden="true" />

      <a
        href="#s3"
        className="s6-btn desktop-only"
        onClick={e => { e.preventDefault(); document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' }); }}
      >
        <span className="s6-btn__label">{tr('s6_btn')}</span>
      </a>

      <div className="s6-video-frame desktop-only">
        <LiteYouTube id="i6vCzyWnE-o" title="Метод Reality DNA — Анна Медведева" />
      </div>

      {/* ── Mobile: HTML from Figma node 1:213 (375×306) ── */}
      <div className="s6-mobile-html mobile-only">

        {/* Background — fills full frame */}
        <div className="s6-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mobile/s6.jpg"
            alt=""
            className="s6-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Gradient top — y:0 h:189 #f8e8e0 → transparent */}
        <div className="s6-m-grad-top" aria-hidden="true" />

        {/* Video frame — x:30 y:0 w:315 h:199 (Figma node 1:216 placeholder) */}
        <div className="s6-m-video-wrap">
          <LiteYouTube id="i6vCzyWnE-o" title="Метод Reality DNA — Анна Медведева" />
        </div>

        {/* Button "Метод" — x:30 y:223 w:315 h:47 r:10 (Figma node 1:217) */}
        <a
          href="#s3"
          className="s6-m-btn"
          onClick={e => { e.preventDefault(); document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          <span>{tr('s6_btn')}</span>
        </a>

      </div>
    </section>
  );
}
