import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { useState } from "react";
import { CONTACT, CTA, waLink, ACTIVE_SOCIALS } from "../config/site";
import { SocialIcon, WhatsAppIcon } from "./icons";
import { EASE, Reveal } from "./ui";

/* Rotating circular text badge — a portfolio signature element. */
function SpinBadge() {
  return (
    <div className="relative grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
      <svg viewBox="0 0 100 100" className="animate-rot absolute inset-0 h-full w-full">
        <defs>
          <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-paper/80 font-mono text-[8.2px] uppercase tracking-[0.24em]">
          <textPath href="#circlePath">let's build · samarpan web solutions ·</textPath>
        </text>
      </svg>
      <span className="grid h-12 w-12 place-items-center rounded-full border border-paper/25 bg-coal">
        <ArrowUpRight className="h-5 w-5 text-accent" />
      </span>
    </div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-ink px-6 py-14 text-paper shadow-hard-lg sm:px-12 sm:py-20 lg:px-16">
          <div className="grain-dark absolute inset-0" />
          <div className="dots-paper absolute inset-0 opacity-25" />
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-paper/25 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/70">
                  <span className="pulse-dot bg-wa" />
                  Ready when you are
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="display mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  {CTA.titleA}{" "}
                  <span className="serif-i font-normal text-accent">{CTA.titleB}</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/65 sm:text-lg">
                  {CTA.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <motion.a
                    href={waLink("Hi Samarpan! I have something to build. Here's the one-line version:")}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="inline-flex items-center gap-2.5 rounded-full bg-wa px-7 py-4 text-[15px] font-bold text-ink shadow-[5px_5px_0_0_rgba(241,238,230,0.25)]"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Message me on WhatsApp
                  </motion.a>

                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${CONTACT.email}?subject=Project enquiry — Samarpan Web Solutions`}
                      className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-4 text-sm font-semibold text-paper/85 transition-colors duration-300 hover:border-paper/60 hover:text-paper"
                    >
                      <Mail className="h-4 w-4" />
                      {CONTACT.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="grid h-12 w-12 place-items-center rounded-full border border-paper/25 text-paper/70 transition-all duration-300 hover:border-paper/60 hover:text-paper active:scale-95"
                    >
                      {copied ? <Check className="h-4 w-4 text-wa" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-9 flex items-center gap-3 border-t border-paper/15 pt-7">
                  {ACTIVE_SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-paper/25 text-paper/75 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                    >
                      <SocialIcon icon={s.icon} className="h-4.5 w-4.5" />
                    </a>
                  ))}
                  <span className="ml-2 text-xs text-paper/45">
                    {CTA.emailLabel} {CONTACT.location}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="shrink-0 self-start lg:self-end">
              <div className="relative">
                <SpinBadge />
                <p className="hand absolute -bottom-8 left-1/2 w-40 -translate-x-1/2 rotate-[-4deg] text-center text-xl text-paper/60">
                  it spins. so do ideas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
