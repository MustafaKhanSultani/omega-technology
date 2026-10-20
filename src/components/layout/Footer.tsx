import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-navy-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-silver-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{t.footerText}</p>
        <div className="flex items-center gap-4">
          <a href="mailto:hello@omegatech.af" className="hover:text-white">hello@omegatech.af</a>
          <a href="https://instagram.com" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
