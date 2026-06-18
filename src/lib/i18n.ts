/**
 * i18n-маршрутизация: локали, helpers для путей и SEO-кодов.
 *
 * Схема URL — «скрытая локаль по умолчанию»:
 *   ru → без префикса:  /, /about, /academy …   (existing URLs, не меняются)
 *   ua → префикс /ua:    /ua, /ua/about …
 *   en → префикс /en:    /en, /en/about …
 *
 * Внутри приложения все маршруты лежат под app/[lang]/*. middleware.ts
 * незаметно переписывает не-префиксные пути на /ru/* (URL в браузере
 * остаётся без префикса). Поэтому [lang] param всегда валидная локаль.
 */
import type { Lang } from '@/lib/translations';

/** Все поддерживаемые локали. */
export const LOCALES: readonly Lang[] = ['ru', 'ua', 'en'] as const;

/** Локаль по умолчанию — рендерится на корне без префикса. */
export const DEFAULT_LOCALE: Lang = 'ru';

/** Локали, которые показываются в URL с префиксом. */
export const PREFIXED_LOCALES: readonly Lang[] = ['ua', 'en'] as const;

/** Type guard: строка — это известная локаль. */
export function isLocale(s: string): s is Lang {
  return (LOCALES as readonly string[]).includes(s);
}

/** Код для атрибута <html lang> (BCP-47: украинский = uk, не ua). */
export const HTML_LANG: Record<Lang, string> = { ru: 'ru', ua: 'uk', en: 'en' };

/** Код для <link rel="alternate" hreflang>. */
export const HREFLANG: Record<Lang, string> = { ru: 'ru', ua: 'uk', en: 'en' };

/** Код для og:locale. */
export const OG_LOCALE: Record<Lang, string> = {
  ru: 'ru_RU',
  ua: 'uk_UA',
  en: 'en_US',
};

/**
 * Превращает «голый» путь (как на RU, например `/about`) в путь для
 * заданной локали. Для RU — no-op (важно: RU-URL остаются прежними).
 * @example localizePath('/about', 'ua') → '/ua/about'
 * @example localizePath('/', 'en')      → '/en'
 * @example localizePath('/about', 'ru') → '/about'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = !path || path === '' ? '/' : path;
  if (lang === DEFAULT_LOCALE) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/**
 * Разбирает реальный pathname (из браузера) на локаль и «голый» путь.
 * @example stripLocale('/ua/about') → { lang: 'ua', path: '/about' }
 * @example stripLocale('/about')    → { lang: 'ru', path: '/about' }
 */
export function stripLocale(pathname: string): { lang: Lang; path: string } {
  const seg = pathname.split('/')[1] ?? '';
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) {
    const rest = pathname.slice(seg.length + 1) || '/';
    return { lang: seg as Lang, path: rest };
  }
  return { lang: DEFAULT_LOCALE, path: pathname || '/' };
}
