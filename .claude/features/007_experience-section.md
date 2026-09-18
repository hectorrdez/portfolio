---
id: "007"
slug: experience-section
title: Timeline de experiencia profesional
role: frontend
type: feature
extends: null
---

# Timeline de experiencia profesional

## Description
Sección (`id="experiencia"`) con los dos puestos en DXC Technology del CV, en formato timeline/
cards verticales, con scroll-reveal progresivo (cada entrada anima al entrar en viewport).

## Requirements
- Contenido exacto del CV (`hector_cv.md`), sin inventar ni resumir de más los logros:
  1. **DXC Technology — QA Automation & Accessibility Analyst** · Alicante, España ·
     Agosto 2024 - Agosto 2026. Descripción: framework de automatización de accesibilidad
     (Java/Selenium/Cucumber, Docker), auditorías web/mobile alineadas WCAG, integración Axe en
     CI/CD, mantenimiento frameworks Selenium/Appium para cliente internacional, pipelines Jenkins
     con SonarQube/GitLab/Jira, mentoría a 2 becarios.
  2. **DXC Technology — Software QA Intern, Accessibility & Testing Mobile** · Alicante, España ·
     Abril 2024 - Junio 2024. Descripción: PoC de accesibilidad para cliente bancario, testing
     mobile, benchmark de herramientas de accesibilidad, informe técnico.
- Formato: cards (reusar `Card.tsx`) en timeline vertical, orden cronológico descendente (más
  reciente primero, como en el CV). Fechas y ubicación destacadas, descripción legible (no un único
  párrafo denso — usar bullets si mejora la lectura, siempre que no se invente info).
- Scroll-reveal reutilizando el hook/patrón compartido de las features 005/006 (no reimplementar).

## Touches existing endpoints
no

## Done when
- Ambas experiencias visibles con datos fieles al CV (fechas, empresa, rol, descripción).
- Anima progresivamente al hacer scroll.
- Playwright: test que verifica que ambas entradas de experiencia están presentes con su rol y rango
  de fechas.
- test.cjs es verde.
