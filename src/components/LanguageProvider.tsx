'use client';
import { createContext, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import t, { Lang, TranslationKey } from '@/lib/translations';
import { localizePath, stripLocale } from '@/lib/i18n';

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LanguageContext = createContext<LangCtx>({ lang: 'ru', setLang: () => {} });

/**
 * Локаль теперь приходит из URL-маршрута (param [lang]), а не из localStorage —
 * это даёт серверный рендер контента на нужном языке (SEO). Переключение языка
 * = навигация на локализованный URL текущей страницы.
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // CSS-хуки на язык (некоторые мобильные оверрайды зависят от длины строк,
  // различной по языкам). Дублируем серверный data-lang на клиенте.
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    if (l === lang) return;
    const { path } = stripLocale(pathname); // голый путь без префикса локали
    router.push(localizePath(path, l));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const { lang, setLang } = useContext(LanguageContext);
  const tr = (key: TranslationKey): string => (t[lang][key] ?? t['ru'][key]) as string;
  return { lang, setLang, tr };
}
