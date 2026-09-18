---
id: "010"
slug: motion-polish
title: Pulido final de micro-interacciones y accesibilidad
role: frontend
type: feature
extends: null
---

# Pulido final de micro-interacciones y accesibilidad

## Description
Pasada final de coherencia sobre todas las secciones construidas (005-009): unificar timings de
transición, asegurar estado de link activo en el nav durante el scroll, revisar accesibilidad de
principio a fin (área de expertise del propio usuario, así que el listón es alto), y cualquier
detalle visual "Apple-style" que haya quedado inconsistente entre secciones.

## Requirements
- Nav (feature 004): confirmar que el link activo se resalta correctamente según la sección visible
  en cada punto del scroll (no solo al hacer click).
- Unificar duraciones/easing de todas las transiciones y animaciones de scroll-reveal introducidas
  en 005-009 (misma curva, mismos tiempos, salvo razón justificada).
- `prefers-reduced-motion`: confirmar que TODAS las animaciones (hero, scroll-reveal, toggle,
  hover) lo respetan, no solo el hero.
- Auditoría de accesibilidad manual + automatizada ligera: contraste AA en ambos temas, landmarks
  semánticos (`header`/`nav`/`main`/`footer`/`section` con `aria-label`/`id` donde aplique), orden
  de foco lógico con teclado (Tab recorre nav → secciones → contacto en orden visual), texto
  alternativo en cualquier imagen/ícono decorativo vs informativo (`aria-hidden` en decorativos).
- Meta tags básicos en `index.html`: `<title>`, `<meta name="description">`, favicon (ya existe
  `public/favicon.svg` — confirmar que se usa), `lang="es"` en `<html>`.
- Revisar responsive en breakpoints móvil/tablet/desktop de todas las secciones ya construidas.

## Touches existing endpoints
no

## Done when
- Nav resalta la sección activa durante el scroll (no solo tras click).
- `prefers-reduced-motion: reduce` deshabilita/reduce toda animación no esencial en toda la página.
- `index.html` tiene título, descripción y `lang="es"` correctos.
- Playwright: test de accesibilidad básica (p.ej. verificar landmarks presentes, foco visible al
  tabular) y test de que el nav marca la sección activa al scrollear manualmente.
- test.cjs es verde.
