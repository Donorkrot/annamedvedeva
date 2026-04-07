'use client';
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="s1" className="section">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s1-full.jpg" alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center center" }} priority unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s1.jpg" alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority unoptimized />
      </div>
      {/* Hero CTA "Продукты Академии" button overlay (bottom-left) */}
      <a
        href="#s11"
        className="s1-btn-overlay"
        onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
      />
      {/* Image header "Продукты Академии" button overlay (top-right) */}
      <a
        href="#s11"
        className="s1-header-btn-overlay"
        onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
      />
    </section>
  );
}
