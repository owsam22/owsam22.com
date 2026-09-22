import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, waLink } from "../config/site";
import { EASE, Reveal, SectionHead } from "./ui";
import { SpiralArrow } from "./icons";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              index="07"
              eyebrow="FAQ"
              title="Questions people ask"
              italic="before messaging."
              sub="If your question isn't here, ask me directly — WhatsApp is faster than email for both of us."
            />
            <Reveal delay={0.2}>
              <div className="relative mt-8 hidden lg:block">
                <p className="hand max-w-[220px] rotate-[-2deg] text-2xl leading-tight text-ink/70">
                  more questions? just text me — I genuinely enjoy these chats
                </p>
                <SpiralArrow flip className="absolute -bottom-4 right-6 h-16 w-11 text-ink/50" />
              </div>
            </Reveal>
          </div>

          {/* accordion */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div
                    className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                      isOpen ? "border-ink bg-card shadow-hard" : "border-ink/15 bg-card/50 hover:border-ink/40 hover:bg-card"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center gap-3 px-4 py-3.5 text-left sm:gap-4 sm:px-7 sm:py-5"
                      aria-expanded={isOpen}
                    >
                      <span className={`display text-xs font-bold ${isOpen ? "text-accent" : "text-taupe"}`}>
                        0{i + 1}
                      </span>
                      <span className="display flex-1 text-sm font-bold tracking-tight sm:text-lg">
                        {f.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 sm:h-8 sm:w-8 ${
                          isOpen ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink"
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2.6} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                        >
                          <p className="px-4 pb-4 pl-9 text-[13px] leading-relaxed text-ink/75 sm:px-7 sm:pb-6 sm:pl-[60px] sm:text-[14px]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.2}>
              <a
                href={waLink("Hi Samarpan! I have a question that's not on your FAQ:")}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 flex flex-col items-start justify-between gap-2 rounded-2xl border-2 border-dashed border-ink/30 bg-transparent px-4 py-3.5 transition-all duration-300 hover:border-ink hover:bg-card sm:flex-row sm:items-center sm:px-7 sm:py-4"
              >
                <span className="display text-sm font-bold text-taupe transition-colors group-hover:text-ink sm:text-[15px]">
                  Something else on your mind?
                </span>
                <span className="serif-i text-base text-accent sm:text-lg">ask me on WhatsApp →</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
