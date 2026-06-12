import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

// OG-превью — герой-экран страницы Академии (1200×630).
const OG_IMAGE = '/og/og-academy.jpg';

const TITLE = 'Академия Reality DNA — обучение методу управления состоянием';
const DESCRIPTION =
  'Программа Академии Reality DNA: три ступени обучения, практика, работа с состоянием, сертификация и подготовка специалистов.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: absUrl('/academy'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/academy'),
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

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
