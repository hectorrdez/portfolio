---
id: "019"
slug: contact-v2
title: Contacto v2 (rediseño Stitch)
role: frontend
type: change
extends: "009"
---

# Contacto v2 (rediseño Stitch)

## Description
Restyle de Contacto: 3 tarjetas de canal directo (email/teléfono/LinkedIn) + barra destacada de
descarga de CV, con los datos reales ya usados en la feature 009 (nunca los placeholders del mockup).

## Requirements
- Grid `md:grid-cols-3` de tarjetas (`bg-surface-container-high rounded-xl hover:bg-surface-
  container-highest`), cada una `<a>` de altura mínima 44px con icono arriba + icono `ArrowUpRight`
  (mapeo de `north_east`) a la derecha que aparece/cambia de color en hover, label en `label-md`, y
  el dato real en `code-sm`/`code-md`:
  - Email: `mailto:hectorrdez@gmail.com` (dato real, no `hector.rodriguez.tovar@email.com`).
  - Teléfono: `tel:+34601274516`, mostrado como "+34 601 27 45 16" (dato real, no
    `+34 600 00 00 00`).
  - LinkedIn: `https://www.linkedin.com/in/hectorrdez/`, mostrado como "linkedin.com/in/hectorrdez"
    (dato real, no `linkedin.com/in/hector-qa`).
- Barra de CV destacada (`bg-surface-container-low rounded-xl`): icono + "Curriculum Vitae Oficial
  (PDF)" + subtítulo breve + botón "Descargar CV en PDF". **Mantener la descarga directa real** ya
  implementada en la 009 (`<a href="/cv/HectorRodriguezTovar_cv.pdf" download>`) — no sustituirla
  por el patrón `mailto:...?subject=Solicitud...` del mockup (es peor UX que lo que ya existe).
- Todo el bloque envuelto en un contenedor `bg-surface-container rounded-xl shadow-xl p-space-lg`
  como en el mockup, centrado, `max-w-4xl`.

## Touches existing endpoints
no

## Done when
- Las 3 tarjetas muestran los datos reales (email/teléfono/LinkedIn) con los `href` correctos.
- El botón de CV descarga el PDF real desde `public/cv/`, no abre un cliente de correo.
- Playwright: reutilizar/adaptar las aserciones de `contact.spec.ts` (de la feature 009) verificando
  los mismos `href` reales sobre la nueva estructura visual.
- test.cjs es verde.
