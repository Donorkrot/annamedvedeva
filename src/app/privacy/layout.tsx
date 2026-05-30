import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика обработки персональных данных на сайте Reality DNA.',
  alternates: { canonical: absUrl('/privacy') },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
