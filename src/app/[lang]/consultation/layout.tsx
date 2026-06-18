import type { Metadata } from 'next';
import { absUrl, SITE, altLanguages, canonicalFor } from '@/lib/seo';
import { OG_LOCALE } from '@/lib/i18n';
import type { Lang } from '@/lib/translations';

// OG-превью — герой-экран страницы консультаций (1200×630).
const OG_IMAGE = '/og/og-consultation.jpg';
const PATH = '/consultation';

const TITLE = 'Консультация Анны Медведевой по управлению состоянием';
const DESCRIPTION =
  'Индивидуальная консультация Анны Медведевой: формат работы, продолжительность, стоимость, подготовка и запись на сессию.';

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

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
