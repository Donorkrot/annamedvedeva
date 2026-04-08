'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function ProgramsSection() {
  const { lang } = useTranslation();

  return (
    <section id="s11" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(11, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-1" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-2" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-3" />
    </section>
  );
}
