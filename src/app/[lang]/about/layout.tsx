import type { Metadata } from 'next';
import { absUrl, SITE, altLanguages, canonicalFor } from '@/lib/seo';
import { OG_LOCALE } from '@/lib/i18n';
import type { Lang } from '@/lib/translations';

/**
 * Server-обёртка для /about (страница сама — client component).
 * Перебивает default-title из root layout; canonical/hreflang — per-locale.
 */
const PATH = '/about';
const TITLE = 'Анна Медведева — автор метода «ДНК Реальности»';
const DESCRIPTION =
  'Биография Анны Медведевой, профессиональный опыт, образование, подход к работе и история создания метода Reality DNA.';
const OG_IMAGE = '/og/og-about.jpg';

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const canonical = canonicalFor(PATH, lang);
  return {
    // absolute — без бренд-суффикса из root-шаблона (точный title по ТЗ).
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: {
      canonical,
      languages: altLanguages(PATH),
    },
    openGraph: {
      type: 'profile',
      locale: OG_LOCALE[lang],
      siteName: SITE.brand,
      url: canonical,
      title: TITLE,
      description: DESCRIPTION,
      images: [{ url: absUrl(OG_IMAGE), width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: TITLE,
      description: DESCRIPTION,
      images: [absUrl(OG_IMAGE)],
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
