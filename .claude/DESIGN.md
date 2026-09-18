# Design system - frontend guidelines
# [frontend only] Read before building or changing any UI. Keeps pages visually coherent.
# RULE: the real tokens live in code (tailwind.config / theme.ts / CSS vars; or Compose theme / res-values).
#       This file documents usage rules and points at those tokens - it does NOT duplicate their values,
#       so they can't drift. Put machine-checkable rules (no raw hex, use components) into lint in test.cjs.

## Tokens - source of truth
Where the real values live (edit this pointer, not copies of the values):
- Colors: `src/index.css` (`@theme` block — Tailwind v4, no `tailwind.config.js`)
- Typography scale: `src/index.css` (`@theme` block, `--font-*` / `--text-*` vars, feature 002)
- Spacing scale: Tailwind default spacing scale (no custom override unless a specific need appears)
- Dark mode: `src/contexts/ThemeProvider.tsx` (currently an empty stub — feature 003 implements it)
  toggling a `data-theme="dark"` (or `.dark` class) on `<html>`; dark values live alongside light
  ones in `src/index.css` under a `[data-theme="dark"]` (or `.dark`) override block.

## Colors - usage
- primary (`--color-primary`): accent used sparingly — CTAs, active nav link, links, icon highlights.
  Apple-style: mostly neutral surfaces, primary reserved for the one thing that should draw the eye.
- secondary (`--color-secondary`): subtle backgrounds, borders, disabled/secondary buttons.
- neutrals (bg/surface/border/text): the majority of the UI. Light mode: near-white surfaces, near-black
  text. Dark mode: near-black surfaces, near-white text. Never pure `#000`/`#fff` for large areas.
- semantic (success/warning/error/info): not needed yet (no forms/data states) — add only if a
  feature introduces one, and put it in the `@theme` block, not inline.
Rule: never hardcode a hex in a component. Use the token (Tailwind class backed by the CSS var, e.g.
`bg-(--background-color-header)` or a `@theme`-generated utility).

## Typography
- Font families: system font stack (Tailwind default) unless feature 002 adds a specific typeface —
  Apple-style relies on generous size/weight/spacing more than a custom font.
- Scale + weights: large, confident headings for the hero (H1 well above body size), clear step-down
  for section headings, comfortable body line-height (~1.5-1.6).
- Rule: one H1 per page (the hero name/tagline). Section titles are H2. Never skip a heading level.

## Spacing & layout
- Spacing unit: Tailwind's default 4px-based scale — no arbitrary px values in components.
- Container max width: `max-w-5xl` (or project equivalent) centered, generous side padding on mobile.
- Breakpoints: Tailwind defaults (`sm md lg xl`) — mobile-first.
- Grid / gutters: generous vertical rhythm between sections (large `py-*`); avoid cramped stacking —
  whitespace is a deliberate part of the Apple look, not empty space to fill.

## Components - reuse, do not re-roll
Canonical components that MUST be reused instead of hand-built (`src/components/`):
- `controls/Button.tsx`, `controls/ButtonLink.tsx`, `controls/ButtonToogle.tsx` (repurpose for the
  dark-mode toggle), `cards/Card.tsx`, `placing/Row.tsx` / `Column.tsx` (+ `Inverted` variants).
Rule: if a primitive exists, use it. New shared primitives go in `src/components/`, not inline in a page.

## States
No data-fetching in this project (static content from the CV) — no loading/empty/error states needed.
The only stateful UI is the dark-mode toggle (persisted) and scroll-reveal animations (see below).

## Interaction & accessibility
- Focus states: visible focus ring on every interactive element (links, buttons, toggle) — never
  `outline-none` without a replacement. Keyboard nav must reach nav links, toggle, and contact links.
- Hover/active: subtle (slight opacity/scale/underline shift), never jarring; consistent timing
  (~150-250ms `ease-out`) across all interactive elements.
- Motion: scroll-reveal via `IntersectionObserver` (no library) — fade + small translate-Y on entry,
  respect `prefers-reduced-motion` (skip/shorten animation when set).
- A11y baseline (user is a professional accessibility QA — hold this to a high bar): WCAG AA contrast
  minimum on all text/background pairs (both themes), semantic landmarks (`nav`, `main`, `footer`),
  descriptive link text (no bare "aquí"), `alt` text on any meaningful image, accessible name on the
  dark-mode toggle and CV download button.

## Voice / UI copy (optional)
- Tone: profesional pero cercano/humano, en español. Frases cortas, sin jerga corporativa vacía.
  Los CTAs son claros y directos ("Descargar CV", "Contactar"), no genéricos ("Haz clic aquí").
