---
id: "003"
slug: dark-mode-toggle
title: Toggle claro/oscuro persistente
role: frontend
type: feature
extends: null
---

# Toggle claro/oscuro persistente

## Description
Implementa el `ThemeProvider` (hoy un stub vacío en `src/contexts/ThemeProvider.tsx`) para
gestionar el tema claro/oscuro del portfolio, con persistencia en `localStorage` y respeto de la
preferencia del sistema (`prefers-color-scheme`) como valor inicial. Depende de los tokens dark de
la feature 002.

## Requirements
- `ThemeProvider`: estado `theme: "light" | "dark"`, inicializado desde `localStorage` si existe,
  si no desde `window.matchMedia("(prefers-color-scheme: dark)")`. Aplica `data-theme="dark"` (o
  quita el atributo) en `document.documentElement`. Expone `toggleTheme` vía el hook existente en
  `src/contexts/Contexts.ts` (seguir el patrón de `useAuth`/`useCookies` ya presente, adaptado).
- Persistir cambios de usuario en `localStorage` (clave propia, p.ej. `theme`).
- Control visual: reusar/adaptar `controls/ButtonToogle.tsx` como toggle sol/luna (iconos
  `lucide-react` ya instalado: `Sun`/`Moon`), colocado en el Header (integra con feature 004).
- Sin flash de tema incorrecto al cargar si es razonable de evitar sin librerías nuevas (aceptable
  un pequeño flash si evitarlo requiere complejidad desproporcionada — anotar en notes.md si se
  deja pendiente).

## Touches existing endpoints
no

## Done when
- Cambiar el toggle cambia visualmente toda la página (tokens de la feature 002 reaccionan).
- Recargar la página mantiene el tema elegido (localStorage).
- Toggle accesible: rol/estado de botón, operable por teclado, nombre accesible ("Cambiar a modo
  oscuro/claro").
- Playwright: test que alterna el toggle y verifica `data-theme` en `<html>` y persistencia tras
  reload.
- test.cjs es verde.
