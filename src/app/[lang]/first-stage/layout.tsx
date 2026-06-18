import type { Metadata } from 'next';
import { absUrl, SITE, altLanguages, canonicalFor } from '@/lib/seo';
import { OG_LOCALE } from '@/lib/i18n';
import type { Lang } from '@/lib/translations';

// OG-превью — герой-экран страницы «Первая ступень» (1200×630).
const OG_IMAGE = '/og/og-first-stage.jpg';
const PATH = '/first-stage';

const TITLE = 'Первая ступень Академии Reality DNA — вход в метод';
const DESCRIPTION =
  'Программа первой ступени Reality DNA: содержание обучения, формат занятий, практика, требования, сроки и запись на ближайший поток.';

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const { lang } = params;
  const canonical = canonicalFor(PATH, lang);
  return {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: {
      canonical,
      languages: altLanguages(PATH),
    },
    openGraph: {
      type: 'website',
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

export default function FirstStageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
