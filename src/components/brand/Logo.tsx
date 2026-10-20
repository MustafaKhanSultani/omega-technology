import type { ReactNode } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export function Logo({ className = '' }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-cyan/40 bg-brand-cyan/10 font-display text-2xl text-brand-cyan">
        Ω
      </div>
      <div className="leading-none">
        <p className="font-display text-base tracking-[0.28em] text-white">OMEGA</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-silver-300">{t.siteName}</p>
      </div>
    </div>
  );
}
