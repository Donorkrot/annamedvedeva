'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function ArchetypesSection() {
  const { tr } = useTranslation();

  return (
    <section id="s9" className="section s9-figma">
      <div className="s9-bg desktop-only">
        <Image src="/images/backgrounds/bg-s9-desktop.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="s9-bg mobile-only">
        <Image src="/images/backgrounds/bg-s9-mobile.jpg" alt="" fill sizes="100vw" style={{ objectPosition: 'center top' }} />
      </div>

      <h2 className="s9-title">{tr('s9_title_1')} {tr('s9_title_2')}</h2>

      <div className="s9-venn">
        <div className="s9-venn__art desktop-only">
          <Image src="/images/content/s9-venn-desktop.png" alt="" fill sizes="(max-width:768px) 0px, 28vw" />
        </div>
        <div className="s9-venn__art mobile-only">
          <Image src="/images/content/s9-venn-mobile.png" alt="" fill sizes="100vw" />
        </div>
        <p className="s9-vlabel s9-vlabel--top">
          {tr('s9_v_top1')} {tr('s9_v_top2')} {tr('s9_v_top3')}
        </p>
        <p className="s9-vlabel s9-vlabel--bl">
          {tr('s9_v_bl1')} {tr('s9_v_bl2')} {tr('s9_v_bl3')} {tr('s9_v_bl4')}
        </p>
        <p className="s9-vlabel s9-vlabel--br">
          {tr('s9_v_br1')} {tr('s9_v_br2')} {tr('s9_v_br3')} {tr('s9_v_br4')}
        </p>
        <p className="s9-vlabel s9-vlabel--c">
          {tr('s9_v_c1')} {tr('s9_v_c2')}
        </p>
      </div>

      <p className="s9-caption">{tr('s9_caption')}</p>
    </section>
  );
}
