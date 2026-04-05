'use client';
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="s12" className="s12-footer">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s12-full.png" alt="Reality DNA © 2026" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s12.png" alt="Reality DNA © 2026" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>
    </footer>
  );
}
