import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* Scroll-triggered reveal with the portfolio's buttery ease. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Editorial section header: index chip + big mixed-type heading. */
export function SectionHead({
  index,
  eyebrow,
  title,
  italic,
  sub,
  align = "left",
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  italic: string;
  sub?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start";
  return (
    <div className={`flex flex-col gap-3.5 sm:gap-5 ${alignCls}`}>
      <Reveal>
        <span
          className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1 text-[10px] font-semibold tracking-[0.16em] uppercase sm:gap-3 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.18em] ${
            dark ? "border-paper/25 text-paper/70" : "border-ink/20 text-taupe"
          }`}
        >
          <span className="display font-bold text-accent">{index}</span>
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`display max-w-3xl text-[clamp(1.75rem,7vw,2.25rem)] font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title} <span className="serif-i font-normal text-accent">{italic}</span>
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className={`max-w-xl text-sm leading-relaxed sm:text-lg ${dark ? "text-paper/60" : "text-taupe"}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* Animated count-up used in the hero stats row. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* Small mono tag used across cards. */
export function Tag({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${
        dark ? "border-paper/20 text-paper/60" : "border-ink/15 text-taupe"
      }`}
    >
      {children}
    </span>
  );
}
