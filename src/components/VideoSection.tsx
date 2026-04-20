'use client';
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';

export default function VideoSection() {
  useTranslation();

  return (
    <section id="s6" className="section s6-video">
      <SeoText section="s6" />
      <div className="s6-video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/i6vCzyWnE-o?rel=0&modestbranding=1"
          title="Метод Reality DNA — Анна Медведева"
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
