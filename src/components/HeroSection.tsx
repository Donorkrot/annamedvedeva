'use client';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { useTranslation } from '@/components/LanguageProvider';
import { bgMobile, btnDesktop } from '@/lib/imagePaths';
import SeoText from '@/components/SeoText';

export default function HeroSection() {
  const { lang, tr } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const h = rect.height || 1;
        const p = Math.max(0, Math.min(1, -rect.top / h));
        section.style.setProperty('--s1-progress', p.toFixed(4));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="s1" ref={sectionRef} className="section s1-animated">
      <SeoText section="s1" />

      <div className="s1-layers desktop-only" aria-hidden="true">
        <div className="s1-bg-layer" />
        <div className="s1-detail-layer" />
        <div className="s1-darken" />
      </div>

      <div className="s10-bg mobile-only">
        <Image src={bgMobile(1, lang)} alt="Reality DNA" fill style={{ objectFit: "cover", objectPosition: "center top" }} priority quality={90} />
      </div>

      <div className="s1-text-layer desktop-only">
        <div className="hero-tagline">
          {tr('hero_tagline_1')}<br />
          {tr('hero_tagline_2')}<br />
          {tr('hero_tagline_3')}
        </div>
        <h1 className="hero-title-v2">
          {tr('hero_title')}<br />
          {lang === 'ua' ? 'Анни Медведєвої' : lang === 'en' ? 'by Anna Medvedeva' : 'Анны Медведевой'}
        </h1>
        <div className="hero-glow-line-v2" />
        <div className="hero-subtitle-v2">{tr('hero_subtitle')}</div>
      </div>

      <a href="#s11" className="s1-btn-overlay" onClick={e => { e.preventDefault(); document.querySelector('#s11')?.scrollIntoView({ behavior: 'smooth' }); }}>
        <img src={btnDesktop(1, lang)} alt="" draggable={false} />
      </a>
    </section>
  );
}
