'use client';
import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section id="s11" className="section" style={{ backgroundColor: '#000' }}>
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s11-full.png"
          alt="Эволюция состояния — программы Reality DNA"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
