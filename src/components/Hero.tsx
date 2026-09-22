import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CONTACT, DEFAULT_WA_MESSAGE, HERO, STATS, waLink } from "../config/site";
import BriefBuilder from "./BriefBuilder";
import { SpiralArrow, WhatsAppIcon } from "./icons";
import { CountUp, EASE } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dots-faint absolute inset-0 opacity-60" aria-hidden="true" />
      {/* soft accent glow */}
      <div
        className="absolute -top-32 right-[8%] h-80 w-80 rounded-full bg-accent/12 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* ------------------------------ copy ------------------------------ */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-card px-4 py-2 text-xs font-semibold text-ink shadow-hard-sm"
            >
              <span className="pulse-dot bg-wa" />
              {HERO.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
              className="display mt-6 text-[42px] font-semibold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-[64px]"
            >
              {HERO.titleTop}
              <br />
              <span className="serif-i font-normal text-accent">{HERO.titleItalic}</span>{" "}
              {HERO.titleBottom}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-relaxed text-taupe sm:text-lg"
            >
              {HERO.subtitle}
            </motion.p>

            {/* CTAs + handwritten annotation */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.36, ease: EASE }}
              className="relative mt-9 flex flex-wrap items-center gap-4 md:mt-16"
            >
              {/* annotation floats above, arrow points at the WhatsApp button */}
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: -2 }}
                transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
                className="hand pointer-events-none absolute -top-14 left-1 hidden items-end gap-1 text-[21px] leading-none text-ink/70 md:flex"
              >
                {HERO.annotation}
                <SpiralArrow className="h-12 w-9 translate-y-1 text-ink/55" />
              </motion.div>

              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-ink bg-wa px-6 py-3.5 text-[15px] font-bold text-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-lg active-press"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {HERO.primaryCta}
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/20 bg-card/70 px-6 py-3.5 text-[15px] font-bold text-ink backdrop-blur transition-all duration-300 hover:border-ink hover:bg-card"
              >
                {HERO.secondaryCta}
                <ArrowDown className="h-4 w-4" />
              </a>
            </motion.div>

            {/* stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/10 pt-8 sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dd className="display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-taupe">
                    {s.label}
                  </dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* --------------------------- chat widget -------------------------- */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <BriefBuilder />
          </div>
        </div>

        {/* portfolio cross-link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 text-center text-xs text-taupe"
        >
          Looking for my personal experiments?{" "}
          <a
            href={CONTACT.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="u-link font-semibold text-ink"
          >
            {CONTACT.portfolioLabel}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
