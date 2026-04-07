'use client';
import Image from "next/image";

export default function DNASection() {
  return (
    <section id="s8" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s8-full.jpg" alt="DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s8.jpg" alt="DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
