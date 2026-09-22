import { ArrowUpRight, CheckCheck, ExternalLink, Star } from "lucide-react";
import { FEATURED_WORK, MORE_WORK, waLink, type Project } from "../config/site";
import { Reveal, SectionHead, Tag } from "./ui";

/* ------------------------------------------------------------------
   Pure-CSS miniature UI mockups — a bespoke "screenshot" per project.
------------------------------------------------------------------- */

function MockFinance() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink p-4">
      <div className="dots-paper absolute inset-0 opacity-30" />
      <div className="relative rounded-xl border border-paper/15 bg-coal p-3">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-paper/50">
            Total balance
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-wa" />
        </div>
        <p className="display mt-1 text-xl font-bold text-paper">₹1,24,580</p>
        <div className="mt-2.5 flex items-end gap-1.5">
          {[38, 62, 45, 78, 54, 90, 70].map((h, i) => (
            <div
              key={i}
              className={`w-full rounded-sm ${i === 5 ? "bg-accent" : "bg-paper/25"}`}
              style={{ height: `${h * 0.5}px` }}
            />
          ))}
        </div>
      </div>
      <div className="relative mt-2 flex gap-2">
        <div className="flex-1 rounded-xl border border-paper/15 bg-coal p-2.5">
          <span className="text-[8.5px] uppercase tracking-[0.14em] text-paper/50">Bills due</span>
          <p className="display text-sm font-bold text-accent">3</p>
        </div>
        <div className="flex-1 rounded-xl border border-paper/15 bg-coal p-2.5">
          <span className="text-[8.5px] uppercase tracking-[0.14em] text-paper/50">Synced</span>
          <p className="display text-sm font-bold text-wa">All devices</p>
        </div>
      </div>
    </div>
  );
}

function MockChat() {
  return (
    <div className="relative h-full w-full overflow-hidden wa-wallpaper p-4">
      <div className="flex flex-col gap-2">
        <div className="w-fit max-w-[75%] rounded-xl rounded-tl-sm bg-card px-3 py-2 text-[11px] text-ink shadow-sm">
          scan the QR — you're in
        </div>
        <div className="ml-auto flex w-fit max-w-[75%] items-end gap-1.5 rounded-xl rounded-tr-sm bg-[#dcf8c6] px-3 py-2 text-[11px] text-ink shadow-sm">
          no signup? that fast?
          <span className="inline-flex items-center gap-0.5 text-[8px] text-taupe">
            now <CheckCheck className="h-3 w-3 text-[#53bdeb]" strokeWidth={2.6} />
          </span>
        </div>
        <div className="flex w-fit items-center gap-1 rounded-xl rounded-tl-sm bg-card px-3 py-2 shadow-sm">
          {[0, 1, 2].map((d) => (
            <span key={d} className="h-1 w-1 animate-pulse rounded-full bg-taupe/60" style={{ animationDelay: `${d * 0.15}s` }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink">
        <div className="grid grid-cols-3 gap-px">
          {[...Array(9)].map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 ${[0, 2, 4, 6, 8].includes(i) ? "bg-paper" : "bg-paper/25"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockGalaxy() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0916]">
      {[...Array(26)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-paper"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: i % 5 === 0 ? 2.5 : 1.2,
            height: i % 5 === 0 ? 2.5 : 1.2,
            opacity: 0.25 + ((i * 7) % 10) / 14,
          }}
        />
      ))}
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent via-[#ff9d1c] to-[#5b2be0] blur-[1px]" />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent to-[#5b2be0] opacity-40 blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/20 [transform:translate(-50%,-50%)_rotateX(72deg)]" />
      <span className="absolute right-[26%] top-[30%] h-2 w-2 rounded-full bg-wa shadow-[0_0_10px_2px_rgba(37,211,102,0.55)]" />
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-paper/50">git-galaxy · 1,240 stars mapped</span>
    </div>
  );
}

function MockPixel() {
  const cells = [...Array(96)];
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#101820]">
      <div className="grid h-full grid-cols-12">
        {cells.map((_, i) => {
          const r = (i * 13) % 17;
          const cls =
            r < 2 ? "bg-accent/80" : r < 4 ? "bg-wa/50" : r < 6 ? "bg-[#2a3a4a]" : r < 7 ? "bg-paper/15" : "bg-transparent";
          return <span key={i} className={`m-[1.5px] rounded-[1px] ${cls}`} />;
        })}
      </div>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-paper/60">pixel-engineer · fsm state: combat</span>
    </div>
  );
}

function MockSafari() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#ffb454] via-[#e8844a] to-[#274d2e]">
      {/* sun */}
      <div className="absolute left-[18%] top-[16%] h-10 w-10 rounded-full bg-[#fff3d6] shadow-[0_0_24px_6px_rgba(255,243,214,0.5)]" />
      {/* distant hill */}
      <div className="absolute -bottom-8 -left-10 h-24 w-72 rounded-[100%] bg-[#1e3d24]" />
      <div className="absolute -bottom-10 right-[-16%] h-28 w-80 rounded-[100%] bg-[#162f1b]" />
      {/* tree silhouette */}
      <div className="absolute bottom-6 right-[16%] h-12 w-1.5 rounded bg-[#0f2413]" />
      <div className="absolute bottom-14 right-[10%] h-9 w-20 rounded-[100%] bg-[#0f2413]" />
      {/* grass blades */}
      {[8, 22, 38, 55, 70, 86].map((x, i) => (
        <span
          key={i}
          className="absolute bottom-0 w-[3px] rounded-t bg-[#0f2413]"
          style={{ left: `${x}%`, height: `${10 + ((i * 7) % 12)}px` }}
        />
      ))}
      {/* mini booking card */}
      <div className="absolute left-3 top-3 w-36 rounded-xl border border-ink/15 bg-card/95 p-2.5 shadow-md backdrop-blur">
        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-taupe">
          Rajaji National Park
        </span>
        <div className="mt-1.5 space-y-1">
          <div className="h-1.5 w-4/5 rounded bg-ink/15" />
          <div className="h-1.5 w-3/5 rounded bg-ink/10" />
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="rounded-md bg-wa px-2 py-1 text-[8.5px] font-bold text-ink">Book safari</span>
          <span className="rounded-md border border-ink/15 px-2 py-1 text-[8.5px] font-semibold text-taupe">
            ₹1,500
          </span>
        </div>
      </div>
      <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[#f5e9d0]/80">
        sukoon safari · bookings open
      </span>
    </div>
  );
}

const MOCKS: Record<Project["mock"], () => React.JSX.Element> = {
  finance: MockFinance,
  chat: MockChat,
  galaxy: MockGalaxy,
  pixel: MockPixel,
  safari: MockSafari,
};

/* ------------------------------------------------------------------ */

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
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          index="02"
          eyebrow="Selected work"
          title="What I've already"
          italic="built & shipped."
          sub="Client websites live in production, plus products I build in public on GitHub. This is the standard of craft your project gets."
        />

        {/* featured — mac window cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20">
          {FEATURED_WORK.map((p, i) => {
            const Mock = MOCKS[p.mock];
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-card shadow-hard transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard-lg">
                  {/* mac title bar */}
                  <div className="flex items-center gap-3 border-b-2 border-ink bg-cream px-4 py-2.5">
                    <MacDots />
                    <span className="truncate font-mono text-[11px] text-taupe">{p.windowTitle}</span>
                    <span className="display ml-auto shrink-0 text-[10px] font-bold text-taupe">{p.year}</span>
                  </div>

                  {/* mock screenshot */}
                  <div className="h-40 overflow-hidden border-b-2 border-ink sm:h-48">
                    <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035]">
                      <Mock />
                    </div>
                  </div>

                  {/* body */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <h3 className="display text-2xl font-bold tracking-tight">{p.name}</h3>
                      <Tag>{p.category}</Tag>
                    </div>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink/80">{p.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="rounded-md border border-ink/12 bg-paper px-2 py-1 font-mono text-[10.5px] text-taupe">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-5">
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-4 py-2 text-[12.5px] font-bold text-paper transition-all duration-300 hover:bg-coal hover:-translate-y-0.5"
                        >
                          View source <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ) : (
                        p.live && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-wa px-4 py-2 text-[12.5px] font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard-sm"
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
                          className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/20 px-4 py-2 text-[12.5px] font-bold text-ink transition-all duration-300 hover:border-ink hover:bg-paper"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> {p.liveLabel ?? "Live demo"}
                        </a>
                      )}
                      {p.github ? (
                        <span className="ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-taupe">
                          <Star className="h-3.5 w-3.5 fill-accent text-accent" /> open source
                        </span>
                      ) : (
                        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold text-taupe">
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
        <Reveal delay={0.1} className="mt-10">
          <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-ink text-paper shadow-hard">
            <div className="dots-paper absolute inset-0 opacity-25" />
            <div className="relative grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
              {MORE_WORK.map((w) => (
                <a
                  key={w.name}
                  href={w.live || w.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-2.5 bg-ink p-6 transition-colors duration-300 hover:bg-coal"
                >
                  <span className="display text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {w.tag}
                  </span>
                  <span className="display flex items-center gap-2 text-lg font-bold tracking-tight">
                    {w.name}
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </span>
                  <span className="text-[13px] leading-relaxed text-paper/60">{w.note}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CTA under work */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="serif-i text-2xl text-ink/85 sm:text-3xl">
              Your project could be on this page next.
            </p>
            <a
              href={waLink("Hi Samarpan! I saw your work and I'd love something similar for my business:")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-6 py-3 text-sm font-bold text-paper shadow-hard transition-all duration-300 hover:-translate-y-1 hover:shadow-hard-lg active-press"
            >
              Let's discuss yours <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
