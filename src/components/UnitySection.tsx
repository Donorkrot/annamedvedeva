'use client';
import Image from "next/image";

export default function UnitySection() {
  return (
    <section id="s10" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s10-full.jpg" alt="Сила в единстве" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s10.jpg" alt="Сила в единстве" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
