'use client';
import Image from "next/image";

export default function OldCodeSection() {
  return (
    <section id="s3" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s3-full.png" alt="Проходить травму не обязательно" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s3.png" alt="Проходить травму не обязательно" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
    </section>
  );
}
