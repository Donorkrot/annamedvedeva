'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function ProblemSection() {
  const { tr } = useTranslation();

  return (
    <section id="s2" className="section">
      {/* Brain image as FULL background */}
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s2-new.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="s2-tagline">{tr('s2_tagline')}</div>

      <div className="s2-grid">
        {/* Card left */}
        <div className="s2-card s2-card-left">
          <h2>{tr('s2_card1_title')}</h2>
          <p>{tr('s2_card1_body')}</p>
        </div>

        {/* Empty center - brain is the background */}
        <div className="s2-center" />

        {/* Card right */}
        <div className="s2-card s2-card-right">
          <h2>{tr('s2_card2_title')}</h2>
          <p>{tr('s2_card2_body')}</p>
        </div>
      </div>
    </section>
  );
}
