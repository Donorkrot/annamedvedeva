import type { MetadataRoute } from 'next';
import { SITE, absUrl } from '@/lib/seo';

/**
 * /sitemap.xml — Next.js App Router генерит автоматически.
 * Доступ: https://anna-medvedeva.space/sitemap.xml
 *
 * Включаем ТОЛЬКО индексируемые канонические страницы (HTTP 200, без noindex,
 * без редиректов, без дублей, с полезным контентом).
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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Array<{
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

  return entries.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? SITE.url : absUrl(path),
    lastModified: LASTMOD[path],
    changeFrequency,
    priority,
  }));
}
