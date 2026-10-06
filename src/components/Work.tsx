import { ArrowUpRight, ExternalLink, Star } from "lucide-react";
import { FEATURED_WORK, MORE_WORK, waLink } from "../config/site";
import { Reveal, SectionHead, Tag } from "./ui";

function MacDots() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </span>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHead
          index="02"
          eyebrow="Selected work"
          title="What I've already"
          italic="built & shipped."
          sub="Client websites live in production, plus products I build in public on GitHub. This is the standard of craft your project gets."
        />

        {/* featured — mac window cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-20">
          {FEATURED_WORK.map((p, i) => {
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-hard transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg sm:rounded-3xl">
                  {/* mac title bar */}
                  <div className="flex items-center gap-2.5 border-b-2 border-ink bg-cream px-3.5 py-2.5 sm:gap-3 sm:px-4">
                    <MacDots />
                    <span className="truncate font-mono text-[10.5px] text-taupe sm:text-[11px]">{p.windowTitle}</span>
                    <span className="display ml-auto shrink-0 text-[10px] font-bold text-taupe">{p.year}</span>
                  </div>

                  {/* project screenshot */}
                  <div className="h-40 overflow-hidden border-b-2 border-ink bg-cream sm:h-48">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    />
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <h3 className="display text-xl font-bold tracking-tight sm:text-2xl">{p.name}</h3>
                      <Tag>{p.category}</Tag>
                    </div>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/80 sm:mt-3 sm:text-[14.5px]">{p.description}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="rounded-md border border-ink/12 bg-paper px-2 py-0.5 font-mono text-[10px] text-taupe sm:text-[10.5px]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink/10 pt-4 sm:mt-6 sm:gap-3 sm:pt-5">
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-3.5 py-1.5 text-xs font-bold text-paper transition-all duration-300 hover:bg-coal hover:-translate-y-0.5 sm:px-4 sm:py-2 sm:text-[12.5px]"
                        >
                          View source <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-wa px-3.5 py-1.5 text-xs font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard-sm sm:px-4 sm:py-2 sm:text-[12.5px]"
                          >
                            {p.liveLabel ?? "Visit live site"} <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )
                      )}
                      {p.github && p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/20 px-3.5 py-1.5 text-xs font-bold text-ink transition-all duration-300 hover:border-ink hover:bg-paper sm:px-4 sm:py-2 sm:text-[12.5px]"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> {p.liveLabel ?? "Live demo"}
                        </a>
                      )}
                      {p.github ? (
                        <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-taupe sm:text-[11px]">
                          <Star className="h-3.5 w-3.5 fill-accent text-accent" /> open source
                        </span>
                      ) : (
                        <span className="ml-auto inline-flex items-center gap-1.5 text-[10px] font-semibold text-taupe sm:text-[11px]">
                          <span className="pulse-dot bg-wa" /> live client site
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* more builds — ink strip */}
        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink text-paper shadow-hard sm:rounded-3xl">
            <div className="dots-paper absolute inset-0 opacity-25" />
            <div className="relative grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
              {MORE_WORK.map((w) => (
                <a
                  key={w.name}
                  href={w.live || w.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-2 bg-ink p-4.5 transition-colors duration-300 hover:bg-coal sm:gap-2.5 sm:p-6"
                >
                  <span className="display text-[9.5px] font-bold uppercase tracking-[0.2em] text-accent sm:text-[10px]">
                    {w.tag}
                  </span>
                  <span className="display flex items-center gap-2 text-base font-bold tracking-tight sm:text-lg">
                    {w.name}
                    <ArrowUpRight className="h-4 w-4 opacity-70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 sm:opacity-0" />
                  </span>
                  <span className="text-xs leading-relaxed text-paper/65 sm:text-[13px]">{w.note}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA under work */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12">
            <p className="serif-i text-xl text-ink/85 sm:text-3xl">
              Your project could be on this page next.
            </p>
            <a
              href={waLink("Hi Samarpan! I saw your work and I'd love something similar for my business:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink bg-accent px-6 py-3 text-sm font-bold text-paper shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-lg active-press sm:w-auto"
            >
              Let's discuss yours <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
