'use client';
import Image from "next/image";

export default function IntelligenceSection() {
  return (
    <section id="s4" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s4-full.png"
          alt="Эволюция интеллекта — IQ, EQ, SQ, RI"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
