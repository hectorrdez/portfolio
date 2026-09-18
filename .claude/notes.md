# Project notes - constraints and learnings
# Append-only via add-note.cjs. Read before building. Reuse what's here; don't repeat past mistakes.
# Content can be in any language; this file is yours.

- Scaffold original es un template SaaS ("ScoutLog"). Feature 001 lo limpia: borra auth/private/
  pricing/products/resources/support/policies y el sidebar `Aside`. No reintroducir esas rutas.
- CV fuente de contenido: `../hector_cv.md` (raíz del repo padre) y `HectorRodriguezTovar_cv.pdf`
  (copiar el PDF a `public/cv/` para el botón de descarga, feature 009). No inventar datos que no
  estén en el CV.
- Sin librerías nuevas: usar solo React/Router/Tailwind/lucide-react ya instalados. Animaciones con
  CSS (transitions, `@keyframes`, `IntersectionObserver` nativo para scroll-reveal) — no framer-motion
  ni similares.
- Tailwind v4: tokens viven en `src/index.css` dentro de `@theme` (no hay `tailwind.config.js`).
  Editar ahí, no crear un config nuevo.
- Componentes reutilizables del scaffold a mantener: `Button`, `ButtonLink`, `Card`, `Row`/`Column`/
  `RowInverted`/`ColumnInverted`, `DropdownFloating`. Adaptar, no duplicar.

- Playwright webServer usa reuseExistingServer:false a proposito: en Windows npm run dev puede dejar un proceso vite huerfano tras un test.cjs anterior, sirviendo bundle viejo si se reutiliza. Ver playwright.config.ts.
- Correccion: DropdownFloating se borro en feature 001 (solo lo usaba el dropdown de perfil SaaS, sin otro consumidor). No esta disponible para reusar; si se necesita un menu flotante, crear uno nuevo cuando haga falta.
