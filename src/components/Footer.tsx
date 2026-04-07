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
      <a href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V" target="_blank" rel="noopener noreferrer" className="s12-book-overlay" />
      <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-ig" />
      <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-yt" />
      <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" className="s12-social-overlay s12-tg" />
      {/* "Публичная оферта" — TODO: replace href with real link */}
      <a href="#" className="s12-offer-overlay s12-oferta" />
      {/* "Политика конфиденциальности" — TODO: replace href with real link */}
      <a href="#" className="s12-offer-overlay s12-privacy" />
    </footer>
  );
}
