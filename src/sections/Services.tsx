import { Button, Container, Reveal, SectionHeading } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white/5 py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Services" title={t.servicesTitle} align="center" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.services.map((service, index) => (
            <Reveal key={service.title} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-navy-900 p-6 shadow-card">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-azure to-brand-cyan text-lg font-bold text-navy-950">
                  0{index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-base leading-7 text-silver-300">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
