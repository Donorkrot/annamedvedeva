'use client';
import Image from "next/image";

export default function RIFeaturesSection() {
  return (
    <section id="s5" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s5-full.jpg" alt="Reality Intelligence" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s5.jpg" alt="Reality Intelligence" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </section>
  );
}
