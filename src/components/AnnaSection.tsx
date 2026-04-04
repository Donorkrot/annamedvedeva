'use client';
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

export default function AnnaSection() {
  const { tr } = useTranslation();

  return (
    <section id="s7" className="section">
      <div className="section-bg-img">
        <Image
          src="/images/backgrounds/bg-s7-bio.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(26, 13, 5, 0.85) 0%, rgba(26, 13, 5, 0.6) 55%, transparent 70%)",
        zIndex: 1,
      }} />

      <div className="s7-grid" style={{ position: "relative", zIndex: 2 }}>
        <div className="s7-text">
          <p className="s7-kicker">{tr('s7_kicker')}</p>
          <h2 className="s7-title">{tr('s7_title_1')} {tr('s7_title_2')}</h2>
          <p className="s7-desc">
            {tr('s7_desc').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
          <p className="s7-name">
            <span className="accent">{tr('s7_name')}</span>
            <span className="accent">{tr('s7_name_suffix')}</span>
          </p>
          <p className="s7-name-title">{tr('s7_name_title')}</p>
          <p className="s7-bio">
            {tr('s7_bio').split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </p>
          <div className="s7-btns">
            <a
              href="#about"
              className="s7-btn-outline"
            >
              {tr('s7_btn2')}
            </a>
            <a
              href="https://t.me/medvedieva_anna"
              target="_blank"
              rel="noopener noreferrer"
              className="s7-btn-outline"
            >
              {tr('s7_btn')}
            </a>
          </div>
        </div>

        <div className="s7-photo">
          <Image
            src="/images/content/s7-anna.jpg"
            alt="Анна Медведева"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
