export type Language = 'en' | 'fa' | 'prs';

export const supportedLanguages: Language[] = ['en', 'fa', 'prs'];

export const defaultLanguage: Language = 'en';

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  fa: 'FA',
  prs: 'دری',
};

export const languageDirection: Record<Language, 'ltr' | 'rtl'> = {
  en: 'ltr',
  fa: 'rtl',
  prs: 'rtl',
};
