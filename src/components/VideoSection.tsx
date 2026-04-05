'use client';
import Image from "next/image";

export default function VideoSection() {
  return (
    <section id="s6" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s6-full.png"
          alt="Видео будет здесь"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
