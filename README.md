# Omega Technology Website (Stage 2: frontend)

React + TypeScript + Tailwind CSS. Single-page homepage with a cinematic hero,
a lightweight 3D scene, and English / Persian / Dari (with right-to-left layout).

> STATUS: the source code was written WITHOUT installing packages. It has NOT
> been built, type-checked or run. Expect to fix small errors on the first run.

## Files

    package.json, index.html, vite.config.ts, tsconfig.json
    postcss.config.js, tailwind.config.ts, .gitignore, .stackblitzrc, .env.example
    BRANDING.md                     brand analysis (design reference)
    public/brand/README.md          where the original logo goes
    src/main.tsx, App.tsx, index.css, vite-env.d.ts
    src/config/brand.ts             logo setting (placeholder until you add the logo)
    src/config/site.ts              real company info (email, Instagram, Facebook name)
    src/i18n/translations.ts        all English / Persian / Dari text
    src/i18n/LanguageContext.tsx    language state, <html lang dir>, title
    src/lib/cn.ts, src/hooks/useReveal.ts
    src/components/brand/Logo.tsx   logo component + marked placeholder
    src/components/ui/              Icon, Container, Button, Reveal, SectionHeading
    src/components/layout/          Header, LanguageSwitcher, Footer
    src/components/three/HeroScene.tsx   dependency-free 3D globe (canvas)
    src/sections/                   Hero, About, Services, Projects, Contact

## Dependencies (installed later with `npm install`)

Runtime: `react`, `react-dom`
Dev: `vite`, `@vitejs/plugin-react`, `typescript`, `tailwindcss` (v3), `postcss`,
`autoprefixer`, `@types/react`, `@types/react-dom`

Version numbers in package.json were written from memory and not checked against
the registry. If `npm install` complains about a version, loosen it (e.g. `latest`).

Deliberately NOT included yet: Three.js / React Three Fiber (the 3D globe works
without them), Framer Motion (animations use CSS), React Router and Supabase
(Stage 3).

## Run from an Android phone (no computer)

### Option A: StackBlitz (browser-based dev environment)
1. Open `open-in-stackblitz.html` (sent with this project) in Chrome on your phone.
2. Tap "Open in StackBlitz". It creates the project and runs `npm install` and
   `npm run dev` in the browser.
3. Use Chrome menu > "Desktop site" if the editor looks cramped.

Not tested: StackBlitz support on mobile browsers can be limited. If it does not
start, use Option B.

### Option B: GitHub + Codespaces or StackBlitz import
1. Create a free GitHub account and a new repository (Chrome > Desktop site).
2. Add the files (Add file > Create new file; typing `src/App.tsx` as the name
   creates folders). Contents are in `ALL_FILES.md`.
3. Open the repo in Codespaces (Code > Codespaces) or go to
   `stackblitz.com/github/<your-user>/<your-repo>`.

## Adding your logo
Copy the original logo into `public/brand/` and set `logoSrc` in
`src/config/brand.ts`, for example `logoSrc: '/brand/omega-logo.png'`.

## Placeholders and things to review
- Logo: placeholder until you add the original file.
- Projects: three "Coming soon" slots. No fake projects, clients or statistics.
- Contact form: opens your email app (mailto). No data is stored until Stage 3.
- Facebook: only the name "Omega Technology" is shown; add the page URL in `src/config/site.ts`.
- Persian and Dari text is a first draft: have a native speaker review it.
- Fonts load from Google Fonts. For production, self-hosting them is better.

## Stage 3 (not built yet)
Supabase database and authentication, admin dashboard (content, services,
portfolio, images, messages, company info), separate pages and routing,
security policies, testing, and deployment on a free host.
