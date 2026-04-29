'use client';
import Image from 'next/image';
import { useTranslation } from '@/components/LanguageProvider';

export default function IntelligenceSection() {
  const { tr } = useTranslation();

  return (
    <section id="s4" className="section s4-figma">

      {/* ── Desktop ── */}
      <div className="s4-bg desktop-only">
        <Image src="/images/backgrounds/bg-s4-desktop.jpg" alt="" fill sizes="100vw" />
      </div>

      <h2 className="s4-title desktop-only">{tr('s4_title')}</h2>

      <div className="s4-line desktop-only" aria-hidden="true">
        <Image src="/images/content/s4-line.png" alt="" fill sizes="100vw" />
      </div>

      <article className="s4-col s4-col-iq desktop-only">
        <h3 className="s4-letter">IQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-iq.png" alt="" fill sizes="(max-width:768px) 100px, 130px" /></div>
        <p className="s4-name">{tr('s4_iq_name')}</p>
        <p className="s4-desc">{tr('s4_iq_desc')}</p>
      </article>

      <article className="s4-col s4-col-eq desktop-only">
        <h3 className="s4-letter">EQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-eq.png" alt="" fill sizes="(max-width:768px) 130px, 160px" /></div>
        <p className="s4-name">{tr('s4_eq_name')}</p>
        <p className="s4-desc">{tr('s4_eq_desc')}</p>
      </article>

      <article className="s4-col s4-col-sq desktop-only">
        <h3 className="s4-letter">SQ</h3>
        <div className="s4-stone"><Image src="/images/content/s4-sq.png" alt="" fill sizes="(max-width:768px) 130px, 160px" /></div>
        <p className="s4-name">{tr('s4_sq_name')}</p>
        <p className="s4-desc">{tr('s4_sq_desc')}</p>
      </article>

      <article className="s4-col s4-col-ri desktop-only">
        <h3 className="s4-letter s4-letter--ri">RI</h3>
        <div className="s4-stone s4-stone--ri"><Image src="/images/content/s4-ri.png" alt="" fill sizes="(max-width:768px) 220px, 320px" /></div>
        <p className="s4-name">{tr('s4_ri_name')}</p>
        <p className="s4-desc">
          {tr('s4_ri_desc_1')}<br />
          {tr('s4_ri_desc_2')}
        </p>
        <p className="s4-accent">{tr('s4_ri_new_lang')}</p>
      </article>

      {/* ── Mobile: HTML from Figma node 1:264 (375×1219) ── */}
      <div className="s4-mobile-html mobile-only">

        {/* Background */}
        <div className="s4-m-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/backgrounds/s4-bg-mobile-clean.jpg"
            alt=""
            className="s4-m-bg-img"
            draggable={false}
          />
        </div>

        {/* Title — x:59 y:49 w:255, Cormorant SemiBold 20px uppercase #332000 */}
        <p className="s4-m-title">{tr('s4_title')}</p>

        {/* IQ block — container x:76.5(20.4%) y:94(7.71%) w:222(59.2%) h:184 */}
        <div className="s4-m-col s4-m-col-iq">
          {/* Stone — x:71.66 y:40.91 w:78.34 h:87.18 */}
          <div className="s4-m-stone s4-m-iq-stone">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/content/s4-iq-clean.png" alt="" draggable={false} />
          </div>
          {/* Letter IQ — x:95 y:0, Cormorant Medium 28px */}
          <p className="s4-m-letter">IQ</p>
          {/* Text — y:144 */}
          <div className="s4-m-text">
            <p className="s4-m-name">{tr('s4_iq_name')}</p>
            <p className="s4-m-desc">{tr('s4_iq_desc')}</p>
          </div>
        </div>

        {/* EQ block — container x:82.5(22%) y:298(24.45%) w:210(56%) h:246 */}
        <div className="s4-m-col s4-m-col-eq">
          {/* Stone — x:49.57 y:41.11 w:111.37 h:135.78 */}
          <div className="s4-m-stone s4-m-eq-stone">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/content/s4-eq-clean.png" alt="" draggable={false} />
          </div>
          {/* Letter EQ — x:87 y:0 */}
          <p className="s4-m-letter">EQ</p>
          {/* Text — y:192 */}
          <div className="s4-m-text">
            <p className="s4-m-name">{tr('s4_eq_name')}</p>
            <p className="s4-m-desc">{tr('s4_eq_desc')}</p>
          </div>
        </div>

        {/* SQ block — container x:82.5(22%) y:564.75(46.33%) w:210(56%) h:226.5 */}
        <div className="s4-m-col s4-m-col-sq">
          {/* Stone rotated 90° — Figma visual bbox: left:12.15 top:156.81 w:186.7 h:115.63 */}
          <div className="s4-m-sq-stone-outer">
            <div className="s4-m-sq-stone-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/content/s4-sq-clean.png" alt="" draggable={false} />
            </div>
          </div>
          {/* Letter SQ — x:87 y:0 */}
          <p className="s4-m-letter">SQ</p>
          {/* Text — y:172.5 */}
          <div className="s4-m-text">
            <p className="s4-m-name">{tr('s4_sq_name')}</p>
            <p className="s4-m-desc">{tr('s4_sq_desc')}</p>
          </div>
        </div>

        {/* RI block — container x:14(3.73%) y:791(64.89%) w:347(92.53%) h:415(34.04%) */}
        <div className="s4-m-ri">
          {/* Stone fills container — x:0 y:0 w:347 h:415 */}
          <div className="s4-m-ri-stone">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/content/s4-ri-clean.png" alt="" className="s4-m-ri-stone-img" draggable={false} />
          </div>
          {/* Letter RI — x:146.5 y:36, Cormorant SemiBold 52px */}
          <p className="s4-m-ri-letter">RI</p>
          {/* Name + Desc + Accent — single column anchored to bottom of block so text never clips */}
          <div className="s4-m-ri-namewrap">
            <p className="s4-m-ri-name">{tr('s4_ri_name')}</p>
            <p className="s4-m-ri-desc">{tr('s4_ri_desc_1')}<br />{tr('s4_ri_desc_2')}</p>
            <p className="s4-m-ri-accent">{tr('s4_ri_new_lang')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
