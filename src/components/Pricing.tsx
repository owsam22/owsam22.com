import { Check, Sparkles } from "lucide-react";
import { PLANS, PRICING_NOTE, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="05"
          eyebrow="Pricing"
          title="Honest prices,"
          italic="fixed before we start."
          sub={PRICING_NOTE}
          align="center"
        />

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {PLANS.map((plan, i) => {
            const dark = plan.highlight;
            return (
              <Reveal key={plan.name} delay={i * 0.09} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl border-2 border-ink p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8 ${
                    dark
                      ? "bg-ink text-paper shadow-hard-lg lg:-translate-y-3"
                      : "bg-card text-ink shadow-hard hover:shadow-hard-lg"
                  }`}
                >
                  {dark && (
                    <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-ink bg-accent px-4 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink shadow-hard-sm">
                      <Sparkles className="h-3 w-3" /> Most chosen
                    </span>
                  )}

                  <h3 className="display text-xl font-bold tracking-tight">{plan.name}</h3>
                  <p className={`serif-i mt-1 text-lg ${dark ? "text-paper/70" : "text-taupe"}`}>
                    {plan.blurb}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="display text-5xl font-bold tracking-tight">{plan.price}</span>
                  </div>
                  <span className={`mt-1 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-paper/50" : "text-taupe"}`}>
                    {plan.priceNote}
                  </span>

                  <ul className={`mt-7 flex flex-col gap-3 border-t border-dashed pt-6 ${dark ? "border-paper/20" : "border-ink/15"}`}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed">
                        <span
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                            dark ? "border-paper/25 bg-coal" : "border-ink/20 bg-cream"
                          }`}
                        >
                          <Check className={`h-3 w-3 ${dark ? "text-wa" : "text-ink"}`} strokeWidth={3} />
                        </span>
                        <span className={dark ? "text-paper/85" : "text-ink/85"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(plan.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 py-3 text-sm font-bold transition-all duration-300 active-press ${
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
          <p className="hand mt-10 rotate-[-1deg] text-center text-2xl text-ink/70">
            student or early-stage founder? mention it — I remember being there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
