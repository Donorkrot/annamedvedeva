'use client';
import Image from "next/image";

export default function AnnaSection() {
  return (
    <section id="s7" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s7-full.jpg" alt="О мастере — Анна Медведева" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s7.jpg" alt="О мастере — Анна Медведева" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
      <a href="#s7" className="s7-btn-overlay s7-btn-about" />
      <a href="https://t.me/medvedieva_anna" target="_blank" rel="noopener noreferrer" className="s7-btn-overlay s7-btn-consult" />
    </section>
  );
}
