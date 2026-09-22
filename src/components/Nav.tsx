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
        transition={{ duration: 0.9, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* brand */}
          <a href="#top" className="group flex items-center gap-3" aria-label={CONTACT.brand}>
            <span className="relative grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-ink text-paper shadow-hard-sm transition-transform duration-300 group-hover:-rotate-6">
              <span className="serif-i text-xl leading-none">S</span>
              <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent" />
            </span>
            <span className="hidden leading-tight min-[420px]:block">
              <span className="display block text-[15px] font-bold tracking-tight">Samarpan</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-taupe">
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
          <div className="flex items-center gap-3">
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
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-wa px-4 py-2 text-[13px] font-bold text-ink shadow-hard-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-hard active-press"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp me</span>
              <span className="sm:hidden">Chat</span>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-card shadow-hard-sm transition-all hover:-translate-y-0.5 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4.5 w-4.5" strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* hairline on scroll */}
        <div
          className={`mx-auto max-w-7xl px-5 transition-opacity duration-500 sm:px-8 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-full bg-ink/10" />
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink text-paper lg:hidden"
          >
            <div className="dots-paper absolute inset-0 opacity-40" />
            <div className="relative flex items-center justify-between px-5 py-5">
              <span className="display text-sm font-bold tracking-wide">Samarpan Web Solutions</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border-2 border-paper/30 text-paper"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="relative flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE }}
                  className="group flex items-baseline gap-4 border-b border-paper/10 py-4"
                >
                  <span className="display text-xs font-bold text-accent">0{i + 1}</span>
                  <span className="display text-3xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2 sm:text-4xl">
                    {l.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={CONTACT.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.42, duration: 0.6, ease: EASE }}
                className="group flex items-baseline gap-4 py-4"
              >
                <span className="display text-xs font-bold text-accent">0{NAV_LINKS.length + 1}</span>
                <span className="display flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  View Portfolio
                  <ArrowUpRight className="h-6 w-6 text-accent sm:h-7 sm:w-7" />
                </span>
              </motion.a>
            </nav>
            <div className="relative px-8 pb-10">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-2xl border-2 border-paper bg-wa py-4 text-base font-bold text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" /> Start a WhatsApp chat
              </a>
              <p className="mt-4 text-center text-xs text-paper/50">{CONTACT.replyTime}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
