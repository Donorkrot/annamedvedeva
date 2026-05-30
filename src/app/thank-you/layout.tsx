import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Спасибо',
  description: 'Оплата прошла успешно. Спасибо за доверие.',
  alternates: {
    canonical: absUrl('/thank-you'),
  },
  // Страница-конверсия — не индексируем (бесполезна в поиске + защищает
  // от прямого захода без транзакции, что плохо для аналитики).
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
