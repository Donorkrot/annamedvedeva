'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function UnitySection() {
  const { tr } = useTranslation();

  return (
    <section id="s10" className="section">
      {/* Background image — full section bg with figures + sparkles */}
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s10-orig.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center bottom" }}
        />
      </div>

      <div className="s10-layout">
        <div className="s10-left">
          <div>
            <h2 className="s10-title">
              {tr('s10_title_1')}&nbsp;{tr('s10_title_2')}
            </h2>
            <p className="s10-sub">{tr('s10_intro')}</p>
          </div>

          <div className="s10-items">
            <div className="s10-item s10-item-1">
              {tr('s10_item1')}
            </div>
            <div className="s10-item s10-item-2">
              {tr('s10_item2')}
            </div>
            <div className="s10-item s10-item-3">
              {tr('s10_item3')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
