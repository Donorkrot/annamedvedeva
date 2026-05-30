import type { Metadata } from 'next';
import { absUrl, SITE } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Консультации с Анной Медведевой',
  description:
    'Индивидуальная, срочная и дистанционная консультация квантового психолога Анны Медведевой. Работа с состоянием на уровне ядра.',
  alternates: {
    canonical: absUrl('/consultation'),
  },
  openGraph: {
    type: 'website',
    url: absUrl('/consultation'),
    title: 'Консультации — Reality DNA',
    description:
      'Запись на консультацию: индивидуальная / срочная / дистанционная. Глубинная работа с состоянием.',
    images: [{ url: absUrl(SITE.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Консультации — Reality DNA',
    description: 'Запись на консультацию у Анны Медведевой.',
    images: [absUrl(SITE.ogImage)],
  },
};

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
