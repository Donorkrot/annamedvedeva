import type { Lang } from './translations';

/**
 * Returns desktop background path for a section based on language.
 * RU (and EN until EN images exist) use the default images.
 * UA uses /images/backgrounds/ua/
 */
export function bgDesktop(section: number, lang: Lang): string {
  if (lang === 'ua') return `/images/backgrounds/ua/bg-s${section}-full.jpg`;
  return `/images/backgrounds/bg-s${section}-full.jpg`;
}

/**
 * Returns mobile background path for a section based on language.
 */
export function bgMobile(section: number, lang: Lang): string {
  if (lang === 'ua') return `/images/mobile/ua/s${section}.jpg`;
  return `/images/mobile/s${section}.jpg`;
}
