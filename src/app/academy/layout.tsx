import type { Metadata } from 'next';
import { absUrl, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Академия мастеров',
  description:
    'Академия мастеров — обучение через личное видение и глубинные смыслы. Станьте мастером, который создаёт реальность, а не следует правилам.',
  alternates: {
    canonical: absUrl('/academy'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/academy'),
    title: 'Академия мастеров — Reality DNA',
    description:
      'Обучение мастеров через личное видение и глубинные смыслы.',
    images: [{ url: absUrl(SITE.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Академия мастеров — Reality DNA',
    description: 'Обучение мастеров через личное видение и глубинные смыслы.',
    images: [absUrl(SITE.ogImage)],
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
