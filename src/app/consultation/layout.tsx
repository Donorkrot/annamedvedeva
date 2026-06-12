import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

// OG-превью — герой-экран страницы консультаций (1200×630).
const OG_IMAGE = '/og/og-consultation.jpg';

const TITLE = 'Консультация Анны Медведевой по управлению состоянием';
const DESCRIPTION =
  'Индивидуальная консультация Анны Медведевой: формат работы, продолжительность, стоимость, подготовка и запись на сессию.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: absUrl('/consultation'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/consultation'),
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

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
