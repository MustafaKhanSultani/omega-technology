import { SectionHeading, Reveal, Icon, Container, Button } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="About" title={t.aboutTitle} />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-lg leading-8 text-silver-300">
              {t.aboutBody.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Strategy', 'Product and growth vision'],
                ['Design', 'Interface systems that feel intuitive'],
                ['Build', 'Delivery with clear engineering standards'],
                ['Support', 'Ongoing guidance and iteration'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-card">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon>{title[0]}</Icon>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-7 text-silver-300">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
