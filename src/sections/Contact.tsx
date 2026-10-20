import { Button, Container, Reveal, SectionHeading } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-gradient-to-b from-white/5 to-transparent py-20">
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-brand-cyan/20 bg-navy-900/80 p-8 shadow-card sm:p-10">
            <SectionHeading eyebrow="Contact" title={t.contactTitle} />
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-5">
                <p className="max-w-xl text-lg text-silver-300">{t.contactBody}</p>
                <div className="flex flex-wrap gap-4">
                  <Button href="mailto:hello@omegatech.af">{t.ctaPrimary}</Button>
                  <Button href="tel:+93700000000" variant="secondary">Call us</Button>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-silver-300">
                <p><span className="font-semibold text-white">{t.emailLabel}: </span>hello@omegatech.af</p>
                <p><span className="font-semibold text-white">{t.phoneLabel}: </span>+93 (0) 700 00 000</p>
                <p><span className="font-semibold text-white">{t.addressLabel}: </span>Kabul, Afghanistan</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
