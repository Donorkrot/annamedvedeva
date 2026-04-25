'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile, btnDesktop, btnMobile } from '@/lib/imagePaths';

const CTA_HREF = 'https://t.me/medvedieva_anna';

export default function ProgramsSection() {
  const { lang } = useTranslation();

  return (
    <section id="s11" className={`section s11-lang-${lang}`}>
      <SeoText section="s11" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} quality={90} />
      </div>
      <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-1" aria-label="Reality Management">
        <img className="desktop-only" src={btnDesktop(11, lang)} alt="" draggable={false} />
        <img className="mobile-only"  src={btnMobile(11, lang)}  alt="" draggable={false} />
      </a>
      <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-2" aria-label="Masters Academy">
        <img className="desktop-only" src={btnDesktop(11, lang)} alt="" draggable={false} />
        <img className="mobile-only"  src={btnMobile(11, lang)}  alt="" draggable={false} />
      </a>
      <a href={CTA_HREF} target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-3" aria-label="VIP">
        <img className="desktop-only" src={btnDesktop(11, lang)} alt="" draggable={false} />
        <img className="mobile-only"  src={btnMobile(11, lang)}  alt="" draggable={false} />
      </a>
    </section>
  );
}
