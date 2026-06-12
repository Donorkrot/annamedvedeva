'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

/**
 * Мелкие частицы поверх статичного фона первого экрана.
 * Конфиг считается детерминированно (seed = индекс), чтобы разметка на сервере
 * и клиенте совпадала и не было hydration mismatch.
 */
const makeParticles = (
  count: number,
  seed: number,
  sizeMin = 1.5,
  sizeMax = 4.1,
) =>
  Array.from({ length: count }, (_, i) => {
    const rnd = (n: number) => {
      const x = Math.sin((i + seed) * 127.1 + n * 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    const dur = +(7 + rnd(6) * 9).toFixed(2);     // 7–16s — вертикальный дрейф
    return {
      left: +(rnd(1) * 100).toFixed(2),           // %
      top: +(rnd(2) * 100).toFixed(2),            // %
      size: +(sizeMin + rnd(3) * (sizeMax - sizeMin)).toFixed(2),
      amp: Math.round(20 + rnd(4) * 46),          // px — амплитуда вверх/вниз
      dx: Math.round((rnd(5) - 0.5) * 26),        // px — боковое покачивание
      dur,
      delay: +(-rnd(7) * dur).toFixed(2),         // десинхронизация старта
      twDur: +(2.6 + rnd(8) * 4).toFixed(2),      // период мерцания
      opMin: +(0.1 + rnd(9) * 0.18).toFixed(2),
      opMax: +(0.55 + rnd(10) * 0.4).toFixed(2),
    };
  });

const S1_PARTICLES = makeParticles(370, 0);                    // золотые
const S1_PARTICLES_BLUE = makeParticles(370, 9000);           // синие мелкие
const S1_PARTICLES_BLUE_BIG = makeParticles(200, 17000, 3.5, 7); // синие крупнее

export default function HeroSection() {
  const { tr } = useTranslation();

  return (
    <section id="s1" className="section">
      {/* ── Desktop — Figma node 1-64 (1440×700) ── */}
      <div className="s1-d desktop-only">
        {/* Ambient particle background — full bleed, centered vertically.
            NB: no `priority` here. With `priority`, Next.js emits a
            <link rel="preload"> in <head> that ignores the parent's
            display:none, so mobile users would download these desktop
            assets too (~970 KB wasted before LCP on mobile). Without
            priority, the IntersectionObserver still fires immediately on
            desktop because the element is above the fold, so desktop LCP
            is barely affected. */}
        <div className="s1-d-bg" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-d-ambient.webp" alt="" fill sizes="100vw" quality={65} />
        </div>
        {/* Lightning audio-wave overlay — 1440×700, centered */}
        <div className="s1-d-light" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-d-lightning.webp" alt="" fill sizes="100vw" />
        </div>

        {/* Живые мелкие частицы — поднимаются/опускаются поверх статичного фона */}
        <div className="s1-d-particles" aria-hidden="true">
          {S1_PARTICLES.map((p, i) => (
            <span
              key={`g${i}`}
              className="s1-d-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.dur}s, ${p.twDur}s`,
                animationDelay: `${p.delay}s, ${p.delay}s`,
                ['--amp' as string]: `${p.amp}px`,
                ['--dx' as string]: `${p.dx}px`,
                ['--op-min' as string]: p.opMin,
                ['--op-max' as string]: p.opMax,
              } as React.CSSProperties}
            />
          ))}
          {S1_PARTICLES_BLUE.map((p, i) => (
            <span
              key={`b${i}`}
              className="s1-d-particle s1-d-particle--blue"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.dur}s, ${p.twDur}s`,
                animationDelay: `${p.delay}s, ${p.delay}s`,
                ['--amp' as string]: `${p.amp}px`,
                ['--dx' as string]: `${p.dx}px`,
                ['--op-min' as string]: p.opMin,
                ['--op-max' as string]: p.opMax,
              } as React.CSSProperties}
            />
          ))}
          {S1_PARTICLES_BLUE_BIG.map((p, i) => (
            <span
              key={`bb${i}`}
              className="s1-d-particle s1-d-particle--blue"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.dur}s, ${p.twDur}s`,
                animationDelay: `${p.delay}s, ${p.delay}s`,
                ['--amp' as string]: `${p.amp}px`,
                ['--dx' as string]: `${p.dx}px`,
                ['--op-min' as string]: p.opMin,
                ['--op-max' as string]: p.opMax,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Tagline "Новый / Интеллект / Реальности" — page-centered top */}
        <p className="s1-d-tagline">
          <span>{tr('hero_tagline_1')}</span>
          <span>{tr('hero_tagline_2')}</span>
          <span>{tr('hero_tagline_3')}</span>
        </p>

        {/* Title — 2 rows per Figma; row 1 above the line, row 2 below.
            Один <h1> на страницу: оборачиваем обе строки в единый заголовок
            (display:contents — не влияет на абсолютное позиционирование строк,
            но в DOM/a11y остаётся ровно один h1). */}
        <h1 className="s1-d-title-group">
          <span className="s1-d-title s1-d-title--row1">{tr('hero_title')}</span>
          <span className="s1-d-title s1-d-title--row2">{tr('hero_title_2')}</span>
        </h1>

        {/* Golden glow divider line — full bleed at y=327 */}
        <div className="s1-d-line" aria-hidden="true">
          <Image src="/images/effects/line.png" alt="" fill sizes="100vw" />
        </div>

        {/* Subtitle */}
        <h2 className="s1-d-subtitle">{tr('hero_subtitle')}</h2>

        {/* CTA Button — Figma node 1:69 */}
        <a
          href="#s11"
          className="s1-d-btn"
          onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          {tr('nav_btn')}
        </a>
      </div>

      {/* ── Mobile — Figma node 1-73 (375×716) ── */}
      <div className="s1-m mobile-only">
        {/* Clean audio-wave bg from Figma 255:299 — line is rendered as a
            separate `s1-m-line` layer below to avoid the double-line bug
            (the previous bg-s1-m-figma.png had the divider baked in). */}
        <div className="s1-m-bg" aria-hidden="true">
          <Image src="/images/backgrounds/bg-s1-m-clean.webp" alt="" fill sizes="100vw" priority />
        </div>

        <p className="s1-m-tagline">
          <span>{tr('hero_tagline_1')}</span>
          <span>{tr('hero_tagline_2')}</span>
          <span>{tr('hero_tagline_3')}</span>
        </p>

        <p className="s1-m-title1">{tr('hero_m_line1')}</p>
        <p className="s1-m-title2">{tr('hero_m_line2')}</p>

        <p className="s1-m-title3">{tr('hero_m_line3')}</p>

        <p className="s1-m-subtitle">{tr('hero_subtitle')}</p>

        <a
          href="#s11"
          className="s1-m-btn"
          onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}
        >
          {tr('nav_btn')}
        </a>
      </div>
    </section>
  );
}
