'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function DNASection() {
  const { tr } = useTranslation();

  return (
    <section id="s8" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s8-new.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="s8-grid">
        {/* Left column: Честно (top), Красиво (bottom) */}
        <div className="s8-left">
          <div>
            <h3 className="s8-trait-title">{tr('s8_title1')}</h3>
            <p className="s8-trait-body">{tr('s8_body1')}</p>
          </div>
          <div>
            <h3 className="s8-trait-title">{tr('s8_title3')}</h3>
            <p className="s8-trait-body">{tr('s8_body3')}</p>
          </div>
        </div>

        {/* Center - DNA image */}
        <div className="s8-center">
          <div className="s8-center-label">DNA</div>
          <div className="s8-dna-img">
            <Image
              src="/images/content/dna-symbol.png"
              alt="DNA"
              width={760}
              height={760}
              className="s8-dna-symbol"
            />
          </div>
        </div>

        {/* Right column: Глубоко (top), Структурно (bottom) */}
        <div className="s8-right">
          <div>
            <h3 className="s8-trait-title">{tr('s8_title2')}</h3>
            <p className="s8-trait-body">{tr('s8_body2')}</p>
          </div>
          <div>
            <h3 className="s8-trait-title">{tr('s8_title4')}</h3>
            <p className="s8-trait-body">{tr('s8_body4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
