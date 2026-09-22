import { motion } from "framer-motion";
import { PROCESS, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { EASE, Reveal, SectionHead } from "./ui";

export default function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          index="04"
          eyebrow="How it works"
          title="From first message to launch,"
          italic="no chaos."
          sub="A process built around one idea: you always know what's happening, what it costs, and what comes next."
        />

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          {/* connecting dashed line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-ink/25 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <li className="group relative">
                  {/* step node */}
                  <motion.div
                    whileHover={{ rotate: -6, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16 }}
                    className="relative z-10 grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-card shadow-hard-sm transition-colors duration-300 group-hover:bg-accent sm:h-14 sm:w-14 sm:rounded-2xl"
                  >
                    <span className="display text-base font-bold transition-colors duration-300 group-hover:text-paper sm:text-lg">
                      {p.step}
                    </span>
                  </motion.div>

                  <div className="mt-4 rounded-2xl border border-ink/12 bg-card/60 p-4.5 transition-all duration-300 group-hover:border-ink/30 group-hover:bg-card group-hover:shadow-hard-sm sm:mt-6 sm:p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="display text-base font-bold leading-tight tracking-tight sm:text-lg">{p.title}</h3>
                    </div>
                    <span className="mt-2 inline-block rounded-full border border-ink/15 bg-paper px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-taupe sm:text-[10.5px]">
                      {p.time}
                    </span>
                    <p className="mt-2.5 text-xs leading-relaxed text-ink/75 sm:mt-3 sm:text-[13.5px]">{p.description}</p>
                  </div>

                  {/* mobile connector */}
                  {i < PROCESS.length - 1 && (
                    <div className="mx-auto mt-6 h-6 w-px border-l-2 border-dashed border-ink/25 lg:hidden" aria-hidden="true" />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={0.15} className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row sm:gap-4">
          <p className="hand text-center text-xl text-ink/70 sm:text-2xl">day zero costs you exactly one message —</p>
          <motion.a
            href={waLink("Hi Samarpan! This is my day-zero message. Here's what I want to build:")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-wa px-5 py-2.5 text-sm font-bold text-ink shadow-hard-sm sm:w-auto"
          >
            <WhatsAppIcon className="h-4 w-4" /> Send day zero
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
