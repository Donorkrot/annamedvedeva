/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [60, 65, 70, 75, 85, 90, 95, 100],
  },

  // Не раскрываем X-Powered-By: Next.js
  poweredByHeader: false,

  // trailingSlash по умолчанию false → /academy/ автоматически 308-редиректится
  // на /academy (единый формат URL без завершающего слеша). Не меняем.

  /**
   * Доменные редиректы (единое зеркало сайта).
   *
   * Канонический хост — anna-medvedeva.space (без www).
   *  - www.anna-medvedeva.space → anna-medvedeva.space (host-based, 308).
   *  - /index.html → / .
   *
   * Примечание: http → https и www → non-www НА УРОВНЕ ЭДЖА надёжнее всего
   * настраивать в Vercel → Project → Settings → Domains (сделать
   * anna-medvedeva.space primary, www — Redirect to primary). Этот redirects()
   * работает как code-level бэкстоп и покрывает кастомные домены.
   * `permanent: true` отдаёт 308 (современный постоянный эквивалент 301;
   * Google трактует их одинаково и сохраняет ссылочный вес).
   */
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.anna-medvedeva.space' }],
        destination: 'https://anna-medvedeva.space/:path*',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },

  /**
   * Закрываем от индексации технические домены (тестовый
   * anna-medvedeva-test.vercel.app и любые preview-*.vercel.app):
   * отдаём X-Robots-Tag: noindex для ВСЕХ хостов *.vercel.app.
   *
   * Именно HTTP-заголовок, а не Disallow в robots.txt — чтобы поисковик
   * мог зайти, увидеть noindex и не индексировать. (Disallow только
   * запретил бы обход, но URL мог бы попасть в индекс без чтения noindex.)
   *
   * Прод-домен anna-medvedeva.space под regex не подпадает и остаётся
   * полностью индексируемым.
   */
  async headers() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '.*\\.vercel\\.app' }],
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

export default nextConfig;
