'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function ArchetypesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s9" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s9-new.jpg"
          alt=""
          fill
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/backgrounds/bg-mob-s9-new.jpg"
          alt=""
          fill
          className="object-cover md:hidden"
        />
      </div>

      {/* Title - absolute top right */}
      <div className="s9-title">
        {tr('s9_title_1')}<br />{tr('s9_title_2')}
      </div>

      {/* Caption - absolute bottom left */}
      <p className="s9-caption">{tr('s9_caption')}</p>

      <div className="s9-layout">
        {/* Left - photo placeholder */}
        <div className="s9-left-img">
          <div className="s9-photo-left" />
        </div>

        {/* Center - Rings image with text overlay */}
        <div className="s9-venn-wrap">
          <Image
            src="/images/content/venn-rings.png"
            alt=""
            fill
            className="object-contain"
          />
          {/* Text overlays */}
          <div className="s9-venn-top">
            <span>{tr('s9_v_top1')}</span>
            <span>{tr('s9_v_top2')}</span>
            <span>{tr('s9_v_top3')}</span>
          </div>
          <div className="s9-venn-bl">
            <span>{tr('s9_v_bl1')}</span>
            <span>{tr('s9_v_bl2')}</span>
            <span>{tr('s9_v_bl3')}</span>
            <span>{tr('s9_v_bl4')}</span>
          </div>
          <div className="s9-venn-br">
            <span>{tr('s9_v_br1')}</span>
            <span>{tr('s9_v_br2')}</span>
            <span>{tr('s9_v_br3')}</span>
            <span>{tr('s9_v_br4')}</span>
          </div>
          <div className="s9-venn-center">
            <span>{tr('s9_v_c1')}</span>
            <span>{tr('s9_v_c2')}</span>
          </div>
        </div>

        {/* Right - photo placeholder */}
        <div className="s9-right-img">
          <div className="s9-photo-right" />
        </div>
      </div>
    </section>
  );
}
