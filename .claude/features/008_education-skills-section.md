---
id: "008"
slug: education-skills-section
title: Sección Formación + Skills técnicos
role: frontend
type: feature
extends: null
---

# Sección Formación + Skills técnicos

## Description
Sección (`id="formacion"`) con la formación académica y un grid de competencias técnicas, ambos
tomados literalmente del CV. Puede dividirse en dos bloques dentro de la misma sección (Formación /
Skills) si visualmente queda mejor que forzarlos en una sola columna.

## Requirements
- Formación (orden del CV, más reciente primero):
  - IES Doctor Balmis — DAW (Desarrollo de Aplicaciones Web), Alicante, 2025-2026.
  - IES Doctor Balmis — DAM (Desarrollo de Aplicaciones Multiplataforma), Alicante, 2022-2024.
  - IES Cavanilles — Mantenimiento Electrónico, Alicante, 2018-2020.
- Skills técnicos (grid de tags/badges, del CV): Java, Selenium, Cucumber, Appium, Jenkins, Docker,
  Git, GitLab, SonarQube, Jira, REST APIs, Axe, WCAG (bases), TypeScript, React, Tailwind CSS.
  Agrupar si aporta claridad (p.ej. "Testing & Accesibilidad" vs "Desarrollo") pero sin inventar
  categorías rígidas que no reflejen el CV.
  Idiomas (si no se puso ya en la sección 006): Español (nativo), Inglés (lectura técnica),
  Valenciano (avanzado).
- Reusar `Card.tsx` para las entradas de formación; badges de skills con Tailwind (tokens de
  `DESIGN.md`, no colores hardcodeados).
- Scroll-reveal con el mismo patrón compartido de features anteriores.

## Touches existing endpoints
no

## Done when
- Las 3 entradas de formación y todos los skills del CV están presentes, sin datos inventados.
- Anima al hacer scroll.
- Playwright: test que verifica que la sección lista al menos las tecnologías clave (Java, Selenium,
  Cucumber) y las 3 entidades educativas.
- test.cjs es verde.
