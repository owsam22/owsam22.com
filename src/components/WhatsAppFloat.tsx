import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DEFAULT_WA_MESSAGE, waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";
import { EASE } from "./ui";

/* Persistent floating WhatsApp button — bottom right, with pulse ring & tooltip. */
export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={waLink(DEFAULT_WA_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Samarpan on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.5, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.5,
        ease: EASE,
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2 sm:bottom-7 sm:right-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-full"
    >
      {/* Animated Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-none hidden whitespace-nowrap rounded-full border-2 border-ink bg-card px-3.5 py-1.5 text-xs font-bold text-ink shadow-hard-sm sm:block"
          >
            Chat with me — replies fast 👋
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button Body with Pulse Ring */}
      <span className="relative grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-wa text-ink shadow-hard">
        {/* Continuous Ping / Pulse Effect */}
        <span
          className="absolute inset-0 -z-10 h-full w-full animate-ping rounded-full bg-wa/40"
          aria-hidden="true"
        />
        
        {/* Idle Attention Grabber / Pulse */}
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            repeat: Infinity,
            repeatDelay: 5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border border-wa/20"
        />

        <WhatsAppIcon className="relative h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      </span>
    </motion.a>
  );
}