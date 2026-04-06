'use client';
import Image from "next/image";

export default function AnnaSection() {
  return (
    <section id="s7" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s7-full.png" alt="О мастере — Анна Медведева" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s7.png" alt="О мастере — Анна Медведева" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
      {/* "О мастере" button overlay — placeholder link */}
      <a
        href="#"
        className="s7-btn-overlay s7-btn-about"
        onClick={e => e.preventDefault()}
      />
      {/* "Запись на консультацию" button overlay — placeholder link */}
      <a
        href="#"
        className="s7-btn-overlay s7-btn-consult"
        onClick={e => e.preventDefault()}
      />
    </section>
  );
}
