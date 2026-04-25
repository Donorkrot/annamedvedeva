'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function IntelligenceSection() {
  const { tr } = useTranslation();

  return (
    <section id="s4" className="section s4-figma">
      <div className="s4-bg desktop-only">
        <Image src="/images/backgrounds/bg-s4-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s4-bg mobile-only">
        <Image src="/images/backgrounds/bg-s4-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <h2 className="s4-title">{tr('s4_title')}</h2>

      <div className="s4-line desktop-only" aria-hidden="true">
        <Image src="/images/content/s4-line.png" alt="" fill sizes="100vw" />
      </div>

      <article className="s4-col s4-col-iq">
        <h3 className="s4-letter">IQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-iq.png" alt="" fill sizes="(max-width:768px) 100px, 130px" /></div>
        <p className="s4-name">{tr('s4_iq_name')}</p>
        <p className="s4-desc">{tr('s4_iq_desc')}</p>
      </article>

      <article className="s4-col s4-col-eq">
        <h3 className="s4-letter">EQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-eq.png" alt="" fill sizes="(max-width:768px) 130px, 160px" /></div>
        <p className="s4-name">{tr('s4_eq_name')}</p>
        <p className="s4-desc">{tr('s4_eq_desc')}</p>
      </article>

      <article className="s4-col s4-col-sq">
        <h3 className="s4-letter">SQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-sq.png" alt="" fill sizes="(max-width:768px) 130px, 160px" /></div>
        <p className="s4-name">{tr('s4_sq_name')}</p>
        <p className="s4-desc">{tr('s4_sq_desc')}</p>
      </article>

      <article className="s4-col s4-col-ri">
        <h3 className="s4-letter s4-letter--ri">RI</h3>
        <div className="s4-stone s4-stone--ri"><Image src="/images/content/s4-ri.png" alt="" fill sizes="(max-width:768px) 220px, 320px" /></div>
        <p className="s4-name">{tr('s4_ri_name')}</p>
        <p className="s4-desc">
          {tr('s4_ri_desc_1')}<br />
          {tr('s4_ri_desc_2')}
        </p>
        <p className="s4-accent">{tr('s4_ri_new_lang')}</p>
      </article>
    </section>
  );
}
