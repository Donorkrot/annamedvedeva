'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function UnitySection() {
  const { tr } = useTranslation();

  return (
    <section id="s10" className="section s10-figma">
      <div className="s10-bg-img desktop-only">
        <Image src="/images/backgrounds/bg-s10-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s10-bg-img mobile-only">
        <Image src="/images/backgrounds/bg-s10-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <div className="s10-header">
        <h2 className="s10-title">{tr('s10_title_1')} {tr('s10_title_2')}</h2>
        <p className="s10-intro">{tr('s10_intro')}</p>
      </div>

      <div className="s10-step s10-step-1">
        <p className="s10-step__text">{tr('s10_item1')}</p>
      </div>
      <div className="s10-step s10-step-2">
        <p className="s10-step__text">{tr('s10_item2')}</p>
      </div>
      <div className="s10-step s10-step-3">
        <p className="s10-step__text">{tr('s10_item3')}</p>
      </div>
    </section>
  );
}
