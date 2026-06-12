/**
 * SEO-конфиг: общие константы и helpers для metadata всех страниц.
 * Используется в layout.tsx и per-route layout-обёртках.
 */

export const SITE = {
  /**
   * Полный URL сайта (без trailing slash) — для canonical и OG.
   * Канон — БЕЗ www. www.anna-medvedeva.space делает 301 → этот адрес
   * (см. next.config.mjs redirects + Vercel Domains primary).
   */
  url: 'https://anna-medvedeva.space',
  /** Название бренда. */
  brand: 'Reality DNA',
  /** Имя автора (для Person schema + meta). */
  authorName: 'Анна Медведева',
  /** Базовый title главной (используется как title.default). */
  baseTitle: 'Академия управления состоянием Анны Медведевой | Reality DNA',
  /** Основной description главной (≤160 char для Google snippet). */
  description:
    'Reality DNA — академия Анны Медведевой. Обучение управлению состоянием, метод «ДНК Реальности», консультации и программы развития Reality Intelligence.',
  /** Ключевые слова (Google почти не использует, но Yandex/Bing — да). */
  keywords: [
    'Анна Медведева',
    'Reality DNA',
    'ДНК Реальности',
    'Reality Intelligence',
    'квантовый психолог',
    'трансформация',
    'управление состоянием',
    'мастер состояния',
    'консультация психолога',
    'женская трансформация',
  ],
  /** OG image (1200×630). */
  ogImage: '/og/og-image.jpg',
  /** Локаль для og:locale. */
  locale: 'ru_RU',
  /** Альтернативные локали (для og:locale:alternate). */
  alternateLocales: ['uk_UA', 'en_US'],
  /** Социальные профили (для Person schema sameAs). */
  socials: {
    telegram: 'https://t.me/medvedieva_anna',
    instagram: 'https://www.instagram.com/medvedieva.anna',
  },
} as const;

/**
 * Хелпер для построения canonical URL.
 * @example absUrl('/about') → 'https://www.anna-medvedeva.space/about'
 */
export function absUrl(path: string): string {
  if (path === '/' || path === '') return SITE.url;
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
