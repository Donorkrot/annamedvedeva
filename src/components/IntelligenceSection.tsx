'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function IntelligenceSection() {
  const { tr } = useTranslation();

  return (
    <section id="s4" className="section">
      <div className="s4-content">
        <h2 className="s4-title">{tr('s4_title')}</h2>

        <div className="s4-timeline">
          <div className="s4-line" />

          {/* IQ */}
          <div className="s4-item">
            <div className="s4-label">IQ</div>
            <div className="s4-crystal s4-c1">
              <Image
                src="/images/crystals/crystal-iq.png"
                alt="IQ"
                fill
                className="s4-crystal-img"
              />
            </div>
            <div className="s4-item-name">{tr('s4_iq_name')}</div>
            <div className="s4-item-desc">{tr('s4_iq_desc')}</div>
          </div>

          {/* EQ */}
          <div className="s4-item">
            <div className="s4-label">EQ</div>
            <div className="s4-crystal s4-c2">
              <Image
                src="/images/crystals/crystal-eq.png"
                alt="EQ"
                fill
                className="s4-crystal-img"
              />
            </div>
            <div className="s4-item-name">{tr('s4_eq_name')}</div>
            <div className="s4-item-desc">{tr('s4_eq_desc')}</div>
          </div>

          {/* SQ */}
          <div className="s4-item">
            <div className="s4-label">SQ</div>
            <div className="s4-crystal s4-c3">
              <Image
                src="/images/crystals/crystal-sq.png"
                alt="SQ"
                fill
                className="s4-crystal-img"
              />
            </div>
            <div className="s4-item-name">{tr('s4_sq_name')}</div>
            <div className="s4-item-desc">{tr('s4_sq_desc')}</div>
          </div>

          {/* RI */}
          <div className="s4-item">
            <div className="s4-label" style={{ fontSize: '52px', fontWeight: 600 }}>RI</div>
            <div className="s4-crystal s4-c4">
              <div className="s4-halo">
                <Image
                  src="/images/crystals/crystal-ri-oreol-2.png"
                  alt=""
                  width={530}
                  height={530}
                  style={{ width: 530, height: 530, maxWidth: 'none' }}
                />
              </div>
              <Image
                src="/images/crystals/crystal-ri.png"
                alt="RI"
                fill
                className="s4-crystal-img"
              />
            </div>
            <div className="s4-item-name" style={{ zIndex: 2 }}>{tr('s4_ri_name')}</div>
            <div className="s4-item-desc" style={{ zIndex: 2 }}>{tr('s4_ri_desc_1')}<br />{tr('s4_ri_desc_2')}</div>
            <div className="s4-new-lang" style={{ zIndex: 2 }}>{tr('s4_ri_new_lang')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
