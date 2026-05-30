import type { Metadata } from 'next';
import { absUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Публичная оферта',
  description: 'Публичная оферта на оказание услуг Reality DNA.',
  alternates: { canonical: absUrl('/offer') },
  robots: { index: true, follow: true },
};

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
