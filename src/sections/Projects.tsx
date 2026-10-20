import { Container, Reveal, SectionHeading } from '../components/ui';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Projects" title={t.projectsTitle} />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.projects.map((project) => (
            <Reveal key={project.title}>
              <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-card">
                <div className="mb-5 h-36 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(31,162,255,0.28),transparent_35%),linear-gradient(135deg,_rgba(13,45,95,0.95),rgba(5,17,38,0.95))]" />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-brand-cyan">
                    {project.status}
                  </span>
                </div>
                <p className="text-silver-300">{project.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
