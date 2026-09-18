---
id: "005"
slug: hero-section
title: Sección Hero
role: frontend
type: feature
extends: null
---

# Sección Hero

## Description
Primera sección de la landing (`id="home"`): nombre, rol profesional y tagline breve, con una
animación de entrada sutil y un CTA que hace scroll a la sección de contacto. Es la primera
impresión — debe transmitir el look "tranquilo, moderno, Apple-style" pedido.

## Requirements
- Contenido (de `hector_cv.md`): "Héctor Rodríguez Tovar", rol "QA Analyst especializado en
  automatización de pruebas y accesibilidad", tagline corto derivado del resumen del CV (no copiar
  el párrafo entero — sintetizar a 1-2 frases con voz cercana, ver `DESIGN.md` → Voice).
  Alicante, España.
- CTA principal: botón que hace scroll a `#contacto` (reusar `Button`/`ButtonLink`).
- Animación de entrada: fade + translate-Y sutil al montar (CSS transition/`@keyframes`, respetando
  `prefers-reduced-motion`). Sin librerías de animación.
- Tipografía grande para el nombre (H1 único de la página, ver `DESIGN.md` → Typography).
- Layout centrado, mucho espacio en blanco, responsive mobile-first.

## Touches existing endpoints
no

## Done when
- Sección visible al cargar `/` con nombre, rol, tagline y CTA.
- CTA hace scroll suave a `#contacto`.
- Animación de entrada no bloquea la lectura (no tarda más de ~600ms) y se omite/reduce con
  `prefers-reduced-motion: reduce`.
- Playwright: test que verifica el contenido del hero y que el CTA navega/scrollea a contacto.
- test.cjs es verde.
