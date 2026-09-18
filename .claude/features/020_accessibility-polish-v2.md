---
id: "020"
slug: accessibility-polish-v2
title: Pulido de accesibilidad v2 (rediseño Stitch)
role: frontend
type: change
extends: "010"
---

# Pulido de accesibilidad v2 (rediseño Stitch)

## Description
Cierre del rediseño: adopta las mejoras de accesibilidad reales del mockup de Stitch que la 010 no
cubría (foco tras scroll, anillo de foco de marca) y audita contraste/tap-target con la paleta nueva
de la feature 012 en ambos temas.

## Requirements
- Foco tras scroll por ancla: al navegar a una sección vía nav/CTA, además del scroll (ya
  implementado), asignar `tabindex="-1"` y `.focus({ preventScroll: true })` a la sección destino —
  mejora real de accesibilidad para usuarios de teclado/lector de pantalla (saben dónde "aterrizan").
  Implementarlo como un pequeño helper reutilizable (p.ej. en `useActiveSection.ts` o un nuevo
  `scrollToSection` en `utils/`) usado por todos los enlaces `href="#..."` del sitio, no un listener
  global ad-hoc como en el mockup (evitar duplicar lógica de scroll con el CSS `scroll-behavior:
  smooth` ya existente — solo añadir el manejo de foco).
- Anillo de foco de marca: `outline 2px solid` con el nuevo `primary` + `outline-offset: 2px` (ya
  definido de forma genérica en la 010 para `a`/`button` — actualizar el color al nuevo token
  `primary`, mantener el mecanismo).
- Auditoría de contraste con la paleta nueva (manual, ambos temas): confirmar AA (o el AAA que
  `DESIGN.md` v2 declara) en combinaciones texto/fondo realmente usadas — `on-surface`/`surface`,
  `on-surface-variant`/`surface-container*`, `on-primary-container`/`primary-container`, texto sobre
  `surface-container-lowest`. Ajustar cualquier tono que no llegue a AA (prioridad sobre seguir el
  mockup al pie de la letra — si un color de Stitch no pasa contraste real, se corrige, no se copia).
- Tap targets: confirmar que todo elemento interactivo nuevo introducido en 013-019 (botones de
  proyecto, tarjetas de contacto, chips que sean enlaces, toggle de tema) cumple ≥44×44px.
- Revisar `prefers-reduced-motion` sigue cubriendo cualquier animación/transición nueva introducida
  en el rediseño (hover states del bento, del widget terminal, etc.) — el reset global de la 010 ya
  cubre transiciones CSS estándar; confirmar que no se añadió ninguna animación por `@keyframes`
  fuera de ese reset.

## Touches existing endpoints
no

## Done when
- Navegar por ancla (click en nav o cualquier CTA `href="#..."`) mueve el foco del teclado a la
  sección destino, no solo el scroll visual.
- Anillo de foco visible con el color `primary` nuevo en todo el sitio.
- No quedan combinaciones texto/fondo por debajo de AA en las secciones tocadas por 013-019, en
  ambos temas (verificación manual, documentar cualquier ajuste de tono en `notes.md`).
- Playwright: test que verifica que tras click en un link de nav, el elemento con foco (`document.
  activeElement`) es la sección de destino (o su contenedor con `tabindex=-1`); test de overflow
  móvil de la 010 sigue pasando con el nuevo layout.
- test.cjs es verde.
