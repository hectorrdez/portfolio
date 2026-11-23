---
id: "029"
slug: seo-og-meta
title: SEO, Open Graph y JSON-LD
role: frontend
type: feature
extends: null
---

# SEO, Open Graph y JSON-LD

## Description
Meta description, Open Graph/Twitter, imagen og, sitemap, robots y JSON-LD Person con los enlaces a LinkedIn y GitHub.

## Requirements
- index.html y public/. Titulo y descripcion alineados con 022.
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Test comprueba meta og, JSON-LD parseable y titulo nuevo.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
