'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';
import LiteYouTube from '@/components/LiteYouTube';

export default function VideoSection() {
  const { lang, tr } = useTranslation();

  return (
    <section id="s6" className="section s6-video">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(6, lang)} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center center' }} quality={95} sizes="100vw" />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(6, lang)} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} quality={95} sizes="100vw" />
      </div>

      <div className="s6-gradient desktop-only" aria-hidden="true" />

      <a
        href="#s3"
        className="s6-btn"
        onClick={e => { e.preventDefault(); document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' }); }}
      >
        <span className="s6-btn__label">{tr('s6_btn')}</span>
      </a>

      <div className="s6-video-frame">
        <LiteYouTube id="i6vCzyWnE-o" title="Метод Reality DNA — Анна Медведева" />
      </div>
    </section>
  );
}
