export default function Chip({ children, active = false, onClick, className = '' }) {
  const interactive = typeof onClick === 'function';
  const base =
    'inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs backdrop-blur transition-all duration-200';
  const palette = active
    ? 'border-transparent bg-gradient-to-r from-brand-600 to-sky-500 text-white shadow-soft'
    : 'border-white/60 bg-white/55 text-slate-700 hover:-translate-y-0.5 hover:border-brand-400/60 hover:text-brand-700 dark:border-white/[0.08] dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-brand-400/40 dark:hover:text-brand-300';
  const cursor = interactive ? 'cursor-pointer' : 'cursor-default';

  if (interactive) {
    return (
      <button type="button" onClick={onClick} className={`${base} ${palette} ${cursor} ${className}`}>
        {children}
      </button>
    );
  }
  return <span className={`${base} ${palette} ${cursor} ${className}`}>{children}</span>;
}
