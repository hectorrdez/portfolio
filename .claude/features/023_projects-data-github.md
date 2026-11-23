---
id: "023"
slug: projects-data-github
title: Datos de proyectos desde GitHub
role: frontend
type: feature
extends: null
---

# Datos de proyectos desde GitHub

## Description
Fuente unica tipada `src/data/projects.data.ts` con los repos relevantes de la cuenta (publicos con enlace, privados como caso de estudio sin enlace).

## Requirements
- Campos: slug, titulo, resumen, stack[], categoria (ia|web|movil|testing|herramientas), destacado, repoUrl?, caseStudy?{problema,solucion,resultado}.
- Privados (scouttech-*, keyflow-*, nexo-*, home-control-*, auraestates-*, mambo-bot-v2): sin repoUrl, con caseStudy. No exponer secretos ni nombres de clientes.
- Publicos: portfolio, scouttech-ui, sonarqube_checker, edugreen-*, my-local-ai-implementation. Harness y mods: enlazar solo si el repo es publico (flag).
- Sin librerias nuevas. No inventar datos fuera de `../hector_cv_fullstack-ia.md` y los repos de GitHub (notes.md).
- Test Playwright escopado a `section#id`; `<article aria-label>` por card. Contraste AA en claro y oscuro.

## Touches existing endpoints
no

## Done when
- Archivo de datos tipado, validado por typecheck, con >= 12 proyectos y su categoria.
- test.cjs is green (the real gate; mark-ended.cjs enforces it).
