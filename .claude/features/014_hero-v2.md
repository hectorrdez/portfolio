---
id: "014"
slug: hero-v2
title: Hero v2 (rediseño Stitch)
role: frontend
type: change
extends: "005"
---

# Hero v2 (rediseño Stitch)

## Description
Restyle del Hero según el mockup: eyebrows (rol + ubicación), widget tipo terminal y bento de
principios a la derecha, en vez del layout centrado simple actual. Usa tokens de la feature 012.

## Requirements
- Eyebrows (fila de pills sobre el título): "QA Analyst · Test Automation & Web/Mobile
  Accessibility" (`bg-surface-container-high text-primary`) y ubicación "Alicante, España" con
  icono `MapPin` (`bg-surface-container-low`). Sin inventar disponibilidad ("remoto/híbrido") si no
  se ha confirmado con el usuario — usar solo la ubicación real del CV.
  Ver `notes.md` para el mapeo de iconos Material→lucide de la 012.
- Layout `lg:grid-cols-12`: columna principal (8/12) con H1 + párrafo + CTAs; columna lateral (4/12)
  con el bento de principios.
- Párrafo lead: mantener el contenido real ya escrito en la 005 (fiel al CV), con el mismo permiso
  de resaltar en `font-semibold` las tecnologías clave.
- Widget "terminal" (elemento decorativo bajo el párrafo, `bg-surface-container-lowest rounded-xl`,
  barra con 3 puntos + texto `qa-automation-runner --profile=accessibility`): usarlo como pieza
  visual de marca, **sin cifras inventadas como si fueran datos en vivo** (nada de "142 passed" o
  duraciones ficticias). Contenido honesto: puede listar herramientas reales (Java · Selenium ·
  Cucumber · Appium · Axe-core · Docker) o principios que sigue, en formato `font-code-sm`, sin
  afirmar resultados de una ejecución real que no existe.
- Bento lateral (2 tarjetas `bg-surface-container rounded-xl`): usar hechos defendibles, no KPIs
  inventados. P.ej.:
  1. "Target Size WCAG 2.2" → `≥ 44×44 px` con descripción de que es el criterio 2.5.8 que aplica en
     sus auditorías (principio que sigue, no medición del propio sitio).
  2. Un segundo dato real de su trabajo (p.ej. "Integración Axe en CI/CD" con descripción breve del
     rol en DXC) en vez de "100% Trazabilidad" (marketing sin base).
- CTAs: mantener "Contactar conmigo" → `#contacto` (Button primary) y añadir "Descargar CV (PDF)"
  aquí también si mejora la conversión (usa el asset real `/cv/HectorRodriguezTovar_cv.pdf` de la
  feature 009 — no el patrón `mailto` de solicitud de CV del mockup, ya tenemos descarga directa) —
  opcional, evaluar si no sobrecarga el hero; como mínimo mantener el CTA a "Explorar proyectos"
  → `#proyectos`.
- Mantener `useScrollReveal` para la entrada del bloque principal (mismo patrón que el resto de
  secciones).

## Touches existing endpoints
no

## Done when
- Hero renderiza eyebrows, layout de 2 columnas, widget terminal y bento sin datos inventados.
- CTAs navegan correctamente (`#contacto`, `#proyectos`, y descarga de CV si se añade).
- Playwright: test que verifica el contenido real del hero sigue presente (nombre, rol) y que el
  widget/bento no contienen las cifras fabricadas del mockup original (ninguna asegura "142 passed"
  ni "100%").
- test.cjs es verde.
