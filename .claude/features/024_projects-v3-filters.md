---
id: "024"
slug: projects-v3-filters
title: Proyectos v3: filtros por categoria
role: frontend
type: change
extends: "018"
---

# Proyectos v3: filtros por categoria

## Description
Grid de proyectos con filtros por categoria, orden destacados primero y modal/expandible de caso de estudio para los privados. Consume projects.data.ts.

## Requirements
- Filtros accesibles (botones con aria-pressed, teclado). Cards <article aria-label>.
- Privados muestran caso de estudio en lugar de enlace. Extiende projects-v2 (018); depende de 023.
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Filtrar por categoria cambia las cards; caso de estudio abre y cierra con teclado.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
