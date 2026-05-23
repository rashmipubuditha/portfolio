const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-sky-500 text-white ring-1 ring-inset ring-white/20 shadow-soft hover:brightness-110 dark:from-brand-500 dark:to-sky-400 dark:text-slate-950',
  ghost:
    'border border-white/60 bg-white/55 text-slate-900 backdrop-blur hover:border-brand-400/60 hover:text-brand-700 dark:border-white/[0.08] dark:bg-slate-900/45 dark:text-slate-100 dark:hover:border-brand-400/40 dark:hover:text-brand-300',
  subtle:
    'text-slate-700 hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-300',
};

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
