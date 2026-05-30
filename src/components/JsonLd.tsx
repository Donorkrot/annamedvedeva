import { SITE } from '@/lib/seo';

/**
 * JSON-LD структурированные данные для главной страницы.
 * Google использует их для:
 *  - WebSite — sitelinks search box, breadcrumbs
 *  - Organization — knowledge panel
 *  - Person — knowledge panel автора, "About this result"
 *
 * Эта схема рендерится один раз на главной (см. app/page.tsx).
 * Вспомогательные страницы могут добавлять свои JSON-LD при нужде.
 */
export function HomeJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.brand,
        inLanguage: 'ru',
        description: SITE.description,
        publisher: { '@id': `${SITE.url}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: SITE.brand,
        url: SITE.url,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.url}/images/icons/logo-1.png`,
        },
        sameAs: [SITE.socials.telegram, SITE.socials.instagram],
      },
      {
        '@type': 'Person',
        '@id': `${SITE.url}/#person`,
        name: SITE.authorName,
        alternateName: 'Anna Medvedeva',
        url: SITE.url,
        jobTitle: 'Квантовый психолог, автор метода ДНК Реальности',
        worksFor: { '@id': `${SITE.url}/#organization` },
        image: `${SITE.url}/images/content/s7-photo-desktop.jpg`,
        sameAs: [SITE.socials.telegram, SITE.socials.instagram],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // suppressHydrationWarning безопасен — мы не зависим от content match.
      // Google читает HTML, гидратация React не трогает script-тег.
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
