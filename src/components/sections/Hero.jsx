import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Button from "../ui/Button.jsx";
import { profile } from "../../data/profile.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-3xl animate-blob-drift dark:bg-brand-700/20" />
        <div className="absolute -bottom-32 right-0 h-[24rem] w-[24rem] rounded-full bg-sky-300/30 blur-3xl animate-blob-drift dark:bg-sky-700/20" />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.61, 0.35, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 font-mono text-xs text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to AI/ML Engineer roles
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-brand-600 to-sky-500 bg-clip-text text-transparent dark:from-brand-400 dark:to-sky-300">
              {profile.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-3 font-mono text-sm uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#projects" variant="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="a" href={profile.cvPath} download variant="ghost">
              <Download className="h-4 w-4" /> Download CV
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.blog}
              target="_blank"
              rel="noreferrer"
              aria-label="Medium blog"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              <BookOpen className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Portrait slot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-500/40 to-sky-400/30 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <img
              src="/profile.png"
              alt={`Portrait of ${profile.name}`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
              className="block h-auto w-full object-cover"
            />
            {/* Fallback if /profile.jpg is missing */}
            <div
              style={{ display: "none" }}
              className="aspect-square w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-50 to-sky-100 text-center dark:from-slate-900 dark:to-slate-800"
            >
              <span className="font-mono text-6xl font-bold text-brand-600 dark:text-brand-400">
                RP
              </span>
              <span className="px-6 text-xs text-slate-500 dark:text-slate-400">
                Drop a photo at{" "}
                <code className="font-mono">public/profile.png</code>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
