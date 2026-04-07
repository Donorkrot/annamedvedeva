'use client';
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="s12" className="s12-footer">
      <div className="s10-bg desktop-only">
        <Image src="/images/backgrounds/bg-s12-full.jpg" alt="Reality DNA © 2026" fill style={{ objectFit: "cover", objectPosition: "center center" }} unoptimized />
      </div>
      <div className="s10-bg mobile-only">
        <Image src="/images/mobile/s12.jpg" alt="Reality DNA © 2026" fill style={{ objectFit: "cover", objectPosition: "center top" }} unoptimized />
      </div>

      {/* Left column */}
      <div className="s12-left">
        <h2 className="s12-headline">
          <span className="hl">Reality Intelligence</span> — Ваш навык
        </h2>
        <p className="s12-tagline">Коды реальности — это доступ к возможностям мира</p>

        <a href="https://drive.google.com/drive/folders/1V5KF6JG-TGjbRFOk_Y0n7wxdmd0SG49V" target="_blank" rel="noopener noreferrer" className="s12-book-block">
          <span className="s12-book-title">ДНК Реальности</span>
          <span className="s12-book-label">Читать книгу</span>
        </a>
      </div>

      {/* Right column */}
      <div className="s12-right-col">
        <div className="s12-currency">
          <h3 className="s12-currency-title">Состояние — Новая валюта</h3>
          <p className="s12-currency-body">В эпоху AI самой ценной валютой становится ваше состояние</p>
        </div>

        <div className="s12-social">
          <a href="https://instagram.com/medvedieva.anna" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@medvedievaanna" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="4" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://t.me/wayofsoulanna" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64L2.72 8.95c-.698.27-.906.793-.878 1.186.028.393.273.86.98 1.078l4.15 1.28 1.672 5.27c.198.628.62.886 1.083.886.463 0 .774-.245 1.07-.54l2.56-2.48 4.15 3.065c.39.29.78.39 1.12.39.72 0 1.18-.52 1.33-1.2l3.77-18.29c.14-.69-.07-1.24-.46-1.57a1.63 1.63 0 0 0-.99-.35zM9.58 13.59l-.85 3.06-.67-4.24 9.7-6.3-8.18 7.48z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright — center bottom */}
      <p className="s12-copyright">REALITY DNA © 2026</p>

      {/* Legal links — bottom right */}
      <div className="s12-links">
        <a href="#">Публичная оферта</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
