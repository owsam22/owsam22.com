import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCheck, MoreVertical, Phone, Plus, Send, Video } from "lucide-react";
import { BRIEF, CONTACT, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { EASE } from "./ui";

/* ------------------------------------------------------------------
   Interactive WhatsApp-style chat. Visitors tap chips describing
   their project; a message drafts itself and opens directly in
   WhatsApp. Pure frontend — no backend involved.
------------------------------------------------------------------- */

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 px-1 py-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-taupe/60"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

function ReadTicks() {
  return (
    <span className="inline-flex translate-y-0.5 text-ink/50">
      <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb]" strokeWidth={2.4} />
    </span>
  );
}

export default function BriefBuilder() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [botStage, setBotStage] = useState<"typing" | "hello" | "nudge" | "done">("typing");

  const ready = needs.length > 0;

  const message = ready
    ? `Hi Samarpan! I came across Samarpan Web Solutions. I need: ${needs
        .map((n) => n.toLowerCase())
        .join(", ")}.${budget ? ` My budget is ${budget}.` : ""} Can we talk?`
    : "Pick what you need above — your message writes itself…";

  /* staged bot intro */
  useEffect(() => {
    const t1 = setTimeout(() => setBotStage("hello"), 1100);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!ready) return;
    setBotStage(needs.length > 1 || budget ? "done" : "nudge");
  }, [needs, budget, ready]);

  const toggleNeed = (n: string) =>
    setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  return (
    <div className="relative">
      {/* sticky note behind */}
      <motion.div
        className="absolute -right-3 -top-5 hidden h-24 w-40 rotate-6 rounded-sm bg-[#fdf6c9] shadow-md sm:block"
        animate={{ rotate: [6, 8, 6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="hand absolute inset-0 grid place-items-center px-3 text-center text-xl leading-tight text-ink/80">
          no forms. just text me.
        </span>
      </motion.div>

      {/* phone card */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: EASE }}
        className="relative overflow-hidden rounded-2xl border-2 border-ink bg-wa-chat shadow-hard sm:rounded-3xl sm:shadow-hard-lg"
      >
        {/* WA header */}
        <div className="flex items-center gap-2.5 border-b-2 border-ink bg-wa-dark px-3.5 py-2.5 text-paper sm:gap-3 sm:px-4 sm:py-3">
          <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-paper/20 bg-coal sm:h-10 sm:w-10">
            <span className="serif-i text-base leading-none text-paper sm:text-lg">S</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-wa-dark bg-wa sm:h-3 sm:w-3" />
          </div>
          <div className="min-w-0 flex-1 leading-tight">
            <p className="display truncate text-[13px] font-bold sm:text-sm">{CONTACT.owner}</p>
            <p className="truncate text-[10.5px] text-paper/70 sm:text-[11px]">
              online · {CONTACT.replyTime}
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-paper/80 sm:gap-4">
            <Video className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
            <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <MoreVertical className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </div>
        </div>

        {/* chat wall */}
        <div className="wa-wallpaper flex max-h-[320px] min-h-[240px] flex-col gap-2.5 overflow-y-auto p-3 sm:max-h-[420px] sm:min-h-[300px] sm:p-4">
          {/* encryption notice */}
          <div className="mx-auto max-w-[280px] rounded-lg bg-[#fdf6c9]/90 px-3 py-1.5 text-center text-[10px] leading-snug text-taupe shadow-sm">
            This chat drafts a real WhatsApp message — nothing is stored here.
          </div>

          {/* bot hello */}
          <AnimatePresence mode="wait">
            {botStage === "typing" ? (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-fit rounded-2xl rounded-tl-sm border border-ink/10 bg-card px-3.5 py-2.5 shadow-sm"
              >
                <TypingDots />
              </motion.div>
            ) : (
              <motion.div
                key="hello"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="max-w-[90%] rounded-2xl rounded-tl-sm border border-ink/10 bg-card px-3.5 py-2.5 text-[12.5px] leading-relaxed text-ink shadow-sm sm:max-w-[88%] sm:text-[13.5px]"
              >
                {BRIEF.botHello}
                <span className="mt-1 block text-right text-[10px] text-taupe">now</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* need chips (as quick replies) */}
          {botStage !== "typing" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
              className="flex flex-wrap gap-1.5 pl-1 sm:gap-2 sm:pl-2"
            >
              {BRIEF.needOptions.map((n) => {
                const active = needs.includes(n);
                return (
                  <motion.button
                    key={n}
                    layout
                    whileTap={{ scale: 0.94 }}
                    onClick={() => toggleNeed(n)}
                    className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-sm transition-colors duration-200 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[12px] ${
                      active
                        ? "border-wa-deep bg-wa-deep text-paper"
                        : "border-wa-deep/40 bg-card/90 text-wa-deep hover:bg-wa/10"
                    }`}
                  >
                    {active ? <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> : <Plus className="h-3 w-3 sm:h-3.5 sm:w-3.5" />}
                    {n}
                  </motion.button>
                );
              })}
            </motion.div>
          )}

          {/* user selection echo bubble */}
          <AnimatePresence>
            {ready && (
              <motion.div
                key="echo"
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm border border-ink/10 bg-[#dcf8c6] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-ink shadow-sm"
              >
                I need: {needs.map((n) => n.toLowerCase()).join(", ")}
                <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-taupe">
                  now <ReadTicks />
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* budget chips */}
          <AnimatePresence>
            {ready && (
              <motion.div
                key="budget"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
                className="flex flex-wrap gap-2 pl-2"
              >
                <span className="w-full pl-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">
                  Rough budget (optional)
                </span>
                {BRIEF.budgetOptions.map((b) => {
                  const active = budget === b;
                  return (
                    <motion.button
                      key={b}
                      layout
                      whileTap={{ scale: 0.94 }}
                      onClick={() => setBudget(active ? "" : b)}
                      className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold shadow-sm transition-colors duration-200 ${
                        active
                          ? "border-wa-deep bg-wa-deep text-paper"
                          : "border-wa-deep/40 bg-card/90 text-wa-deep hover:bg-wa/10"
                      }`}
                    >
                      {b}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* bot follow-up */}
          <AnimatePresence mode="wait">
            {botStage === "nudge" && (
              <motion.p
                key="nudge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-ink/10 bg-card px-3.5 py-2.5 text-[13.5px] text-ink shadow-sm"
              >
                {BRIEF.botAfterPick}
              </motion.p>
            )}
            {botStage === "done" && (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-ink/10 bg-card px-3.5 py-2.5 text-[13.5px] text-ink shadow-sm"
              >
                {BRIEF.botDone}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* composer */}
        <div className="flex items-end gap-2 border-t-2 border-ink bg-[#f0f2f5] p-3">
          <div className="min-h-[42px] flex-1 rounded-2xl border border-ink/15 bg-white px-3.5 py-2.5">
            <p
              className={`text-[13px] leading-snug transition-colors ${
                ready ? "text-ink" : "text-taupe/70 italic"
              }`}
            >
              {message}
            </p>
          </div>
          <motion.a
            href={ready ? waLink(message) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={ready ? { scale: 0.9 } : undefined}
            aria-disabled={!ready}
            aria-label={BRIEF.sendLabel}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink shadow-hard-sm transition-all duration-300 ${
              ready
                ? "bg-wa text-ink hover:-translate-y-0.5 hover:shadow-hard cursor-pointer"
                : "cursor-not-allowed bg-cream text-taupe/50 opacity-70"
            }`}
          >
            <Send className="h-4.5 w-4.5 -translate-x-px translate-y-px" />
          </motion.a>
        </div>
      </motion.div>

      {/* caption under card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-4 flex items-center justify-center gap-2 text-xs text-taupe"
      >
        <WhatsAppIcon className="h-3.5 w-3.5 text-wa-deep" />
        The send button opens WhatsApp on your device — message lands straight on my phone.
      </motion.div>
    </div>
  );
}
