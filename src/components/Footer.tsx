import { ArrowUp, ArrowUpRight } from "lucide-react";
import { ACTIVE_SOCIALS, CONTACT, NAV_LINKS, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { SocialIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t-2 border-ink/12 bg-cream/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex w-fit items-center gap-3">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-ink text-paper shadow-hard-sm sm:h-11 sm:w-11">
                <span className="serif-i text-lg leading-none sm:text-xl">S</span>
                <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-cream bg-accent sm:-right-1.5 sm:-top-1.5 sm:h-3 sm:w-3" />
              </span>
              <span className="leading-tight">
                <span className="display block text-base font-bold tracking-tight">Samarpan</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
                  Web Solutions
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-taupe sm:mt-5 sm:text-sm">
              Websites, web apps and automations for businesses that want things done properly —
              designed, built and shipped by {CONTACT.owner}.
            </p>
            <div className="mt-5 flex items-center gap-2 sm:mt-6 sm:gap-2.5">
              {ACTIVE_SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-8.5 w-8.5 place-items-center rounded-full border border-ink/20 text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper sm:h-9 sm:w-9"
                >
                  <SocialIcon icon={s.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <nav aria-label="Footer">
            <p className="display text-xs font-bold uppercase tracking-[0.2em] text-taupe">Explore</p>
            <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="u-link text-[13px] font-medium text-ink/80 hover:text-ink sm:text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={CONTACT.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[13px] font-medium text-ink/80 hover:text-ink sm:text-sm"
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
            <div className="mt-4 rounded-2xl border-2 border-ink bg-card p-4.5 shadow-hard-sm sm:mt-5 sm:p-5">
              <p className="text-xs leading-relaxed text-ink/80 sm:text-sm">
                Fastest way to reach me — one message, straight to my phone.
              </p>
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink bg-wa px-4 py-2 text-xs font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard-sm active-press sm:mt-4 sm:py-2.5 sm:text-sm"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> WhatsApp me
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="u-link mt-2.5 block w-fit text-xs font-semibold text-taupe hover:text-ink sm:mt-3"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3.5 border-t border-ink/10 pt-6 text-center sm:mt-14 sm:flex-row sm:pt-7 sm:text-left">
          <p className="text-[11px] text-taupe sm:text-xs">
            © {year} {CONTACT.brand}. All rights reserved.
          </p>
          <p className="hand rotate-[-1deg] text-base text-ink/60 sm:text-lg">
            designed & built from scratch by Samarpan Jayswal
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/20 px-3 py-1 text-[11px] font-semibold text-ink/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-paper sm:px-3.5 sm:py-1.5 sm:text-xs"
          >
            Back to top <ArrowUp className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
