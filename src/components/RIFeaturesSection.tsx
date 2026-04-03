'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function RIFeaturesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s5" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/fon.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/backgrounds/bliki.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="s5-wrap">
        <h2 className="s5-title">Reality Intelligence</h2>

        <div className="s5-grid">
          <div>
            <h3 className="s5-item-title">{tr('s5_item1_title')}</h3>
            <p className="s5-item-body">{tr('s5_item1_body')}</p>
          </div>

          <div>
            <h3 className="s5-item-title">{tr('s5_item2_title')}</h3>
            <p className="s5-item-body">{tr('s5_item2_body')}</p>
          </div>

          <div>
            <h3 className="s5-item-title">{tr('s5_item3_title')}</h3>
            <p className="s5-item-body">{tr('s5_item3_body')}</p>
          </div>

          <div className="s5-item-bordered">
            <p className="s5-item-body-plain">{tr('s5_item4_body')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
