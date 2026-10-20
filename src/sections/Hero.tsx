import { useLanguage } from '../../i18n/LanguageContext';
import { Button, Container, Reveal, SectionHeading } from '../ui';
import { HeroScene } from '../three/HeroScene';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/10 pb-20 pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(31,162,255,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(25,211,243,0.18),transparent_28%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-brand-cyan">
                {t.heroBadge}
              </span>
              <div className="space-y-5">
                <h1 className="max-w-xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                  {t.siteName}
                </h1>
                <p className="max-w-lg text-lg text-silver-300">{t.tagline}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="#contact">{t.ctaPrimary}</Button>
                <Button href="#services" variant="secondary">{t.ctaSecondary}</Button>
              </div>
              <div className="flex gap-8 text-sm text-silver-300">
                <div>
                  <div className="font-display text-xl text-white">6+</div>
                  <div>Service areas</div>
                </div>
                <div>
                  <div className="font-display text-xl text-white">24/7</div>
                  <div>Project support</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex items-center justify-center">
            <HeroScene />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
