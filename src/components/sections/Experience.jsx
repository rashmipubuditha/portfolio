import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Section from '../layout/Section.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import Chip from '../ui/Chip.jsx';
import { experience } from '../../data/experience.js';

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title="Where I've worked"
      lead="Three roles, one thread: ship ML inside real products."
    >
      <ol className="relative ml-3 space-y-8 border-l border-slate-200/70 pl-10 dark:border-white/10">
        {experience.map((job, idx) => (
          <FadeIn key={job.company + job.period} delay={idx * 0.08}>
            <li className="relative">
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
                className="absolute -left-[3rem] top-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-soft ring-4 ring-white/60 dark:ring-slate-950/60"
              >
                <Briefcase className="h-3.5 w-3.5" />
              </motion.span>

              <article className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/65 p-6 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-glow dark:border-white/[0.06] dark:bg-slate-900/50 dark:shadow-glass-dark dark:hover:border-brand-400/40">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10"
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                    <p className="text-sm text-brand-700 dark:text-brand-300">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {job.period} · {job.location}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="relative pl-5">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </article>
            </li>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}
