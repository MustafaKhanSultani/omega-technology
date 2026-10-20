import { useLanguage } from '../../i18n/LanguageContext';
import { cn } from '../../lib/cn';
import { supportedLanguages, languageLabels } from '../../config/site';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
      {supportedLanguages.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          className={cn(
            'rounded-full px-3 py-1.5 text-xs font-medium transition',
            language === option ? 'bg-brand-cyan text-navy-950' : 'text-silver-300 hover:text-white'
          )}
        >
          {languageLabels[option]}
        </button>
      ))}
    </div>
  );
}
