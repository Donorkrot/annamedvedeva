'use client';
import Image from "next/image";

export default function ArchetypesSection() {
  return (
    <section id="s9" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s9-full.jpg" alt="Основные архетипы RI" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s9.jpg" alt="Основные архетипы RI" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
