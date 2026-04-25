'use client';
import { useTranslation } from './LanguageProvider';

/**
 * Visually-hidden text layer for each section.
 * The section backgrounds are JPG images with text baked in, so without this
 * the textual content is invisible to screen readers, search engines, and
 * users who want to select/copy. This layer mirrors the baked-in text so the
 * site behaves like an HTML page for accessibility, SEO, and Ctrl+C/Ctrl+A.
 */

type SectionId =
  | 's1' | 's2' | 's3' | 's4' | 's5' | 's6'
  | 's7' | 's8' | 's9' | 's10' | 's11' | 's12';

export default function SeoText({ section }: { section: SectionId }) {
  const { tr } = useTranslation();

  const content = (() => {
    switch (section) {
      case 's1':
        return (
          <>
            <p>{tr('hero_tagline_1')} {tr('hero_tagline_2')} {tr('hero_tagline_3')}</p>
            <h1>{tr('hero_title')}</h1>
            <p>{tr('hero_subtitle')}</p>
            <p>{tr('hero_caption_hl')}{tr('hero_caption')} {tr('hero_caption2')}</p>
          </>
        );
      case 's2':
        return (
          <>
            <h2>{tr('s2_tagline')}</h2>
            <h3>{tr('s2_card1_title')}</h3>
            <p>{tr('s2_card1_body')}</p>
            <h3>{tr('s2_card2_title')}</h3>
            <p>{tr('s2_card2_body')}</p>
          </>
        );
      case 's3':
        return (
          <>
            <p>{tr('s3_kicker')}</p>
            <h2>{tr('s3_title_1')} {tr('s3_title_2')}</h2>
            <p>{tr('s3_body')}</p>
          </>
        );
      case 's4':
        return (
          <>
            <h2>{tr('s4_title')}</h2>
            <h3>{tr('s4_iq_name')}</h3>
            <p>{tr('s4_iq_desc')}</p>
            <h3>{tr('s4_eq_name')}</h3>
            <p>{tr('s4_eq_desc')}</p>
            <h3>{tr('s4_sq_name')}</h3>
            <p>{tr('s4_sq_desc')}</p>
            <h3>{tr('s4_ri_name')}</h3>
            <p>{tr('s4_ri_desc_1')}</p>
            <p>{tr('s4_ri_desc_2')}</p>
            <p>{tr('s4_ri_new_lang')}</p>
          </>
        );
      case 's5':
        return (
          <>
            <h3>{tr('s5_item1_title')}</h3>
            <p>{tr('s5_item1_body')}</p>
            <h3>{tr('s5_item2_title')}</h3>
            <p>{tr('s5_item2_body')}</p>
            <h3>{tr('s5_item3_title')}</h3>
            <p>{tr('s5_item3_body')}</p>
            <p>{tr('s5_item4_body')}</p>
          </>
        );
      case 's6':
        return <p>{tr('s6_video')}</p>;
      case 's7':
        return (
          <>
            <p>{tr('s7_kicker')}</p>
            <h2>{tr('s7_title_1')} {tr('s7_title_2')}</h2>
            <p>{tr('s7_desc')}</p>
            <p>{tr('s7_name')}{tr('s7_name_suffix')}</p>
            <p>{tr('s7_name_title')}</p>
            <p>{tr('s7_bio')}</p>
          </>
        );
      case 's8':
        return (
          <>
            <h3>{tr('s8_title1')}</h3>
            <p>{tr('s8_body1')}</p>
            <h3>{tr('s8_title2')}</h3>
            <p>{tr('s8_body2')}</p>
            <h3>{tr('s8_title3')}</h3>
            <p>{tr('s8_body3')}</p>
            <h3>{tr('s8_title4')}</h3>
            <p>{tr('s8_body4')}</p>
          </>
        );
      case 's9':
        return (
          <>
            <h2>{tr('s9_title_1')} {tr('s9_title_2')}</h2>
            <p>{tr('s9_v_top1')} {tr('s9_v_top2')} {tr('s9_v_top3')}</p>
            <p>{tr('s9_v_bl1')} {tr('s9_v_bl2')} {tr('s9_v_bl3')} {tr('s9_v_bl4')}</p>
            <p>{tr('s9_v_br1')} {tr('s9_v_br2')} {tr('s9_v_br3')} {tr('s9_v_br4')}</p>
            <p>{tr('s9_v_c1')} {tr('s9_v_c2')}</p>
            <p>{tr('s9_caption')}</p>
          </>
        );
      case 's10':
        return (
          <>
            <h2>{tr('s10_title_1')} {tr('s10_title_2')}</h2>
            <p>{tr('s10_intro')}</p>
            <ul>
              <li>{tr('s10_item1')}</li>
              <li>{tr('s10_item2')}</li>
              <li>{tr('s10_item3')}</li>
            </ul>
          </>
        );
      case 's11':
        return (
          <>
            <h2>{tr('s11_title')}</h2>
            <h3>{tr('s11_c1_title')}</h3>
            <p>{tr('s11_c1_body')}</p>
            <p>{tr('s11_c1_sub')}</p>
            <h3>{tr('s11_c2_title')}</h3>
            <p>{tr('s11_c2_body')}</p>
            <p>{tr('s11_c2_sub')}</p>
            <h3>{tr('s11_c3_title')}</h3>
            <p>{tr('s11_c3_body')}</p>
            <p>{tr('s11_c3_sub')}</p>
          </>
        );
      case 's12':
        return (
          <>
            <p>{tr('s12_headline_hl')}{tr('s12_headline')}</p>
            <p>{tr('s12_tagline')}</p>
            <h3>{tr('s12_currency_title')}</h3>
            <p>{tr('s12_currency_body')}</p>
            <p>{tr('s12_dna_book')}</p>
            <p>{tr('s12_offer')} · {tr('s12_privacy')}</p>
          </>
        );
    }
  })();

  return <div className="seo-overlay">{content}</div>;
}
