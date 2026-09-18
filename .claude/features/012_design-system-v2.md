---
id: "012"
slug: design-system-v2
title: Sistema de diseño v2 (rediseño Stitch)
role: frontend
type: change
extends: "002"
---

# Sistema de diseño v2 (rediseño Stitch)

## Description
Reemplaza la paleta/tipografía "Apple-minimal" de la feature 002 por el sistema del rediseño de
Stitch (`stitch_qa_accessibility_portfolio_redesign/DESIGN.md`): estética "dev-tool" dark-first,
Inter + JetBrains Mono, paleta azul/verde/lima sobre superficies en capas (`surface-container-*`).
Es la base de tokens que consumen las features 013-020; hacerla primero.

## Requirements
- Reescribir `src/index.css` `@theme` con el set de tokens de
  `stitch_qa_accessibility_portfolio_redesign/DESIGN.md` (bloque YAML `colors`): `surface`,
  `surface-dim`, `surface-bright`, `surface-container-lowest/low/DEFAULT/high/highest`, `on-surface`,
  `on-surface-variant`, `outline`, `outline-variant`, `primary`/`on-primary`/`primary-container`/
  `on-primary-container`, `secondary`/`on-secondary`/`secondary-container`/`on-secondary-container`,
  `tertiary`/`on-tertiary`/`tertiary-container`/`on-tertiary-container`, `error` (+ variantes).
  Estos son los valores **dark** (tema por defecto del rediseño).
- Derivar el set **light** (no está en el YAML de Stitch, solo se describe en prosa: "porcelana
  cálida `#F8FAFC` con tinta `#0F172A`, mismos cobalto/esmeralda"). Aplica la misma lógica tonal que
  el dark pero invertida: superficies claras en capas (blanco → gris muy claro → gris claro para
  `surface-container-lowest→highest`), texto oscuro (`on-surface` ~`#0F172A`), mismos `primary`
  (`#2563EB`)/`secondary` (`#10B981`)/`tertiary` (`#84CC16`) — ajusta solo `on-primary` etc. si el
  contraste AA falla sobre las nuevas superficies claras.
- Sustituir el toggle de tema: el rediseño usa `[data-theme="dark"]` igual que ya tenemos (no `.dark`
  de Tailwind) — mantener el mecanismo actual de `ThemeProvider` (feature 003), solo cambiar los
  valores de los tokens.
- Tipografía: añadir Google Fonts Inter (400/500/600/700) y JetBrains Mono (500/600) vía `<link>` en
  `index.html` (mismo patrón que el proyecto Nexo del usuario — sin paquete npm). Definir en
  `@theme` los tokens de tamaño/interlineado/tracking del YAML (`headline-xl/lg/md/sm`, `body-lg/md/
  sm`, `code-lg/md/sm`, `label-md/sm`) como utilidades Tailwind v4 (`--text-*` / `--font-*`).
- Radios: `rounded` (0.25rem default), `rounded-lg` (0.5rem) — reemplaza la escala de radios previa.
- Iconos: el mockup usa "Material Symbols" (fuente de Google). **No añadir esa fuente** — mapear
  cada icono usado en el mockup a su equivalente `lucide-react` (ya instalado). Documentar la tabla
  de mapeo en `notes.md` para que las features 013-020 la reutilicen sin re-decidir, p.ej.:
  `verified_user→ShieldCheck`, `touch_app→Hand`, `terminal→Terminal`, `mail→Mail`, `call→Phone`,
  `work→Briefcase`, `location_on→MapPin`, `download→Download`, `arrow_forward→ArrowRight`,
  `expand_more→ChevronDown`, `check→Check`, `check_circle→CheckCircle2`,
  `settings_suggest→Settings2`, `policy→ShieldCheck`, `smartphone→Smartphone`, `groups→Users`,
  `science→FlaskConical`, `leaderboard→BarChart3`, `school→GraduationCap`, `contrast→Contrast`,
  `person→User`, `north_east→ArrowUpRight`, `open_in_new→ExternalLink`, `description→FileText`,
  `file_download→Download`, `visibility→Eye`, `dark_mode→Moon`, `light_mode→Sun`, `info→Info`,
  `equalizer→AudioLines`.
- Restyle de componentes base para el nuevo sistema (sombras duras/bordes en vez de sombras difusas,
  por `DESIGN.md` → "Elevation & Depth: Tonal Layering with Crisp Structural Borders"):
  - `Button.tsx`: primary = `bg-primary-container text-on-primary-container`; secondary = fondo
    `surface-container` + borde 1px `outline-variant`, tipografía `font-code-md`. Mantén min 44×44px.
  - `Card.tsx`: `bg-surface-container` + borde 1px `outline-variant` (sustituye `bg-surface-alt`).
  - `ButtonToogle.tsx`: pista off = `surface-container`, on = `primary-container`.
- Actualizar `.claude/DESIGN.md` (tokens/colores/tipografía/componentes) para reflejar el nuevo
  sistema — es la fuente de verdad que leerán las features 013-020.

## Touches existing endpoints
no

## Done when
- `src/index.css` define el nuevo set de tokens light+dark, sin residuos de los tokens de la 002
  (`surface`, `surface-alt`, `border`, `text`, `text-muted`, `accent`, `on-accent` ya no existen).
- Google Fonts Inter + JetBrains Mono cargan en `index.html`.
- Button/Card/ButtonToogle usan los tokens nuevos y siguen renderizando sin errores en el resto de
  secciones (aunque su contenido/copy no cambie todavía — eso lo hacen las features 013-020).
- `notes.md` tiene la tabla de mapeo de iconos Material→lucide.
- `.claude/DESIGN.md` actualizado.
- test.cjs es verde.
