import { ArrowUpRight, Star } from "lucide-react";
import { CLIENT_PROOF_NOTE, TESTIMONIALS, waLink } from "../config/site";
import { Reveal, SectionHead } from "./ui";
import { WhatsAppIcon } from "./icons";

export default function Testimonial() {
  return (
    <section className="relative py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          index="03"
          eyebrow="Client words"
          title="Don't take my word for it."
          italic="Take theirs."
          sub={CLIENT_PROOF_NOTE}
        />

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-16">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.project}>
              <figure className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink p-5 text-paper shadow-hard sm:rounded-3xl sm:p-12 sm:shadow-hard-lg lg:p-14">
                <div className="grain-dark absolute inset-0" />
                <div className="dots-paper absolute inset-0 opacity-20" />
                <div
                  className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-wa/10 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* stars */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent sm:h-5 sm:w-5" />
                      ))}
                    </div>
                    <span className="display ml-2 text-[10px] font-bold uppercase tracking-[0.16em] text-paper/50 sm:ml-3 sm:text-xs">
                      verified client review
                    </span>
                  </div>

                  <span
                    className="serif-i pointer-events-none absolute -top-5 right-0 select-none text-[80px] leading-none text-paper/10 sm:-top-6 sm:text-[200px]"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>

                  <blockquote className="serif-i mt-5 max-w-4xl text-[16px] leading-[1.55] text-paper/90 sm:mt-7 sm:text-2xl lg:text-[26px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-5 sm:mt-9 sm:flex-row sm:items-center sm:gap-6 sm:pt-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-wa/60 bg-coal sm:h-12 sm:w-12">
                        <span className="serif-i text-lg text-wa sm:text-xl">{t.author.charAt(0)}</span>
                      </span>
                      <div className="leading-tight">
                        <p className="display text-sm font-bold tracking-tight sm:text-[15px]">{t.author}</p>
                        <p className="text-[11px] text-paper/55 sm:text-xs">{t.role}</p>
                      </div>
                    </div>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-3.5 py-1.5 text-xs font-bold text-paper/80 transition-all duration-300 hover:border-wa hover:text-wa sm:px-4 sm:py-2"
                    >
                      {t.project}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* proof chips + CTA */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center sm:gap-5">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["6/6 happy clients", "Delivered on time", "Direct line to the developer", "Launch-support included"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/15 bg-card px-3 py-1 text-[11px] font-bold text-ink/80 shadow-hard-sm sm:px-4 sm:py-1.5 sm:text-xs"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
            <p className="hand text-xl text-ink/70 sm:text-2xl">want to be review #7?</p>
            <a
              href={waLink("Hi Samarpan! I saw your client reviews and I'd like to discuss my project:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-wa px-6 py-3 text-sm font-bold text-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-lg active-press sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" /> Let's make it happen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
