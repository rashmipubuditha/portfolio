import Section from '../layout/Section.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import { about } from '../../data/about.js';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title="A bit about me"
      lead="Engineer first, model-builder second."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
        <FadeIn className="space-y-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </FadeIn>

        <FadeIn delay={0.1}>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/55 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-soft dark:border-white/[0.06] dark:bg-slate-900/40 dark:hover:border-brand-400/40"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10"
                />
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </Section>
  );
}
