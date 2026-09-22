import { motion } from "framer-motion";
import { DEFAULT_WA_MESSAGE, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { EASE } from "./ui";

/* Persistent floating WhatsApp button — bottom right, with pulse ring. */
export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Samarpan on WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: EASE, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-0 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none mr-3 hidden translate-x-2 rounded-full border-2 border-ink bg-card px-3.5 py-1.5 text-xs font-bold text-ink opacity-0 shadow-hard-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with me — replies fast
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-wa text-ink shadow-hard">
        <span className="pulse-dot absolute inset-0 h-full w-full bg-wa/60" aria-hidden="true" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </motion.a>
  );
}
