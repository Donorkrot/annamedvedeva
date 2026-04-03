'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function OldCodeSection() {
  const { tr } = useTranslation();

  return (
    <section id="s3" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s3-new.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="s3-content">
        <p className="s3-kicker">{tr('s3_kicker')}</p>
        <h2 className="s3-title">{tr('s3_title_1')}<br />{tr('s3_title_2')}</h2>
        <p className="s3-body">{tr('s3_body')}</p>
      </div>
    </section>
  );
}
