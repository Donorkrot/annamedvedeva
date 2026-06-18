import type { Metadata } from 'next';
import { altLanguages, canonicalFor } from '@/lib/seo';
import type { Lang } from '@/lib/translations';

const PATH = '/offer';

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  return {
    title: 'Публичная оферта',
    description: 'Публичная оферта на оказание услуг Reality DNA.',
    alternates: {
      canonical: canonicalFor(PATH, params.lang),
      languages: altLanguages(PATH),
    },
    robots: { index: true, follow: true },
  };
}

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
