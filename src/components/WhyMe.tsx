import { Asterisk } from "lucide-react";
import { CONTACT, WHY_ME, WHY_QUOTE } from "../config/site";
import { SocialIcon, SpiralArrow } from "./icons";
import { ACTIVE_SOCIALS } from "../config/site";
import { Reveal, SectionHead } from "./ui";

export default function WhyMe() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* reasons */}
          <div>
            <SectionHead
              index="05"
              eyebrow="Why me"
              title="Why businesses pick"
              italic="a person, not an agency."
            />
            <ul className="mt-12 flex flex-col">
              {WHY_ME.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <li className="group flex gap-5 border-t border-ink/12 py-6 transition-colors duration-300 last:border-b hover:bg-card/60 sm:gap-7">
                    <span className="display mt-1 shrink-0 text-sm font-bold text-taupe transition-colors duration-300 group-hover:text-accent">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="display text-lg font-bold tracking-tight sm:text-xl">{w.title}</h3>
                      <p className="mt-1.5 max-w-lg text-[14px] leading-relaxed text-ink/70">{w.text}</p>
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
                <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink p-8 text-paper shadow-hard-lg sm:p-10">
                  <div className="grain-dark absolute inset-0" />
                  <div className="dots-paper absolute inset-0 opacity-20" />

                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-paper/25 bg-coal">
                        <span className="serif-i text-2xl text-paper">S</span>
                      </span>
                      <div className="leading-tight">
                        <p className="display text-lg font-bold tracking-tight">{CONTACT.owner}</p>
                        <p className="text-xs text-paper/60">{CONTACT.role}</p>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-paper/70">
                        <span className="pulse-dot bg-wa" /> available
                      </span>
                    </div>

                    <p className="serif-i mt-8 text-[28px] leading-[1.25] text-paper sm:text-[32px]">
                      “{WHY_QUOTE.big}”
                    </p>
                    <p className="hand mt-4 rotate-[-1.5deg] text-right text-xl text-accent">
                      {WHY_QUOTE.note}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2.5 border-t border-paper/15 pt-6">
                      {["React", "TypeScript", "Node.js", "AI / LLMs", "Three.js", "MongoDB"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-paper/20 px-3 py-1 font-mono text-[10.5px] text-paper/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      {ACTIVE_SOCIALS.map((s) => (
                        <a
                          key={s.label}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                        >
                          <SocialIcon icon={s.icon} className="h-4.5 w-4.5" />
                        </a>
                      ))}
                      <a
                        href={CONTACT.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-link ml-auto text-xs font-semibold text-paper/70 hover:text-paper"
                      >
                        {CONTACT.portfolioLabel}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* handwritten annotation */}
              <Reveal delay={0.3}>
                <div className="hand relative mt-5 flex items-start justify-end gap-2 pr-2 text-2xl text-ink/70">
                  <span>yes — one person does all of this</span>
                  <SpiralArrow flip className="h-12 w-9 -mt-3 text-ink/50" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
