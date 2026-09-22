import { Asterisk } from "lucide-react";
import { CONTACT, WHY_ME, WHY_QUOTE } from "../config/site";
import { SocialIcon, SpiralArrow } from "./icons";
import { ACTIVE_SOCIALS } from "../config/site";
import { Reveal, SectionHead } from "./ui";

export default function WhyMe() {
  return (
    <section className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* reasons */}
          <div>
            <SectionHead
              index="05"
              eyebrow="Why me"
              title="Why businesses pick"
              italic="a person, not an agency."
            />
            <ul className="mt-10 flex flex-col sm:mt-12">
              {WHY_ME.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <li className="group flex gap-3.5 border-t border-ink/12 py-5 transition-colors duration-300 last:border-b hover:bg-card/60 sm:gap-7 sm:py-6">
                    <span className="display mt-0.5 shrink-0 text-xs font-bold text-taupe transition-colors duration-300 group-hover:text-accent sm:mt-1 sm:text-sm">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="display text-base font-bold tracking-tight sm:text-xl">{w.title}</h3>
                      <p className="mt-1 max-w-lg text-[13px] leading-relaxed text-ink/70 sm:mt-1.5 sm:text-[14px]">{w.text}</p>
                    </div>
                    <Asterisk
                      className="ml-auto mt-1 hidden h-5 w-5 shrink-0 text-ink/20 transition-all duration-500 group-hover:rotate-90 group-hover:text-accent sm:block"
                      strokeWidth={2.5}
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* sticky identity card */}
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.1}>
                <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink p-5 text-paper shadow-hard sm:rounded-3xl sm:p-10 sm:shadow-hard-lg">
                  <div className="grain-dark absolute inset-0" />
                  <div className="dots-paper absolute inset-0 opacity-20" />

                  <div className="relative">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-paper/25 bg-coal sm:h-14 sm:w-14 sm:rounded-2xl">
                        <span className="serif-i text-xl text-paper sm:text-2xl">S</span>
                      </span>
                      <div className="min-w-0 leading-tight">
                        <p className="display truncate text-base font-bold tracking-tight sm:text-lg">{CONTACT.owner}</p>
                        <p className="truncate text-[11px] text-paper/60 sm:text-xs">{CONTACT.role}</p>
                      </div>
                      <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-paper/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-paper/70 sm:gap-2 sm:px-3 sm:text-[10px]">
                        <span className="pulse-dot bg-wa" /> available
                      </span>
                    </div>

                    <p className="serif-i mt-6 text-2xl leading-[1.28] text-paper sm:mt-8 sm:text-[32px] sm:leading-[1.25]">
                      “{WHY_QUOTE.big}”
                    </p>
                    <p className="hand mt-3 rotate-[-1.5deg] text-right text-lg text-accent sm:mt-4 sm:text-xl">
                      {WHY_QUOTE.note}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-paper/15 pt-5 sm:mt-8 sm:gap-2.5 sm:pt-6">
                      {["React", "TypeScript", "Node.js", "AI / LLMs", "Three.js", "MongoDB"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-paper/20 px-2.5 py-0.5 font-mono text-[10px] text-paper/70 sm:px-3 sm:py-1 sm:text-[10.5px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 sm:mt-7">
                      <div className="flex items-center gap-2 sm:gap-3">
                        {ACTIVE_SOCIALS.map((s) => (
                          <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="grid h-9 w-9 place-items-center rounded-full border border-paper/25 text-paper/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink sm:h-10 sm:w-10"
                          >
                            <SocialIcon icon={s.icon} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                          </a>
                        ))}
                      </div>
                      <a
                        href={CONTACT.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link text-xs font-semibold text-paper/70 hover:text-paper"
                      >
                        {CONTACT.portfolioLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* handwritten annotation */}
              <Reveal delay={0.3}>
                <div className="hand relative mt-4 flex items-start justify-end gap-2 pr-2 text-xl text-ink/70 sm:mt-5 sm:text-2xl">
                  <span>yes — one person does all of this</span>
                  <SpiralArrow flip className="h-10 w-8 -mt-2 text-ink/50 sm:h-12 sm:w-9 sm:-mt-3" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
