import { ArrowUpRight, Bot, Check, Globe, LayoutDashboard, Wrench } from "lucide-react";
import { SERVICES, waLink, type Service } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { Reveal, SectionHead } from "./ui";

const ICONS: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  layout: LayoutDashboard,
  bot: Bot,
  wrench: Wrench,
};

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHead
        index="01"
        eyebrow="What I do"
        title="Everything your business needs"
        italic="online."
        sub="Three ways to grow, one way to fix what's already there. Every engagement starts with a free WhatsApp chat and ends with something that ships."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-3xl border-2 border-ink bg-card p-7 shadow-hard transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg sm:p-9">
                {/* top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl border-2 border-ink bg-accent/10 text-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                    <Icon className="h-6 w-6" strokeWidth={1.9} />
                  </div>
                  <span className="display text-5xl font-bold leading-none text-ink/[0.08] transition-colors duration-300 group-hover:text-accent/25">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="display mt-6 text-2xl font-bold tracking-tight sm:text-[27px]">
                  {s.title}
                </h3>
                <p className="serif-i mt-1.5 text-lg leading-snug text-accent">{s.tagline}</p>

                <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.12em] text-taupe">
                  Ideal for <span className="text-ink/80 normal-case tracking-normal">{s.idealFor}</span>
                </p>

                <ul className="mt-5 flex flex-col gap-2.5 border-t border-dashed border-ink/15 pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink/85">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-ink/20 bg-cream">
                        <Check className="h-3 w-3 text-ink" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                {/* footer */}
                <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-5">
                  <span className="display text-sm font-bold tracking-wide text-ink">
                    {s.priceHint}
                    <span className="ml-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-taupe">
                      starting
                    </span>
                  </span>
                  <a
                    href={waLink(s.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-4 py-2 text-[12.5px] font-bold text-ink transition-all duration-300 hover:bg-wa hover:shadow-hard-sm active-press"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Ask about this
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="mt-10">
        <p className="hand text-center text-2xl text-ink/70">
          not sure which one you need? that's exactly what the first chat is for.
        </p>
      </Reveal>
    </section>
  );
}
