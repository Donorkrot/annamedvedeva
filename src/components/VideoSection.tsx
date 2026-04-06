'use client';
import Image from "next/image";

export default function VideoSection() {
  return (
    <section id="s6" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s6-full.png" alt="Видео" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s6.png" alt="Видео" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
      {/* "Метод" button overlay — placeholder link */}
      <a
        href="#"
        className="s6-btn-overlay"
        onClick={e => e.preventDefault()}
      />
    </section>
  );
}
