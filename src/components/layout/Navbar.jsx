import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import { useScrollSpy } from '../../hooks/useScrollSpy.js';
import { profile } from '../../data/profile.js';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const active = useScrollSpy(links.map((l) => l.id));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const shellClasses = scrolled
    ? 'border-white/40 bg-white/65 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_10px_30px_-15px_rgba(15,23,42,0.18)] dark:border-white/[0.06] dark:bg-slate-950/65 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_10px_30px_-15px_rgba(0,0,0,0.6)]'
    : 'border-transparent bg-transparent';

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClasses}`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#hero" aria-label={`${profile.name} — home`} className="flex items-center">
          <img
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-lg shadow-soft ring-1 ring-white/40 transition-transform duration-300 hover:scale-105 dark:ring-white/10"
          />
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={`#${link.id}`}
                  className={`relative inline-block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-700 dark:text-brand-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-lg bg-brand-500/10 dark:bg-brand-400/15"
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-700 backdrop-blur transition-colors hover:border-brand-400/60 hover:text-brand-700 md:hidden dark:border-white/[0.08] dark:bg-slate-900/50 dark:text-slate-300 dark:hover:border-brand-400/40 dark:hover:text-brand-300"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/40 bg-white/80 backdrop-blur-xl md:hidden dark:border-white/[0.06] dark:bg-slate-950/80">
          <ul className="container-page flex flex-col py-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    active === link.id
                      ? 'text-brand-700 dark:text-brand-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
