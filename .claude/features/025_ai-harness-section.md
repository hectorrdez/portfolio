---
id: "025"
slug: ai-harness-section
title: Seccion: mi harness de IA
role: frontend
type: feature
extends: null
---

# Seccion: mi harness de IA

## Description
Nueva seccion #ia que explica el dev harness: spec inmutable, gate, estado trazable y relevo entre CLIs y modelos locales, las 16 skills y claude-code-mods.

## Requirements
- Diagrama SVG propio del flujo (feature -> gate -> cierre -> relevo), con alt/aria.
- Contenido de dev-harness-skills/README.md y docs/harness-flow.md, sin copiar secretos. Entrada nueva en nav (src/utils/sections.ts).
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Seccion visible en nav, diagrama accesible, test E2E de la seccion.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
