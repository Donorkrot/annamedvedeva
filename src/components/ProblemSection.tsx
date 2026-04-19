'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import SeoText from '@/components/SeoText';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function ProblemSection() {
  const { lang } = useTranslation();

  return (
    <section id="s2" className="section">
      <SeoText section="s2" />
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(2, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} quality={90} />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(2, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} quality={90} />
      </div>
    </section>
  );
}
