---
id: "016"
slug: experience-v2
title: Experiencia v2 (rediseño Stitch)
role: frontend
type: change
extends: "007"
---

# Experiencia v2 (rediseño Stitch)

## Description
Restyle de las cards de experiencia: cada rol pasa de bullets simples a un grid de tarjetas
iconadas + fila de tags tecnológicos, con el badge de empresa junto al título. Usa tokens de 012.

## Requirements
- Cada `article` (`bg-surface-container rounded-xl border border-outline-variant`): cabecera con
  título de rol + badge `DXC TECHNOLOGY` (`bg-primary-container` para el rol actual, `bg-surface-
  container-highest` para el pasado) + ubicación/contexto + pill de fechas.
- Los bullets de cada rol (ya escritos en la 007, fieles al CV) pasan a un `grid md:grid-cols-2` de
  tarjetas (`bg-surface-container-high rounded-lg p-space-md`) con icono (mapeo Material→lucide de
  `notes.md`: `settings_suggest→Settings2`, `policy→ShieldCheck`, `smartphone→Smartphone`,
  `groups→Users`, `science→FlaskConical`, `leaderboard→BarChart3`) + título en negrita + texto.
- Fila final de tags tecnológicos por rol (`font-code-sm`, `bg-surface-container-lowest`): usar
  exactamente las tecnologías ya mencionadas en el bullet de ese rol (Java, Selenium, Cucumber,
  Appium, Docker, GitLab, Jenkins, Axe-core para el rol actual) — no añadir versiones no confirmadas
  como "Java 17" si el CV no especifica versión.
- Mantener el patrón de `useScrollReveal` con stagger por índice ya existente.

## Touches existing endpoints
no

## Done when
- Ambas experiencias muestran badge de empresa, grid de bullets iconados y tags tecnológicos, con
  el mismo contenido factual que la feature 007 (fechas, rol, descripciones) sin datos añadidos.
- Playwright: test que sigue verificando ambos roles con fechas correctas y ahora también que
  aparecen los tags tecnológicos reales (p.ej. "Axe-core", "Docker").
- test.cjs es verde.
