'use client';
import Image from "next/image";

export default function IntelligenceSection() {
  return (
    <section id="s4" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s4-full.jpg" alt="Эволюция интеллекта" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s4.jpg" alt="Эволюция интеллекта" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
