---
id: "026"
slug: experience-v3
title: Experiencia v3: proyectos propios + DXC reescrito
role: frontend
type: change
extends: "016"
---

# Experiencia v3: proyectos propios + DXC reescrito

## Description
Entrada 'Proyectos propios, desarrollador full-stack' arriba y bullets nuevos de DXC segun LINKEDIN.md.

## Requirements
- Textos de LINKEDIN.md seccion 3. Extiende experience-v2 (016).
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Orden y bullets nuevos visibles; test actualizado.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
