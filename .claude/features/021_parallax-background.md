---
id: "021"
slug: parallax-background
title: Fondo decorativo con parallax y luz al hover
role: frontend
type: feature
extends: null
---

# Fondo decorativo con parallax y luz al hover

## Description
Capa de fondo decorativa, fija detrás de todo el contenido, con dos efectos: parallax sutil al
hacer scroll (unos "blobs" de gradiente se mueven a distinta velocidad que el contenido) y una luz
tipo foco que sigue el cursor al hacer hover sobre la página. Puramente visual/decorativo — nunca
interfiere con clics, foco de teclado ni lectores de pantalla, y respeta `prefers-reduced-motion`.

## Requirements
- Nuevo componente `src/components/decor/Background.tsx`: `<div aria-hidden="true"
  className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">` con 2-3 elementos "blob"
  (`div` con `radial-gradient`, `filter: blur(...)`, tamaño grande) tintados con `--color-primary`,
  `--color-secondary`, `--color-tertiary` a opacidad baja (~12-15%, más baja en tema claro si hace
  falta para no perder contraste — comprobar a ojo en ambos temas) + un elemento "spotlight"
  (`radial-gradient` más pequeño y con foco de luz, sigue el ratón).
- `z-index: -1` (Tailwind `-z-10` o equivalente) para quedar SIEMPRE detrás del contenido normal
  (headers/secciones/footer sin position ni z-index propio ya pintan por encima de un z-index
  negativo, no hace falta tocar el resto de layout — ver notes.md si hace falta más contexto).
- Parallax: hook `useParallaxBackground` (o lógica en el propio componente) que en un `useEffect`
  añade un listener de `scroll` en `window`, throttled con `requestAnimationFrame`, escribiendo la
  posición en una CSS custom property (`--scroll-y`) directamente sobre el elemento raíz de fondo
  vía `ref.current.style.setProperty(...)` — **no** guardar el scroll en estado de React (evitar
  re-renders en cada tick de scroll). Cada blob usa `--scroll-y` con un multiplicador distinto
  (`transform: translate3d(0, calc(var(--scroll-y) * 0.08), 0)`, `* 0.15`, etc.) para el efecto de
  profundidad.
- Hover/luz: listener de `mousemove` en `window`, también throttled con rAF, escribiendo `--mx`/
  `--my` (posición del cursor) sobre el mismo elemento. El spotlight usa esas variables para
  posicionar su gradiente (`left: var(--mx)`, `top: var(--my)`, con `transform: translate(-50%,
  -50%)`). En `mouseleave` de `window` (el ratón sale del viewport) o si nunca hubo `mousemove`
  (dispositivos táctiles), el spotlight permanece a opacidad 0 — transición suave de opacidad al
  entrar/salir.
- `prefers-reduced-motion: reduce`: **no añadir ninguno de los dos listeners** (usar
  `window.matchMedia("(prefers-reduced-motion: reduce)").matches` al montar, igual que ya hace
  `useScrollReveal`). El fondo se queda estático (blobs en su posición base, sin spotlight). Marcar
  este estado con un atributo testable, p.ej. `data-motion={reduced ? "static" : "reactive"}` en el
  elemento raíz del componente.
- Montar `<Background />` una sola vez, como primer hijo dentro de `Page.tsx` (antes del skip-link
  o justo después, da igual el orden visual ya que es `position: fixed`), para que exista en toda la
  landing sin duplicarlo por sección.
- Accesibilidad: `aria-hidden="true"` y `pointer-events-none` obligatorios (ya cubierto arriba) —
  confirmar que ningún test de navegación/clic existente se rompe (la capa no debe interceptar nada).
- Revisar manualmente que el contraste de texto sobre las secciones que no tienen su propio fondo
  opaco (Hero, unos cuantos títulos sueltos) se mantiene AA con el fondo decorativo en su punto más
  intenso, en ambos temas — si no, bajar la opacidad de los blobs/spotlight hasta que sí.

## Touches existing endpoints
no

## Done when
- El fondo se ve detrás del contenido en toda la página, con blobs que se desplazan de forma sutil
  al hacer scroll y una luz que sigue al cursor al mover el ratón.
- Bajo `prefers-reduced-motion: reduce`, el fondo es estático (sin reaccionar a scroll ni al ratón)
  y expone `data-motion="static"`.
- Ningún test existente de navegación/clics se rompe (la capa no intercepta punteros).
- Playwright: test que confirma `aria-hidden`/`pointer-events:none`; test que hace scroll y comprueba
  que `--scroll-y` (leído vía `getComputedStyle`) cambia; test que dispara `mousemove` y comprueba
  que `--mx`/`--my` cambian; test que con `reducedMotion: 'reduce'` confirma `data-motion="static"`
  y que esas variables NO cambian tras scroll/mousemove.
- test.cjs es verde.
