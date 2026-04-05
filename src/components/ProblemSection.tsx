'use client';
import Image from "next/image";

export default function ProblemSection() {
  return (
    <section id="s2" className="section">
      <div className="s10-bg">
        <Image
          src="/images/backgrounds/bg-s2-full.png"
          alt="Мы не успеваем — проблема современности"
          fill
          style={{ objectFit: "cover", objectPosition: "center center" }}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
