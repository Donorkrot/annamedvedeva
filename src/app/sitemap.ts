import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

/**
 * /sitemap.xml — Next.js App Router генерит автоматически.
 * Доступ: https://www.anna-medvedeva.space/sitemap.xml
 *
 * Сюда добавляем все публичные страницы, исключаем технические.
 * priority — относительный (0..1), Google использует как hint.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/consultation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/academy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/thank-you`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${SITE.url}/offer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
  ];
}
