import { ArrowUp, BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile.js';

const socials = [
  { Icon: Github, href: profile.socials.github, label: 'GitHub' },
  { Icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { Icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  { Icon: BookOpen, href: profile.socials.blog, label: 'Medium blog' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-10 border-t border-white/40 bg-white/40 py-10 backdrop-blur-xl dark:border-white/[0.06] dark:bg-slate-950/40">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {year} {profile.name}. Built with React, Vite & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
          <a
            href="#hero"
            aria-label="Back to top"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-600 backdrop-blur transition-colors hover:border-brand-400/60 hover:text-brand-700 dark:border-white/[0.08] dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-brand-400/40 dark:hover:text-brand-300"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
