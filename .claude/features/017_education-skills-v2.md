---
id: "017"
slug: education-skills-v2
title: Formación y Skills v2 (rediseño Stitch)
role: frontend
type: change
extends: "008"
---

# Formación y Skills v2 (rediseño Stitch)

## Description
Restyle de "Formación": la lista plana de skills pasa a una matriz agrupada por categoría; la
formación pasa a cards con fecha destacada. Usa tokens de la 012.

## Requirements
- Grid `lg:grid-cols-12`: Educación Oficial 5/12, Matriz de Habilidades 7/12 (ambas
  `bg-surface-container rounded-xl`).
- Educación: cada entrada como card (`bg-surface-container-high rounded-lg`) con nombre corto del
  ciclo (DAW/DAM/FP Mantenimiento), rango de fechas destacado, nombre completo del ciclo y centro —
  mismos 3 datos reales de la 008 (IES Doctor Balmis ×2, IES Cavanilles), sin cambios de fechas.
- Matriz de skills: agrupar los skills YA existentes (fieles al CV) en 3 categorías con indicador de
  color (punto de color + label):
  1. "Automatización & Accesibilidad (Core)": Selenium, Cucumber, Appium, Axe, WCAG, SonarQube,
     REST APIs.
  2. "Lenguajes & UI": Java, TypeScript, React, Tailwind CSS.
  3. "DevOps & Gestión": Docker, Jenkins, Git, GitLab, Jira.
  No añadir herramientas nuevas no presentes en el CV (nada de "Xray", "Postman/Newman", "JUnit",
  "Confluence" — el mockup los inventa).
- Chips de skill con `font-code-sm`, `bg-surface-container-high rounded-lg`; opcionalmente resaltar
  2-3 con `font-semibold` + color de acento si aporta jerarquía visual (p.ej. Axe-core, WCAG).

## Touches existing endpoints
no

## Done when
- Los 3 skills agrupados cubren exactamente la misma lista de tecnologías que la feature 008, sin
  añadir ni quitar ninguna, solo reorganizadas por categoría.
- Las 3 entradas de formación mantienen fechas/centro reales.
- Playwright: test que verifica las 3 categorías existen y que cada tecnología clave (Java, Selenium,
  Axe, Docker) aparece en su categoría correspondiente.
- test.cjs es verde.
