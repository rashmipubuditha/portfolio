import { useState } from 'react';
import {
  BookOpen,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Section from '../layout/Section.jsx';
import FadeIn from '../ui/FadeIn.jsx';
import Button from '../ui/Button.jsx';
import { profile } from '../../data/profile.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may be blocked; mailto button still works */
    }
  };

  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
    },
    { icon: MapPin, label: 'Location', value: profile.location },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rashmipubuditha',
      href: profile.socials.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/rashmi-pubuditha',
      href: profile.socials.linkedin,
    },
    {
      icon: BookOpen,
      label: 'Medium',
      value: 'medium.com/@rashmi99gamage',
      href: profile.socials.blog,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title="Let's build something"
      lead="Open to ML Engineer roles, freelance work, and interesting collaborations."
    >
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-glass backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.06] dark:bg-slate-900/50 dark:shadow-glass-dark">
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/10"
          />

          <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.2fr_1fr]">
            {/* Left — CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-500 to-sky-500 p-8 text-white sm:p-10">
              <div
                aria-hidden
                className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -left-10 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl"
              />

              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Have a project in mind?
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/85">
                The fastest way to reach me is email. I usually respond within a day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={`mailto:${profile.email}`}
                  variant="ghost"
                  className="border-white/40 bg-white text-slate-900 hover:border-white hover:text-brand-700"
                >
                  <Mail className="h-4 w-4" /> Send Email
                </Button>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:border-white hover:bg-white/20"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>

            {/* Right — channels */}
            <ul className="divide-y divide-white/40 p-2 dark:divide-white/[0.06]">
              {channels.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-white/40 dark:hover:bg-slate-800/40">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-soft ring-1 ring-inset ring-white/25">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
                        {c.value}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
