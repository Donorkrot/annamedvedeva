import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

// OG-превью — герой-экран страницы «Первая ступень» (1200×630).
const OG_IMAGE = '/og/og-first-stage.jpg';

const TITLE = 'Первая ступень Академии Reality DNA — вход в метод';
const DESCRIPTION =
  'Программа первой ступени Reality DNA: содержание обучения, формат занятий, практика, требования, сроки и запись на ближайший поток.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: absUrl('/first-stage'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/first-stage'),
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

export default function FirstStageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
