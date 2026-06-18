import { SITE, canonicalFor } from '@/lib/seo';
import { HREFLANG } from '@/lib/i18n';
import type { Lang } from '@/lib/translations';

/**
 * JSON-LD структурированные данные.
 *
 * Стабильные @id, связывающие сущности между страницами:
 *   WebSite       → {SITE.url}/#website
 *   Organization  → {SITE.url}/#organization
 *   Person (Анна) → {SITE.url}/#person
 *
 * Все @id — абсолютные и неизменные, поэтому Google склеивает сущности
 * с разных страниц в один граф.
 */

const ORG_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // suppressHydrationWarning безопасен — Google читает HTML, гидратация
      // React не зависит от content match для script-тега.
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Главная: WebSite + Organization + Person, связанные через @id.
 */
export function HomeJsonLd({ lang = 'ru' }: { lang?: Lang } = {}) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: canonicalFor('/', lang),
        name: SITE.brand,
        inLanguage: HREFLANG[lang],
        description: SITE.description,
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: SITE.brand,
        url: SITE.url,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE.url}/images/icons/logo-1.png`,
        },
        founder: { '@id': PERSON_ID },
        sameAs: [SITE.socials.telegram, SITE.socials.instagram],
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.authorName,
        alternateName: 'Anna Medvedeva',
        url: canonicalFor('/about', lang),
        jobTitle: 'Квантовый психолог, автор метода ДНК Реальности',
        worksFor: { '@id': ORG_ID },
        image: `${SITE.url}/images/content/s7-photo-desktop.jpg`,
        sameAs: [SITE.socials.telegram, SITE.socials.instagram],
      },
    ],
  };
  return <JsonLdScript data={data} />;
}

/**
 * BreadcrumbList — хлебные крошки для внутренних страниц.
 * items: [{ name, path }] от корня к текущей странице.
 * Текущая (последняя) страница — без href в визуальных крошках, но в JSON-LD
 * item у неё указывает на себя (рекомендация Google).
 */
export function BreadcrumbJsonLd({
  items,
  lang = 'ru',
}: {
  items: { name: string; path: string }[];
  lang?: Lang;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonicalFor(it.path, lang),
    })),
  };
  return <JsonLdScript data={data} />;
}

/**
 * Service — для страницы консультации. Без цен/гарантий (их нет в схеме,
 * чтобы не публиковать непроверяемые данные); цена видна на самой странице.
 */
export function ConsultationServiceJsonLd({ lang = 'ru' }: { lang?: Lang } = {}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalFor('/consultation', lang)}#service`,
    name: 'Индивидуальная консультация с Анной Медведевой',
    serviceType: 'Консультация по управлению состоянием',
    url: canonicalFor('/consultation', lang),
    description:
      'Индивидуальная консультация Анны Медведевой по управлению состоянием: глубинная работа с состоянием, формат и запись на сессию.',
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    inLanguage: HREFLANG[lang],
  };
  return <JsonLdScript data={data} />;
}

/**
 * Course — для Академии / ступеней. Только реальные поля (name, description,
 * provider, url). Без выдуманных дат, цен, рейтингов и дипломов.
 */
export function CourseJsonLd({
  name,
  description,
  path,
  lang = 'ru',
}: {
  name: string;
  description: string;
  path: string;
  lang?: Lang;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${canonicalFor(path, lang)}#course`,
    name,
    description,
    url: canonicalFor(path, lang),
    inLanguage: HREFLANG[lang],
    provider: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.brand,
      url: SITE.url,
    },
  };
  return <JsonLdScript data={data} />;
}
