'use client';
import Image from "next/image";

export default function OldCodeSection() {
  return (
    <section id="s3" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s3-full.jpg" alt="Проходить травму не обязательно" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s3.jpg" alt="Проходить травму не обязательно" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
