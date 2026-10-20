import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { defaultLanguage, languageDirection, supportedLanguages, type Language } from '../config/site';
import { translations } from './translations';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations[typeof defaultLanguage];
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function readInitialLanguage(): Language {
  const saved = localStorage.getItem('omega-language');
  if (saved && supportedLanguages.includes(saved as Language)) {
    return saved as Language;
  }

  const browser = navigator.language.toLowerCase();
  if (browser.includes('fa') || browser.includes('prs') || browser.includes('da')) {
    return 'fa';
  }

  return defaultLanguage;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = languageDirection[language];
    document.title = `${translations[language].siteName} | ${translations[language].tagline}`;
    localStorage.setItem('omega-language', language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    t: translations[language],
    dir: languageDirection[language],
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
