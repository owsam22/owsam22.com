import { ArrowUp, ArrowUpRight } from "lucide-react";
import { ACTIVE_SOCIALS, CONTACT, NAV_LINKS, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { SocialIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-ink/12 bg-cream/50">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex w-fit items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-ink text-paper shadow-hard-sm">
                <span className="serif-i text-xl leading-none">S</span>
                <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-cream bg-accent" />
              </span>
              <span className="leading-tight">
                <span className="display block text-base font-bold tracking-tight">Samarpan</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                  Web Solutions
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-taupe">
              Websites, web apps and automations for businesses that want things done properly —
              designed, built and shipped by {CONTACT.owner}.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              {ACTIVE_SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <SocialIcon icon={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <nav aria-label="Footer">
            <p className="display text-xs font-bold uppercase tracking-[0.2em] text-taupe">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="u-link text-sm font-medium text-ink/80 hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-ink/80 hover:text-ink"
                >
                  Personal portfolio
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </nav>

          {/* contact card */}
          <div>
            <p className="display text-xs font-bold uppercase tracking-[0.2em] text-taupe">Say hello</p>
            <div className="mt-5 rounded-2xl border-2 border-ink bg-card p-5 shadow-hard-sm">
              <p className="text-sm leading-relaxed text-ink/80">
                Fastest way to reach me — one message, straight to my phone.
              </p>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-wa px-4 py-2.5 text-sm font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard-sm active-press"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp me
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="u-link mt-3 block w-fit text-xs font-semibold text-taupe hover:text-ink"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-7 sm:flex-row">
          <p className="text-xs text-taupe">
            © {year} {CONTACT.brand}. All rights reserved.
          </p>
          <p className="hand rotate-[-1deg] text-lg text-ink/60">
            designed & built from scratch by Samarpan Jayswal
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3.5 py-1.5 text-xs font-semibold text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
