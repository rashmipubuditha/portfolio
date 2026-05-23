import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from '../layout/Section.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import Card from '../ui/Card.jsx';
import Chip from '../ui/Chip.jsx';
import { projectCategories, projects } from '../../data/projects.js';

function LinkIcon({ type }) {
  if (type === 'code') return <Github className="h-4 w-4" />;
  return <ExternalLink className="h-4 w-4" />;
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title="Selected work"
      lead="A mix of production builds, research, and personal experiments."
    >
      <FadeIn className="mb-8 flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`relative inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-200 ${
                isActive
                  ? 'border-transparent text-white'
                  : 'border-white/60 bg-white/55 text-slate-700 backdrop-blur hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-brand-700 dark:border-white/[0.08] dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-400/40 dark:hover:text-brand-300'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="projectFilter"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 shadow-soft"
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          );
        })}
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, idx) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.4,
                delay: Math.min(idx * 0.04, 0.2),
                ease: [0.21, 0.61, 0.35, 1],
              }}
            >
              <Card className="flex h-full flex-col">
                <p className="font-mono text-xs uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {p.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-3 border-t border-white/40 pt-4 dark:border-white/[0.06]">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 transition-colors hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300"
                      >
                        <LinkIcon type={l.type} />
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
