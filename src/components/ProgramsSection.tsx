'use client';
import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section id="s11" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s11-full.png" alt="Эволюция состояния" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s11.png" alt="Эволюция состояния" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-1" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-2" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s11-btn-overlay s11-btn-3" />
    </section>
  );
}
