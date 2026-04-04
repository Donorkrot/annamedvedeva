'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function ProgramsSection() {
  const { tr } = useTranslation();

  return (
    <section id="s11" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s11-new.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="s11-content">
        <div className="s11-title">{tr('s11_title')}</div>

        <div className="s11-grid">
          <div className="s11-card">
            <div className="s11-card-inner">
              <div className="s11-col-title">{tr('s11_c1_title')}</div>
              <div className="s11-col-body">{tr('s11_c1_body')}</div>
              <div className="s11-col-sub">{tr('s11_c1_sub')}</div>
              <div className="s11-card-btn-wrap">
                <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn">{tr('s11_btn')}</a>
              </div>
            </div>
          </div>

          <div className="s11-card">
            <div className="s11-card-inner">
              <div className="s11-col-title">{tr('s11_c2_title')}</div>
              <div className="s11-col-body">{tr('s11_c2_body')}</div>
              <div className="s11-col-sub">{tr('s11_c2_sub')}</div>
              <div className="s11-card-btn-wrap">
                <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn">{tr('s11_btn')}</a>
              </div>
            </div>
          </div>

          <div className="s11-card">
            <div className="s11-card-inner">
              <div className="s11-col-title">{tr('s11_c3_title')}</div>
              <div className="s11-col-body">{tr('s11_c3_body')}</div>
              <div className="s11-col-sub">{tr('s11_c3_sub')}</div>
              <div className="s11-card-btn-wrap">
                <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn">{tr('s11_btn')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
