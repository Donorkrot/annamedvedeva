'use client';
import Image from "next/image";

export default function UnitySection() {
  return (
    <section id="s10" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s10-full.png"
          alt="Сила в единстве — живая экосистема Reality DNA"
          fill
          style={{ objectFit: "contain", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
