'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile, btnDesktop } from '@/lib/imagePaths';

export default function VideoSection() {
  const { lang } = useTranslation();

  return (
    <section id="s6" className="section">
      <SeoText section="s6" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(6, lang)} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center center' }} quality={95} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(6, lang)} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} quality={95} />
      </div>

      <div className="s6-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/i6vCzyWnE-o?rel=0&modestbranding=1"
          title="Метод Reality DNA — Анна Медведева"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      <a href="#s3" className="s6-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(6, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
