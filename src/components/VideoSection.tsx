'use client';
import Image from "next/image";
import { useTranslation } from '@/components/LanguageProvider';
import { bgDesktop, bgMobile } from '@/lib/imagePaths';

export default function VideoSection() {
  const { lang } = useTranslation();

  return (
    <section id="s6" className="section">
      <div className="s10-bg desktop-only">
        <Image src={bgDesktop(6, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src={bgMobile(6, lang)} alt="" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="#s3" className="s6-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s3')?.scrollIntoView({ behavior: 'smooth' }); }} />
    </section>
  );
}
