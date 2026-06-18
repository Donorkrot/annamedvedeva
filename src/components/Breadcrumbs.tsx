import { BreadcrumbJsonLd } from '@/components/JsonLd';
import type { Lang } from '@/lib/translations';

export type Crumb = { name: string; path: string };

/**
 * Хлебные крошки — ТОЛЬКО структурированные данные (BreadcrumbList JSON-LD),
 * без видимого UI. Google показывает крошки в выдаче через эту разметку, а на
 * full-bleed hero визуальный элемент не выводится (решение по дизайну).
 *
 * Если понадобится вернуть видимые крошки — рендерить <nav> по `items`
 * рядом с этим вызовом (разметка/CSS есть в истории git).
 */
export default function Breadcrumbs({ items, lang }: { items: Crumb[]; lang?: Lang }) {
  return <BreadcrumbJsonLd items={items} lang={lang} />;
}
