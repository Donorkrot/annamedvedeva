'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function ProblemSection() {
  const { tr } = useTranslation();

  return (
    <section id="s2" className="section s2-figma">

      {/* ── Desktop ── */}
      <div className="s2-bg desktop-only">
        <Image src="/images/backgrounds/bg-s2-desktop.jpg" alt="" fill sizes="100vw" priority={false} />
      </div>

      <h4 className="s2-title desktop-only">{tr('s2_tagline')}</h4>

      <article className="s2-card s2-card--left desktop-only">
        <div className="s2-card__panel">
          <Image src="/images/backgrounds/s2-card-left.png" alt="" fill sizes="22vw" />
        </div>
        <div className="s2-card__inner">
          <h2>{tr('s2_card1_title')}</h2>
          <p>{tr('s2_card1_body')}</p>
        </div>
      </article>

      <article className="s2-card s2-card--right desktop-only">
        <div className="s2-card__panel">
          <Image src="/images/backgrounds/s2-card-right.png" alt="" fill sizes="22vw" />
        </div>
        <div className="s2-card__inner">
          <h2>{tr('s2_card2_title')}</h2>
          <p>{tr('s2_card2_body')}</p>
        </div>
      </article>

      {/* ── Mobile: HTML from Figma node 1-195 (375×791) ── */}
      <div className="s2-mobile-html mobile-only">

        {/* Background — exact Figma crop: 297.35% × 212.16%, offset −98.67% / −32.22% */}
        <div className="s2-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/s2-bg-mobile-clean.jpg"
            alt=""
            className="s2-m-bg-img"
            draggable={false}
          />
        </div>

        {/* "МЫ НЕ УСПЕВАЕМ" — top: 39px, Figma H4 Raleway Medium 18px */}
        <p className="s2-m-title">{tr('s2_tagline')}</p>

        {/* Card 1: Новое давление — left:29px top:357px w:315px h:139px */}
        <div className="s2-m-card s2-m-card--1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/s2-card1-bg.png"
            alt=""
            className="s2-m-card__bg"
            draggable={false}
          />
          <div className="s2-m-card__inner">
            <p className="s2-m-card__title">{tr('s2_card1_title')}</p>
            <p className="s2-m-card__body">{tr('s2_card1_body')}</p>
          </div>
        </div>

        {/* Card 2: Новая реальность — left:29px top:536px w:315px h:214px */}
        <div className="s2-m-card s2-m-card--2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/s2-card2-bg.png"
            alt=""
            className="s2-m-card__bg"
            draggable={false}
          />
          <div className="s2-m-card__inner">
            <p className="s2-m-card__title">{tr('s2_card2_title')}</p>
            <p className="s2-m-card__body">{tr('s2_card2_body')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
