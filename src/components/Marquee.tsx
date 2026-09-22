import { Asterisk } from "lucide-react";

/* Endless editorial ticker. Content is duplicated for a seamless loop. */
export default function Marquee({
  items,
  dark = true,
  slow = false,
  reverse = false,
  className = "",
}: {
  items: string[];
  dark?: boolean;
  slow?: boolean;
  reverse?: boolean;
  className?: string;
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.2em] sm:text-base">
            {item}
          </span>
          <Asterisk
            className={`h-5 w-5 shrink-0 ${dark ? "text-accent" : "text-accent"}`}
            strokeWidth={2.5}
          />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden border-y-2 ${
        dark ? "border-ink bg-ink text-paper" : "border-ink/15 bg-cream/60 text-ink"
      } ${className}`}
    >
      <div
        className={`flex w-max py-3.5 ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
