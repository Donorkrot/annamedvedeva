import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

/**
 * /robots.txt — генерится Next.js App Router из этой функции.
 * Доступ: https://www.anna-medvedeva.space/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Закрываем технические роуты от индексации
        disallow: [
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
