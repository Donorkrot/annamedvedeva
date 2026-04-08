'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function IntelligenceSection() {
  const { lang } = useTranslation();

  return (
    <section id="s4" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(4, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(4, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
