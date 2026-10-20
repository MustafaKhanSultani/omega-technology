import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { brandConfig } from '../../config/brand';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cyan/50 bg-brand-cyan/10 font-display text-lg text-brand-cyan">
            Ω
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-white">{brandConfig.logoText}</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-silver-300">Technology</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-silver-300 md:flex">
          <a href="#about" className="hover:text-white">{t.nav.about}</a>
          <a href="#services" className="hover:text-white">{t.nav.services}</a>
          <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
          <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}
