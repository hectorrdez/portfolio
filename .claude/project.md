# Project brief
# Filled by /init-app from the intake interview. Stable reference; update rarely.

## Goal
Portfolio personal de Héctor Rodríguez Tovar (QA Automation & Accessibility Analyst, DXC Technology).
Single-page landing tipo Apple: tranquila, moderna, con animaciones sutiles al scroll, divertida pero
profesional. Contenido basado en su CV (hector_cv.md / HectorRodriguezTovar_cv.pdf).

## Stack
Vite + React 19 + TypeScript + Tailwind CSS v4 (CSS-native `@theme`, sin `tailwind.config.js`) +
react-router-dom + lucide-react. Sin librerías adicionales de estado/HTTP/forms (decisión explícita
del usuario). E2E con Playwright.

## Repo type
frontend-web

## Scope - in
- Landing de una sola página con navegación por scroll a secciones: Home, Sobre mí, Experiencia,
  Formación + Skills, Contacto.
- Modo oscuro/claro con toggle (usa el `ThemeProvider` stub del scaffold).
- Botón de descarga del CV en PDF (servido desde `public/`).
- Contacto vía links directos: `mailto:`, `tel:`, LinkedIn. Sin formulario, sin backend.
- Animaciones sutiles de entrada/scroll-reveal, transiciones consistentes, accesibilidad cuidada
  (contraste, foco, `alt`, roles ARIA) — coherente con el perfil profesional del usuario.
- Todo el contenido en español.

## Scope - out (explicitly NOT doing)
- Auth, login, registro, rutas privadas, perfil de usuario.
- Pricing / planes, productos, resources, support (páginas de SaaS del template ScoutLog original).
- Formulario de contacto con backend/envío de email real.
- Internacionalización (toggle ES/EN) — solo español por ahora.
- Blog, CMS, contenido dinámico desde API.
- Librerías nuevas de state/HTTP/forms (zustand, axios, react-query, react-hook-form, zod, etc.).

## Conventions / decisions
- Sin librerías adicionales fuera de las ya presentes en el scaffold (React, Router, Tailwind, lucide-react).
- Estilo visual "Apple-like": mucho espacio en blanco, tipografía grande y cuidada, paleta neutra +
  un acento, transiciones suaves (no llamativas), sin exceso de color.
- Reusar componentes existentes del scaffold (`Button`, `ButtonLink`, `Card`, `Row`/`Column`, etc.)
  antes de crear nuevos; adaptarlos a tokens de `DESIGN.md`.
- Rutas: se elimina el sidebar (`Aside`) — es landing single-page, no dashboard.
- Commits en español o inglés técnico estándar, uno por feature.
