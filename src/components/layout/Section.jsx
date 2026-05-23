import FadeIn from '../ui/FadeIn.jsx';

export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  const parts = (eyebrow || '').split(' — ');
  const num = parts.length > 1 ? parts[0] : null;
  const eyebrowLabel = parts.length > 1 ? parts.slice(1).join(' — ') : parts[0] || '';

  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-page">
        {(eyebrow || title || lead) && (
          <FadeIn className="mb-12 max-w-3xl">
            {eyebrow && (
              <div className="flex items-center gap-3">
                {num && (
                  <span className="inline-flex h-7 items-center rounded-full border border-white/60 bg-white/60 px-2.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand-700 shadow-soft backdrop-blur dark:border-white/[0.08] dark:bg-slate-900/50 dark:text-brand-300">
                    {num}
                  </span>
                )}
                {eyebrowLabel && <span className="eyebrow">{eyebrowLabel}</span>}
              </div>
            )}
            {title && <h2 className="section-title">{title}</h2>}
            {lead && <p className="section-lead">{lead}</p>}
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}
