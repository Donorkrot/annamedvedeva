import type { Lang } from './translations';

// Bump this when replacing image assets to force browser cache refresh.
// Format: YYYYMMDD-sequence
const ASSET_VERSION = '20260425-s11-mobile-fix';
const v = (p: string) => `${p}?v=${ASSET_VERSION}`;

// Fallback order: use dedicated folder if exists, else fall back to RU (default).
// EN folders are not yet populated — will use RU until migration completes.
const HAS_LANG_ASSETS: Record<Lang, boolean> = { ru: true, ua: true, en: true };

export function bgDesktop(section: number, lang: Lang): string {
  if (lang === 'ua' && HAS_LANG_ASSETS.ua) return v(`/images/backgrounds/ua/bg-s${section}-full.jpg`);
  if (lang === 'en' && HAS_LANG_ASSETS.en) return v(`/images/backgrounds/en/bg-s${section}-full.jpg`);
  return v(`/images/backgrounds/bg-s${section}-full.jpg`);
}

export function bgMobile(section: number, lang: Lang): string {
  if (lang === 'ua' && HAS_LANG_ASSETS.ua) return v(`/images/mobile/ua/s${section}.jpg`);
  if (lang === 'en' && HAS_LANG_ASSETS.en) return v(`/images/mobile/en/s${section}.jpg`);
  return v(`/images/mobile/s${section}.jpg`);
}

// Buttons: lang-specific PNGs. Falls back to RU if target lang not populated.
export function btnDesktop(section: number, lang: Lang, variant?: string): string {
  const suffix = variant ? `-${variant}` : '';
  const actualLang = HAS_LANG_ASSETS[lang] ? lang : 'ru';
  return v(`/images/buttons/${actualLang}/s${section}${suffix}.png`);
}

export function btnMobile(section: number, lang: Lang, variant?: string): string {
  const suffix = variant ? `-${variant}` : '';
  const actualLang = HAS_LANG_ASSETS[lang] ? lang : 'ru';
  return v(`/images/buttons/${actualLang}/mobile/s${section}${suffix}.png`);
}
