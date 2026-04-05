'use client';
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section id="s2" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s2-full.png" alt="Мы не успеваем" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s2.png" alt="Мы не успеваем" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
    </section>
  );
}
