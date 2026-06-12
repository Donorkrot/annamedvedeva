import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

/**
 * /robots.txt — генерится Next.js App Router из этой функции.
 * Доступ: https://anna-medvedeva.space/robots.txt
 *
 * Принципы:
 *  - публичные страницы открыты для индексации;
 *  - закрыты только технические/служебные роуты и страницы-конверсии;
 *  - CSS/JS/изображения НЕ блокируются (/_next/static, /_next/image отдаются
 *    напрямую и нужны для рендера — мы закрываем только /api/ и служебные пути,
 *    а не статику);
 *  - параметры аналитики (utm_*, gclid, fbclid) НЕ блокируются здесь, чтобы
 *    Googlebot мог зайти на параметрический URL и прочитать canonical.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',          // серверные эндпоинты (lead, wayforpay)
          '/thank-you',     // страница-конверсия после оплаты (noindex)
          // Служебные роуты на будущее — если появятся, уже закрыты.
          '/admin',
          '/login',
          '/register',
          '/account',
        ],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
