'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function AnnaSection() {
  const { tr } = useTranslation();

  return (
    <section id="s7" className="section s7-figma">
      <div className="s7-bg desktop-only">
        <Image src="/images/backgrounds/bg-s7-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s7-bg mobile-only">
        <Image src="/images/backgrounds/bg-s7-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'right center' }} />
      </div>

      <div className="s7-photo desktop-only">
        <Image src="/images/content/s7-photo-desktop.jpg" alt="Анна Медведева" fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
      </div>
      <div className="s7-photo mobile-only">
        <Image src="/images/content/s7-photo-mobile.jpg" alt="Анна Медведева" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>

      <div className="s7-block s7-block-1">
        <p className="s7-kicker">{tr('s7_kicker')}:</p>
        <h2 className="s7-title">{tr('s7_title_1')} {tr('s7_title_2')}</h2>
        <p className="s7-desc">{tr('s7_desc')}</p>
      </div>

      <div className="s7-block s7-block-2">
        <h3 className="s7-name">
          <span className="s7-name__accent">{tr('s7_name')}</span>
          <span className="s7-name__suffix">{tr('s7_name_suffix')}</span>
        </h3>
        <p className="s7-name-title">{tr('s7_name_title')}</p>
        <p className="s7-bio">{tr('s7_bio')}</p>
      </div>

      <div className="s7-buttons">
        <a href="/about" className="s7-btn"><span>{tr('s7_btn2')}</span></a>
        <a href="/consultation" className="s7-btn"><span>{tr('s7_btn')}</span></a>
      </div>
    </section>
  );
}
