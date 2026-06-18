import type { MetadataRoute } from 'next';
import { absUrl } from '@/lib/seo';
import { LOCALES, HREFLANG, DEFAULT_LOCALE, localizePath } from '@/lib/i18n';

/**
 * /sitemap.xml — Next.js App Router генерит автоматически.
 * Доступ: https://anna-medvedeva.space/sitemap.xml
 *
 * Включаем ТОЛЬКО индексируемые канонические страницы (HTTP 200, без noindex,
 * без редиректов, без дублей, с полезным контентом) — для ВСЕХ трёх локалей
 * (ru без префикса, ua → /ua, en → /en). У каждой записи проставлены
 * hreflang-альтернаты (xhtml:link), чтобы Google видел языковые версии.
 *
 * Исключены намеренно:
 *  - /thank-you — страница-конверсия, noindex (см. thank-you/layout.tsx);
 *  - /api/*, /_next/* — технические.
 *
 * lastModified — РЕАЛЬНЫЕ даты последнего изменения контента, заданы статически.
 * Они НЕ берутся из `new Date()`, поэтому не «протухают» при каждом деплое.
 * При значимом обновлении контента страницы — обновить дату вручную здесь.
 */
const LASTMOD: Record<string, string> = {
  '/': '2026-06-08',
  '/about': '2026-06-03',
  '/academy': '2026-06-03',
  '/consultation': '2026-06-02',
  '/first-stage': '2026-06-03',
  '/privacy': '2026-05-30',
  '/offer': '2026-05-30',
};

/** hreflang-карта (включая x-default → RU) для записи sitemap. */
function languagesFor(path: string): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const l of LOCALES) langs[HREFLANG[l]] = absUrl(localizePath(path, l));
  langs['x-default'] = absUrl(localizePath(path, DEFAULT_LOCALE));
  return langs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    priority: number;
  }> = [
    { path: '/', changeFrequency: 'monthly', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/academy', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/consultation', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/first-stage', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/offer', changeFrequency: 'yearly', priority: 0.2 },
  ];

  // По одной записи на каждую (локаль × страница), с общими hreflang-альтернатами.
  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = languagesFor(path);
    return LOCALES.map((lang) => ({
      url: absUrl(localizePath(path, lang)),
      lastModified: LASTMOD[path],
      changeFrequency,
      // префиксные локали чуть ниже по приоритету, чтобы RU оставался основным.
      priority: lang === DEFAULT_LOCALE ? priority : Math.max(0.1, priority - 0.1),
      alternates: { languages },
    }));
  });
}
