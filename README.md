# Avenor — Men's Grooming Salon

> A premium, fully responsive men's salon brand website built with React 18, Vite 6, Three.js and GSAP. Features a dual-theme design system, interactive 3D hero scene, 5-step booking funnel, product cart, and testimonials carousel — deployed on Vercel.

**Live demo:** https://avenor-salon.vercel.app · **GitHub:** https://github.com/anshmehta2305-spec/avenor-salon

---

## Screenshots

| Dark Mode (default) | Light Mode |
|---|---|
| *(add screenshot here)* | *(add screenshot here)* |

---

## Features

| # | Feature | Detail |
|---|---|---|
| 1 | **Dual-theme design system** | Dark / Light themes via CSS custom properties; default dark enforced before first paint to prevent flash |
| 2 | **Three.js 3D hero scene** | WebGL canvas with OrbitControls, lighting, and clean dispose/unmount lifecycle |
| 3 | **GSAP scroll animations** | Section reveals, staggered card entrances, parallax effects |
| 4 | **5-step booking funnel** | Multi-select services, barber picker, date/time, client details, confirmation with `AVN-XXXXXX` reference code (client-side) |
| 5 | **Product cart + checkout** | Add to cart, quantity controls, cart drawer, order confirmation with `AVN-ORD-XXXXXX` reference (client-side) |
| 6 | **Services section with filtering** | Category tabs filter 7 services; each opens a protocol detail modal |
| 7 | **Testimonials carousel** | Auto-advance carousel + 4-outlet map switcher |
| 8 | **FAQ accordion** | Single-open accordion (closing previous item on expansion) |
| 9 | **Contact form** | Required-field validation with XSS-safe text rendering |
| 10 | **Fully responsive** | Zero horizontal overflow across 360 px → 1920 px (verified via automated tests) |
| 11 | **Accessibility** | All 32 images have alt text; all 158 interactive elements have accessible labels |
| 12 | **Security** | All 3 external links enforce `rel="noopener noreferrer"` |

> **No backend / No API.** This is a 100 % client-side React SPA. Booking, cart, and order states live in React `useState`. Reference codes are generated with `Math.random()` on the client. No data is persisted beyond the browser session.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI framework | React | ^18.3.1 |
| Build tool | Vite | ^6.4.5 |
| 3D rendering | Three.js | ^0.174.0 |
| Animation | GSAP | ^3.12.7 |
| Icons | Lucide React | ^1.16.0 |
| Styling | Tailwind CSS | ^3.4.17 |
| Class utilities | clsx + tailwind-merge | ^2.1.1 / ^2.6.0 |
| Confetti | canvas-confetti | ^1.9.4 |
| Deployment | Vercel (Hobby) | — |

---

## Project Structure

```
men website/
├── public/              # Static assets, favicons, og-image, site.webmanifest
├── src/
│   ├── components/      # 20 active React components
│   │   ├── Hero.jsx
│   │   ├── HeroThreeScene.jsx   # Three.js WebGL scene
│   │   ├── Navbar.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── BookingModal.jsx
│   │   ├── ReviewsAndMapSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── App.jsx          # Root component; theme + modal + cart state
│   └── index.css        # Full dual-theme CSS variable system
├── index.html           # Strict dark-mode default script, OG tags, favicon suite
├── vite.config.js
├── vercel.json          # SPA rewrite rule + build config
└── package.json
```

---

## Local Setup

**Prerequisites:** Node.js ≥ 18, npm ≥ 9

```bash
# 1. Clone
git clone https://github.com/anshmehta2305-spec/avenor-salon.git
cd avenor-salon

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

```bash
# Production build (output: dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Deployed on **Vercel** via GitHub import.

`vercel.json` configuration:
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Vercel auto-detected Vite, runs `npm run build`, serves the `dist/` folder. The rewrite rule ensures client-side routing works correctly on direct URL access.

---

## Automated QA

24 test cases were run via a custom Chrome DevTools Protocol (CDP) script using headless Chrome — no testing framework (no Jest/Vitest). Tests cover: load errors, SEO structure, navigation anchors, service filtering, modals, cart, booking funnel, carousel, FAQ, contact form, 5 viewport breakpoints, accessibility, external link security, 3D canvas lifecycle, theme default, and contrast.

**Final result: 24/24 PASS**

---

## License

This project is for portfolio demonstration purposes.
