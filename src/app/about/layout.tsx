import type { Metadata } from 'next';
import { absUrl, SITE } from '@/lib/seo';

/**
 * Server-обёртка для /about (страница сама — client component).
 * Перебивает default-title + canonical из root layout.
 */
export const metadata: Metadata = {
  title: 'О мастере — Анна Медведева',
  description:
    'Анна Медведева — квантовый психолог, мастер состояния, автор метода ДНК Реальности. 9 лет практики, 3000+ сессий, $100,000 вложено в обучение.',
  alternates: {
    canonical: absUrl('/about'),
  },
  openGraph: {
    type: 'profile',
    url: absUrl('/about'),
    title: `О мастере — ${SITE.authorName}`,
    description:
      'Квантовый психолог, автор метода ДНК Реальности. Путь от красиво-удобной к красиво-честной.',
    images: [{ url: absUrl(SITE.ogImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `О мастере — ${SITE.authorName}`,
    description:
      'Квантовый психолог, автор метода ДНК Реальности.',
    images: [absUrl(SITE.ogImage)],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
