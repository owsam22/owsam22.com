import { Check, Sparkles } from "lucide-react";
import { PLANS, PRICING_NOTE, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          index="06"
          eyebrow="Pricing"
          title="Honest prices,"
          italic="fixed before we start."
          sub={PRICING_NOTE}
          align="center"
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {PLANS.map((plan, i) => {
            const dark = plan.highlight;
            return (
              <Reveal key={plan.name} delay={i * 0.09} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-2xl border-2 border-ink p-5 transition-all duration-300 hover:-translate-y-1.5 sm:rounded-3xl sm:p-8 ${
                    dark
                      ? "bg-ink text-paper shadow-hard-lg lg:-translate-y-3"
                      : "bg-card text-ink shadow-hard hover:shadow-hard-lg"
                  }`}
                >
                  {dark && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-ink bg-accent px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-hard-sm sm:px-4 sm:text-[10.5px]">
                      <Sparkles className="h-3 w-3" /> Best value
                    </span>
                  )}

                  <h3 className="display text-xl font-bold tracking-tight">{plan.name}</h3>
                  <p className={`serif-i mt-1 text-base sm:text-lg ${dark ? "text-paper/70" : "text-taupe"}`}>
                    {plan.blurb}
                  </p>

                  <div className="mt-5 flex items-baseline gap-2 sm:mt-6">
                    <span className="display text-4xl font-bold tracking-tight sm:text-5xl">{plan.price}</span>
                  </div>
                  <span className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs ${dark ? "text-paper/50" : "text-taupe"}`}>
                    {plan.priceNote}
                  </span>

                  <ul className={`mt-6 flex flex-col gap-2.5 border-t border-dashed pt-5 sm:mt-7 sm:gap-3 sm:pt-6 ${dark ? "border-paper/20" : "border-ink/15"}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs leading-relaxed sm:text-[13.5px]">
                        <span
                          className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full border sm:h-5 sm:w-5 ${
                            dark ? "border-paper/25 bg-coal" : "border-ink/20 bg-cream"
                          }`}
                        >
                          <Check className={`h-2.5 w-2.5 sm:h-3 sm:w-3 ${dark ? "text-wa" : "text-ink"}`} strokeWidth={3} />
                        </span>
                        <span className={dark ? "text-paper/85" : "text-ink/85"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(plan.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 py-3 text-xs font-bold transition-all duration-300 active-press sm:mt-8 sm:text-sm ${
                      dark
                        ? "border-wa bg-wa text-ink hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#25d366]"
                        : "border-ink bg-paper text-ink hover:-translate-y-0.5 hover:bg-wa hover:shadow-hard-sm"
                    }`}
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Get this via WhatsApp
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="hand mt-8 rotate-[-1deg] text-center text-xl text-ink/70 sm:mt-10 sm:text-2xl">
            student or early-stage founder? mention it — I remember being there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
