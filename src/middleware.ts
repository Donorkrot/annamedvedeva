import { NextRequest, NextResponse } from 'next/server';
import { PREFIXED_LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';

/**
 * Локаль-маршрутизация (схема «скрытая локаль по умолчанию»).
 *
 *  - /ua/*, /en/*  → проходят как есть (app/[lang]/* с lang=ua|en);
 *  - всё остальное → незаметно переписывается на /ru/* (URL в браузере
 *    НЕ меняется), чтобы существующие RU-URL оставались без префикса.
 *
 * matcher исключает api, _next, статику и файлы с расширением (sitemap.xml,
 * robots.txt, og/*.jpg, images/*), поэтому переписываются только страницы.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const seg = pathname.split('/')[1] ?? '';

  // Префиксные локали — отдаём как есть.
  if ((PREFIXED_LOCALES as readonly string[]).includes(seg)) {
    return NextResponse.next();
  }

  // Локаль по умолчанию — внутренний rewrite на /ru<path>, URL без префикса.
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // всё, кроме: api, _next/static, _next/image, файлов с точкой (расширением)
    '/((?!api|_next/static|_next/image|.*\\..*).*)',
  ],
};
