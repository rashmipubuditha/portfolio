export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`group relative overflow-hidden rounded-2xl border border-white/60 bg-white/65 p-6 shadow-glass backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 hover:-translate-y-1 hover:border-brand-300/70 hover:shadow-glow dark:border-white/[0.06] dark:bg-slate-900/50 dark:shadow-glass-dark dark:hover:border-brand-400/40 ${className}`}
      {...rest}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10"
      />
      {children}
    </Tag>
  );
}
