---
id: "015"
slug: about-v2
title: Sobre mí v2 (rediseño Stitch)
role: frontend
type: change
extends: "006"
---

# Sobre mí v2 (rediseño Stitch)

## Description
Restyle de "Sobre mí" a layout de 2 columnas: card principal (descripción + idiomas + chips de
metodología) y card destacada de "filosofía" con cita + checklist. Usa tokens de la feature 012.

## Requirements
- Grid `lg:grid-cols-12`: columna principal 7/12 (`bg-surface-container rounded-xl`), columna
  destacada 5/12 (`bg-surface-container-high rounded-xl`).
- Columna principal: párrafo(s) reales ya escritos en la 006 (fiel al CV, sin inventar), + bloque de
  idiomas ya existente pero como grid de 3 tarjetas (`bg-surface-container-high`) con nivel en
  `label-md` (NATIVO/AVANZADO/TÉCNICO) — igual a los 3 idiomas reales (Español/Valenciano/Inglés).
  + fila de chips de "Ecosistema y Metodología" con las tecnologías reales del CV (Java, Selenium,
  Cucumber, Appium, Docker, Jenkins, GitLab, SonarQube, Jira, Axe) — sin añadir "Xray" ni otras
  herramientas que no estén en el CV.
- Columna destacada: cita en `headline-md` — puede reusar/adaptar «La accesibilidad no es un
  checklist, es calidad de software» (es una opinión/filosofía suya, no un dato factual, válida) +
  checklist de 4 puntos sobre su forma de trabajar en accesibilidad (auditorías WCAG, testing con
  lectores de pantalla, foco/teclado, informes Axe) — redactar en base a lo que ya hace según su CV
  y la feature 007 (no inventar certificaciones tipo "ISO/IEC 40500 Compliant" — quitar esa pill del
  mockup, no está verificada).
- Mantener `useScrollReveal` en el bloque completo (mismo patrón del resto de secciones).

## Touches existing endpoints
no

## Done when
- Layout de 2 columnas con card principal + card de filosofía, sin datos/certificaciones inventadas.
- Los 3 idiomas y los chips de metodología coinciden con el CV.
- Playwright: test que verifica el contenido real (resumen, idiomas, chips) sigue presente y que no
  aparece ninguna afirmación de certificación ISO no verificada.
- test.cjs es verde.
