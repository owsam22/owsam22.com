import { ArrowUpRight, Star } from "lucide-react";
import { CLIENT_PROOF_NOTE, TESTIMONIALS, waLink } from "../config/site";
import { Reveal, SectionHead } from "./ui";
import { WhatsAppIcon } from "./icons";

export default function Testimonial() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="03"
          eyebrow="Client words"
          title="Don't take my word for it."
          italic="Take theirs."
          sub={CLIENT_PROOF_NOTE}
        />

        <div className="mt-12 grid gap-8 lg:mt-16">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.project}>
              <figure className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink p-7 text-paper shadow-hard-lg sm:p-12 lg:p-14">
                <div className="grain-dark absolute inset-0" />
                <div className="dots-paper absolute inset-0 opacity-20" />
                <div
                  className="absolute -left-20 -bottom-24 h-72 w-72 rounded-full bg-wa/10 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  {/* stars */}
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                    <span className="display ml-3 text-xs font-bold uppercase tracking-[0.18em] text-paper/50">
                      verified client review
                    </span>
                  </div>

                  <span
                    className="serif-i pointer-events-none absolute -top-6 right-0 select-none text-[140px] leading-none text-paper/10 sm:text-[200px]"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>

                  <blockquote className="serif-i mt-7 max-w-4xl text-[19px] leading-[1.5] text-paper/90 sm:text-2xl lg:text-[26px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-paper/15 pt-7">
                    <div className="flex items-center gap-3.5">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-wa/60 bg-coal">
                        <span className="serif-i text-xl text-wa">{t.author.charAt(0)}</span>
                      </span>
                      <div className="leading-tight">
                        <p className="display text-[15px] font-bold tracking-tight">{t.author}</p>
                        <p className="text-xs text-paper/55">{t.role}</p>
                      </div>
                    </div>
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-paper/25 px-4 py-2 text-xs font-bold text-paper/80 transition-all duration-300 hover:border-wa hover:text-wa"
                    >
                      {t.project}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* proof chips + CTA */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {["6/6 happy clients", "Delivered on time", "Direct line to the developer", "Launch-support included"].map(
                (c) => (
                  <span
                    key={c}
                    className="rounded-full border border-ink/15 bg-card px-4 py-1.5 text-xs font-bold text-ink/80 shadow-hard-sm"
                  >
                    {c}
                  </span>
                )
              )}
            </div>
            <p className="hand text-2xl text-ink/70">want to be review #7?</p>
            <a
              href={waLink("Hi Samarpan! I saw your client reviews and I'd like to discuss my project:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-wa px-6 py-3 text-sm font-bold text-ink shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-lg active-press"
            >
              <WhatsAppIcon className="h-4 w-4" /> Let's make it happen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
