import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS, waLink, DEFAULT_WA_MESSAGE } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { EASE } from "./ui";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/12 bg-paper/92 py-2.5 shadow-[0_4px_24px_-2px_rgba(22,20,14,0.07)] backdrop-blur-xl sm:py-3"
            : "border-b border-ink/5 bg-paper/80 py-3 backdrop-blur-md sm:border-transparent sm:bg-paper/40 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
          {/* brand */}
          <a
            href="#top"
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label={CONTACT.brand}
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-ink text-paper shadow-hard-sm transition-transform duration-300 group-hover:-rotate-6 sm:h-10 sm:w-10">
              <span className="serif-i text-lg leading-none sm:text-xl">S</span>
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent sm:-right-1.5 sm:-top-1.5 sm:h-3 sm:w-3" />
            </span>
            <span className="leading-tight">
              <span className="display block text-[13.5px] font-bold tracking-tight sm:text-[15px]">
                Samarpan
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-taupe sm:text-[10px]">
                Web Solutions
              </span>
            </span>
          </a>

          {/* desktop links */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="u-link display text-[13px] font-medium tracking-wide text-ink/80 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={CONTACT.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="display hidden items-center gap-1.5 text-[13px] font-semibold text-ink/70 transition-colors hover:text-ink md:inline-flex"
            >
              View Portfolio <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-wa px-3 py-1.5 text-xs font-bold text-ink shadow-hard-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard active-press sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px]"
            >
              <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">WhatsApp me</span>
              <span className="sm:hidden">Chat</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-xl border-2 border-ink bg-card shadow-hard-sm transition-all hover:-translate-y-0.5 active:translate-y-0 active:shadow-none sm:h-10 sm:w-10 sm:rounded-full lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4 sm:h-4.5 sm:w-4.5" strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col justify-between overflow-y-auto bg-ink text-paper lg:hidden"
            style={{ minHeight: "100dvh" }}
          >
            <div className="dots-paper pointer-events-none absolute inset-0 opacity-40" />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden="true"
            />

            {/* mobile menu header */}
            <div className="relative z-10 flex items-center justify-between border-b border-paper/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-paper/30 bg-coal text-paper">
                  <span className="serif-i text-base leading-none">S</span>
                </span>
                <span className="display text-sm font-bold tracking-tight">
                  Samarpan Web Solutions
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-paper/30 bg-coal text-paper transition-transform active:scale-90"
                aria-label="Close menu"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* mobile navigation links */}
            <nav className="relative z-10 my-auto flex flex-col justify-center px-6 py-6 sm:px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: EASE }}
                  className="group flex items-baseline gap-3.5 border-b border-paper/10 py-3.5 sm:py-4"
                >
                  <span className="display text-[11px] font-bold text-accent">0{i + 1}</span>
                  <span className="display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={CONTACT.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.4, ease: EASE }}
                className="group flex items-baseline gap-3.5 py-3.5 sm:py-4"
              >
                <span className="display text-[11px] font-bold text-accent">
                  0{NAV_LINKS.length + 1}
                </span>
                <span className="display flex items-center gap-2.5 text-2xl font-semibold tracking-tight sm:text-3xl">
                  View Portfolio
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </span>
              </motion.a>
            </nav>

            {/* mobile drawer bottom action */}
            <div className="relative z-10 border-t border-paper/10 px-6 py-6 sm:px-8 sm:pb-8">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-paper bg-wa py-3.5 text-sm font-bold text-ink shadow-hard-sm transition-transform active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" /> Start a WhatsApp chat
              </a>
              <p className="mt-3 text-center text-xs text-paper/60">{CONTACT.replyTime}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
