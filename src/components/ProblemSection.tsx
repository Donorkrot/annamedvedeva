'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';

export default function ProblemSection() {
  const { tr } = useTranslation();

  return (
    <section id="s2" className="section s2-html">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s2-clean.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          quality={90}
          sizes="100vw"
        />
      </div>

      <div className="s2-tagline">{tr('s2_tagline')}</div>

      <div className="s2-grid">
        <div className="s2-card s2-card-left">
          <h2>{tr('s2_card1_title')}</h2>
          <p>{tr('s2_card1_body')}</p>
        </div>
        <div className="s2-center" aria-hidden="true" />
        <div className="s2-card s2-card-right">
          <h2>{tr('s2_card2_title')}</h2>
          <p>{tr('s2_card2_body')}</p>
        </div>
      </div>
    </section>
  );
}
