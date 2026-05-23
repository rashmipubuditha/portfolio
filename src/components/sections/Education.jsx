import {
  Award,
  BadgeCheck,
  ExternalLink,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import Section from "../layout/Section.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import Card from "../ui/Card.jsx";
import {
  certifications,
  education,
  professionalCredentials,
} from "../../data/education.js";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 — Education"
      title="Education & Certifications"
      lead="Formal foundation, a professional engineering registration, and focused coursework on top."
    >
      {/* Featured: Professional Credentials */}
      {professionalCredentials.length > 0 && (
        <FadeIn className="mb-10">
          <div className="mb-5 flex items-center gap-2 text-brand-700 dark:text-brand-300">
            <ShieldCheck className="h-5 w-5" />
            <h3 className="font-semibold tracking-tight">
              Professional Credentials
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-1">
            {professionalCredentials.map((cred) => (
              <article
                key={cred.title}
                className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:p-8 dark:border-brand-500/30 dark:from-brand-950/40 dark:via-slate-900 dark:to-sky-950/30"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/15 blur-3xl dark:bg-brand-500/10"
                />

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-sky-500 text-white shadow-soft">
                    <BadgeCheck className="h-5 w-5" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-brand-600/10 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
                        Professional Credential
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                        Issued {cred.issued}
                      </span>
                    </div>

                    <h4 className="mt-3 text-xl font-semibold tracking-tight sm:text-xl">
                      {cred.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">
                      {cred.issuer}
                    </p>
                    {cred.via && (
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cred.via}
                      </p>
                    )}

                    {cred.summary && (
                      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {cred.summary}
                      </p>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
                      {cred.registrationNumber && (
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Reg. No.
                          </span>
                          <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                            {cred.registrationNumber}
                          </span>
                        </div>
                      )}
                      {cred.link && (
                        <a
                          href={cred.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-brand-700 transition-colors hover:text-brand-800 dark:text-brand-300 dark:hover:text-brand-200"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          View certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      )}

      {/* Degrees */}
      <FadeIn className="mb-10">
        <div className="mb-5 flex items-center gap-2 text-brand-700 dark:text-brand-300">
          <GraduationCap className="h-5 w-5" />
          <h3 className="font-semibold tracking-tight">Degrees</h3>
        </div>
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.degree}>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {edu.period}
              </p>
              <h4 className="mt-2 text-base font-semibold leading-snug tracking-tight">
                {edu.degree}
              </h4>
              <p className="mt-1 text-sm text-brand-700 dark:text-brand-300">
                {edu.institution}
              </p>
              {edu.department && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {edu.department}
                </p>
              )}
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {edu.note}
              </p>
            </Card>
          ))}
        </div>
      </FadeIn>

      {/* Certifications */}
      <FadeIn>
        <div className="mb-5 flex items-center gap-2 text-brand-700 dark:text-brand-300">
          <Award className="h-5 w-5" />
          <h3 className="font-semibold tracking-tight">
            Online Certifications
          </h3>
        </div>
        <div className="space-y-4">
          {certifications.map((group) => (
            <Card key={group.provider}>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {group.provider}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="flex items-start gap-2 leading-snug">
                      <span>{item.name}</span>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${item.name} certificate`}
                          className="mt-0.5 inline-flex shrink-0 text-slate-400 transition-colors hover:text-brand-600 dark:text-slate-500 dark:hover:text-brand-300"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </span>
                    {item.year && (
                      <span className="shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400">
                        {item.year}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
