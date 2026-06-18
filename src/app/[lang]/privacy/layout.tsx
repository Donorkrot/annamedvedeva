import type { Metadata } from 'next';
import { altLanguages, canonicalFor } from '@/lib/seo';
import type { Lang } from '@/lib/translations';

const PATH = '/privacy';

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  return {
    title: 'Политика конфиденциальности',
    description: 'Политика обработки персональных данных на сайте Reality DNA.',
    alternates: {
      canonical: canonicalFor(PATH, params.lang),
      languages: altLanguages(PATH),
    },
    robots: { index: true, follow: true },
  };
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
