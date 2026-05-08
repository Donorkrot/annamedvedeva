'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import t, { Lang, TranslationKey } from '@/lib/translations';

type LangCtx = { lang: Lang; setLang: (l: Lang) => void };
const LanguageContext = createContext<LangCtx>({ lang: 'ru', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ru');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved && ['ru', 'ua', 'en'].includes(saved)) setLangState(saved);
  }, []);

  // Sync lang to <html> data-lang so CSS can target language-specific
  // overrides (e.g. mobile s8 trait spacing depends on body line count
  // which differs per language).
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
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
