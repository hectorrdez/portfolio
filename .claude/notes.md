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
- Rediseno v2 (features 012-020, desde stitch_qa_accessibility_portfolio_redesign/): mapeo de iconos Material Symbols -> lucide-react (no anadir la fuente de Google, usar lucide ya instalado): verified_user->ShieldCheck, touch_app->Hand, terminal->Terminal, mail->Mail, call->Phone, work->Briefcase, location_on->MapPin, download->Download, arrow_forward->ArrowRight, expand_more->ChevronDown, check->Check, check_circle->CheckCircle2, settings_suggest->Settings2, policy->ShieldCheck, smartphone->Smartphone, groups->Users, science->FlaskConical, leaderboard->BarChart3, school->GraduationCap, contrast->Contrast, person->User, north_east->ArrowUpRight, open_in_new->ExternalLink, description->FileText, file_download->Download, visibility->Eye, dark_mode->Moon, light_mode->Sun, info->Info, equalizer->AudioLines.
- Rediseno v2: DESIGN.md v2 solo trae valores dark (export M3 de Stitch). El tema light de src/index.css lo derive yo (no esta en el prototipo) reusando los roles M3 fixed/inverse del propio YAML donde existian (primary claro = inverse-primary #0053db, primary-container claro = primary-fixed #dbe1ff, on-primary-container claro = on-primary-fixed #00174b) y construyendo el resto (secondary/tertiary claros, superficies porcelana) a mano verificando contraste AA aproximado a ojo. Si se revisa el light theme, priorizar contraste real sobre fidelidad al mockup (el mockup es dark-first, no da valores light exactos).
- Rediseno v2 - desviacion deliberada del mockup de Stitch: el mockup oculta el nav por completo en movil (hidden lg:flex, sin alternativa). Se mantiene el nav visible en todos los breakpoints (pill horizontal con scroll, como ya se resolvio en la feature 011) porque el usuario es profesional de accesibilidad y perder la navegacion principal en movil sin sustituto seria una regresion real de usabilidad, no solo estetica.
- Correccion vs mockup Stitch: el mockup renombra el rol actual a 'QA Automation & Accessibility Engineer' - el CV real dice 'QA Automation & Accessibility Analyst' (Analyst, no Engineer). Se mantiene el titulo real del CV, no el inventado por el mockup.
