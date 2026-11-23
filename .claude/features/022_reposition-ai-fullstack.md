---
id: "022"
slug: reposition-ai-fullstack
title: Reposicionamiento: Full-Stack con IA (Hero + About)
role: frontend
type: change
extends: "014"
---

# Reposicionamiento: Full-Stack con IA (Hero + About)

## Description
Hero y About pasan de 'QA Automation & Accessibility Analyst' a posicionamiento Full-Stack Developer aumentado con IA, manteniendo el rol real de DXC como experiencia.

## Requirements
- Titular, subtitulo, CTA y texto About tomados de LINKEDIN.md (headline A y Acerca de), mismo tono.
- El rol DXC sigue siendo 'Analyst' (notes.md). Extiende hero-v2 (014) y about-v2 (015).
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Hero y About muestran el nuevo posicionamiento; tests de hero/about actualizados y en verde.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
