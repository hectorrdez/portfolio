---
id: "018"
slug: projects-v2
title: Proyectos v2 (rediseño Stitch)
role: frontend
type: change
extends: "011"
---

# Proyectos v2 (rediseño Stitch)

## Description
Restyle de las cards de proyecto al estilo del mockup (imagen con overlay + categoría, chips de
stack, fila de botones abajo), manteniendo el contenido/política de enlaces real de la feature 011.

## Requirements
- Card (`bg-surface-container rounded-xl border border-outline-variant overflow-hidden`): imagen
  arriba (`h-48 object-cover`, gradiente `from-surface-container to-transparent` en la base para
  legibilidad si se superpone texto) — **usar los assets reales ya existentes**
  (`nazaret336.png`, `nexo.png`, `edugreen-logo.svg`, icono `Bot` para Mambo Bot) — no sustituir por
  imágenes genéricas nuevas.
- Debajo de la imagen: título + una etiqueta de categoría corta a la derecha (`font-code-sm
  text-outline`): "Web Comunitaria" (Nazaret336), "Plataforma Ciudadana" (Nexo), "Audio &
  Automatización" (Mambo Bot), "TFC · Sostenibilidad" (EduGreen). **No** añadir los badges
  superpuestos de "verificación"/hype del mockup ("WCAG 2.2 AA VERIFIED", "CIVIC ACCESS PASS",
  "HIGH CONCURRENCY") — no son auditorías reales de esos proyectos.
- Chips de stack tecnológico reales por proyecto (sustituye los inventados del mockup):
  - Nazaret336: React, TypeScript, Vite, Tailwind CSS.
  - Nexo: React, TypeScript, Vite, Tailwind CSS, Zustand.
  - Mambo Bot: TypeScript, discord.js, Node.js.
  - EduGreen: React, TypeScript, Vite, Tailwind CSS (web) + Node.js, Express, MySQL (api) — puede
    mostrarse como una única fila combinada o dos filas cortas (frontend/backend), lo que quede más
    legible en la card.
- Fila de botones: **mantener exactamente la política de acceso de la feature 011** —
  Nazaret336/Nexo/Mambo Bot solo su botón de acceso a app/dashboard (icono `Globe`); EduGreen solo
  sus 2 botones de repo (icono `FolderGit2`, frontend + backend). No añadir un botón de "Código" a
  los 3 primeros (el mockup lo hace, pero sus repos no se enlazan por decisión ya tomada con el
  usuario).
- Mantener `useScrollReveal` con stagger existente.

## Touches existing endpoints
no

## Done when
- Las 4 cards usan las imágenes/logo/icono reales, categoría corta, chips de stack reales y
  mantienen exactamente los mismos botones/enlaces que la feature 011 (ninguna badge de verificación
  inventada, ningún botón de repo para los 3 proyectos privados).
- El test de Playwright de la 011 (`projects.spec.ts`) sigue pasando tal cual (verifica la política
  de enlaces) — ajustar solo si cambian nombres/estructura de elementos, nunca el resultado esperado
  de qué botones existen.
- test.cjs es verde.
