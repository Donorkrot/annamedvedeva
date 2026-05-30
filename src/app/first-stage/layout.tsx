import type { Metadata } from 'next';
import { absUrl, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Первая ступень — Reality DNA',
  description:
    'Первая ступень — вход в метод. Точка, где вы впервые начинаете реально работать с полем.',
  alternates: {
    canonical: absUrl('/first-stage'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/first-stage'),
    title: 'Первая ступень — Reality DNA',
    description:
      'Вход в метод. Точка, где вы впервые начинаете реально работать с полем.',
    images: [{ url: absUrl(SITE.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Первая ступень — Reality DNA',
    description: 'Вход в метод. Точка, где вы впервые начинаете реально работать с полем.',
    images: [absUrl(SITE.ogImage)],
  },
};

export default function FirstStageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
