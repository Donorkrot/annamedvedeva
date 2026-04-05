'use client';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="s1" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s1-full.png"
          alt="Reality DNA — Академия управления состоянием"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
