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
- lucide-react instalado (v1.47) no incluye iconos de marca (Linkedin, Github, etc.) - fueron removidos del paquete. Para enlaces a redes usar un icono generico (ExternalLink) + texto legible, no inventar un import que no existe.
- Patron de secciones (features 005-009): cada seccion es un componente propio en src/components/sections/ que renderiza su propio <section id=...>, y LandingPage.tsx reemplaza el placeholder <section id> generico de esa id por <NombreSeccion />. Animacion de entrada compartida: hook useScrollReveal<T>() (src/utils/useScrollReveal.ts) + clases CSS .reveal/.reveal-visible (src/index.css) - no reimplementar el IntersectionObserver por seccion.
- Tests Playwright: escopar locators al section#id de cada spec (page.locator('#seccion').getByText(...)) en vez de buscar en toda la pagina - el CV reusa frases parecidas entre secciones (p.ej. el rol de Hector aparece en Hero y en About) y un getByText global puede volverse ambiguo (strict mode violation) al anadir la siguiente seccion.
