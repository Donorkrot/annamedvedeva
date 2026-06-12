import type { Metadata } from 'next';
import { absUrl, SITE } from '@/lib/seo';

/**
 * Server-обёртка для /about (страница сама — client component).
 * Перебивает default-title + canonical из root layout.
 */
const TITLE = 'Анна Медведева — автор метода «ДНК Реальности»';
const DESCRIPTION =
  'Биография Анны Медведевой, профессиональный опыт, образование, подход к работе и история создания метода Reality DNA.';
const OG_IMAGE = '/og/og-about.jpg';

export const metadata: Metadata = {
  // absolute — без бренд-суффикса из root-шаблона (точный title по ТЗ).
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: absUrl('/about'),
  },
  openGraph: {
    type: 'profile',
    url: absUrl('/about'),
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

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
