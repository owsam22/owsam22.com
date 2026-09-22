# Samarpan Web Solutions — owsam22.com

Marketing / services site for **Samarpan Web Solutions**. Pure frontend — React + TypeScript + Vite + Tailwind CSS v4. No backend, no database, no env variables.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs dist/ — deploy anywhere (shared hosting, Netlify, Cloudflare, GitHub Pages)
npm run preview  # preview the production build locally
```

## ✏️ Updating content (the only file you need)

Everything — prices, services, projects, FAQ, socials, messages — lives in one file:

```
src/config/site.ts
```

Open it, edit the text, rebuild, redeploy. Every editable block is commented.

### ⚠️ First thing to change

```ts
// src/config/site.ts
whatsappNumber: "919999999999"  // ← replace with YOUR number, digits only, country code first (no +, no spaces)
```

Every "WhatsApp" button on the site automatically uses this number with a pre-typed message. Update it in one place, it updates everywhere.

### Adding a project

In `src/config/site.ts`, add an entry to `FEATURED_WORK` (big cards with mini UI previews) or `MORE_WORK` (small links strip). Set `live: ""` to hide the demo button.

### Hiding a social link

Set its `url` to `""` in the `SOCIALS` array — the icon disappears everywhere automatically.

## Project structure

```
src/
├── config/site.ts          ✏️ ALL site content lives here
├── index.css               design tokens (colors, fonts, textures, keyframes)
├── App.tsx                 page assembly
└── components/
    ├── Nav.tsx             sticky header + mobile menu
    ├── Hero.tsx            headline, stats, CTAs
    ├── BriefBuilder.tsx    interactive WhatsApp chat widget (drafts the client's message)
    ├── Marquee.tsx         scrolling tickers
    ├── Services.tsx        what you sell
    ├── Work.tsx            mac-window project cards with CSS-only mockups
    ├── Process.tsx         4-step timeline
    ├── WhyMe.tsx           reasons + identity card + socials
    ├── Pricing.tsx         plans with per-plan WhatsApp deep links
    ├── FAQ.tsx             accordion
    ├── Contact.tsx         big CTA panel with rotating badge
    ├── Footer.tsx
    ├── WhatsAppFloat.tsx   floating chat button
    ├── icons.tsx           WhatsApp / social SVGs + hand-drawn arrow
    └── ui.tsx              reveal animations, section headings, counters
```

## Design system

Matches [portfolio.owsam22.com](https://portfolio.owsam22.com): warm paper `#f1eee6`, ink `#16140e`, accent `#ff4a1c`, WhatsApp green `#25d366`. Fonts: Space Grotesk (headings), Inter (body), Instrument Serif (italic accents), Caveat (handwritten notes).
