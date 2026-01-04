## Quick orientation

- This is a small, static React + Vite portfolio built with TypeScript and Tailwind CSS.
- Entry points: `src/main.tsx` -> `src/App.tsx`. Vite config is in `vite.config.ts`.
- Components live under `src/components/` and follow the pattern: folder per component, an `index.tsx` entry and a same-named CSS file (e.g. `src/components/WhoAmI/index.tsx` + `WhoAmI.css`).

## Build & dev workflow (explicit)

- Local dev: `npm run dev` (runs `vite --host 0.0.0.0`). Site served by Vite (default port 5173).
- Production build: `npm run build` — runs `tsc -b` then `vite build`.
- Preview a build: `npm run preview`.
- Formatting: `npm run format` (Prettier). Linting: `npm run lint` (ESLint).

Examples to reference in-code:
- `package.json` scripts (root) show these commands.

## Project-specific patterns and conventions

- Component structure: each component folder usually exports a default React component via `index.tsx`. Example: `src/components/WhoAmI/index.tsx`.
- CSS: components import a local CSS file (e.g. `import "./WhoAmI.css"`). Prefer adding component-level CSS in that file rather than global styles.
- Refs & sections: the site uses a `Section` wrapper component (`src/components/ui/Section.tsx`) which is `forwardRef` + `framer-motion` animated. Many top-level sections use `forwardRef` for smooth scrolling (see `WhoAmI` and `App.tsx` scrollToSection).
- Animations: `framer-motion` is used throughout (`motion` imports). Keep animation props simple and use existing `Section` when adding new page sections.
- Assets: static assets live in `src/assets/` (images, logos) while the `public/` folder contains publicly-served files referenced by absolute paths (e.g. `/pict.png`). Use `src/assets` for importable images and `public/` for root-referenced files.
- Tailwind: styling is Tailwind-first; components mix Tailwind classes with local CSS for specifics. Avoid adding large stylesheet overrides—prefer utility classes.
- Default exports: most components use `export default`. When adding new components, follow the same pattern to keep imports concise (e.g. `import Menu from "./components/Menu"`).

## Integration points & dependencies

- No backend API in this repo — a static frontend site. External integrations are limited to external links (GitHub, LinkedIn) and images.
- Key dependencies to be aware of: `react`, `react-dom`, `vite`, `tailwindcss`, `framer-motion`, `react-icons`.
- Build sequencing: the `build` script runs TypeScript project references (`tsc -b`) before `vite build`. If adding types/config changes, ensure `tsc -b` passes locally.

## Code-editing tips for an agent

- When adding a new top-level section: create `src/components/<Name>/index.tsx`, `<Name>.css`, and export default the component. Wrap layout in `Section` and forward the ref if it should be targetable from the menu.
- For animations, reuse the `Section` animation defaults. If you need a custom animated container, use `motion` from `framer-motion` to match existing style.
- For images: prefer importing from `src/assets/...` for build-time bundling. Use `/pict.png` only when file is intentionally in `public/`.
- Keep TypeScript strictness consistent: components use explicit prop interfaces and `forwardRef` typings (see `WhoAmI` and `Section`). Match that style.

## Files to inspect for common patterns

- `src/App.tsx` — main composition, menu handlers, scroll behavior.
- `src/main.tsx` — app bootstrap.
- `src/components/ui/Section.tsx` — consistent section wrapper and animation pattern.
- `src/components/WhoAmI/index.tsx` — example of `forwardRef`, assets, and CSS import.
- `vite.config.ts` and `package.json` — build/dev commands and plugins (Tailwind Vite plugin).

If anything is unclear or you'd like the agent instructions to include examples for editing/deploying (CI, hosting), tell me which area to expand and I will iterate.
