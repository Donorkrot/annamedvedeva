import type { Metadata } from 'next';
import { canonicalFor } from '@/lib/seo';
import type { Lang } from '@/lib/translations';

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  return {
    title: 'Спасибо',
    description: 'Оплата прошла успешно. Спасибо за доверие.',
    // canonical per-locale; hreflang НЕ добавляем — страница noindex.
    alternates: {
      canonical: canonicalFor('/thank-you', params.lang),
    },
    // Страница-конверсия — не индексируем (бесполезна в поиске + защищает
    // от прямого захода без транзакции, что плохо для аналитики).
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
