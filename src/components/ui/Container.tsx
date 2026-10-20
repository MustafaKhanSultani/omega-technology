import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function Button({ children, href, className = '', variant = 'primary' }: { children: ReactNode; href?: string; className?: string; variant?: 'primary' | 'secondary' }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200',
    variant === 'primary'
      ? 'bg-brand-cyan text-navy-950 shadow-glow-cyan hover:scale-[1.02]'
      : 'border border-white/15 bg-white/5 text-silver-100 hover:border-brand-cyan/60 hover:bg-white/10',
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}

export function SectionHeading({ eyebrow, title, align = 'left' }: { eyebrow?: string; title: string; align?: 'left' | 'center' }) {
  return (
    <div className={cn('mb-8', align === 'center' && 'text-center')}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-cyan">{eyebrow}</p>}
      <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
