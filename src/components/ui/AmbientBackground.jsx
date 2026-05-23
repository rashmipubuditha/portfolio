export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-brand-300/30 blur-[120px] animate-aurora dark:bg-brand-700/25" />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-sky-300/25 blur-[120px] animate-aurora dark:bg-sky-700/20"
        style={{ animationDelay: '-8s' }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-300/20 blur-[120px] animate-aurora dark:bg-indigo-700/15"
        style={{ animationDelay: '-16s' }}
      />

      {/* Dot grid with radial fade */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-70 dark:opacity-50" />
    </div>
  );
}
