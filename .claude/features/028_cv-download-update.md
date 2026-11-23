---
id: "028"
slug: cv-download-update
title: Descarga del CV nuevo
role: frontend
type: change
extends: "009"
---

# Descarga del CV nuevo

## Description
Boton de descarga apunta al CV Full-Stack con IA (PDF en public/cv/).

## Requirements
- Generar PDF desde hector_cv_fullstack-ia.md (o recibirlo del usuario). Mantener el CV QA antiguo como segundo enlace opcional.
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Descarga devuelve el PDF nuevo; test del enlace.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
