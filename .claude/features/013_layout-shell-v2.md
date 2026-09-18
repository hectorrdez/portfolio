---
id: "013"
slug: layout-shell-v2
title: Header/Footer v2 (rediseño Stitch)
role: frontend
type: change
extends: "004"
---

# Header/Footer v2 (rediseño Stitch)

## Description
Restyle de `Header.tsx`/`Footer.tsx` según el mockup de Stitch: badge de marca "HRT // QA", nav en
contenedor tipo píldora, botón de tema solo-icono, CTA "Contactar", skip-link de accesibilidad. Usa
los tokens de la feature 012.

## Requirements
- Skip-link (nuevo, el sitio actual no lo tiene): `<a href="#main-content">Saltar al contenido
  principal</a>` como primer hijo de `<body>`/`App`, oculto salvo con foco (`sr-only
  focus:not-sr-only ...`), estilo del mockup. Añadir `id="main-content"` al `<main>` de `Page.tsx`.
- Header:
  - Marca: badge `HRT // QA` (`bg-surface-container-high`, `font-code-sm`, mayúsculas) + nombre
    completo en texto (oculto en móvil si hace falta, el mockup lo oculta bajo `xl`).
  - Nav: contenedor `bg-surface-container-lowest rounded-xl p-space-xs`, links `font-code-md`.
    **Nuevo orden**: Sobre mí, Experiencia, Proyectos, Formación, Contacto (cambia el orden actual
    en `src/utils/sections.ts` — Proyectos pasa a estar antes de Formación).
  - Botón de tema: icono-only (`Moon`/`Sun` de lucide, ver mapeo en `notes.md`), `bg-surface-
    container-low`, 44×44px.
  - CTA "Contactar" → `#contacto`, `bg-primary-container text-on-primary-container`.
  - **No añadir** el pill "WCAG 2.2 AAA" del mockup tal cual (afirma una auditoría formal del sitio
    que no existe) — si se quiere un indicador de identidad, usar copy honesto tipo "QA & Accesibilidad"
    sin implicar certificación verificada.
- Footer:
  - Bloque de marca: badge `HRT // QA` + nombre + una línea de tagline (reusar/adaptar la del CV,
    ya usada en Hero — no inventar credenciales).
  - Chips informativos: ubicación (Alicante, España) — **no** añadir el chip "ISTQB & WCAG
    Certified" del mockup, no está en el CV, es una credencial no verificada.
  - Redes: mantener exactamente los links reales ya existentes (LinkedIn `linkedin.com/in/hectorrdez`,
    email `hectorrdez@gmail.com`) con el estilo nuevo. **No añadir** un icono de GitHub — no hay URL
    de perfil de GitHub confirmada por el usuario.
  - Copyright: mantener texto real (año dinámico + nombre), sin afirmaciones de certificación.

## Touches existing endpoints
no

## Done when
- Skip-link funciona (visible al tabular desde el body, salta a `#main-content`).
- Nav muestra el nuevo orden y estilo píldora; `useActiveSection`/scroll siguen funcionando igual.
- Footer no contiene datos inventados (sin ISTQB, sin GitHub inventado); LinkedIn/email reales.
- Playwright: test que verifica el nuevo orden de nav, que el skip-link recibe foco con Tab y salta
  a `#main-content`, y que el footer no expone ningún link a github.com.
- test.cjs es verde.
