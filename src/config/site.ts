
/* ---------------------------- CONTACT ------------------------------- */

export const CONTACT = {
  brand: "Samarpan Web Solutions",
  shortBrand: "SWS",
  owner: "Samarpan Jayswal",
  role: "Founder & Full-Stack Developer",

  // ✏️ TODO — put YOUR WhatsApp number here (international format, digits only)
  whatsappNumber: "916203771648",

  email: "22.samarpan@gmail.com",
  location: "India · works worldwide",
  replyTime: "usually replies within a few hours",

  portfolioUrl: "https://portfolio.owsam22.com",
  portfolioLabel: "portfolio.owsam22.com",
};

/* ---------------------------- SOCIALS -------------------------------
   Leave `url` as "" to hide a social icon automatically.          */

export const SOCIALS = [
  { label: "GitHub", url: "https://github.com/owsam22", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/owsam22", icon: "linkedin" },
  { label: "Email", url: "mailto:22.samarpan@gmail.com", icon: "mail" },
  { label: "X / Twitter", url: "", icon: "x" }, // ✏️ add url to enable
  { label: "Instagram", url: "", icon: "instagram" }, // ✏️ add url to enable
] as const;

export const ACTIVE_SOCIALS = SOCIALS.filter((s) => s.url.trim() !== "");

/* ------------------------- WHATSAPP HELPER --------------------------
   Builds a wa.me link with a prefilled message. Used everywhere.    */

export const waLink = (message: string): string =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WA_MESSAGE =
  "Hi Samarpan! I found Samarpan Web Solutions and I'd like to discuss a project.";

/* ------------------------------ NAV -------------------------------- */

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* ------------------------------ HERO ------------------------------- */

export const HERO = {
  badge: "project slots open this month",
  titleTop: "We build fast websites &",
  titleItalic: "smart tools",
  titleBottom: "that grow your business.",
  subtitle:
    "Landing pages, web apps and WhatsApp automations — designed, built and shipped by one developer at launch prices. I keep my client list small on purpose: fewer projects, more hours on yours. No agencies. No middlemen.",
  primaryCta: "Start on WhatsApp",
  secondaryCta: "See my work",
  annotation: "you talk directly to the developer — me ↓",
};

// ✏️ Update these numbers as you grow.
export const STATS: { value: number; prefix: string; suffix: string; label: string }[] = [
  { value: 6, suffix: "/6", label: "happy clients — every single one", prefix: "" },
  { value: 2, suffix: "-4", label: "days for a landing page", prefix: "" },
  { value: 24, suffix: "h", label: "max. reply time", prefix: "<" },
  { value: 100, suffix: "%", label: "built by me, end to end", prefix: "" },
];

/* --------------------------- MARQUEE STRIPS ------------------------- */

export const MARQUEE_SERVICES = [
  "Business Websites",
  "Landing Pages",
  "Web Apps",
  "Dashboards",
  "Automations",
  "AI Tools",
  "WhatsApp Bots",
  "SEO & Speed",
];

export const MARQUEE_VALUES = [
  "Mobile-first, always",
  "Loads in under 2s",
  "Fixed quotes, no surprises",
  "You talk to the developer",
  "Launch support included",
  "Clean, maintainable code",
];

/* ---------------------------- SERVICES ------------------------------ */

export type Service = {
  icon: "globe" | "layout" | "bot" | "wrench";
  title: string;
  tagline: string;
  idealFor: string;
  points: string[];
  priceHint: string;
  waMessage: string;
};

export const SERVICES: Service[] = [
  {
    icon: "globe",
    title: "Business Websites",
    tagline: "Look credible. Convert visitors into customers.",
    idealFor: "shops, clinics, consultants, startups & personal brands",
    points: [
      "Landing pages & multi-page sites that load in under 2 seconds",
      "SEO-ready structure so customers actually find you on Google",
      "WhatsApp / contact forms wired straight to your phone",
      "Google Maps, reviews, menus, galleries — whatever you need",
    ],
    priceHint: "from ₹5,999",
    waMessage:
      "Hi Samarpan! I need a business website. Can we discuss what it would look like for my business?",
  },
  {
    icon: "layout",
    title: "Web Apps & Dashboards",
    tagline: "The internal tool you keep wishing existed.",
    idealFor: "teams drowning in spreadsheets and manual work",
    points: [
      "Admin panels, client portals, booking & tracking systems",
      "Logins, roles and permissions that keep data safe",
      "Real-time updates — no refresh, no waiting",
      "Built with React + TypeScript so it scales as you grow",
    ],
    priceHint: "custom quote",
    waMessage:
      "Hi Samarpan! I want to discuss a web app / dashboard for my business. Here's roughly what I need:",
  },
  {
    icon: "bot",
    title: "Automations & AI Tools",
    tagline: "Put the boring, repetitive work on autopilot.",
    idealFor: "anyone losing hours to copy-paste, follow-ups & reports",
    points: [
      "WhatsApp auto-replies, lead capture & follow-up sequences",
      "Google Sheets / email / CRM integrations that talk to each other",
      "AI features — chatbots, summarizers, smart search for your data",
      "Scheduled reports delivered to your inbox or WhatsApp",
    ],
    priceHint: "from ₹9,999",
    waMessage:
      "Hi Samarpan! I'm interested in automating parts of my business. The most time-consuming thing I do is:",
  },
  {
    icon: "wrench",
    title: "Fix, Speed & Rescue",
    tagline: "Slow, broken or dated site? No rebuild needed.",
    idealFor: "businesses with an existing site that underperforms",
    points: [
      "Speed & Core Web Vitals tune-ups — stop losing impatient visitors",
      "Design refresh that keeps your content, drops the clutter",
      "Bug fixes, broken forms, mobile layout repairs",
      "Honest audit first: I'll tell you what to fix and what to skip",
    ],
    priceHint: "from ₹2,999",
    waMessage:
      "Hi Samarpan! My current website needs fixing / a refresh. Here's the link:",
  },
];

/* ------------------------------ WORK --------------------------------
   ✏️ Add, remove or reorder projects freely. Set `live` to "" to hide
   the live-demo button.                                             */

export type Project = {
  name: string;
  windowTitle: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  github: string; // "" = no public repo (client work) — source button hides automatically
  live: string; //   "" = no live link — demo button hides automatically
  liveLabel?: string;
  mock: "finance" | "chat" | "galaxy" | "pixel" | "safari";
};

export const FEATURED_WORK: Project[] = [
  {
    name: "Sukoon Safari",
    windowTitle: "rajajijunglesafaribooking.com — live & booking",
    category: "Client website",
    year: "2026",
    description:
      "A complete safari booking website for Rajaji National Park — safari timings, zone details, transparent packages and instant WhatsApp booking. Clean, fast and built to convert visitors into reservations.",
    stack: ["React", "WhatsApp Booking", "SEO", "Mobile-first"],
    github: "",
    live: "https://www.rajajijunglesafaribooking.com/",
    liveLabel: "Visit live site",
    mock: "safari",
  },
  {
    name: "Accrue",
    windowTitle: "accrue — finance, finally organised",
    category: "Full-stack SaaS",
    year: "2026",
    description:
      "A personal finance manager with multi-account tracking, bills, budgets and seamless cross-device sync through one unified backend.",
    stack: ["React", "Node.js", "MongoDB", "Google Sync"],
    github: "https://github.com/owsam22/Accrue-web",
    live: "",
    mock: "finance",
  },
  {
    name: "QuickChat",
    windowTitle: "quickchat — talk in seconds",
    category: "Real-time web app",
    year: "2025",
    description:
      "A zero-signup real-time chat engine with QR-code room entry, live presence tracking and session persistence. Open, scan, talk.",
    stack: ["TypeScript", "WebSockets", "React"],
    github: "https://github.com/owsam22/quick-chat",
    live: "",
    mock: "chat",
  },
  {
    name: "Pixel Engineer",
    windowTitle: "pixel-engineer — a tiny living world",
    category: "Interactive art",
    year: "2024",
    description:
      "A live wallpaper built with PixiJS: autonomous AI characters, combat mechanics, parallax depth and a custom finite state machine.",
    stack: ["PixiJS", "Canvas", "FSM AI"],
    github: "https://github.com/owsam22/pixel-engineer-live-wallpaper",
    live: "",
    mock: "pixel",
  },
];

/* -------------------------- TESTIMONIALS -----------------------------
   ✏️ EDIT quotes freely — add client real names when allowed.        */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  project: string;
  url: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had a great experience working with Samarpan for my Rajaji Jungle Safari booking website. He did an excellent job from start to finish. The website is clean, fast, user-friendly, and exactly as I wanted. He understood my requirements perfectly and completed the work with professionalism and on time. Highly recommended to anyone looking for a reliable website developer. Thank you, Samarpan, for your amazing work and support!",
    author: "Aadil Bhadana",
    role: "Owner, Sukoon Safari",
    project: "rajajijunglesafaribooking.com",
    url: "https://www.rajajijunglesafaribooking.com/",
  },
];

export const CLIENT_PROOF_NOTE = "6 clients so far — and all 6 are happy clients.";

export const MORE_WORK = [
  {
    name: "Portfolio Template",
    note: "Free React + Vite portfolio used by other developers.",
    tag: "Open source",
    github: "https://github.com/owsam22/portfolio",
    live: "https://portfolio-template.owsam22.com",
  },
  {
    name: "Synkin",
    note: "npm CLI to preview localhost sites on Android over USB.",
    tag: "Dev tool",
    github: "https://github.com/owsam22/synkin-page",
    live: "",
  },
  {
    name: "Coming Soon Page",
    note: "Free under-construction template — forked 9+ times.",
    tag: "Open source",
    github: "https://github.com/owsam22/under-construction-page",
    live: "",
  },
  {
    name: "Visit My Portfolio",
    note: "know more about me and my works",
    tag: "personal portfolio",
    live: "https://portfolio.owsam22.com"
  }
];

/* ----------------------------- PROCESS ------------------------------ */

export const PROCESS = [
  {
    step: "01",
    title: "We talk on WhatsApp",
    time: "Day 0 · free",
    description:
      "You message me what you need — in plain words, not tech jargon. I ask a few questions and we figure out if I'm the right fit.",
  },
  {
    step: "02",
    title: "Fixed scope & fixed quote",
    time: "1–2 days",
    description:
      "You get a written scope: exactly what's included, the timeline and a fixed price. It only changes if you change the plan.",
  },
  {
    step: "03",
    title: "Design & build, with updates",
    time: "3 days – 4 weeks",
    description:
      "I build and send you a live preview link early. You watch it come together and give feedback while it's cheap to change.",
  },
  {
    step: "04",
    title: "Launch & aftercare",
    time: "30 days included",
    description:
      "Domain, hosting, deployment — handled. After launch you get 30 days of free fixes, and optional monthly care after that.",
  },
];

/* ----------------------------- WHY ME ------------------------------- */

export const WHY_ME = [
  {
    title: "You talk to the developer",
    text: "No account managers, no ticket queues, no “let me check with the tech team”. The person you message is the person who builds.",
  },
  {
    title: "Few clients, full attention",
    text: "I keep my client list deliberately small — six right now, and all six are happy. Your project gets my best hours, not my leftovers, and every detail gets a second look.",
  },
  {
    title: "Fixed quotes, on paper",
    text: "You approve the price before I write a line of code. Scope changes? We re-quote before, never invoice-surprise after.",
  },
  {
    title: "Speed is a feature",
    text: "I obsess over load times because Google rankings and impatient visitors do too. Your site will feel instant.",
  },
  {
    title: "Built on a modern stack",
    text: "React, TypeScript and a clean codebase — the same tech serious products use, so your site ages well and any dev can pick it up.",
  },
  {
    title: "Business first, tech second",
    text: "I ask about your customers before your colour palette. Every page exists to move a number: calls, bookings, sales.",
  },
  {
    title: "Still here after launch",
    text: "30 days of fixes included, honest advice forever, and a care plan if you'd rather never think about your website again.",
  },
];

export const WHY_QUOTE = {
  big: "You message me. I answer. I build. It ships.",
  note: "— and I'd rather lose a sale than waste your money",
};

/* ----------------------------- PRICING ------------------------------
   ✏️ Adjust prices freely. Use "Custom" style strings if preferred.  */

export type Plan = {
  name: string;
  blurb: string;
  price: string;
  priceNote: string;
  features: string[];
  highlight: boolean;
  waMessage: string;
};

export const PLANS: Plan[] = [
  {
    name: "Starter Site",
    blurb: "Get online properly — fast.",
    price: "₹5,999",
    priceNote: "onwards · launch rate · one-time",
    features: [
      "1–3 page website, mobile-first",
      "WhatsApp & contact integration",
      "Basic on-page SEO + Google Business link-up",
      "Loads in under 2 seconds",
      "Live within a week",
    ],
    highlight: false,
    waMessage: "Hi Samarpan! I'm interested in the Starter Site package. My business is:",
  },
  {
    name: "Business Website",
    blurb: "The full presence that sells for you.",
    price: "₹9,999",
    priceNote: "onwards · launch rate · one-time",
    features: [
      "Up to 10 pages + blog / updates section",
      "Copy polish & conversion-focused layout",
      "Advanced SEO, analytics & speed reports",
      "Gallery, testimonials, maps — custom sections you need",
      "30 days of post-launch fixes included",
    ],
    highlight: true,
    waMessage: "Hi Samarpan! I'd like to discuss the Business Website package. My business is:",
  },
  {
    name: "Web App / Automation",
    blurb: "Custom tools that run your business.",
    price: "Custom",
    priceNote: "fixed quote after a free chat",
    features: [
      "Dashboards, portals, internal tools",
      "Logins, roles & real-time data",
      "WhatsApp / CRM / Sheets automations",
      "AI features where they actually help",
      "Scoped, milestone-based delivery",
    ],
    highlight: false,
    waMessage: "Hi Samarpan! I need a custom web app / automation. Roughly, I want to:",
  },
];

export const PRICING_NOTE =
  "These are launch rates — I'm building my name, so you get senior-level attention at a fraction of agency prices. Every quote is fixed in writing before work starts. Not sure which fits? Message me — a 15-minute chat is free and genuinely useful.";

/* ------------------------------- FAQ -------------------------------- */

export const FAQS = [
  {
    q: "How do we start?",
    a: "Just send me a WhatsApp message describing what you need — a sentence is enough. We'll do a free 10–15 minute discussion, then I send you a written scope with a fixed price and timeline. You only pay a small token advance to book the slot.",
  },
  {
    q: "How long does a website take?",
    a: "A landing page: 2-4 days. A full business website: 1–2 weeks. Web apps and automations: 2–4 weeks depending on scope — you'll get an exact timeline in your quote, and I stick to it.",
  },
  {
    q: "I don't have a domain or hosting. Is that a problem?",
    a: "Not at all. I'll set everything up for you — domain, hosting, deployment and business email if you want it. You'll own all of it, in your name, from day one.",
  },
  {
    q: "What do you need from me?",
    a: "Your logo (if you have one), photos and a rough idea of what your customers should do on the site — call, book, buy, message. I help with the copy and structure, so don't worry if you're starting from zero.",
  },
  {
    q: "Do you also redesign or fix existing websites?",
    a: "Yes — that's one of my most common jobs. I audit your current site for free, tell you honestly what's worth fixing, and handle speed, SEO, mobile layout and design issues without forcing a full rebuild.",
  },
  {
    q: "What happens after the site goes live?",
    a: "You get 30 days of free fixes for anything that's not working as agreed. After that, an optional monthly care plan covers updates, backups and small changes — or you can simply message me whenever you need something.",
  },
];

/* ------------------------------- CTA -------------------------------- */

export const CTA = {
  titleA: "Have something",
  titleB: "to build?",
  subtitle:
    "Tell me about it in one WhatsApp message. Worst case, you leave the chat with a clear plan and an honest price. Best case, you've found your developer.",
  emailLabel: "Prefer email?",
};

/* --------------------- BRIEF BUILDER (hero chat) -------------------- */

export const BRIEF = {
  botHello: "Hi! Samarpan here. Tell me what you're planning — pick from below and I'll draft the WhatsApp message for you.",
  botAfterPick: "Nice. Anything else? You can pick more than one.",
  botDone: "Got it. Your message is ready — hit send and I'll personally reply within 24 hours.",
  needOptions: ["A business website", "A web app / tool", "Automation for my work", "Fixing my current site"],
  budgetOptions: ["Under ₹6k", "₹6k – ₹15k", "₹15k+", "Not sure yet"],
  sendLabel: "Send on WhatsApp",
};
