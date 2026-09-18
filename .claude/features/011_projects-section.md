---
id: "011"
slug: projects-section
title: Sección Proyectos
role: frontend
type: feature
extends: null
---

# Sección Proyectos

## Description
Nueva sección (`id="proyectos"`) entre Formación y Contacto: cards de 4 proyectos reales desplegados
en el servidor Dokploy del usuario (investigados vía SSH + Dokploy DB + Caddyfile), cada una con
imagen, título, descripción y botones de icono a la app en vivo y/o al repositorio, según la
política de visibilidad decidida con el usuario.

## Requirements
- Assets ya preparados en `public/projects/` (no hace falta generarlos, solo consumirlos):
  - `nazaret336.png` — captura real de la app.
  - `nexo.png` — captura real de la app.
  - `edugreen-logo.svg` — logo (favicon) real del proyecto EduGreen.
  - Mambo Bot no tiene imagen — usar un icono `Bot` (lucide-react) sobre `bg-surface-alt` como
    placeholder visual dentro de la card (mismo alto que las imágenes, `object-cover` en el resto).
- Datos de cada proyecto (fieles a la investigación, no inventar ni ampliar):
  1. **Nazaret336** — img `nazaret336.png`. Descripción: "Sitio web del Grupo Scout Nazaret 336 (San
     Vicente del Raspeig, Alicante): promueve sus valores educativos, organiza la logística de sus
     secciones por edad y centraliza reuniones, campamentos y proyectos de servicio comunitario."
     Botón único: "Ver aplicación" (icono `Globe`) → `https://prueba-nazaret.hectorrdez.es`.
  2. **Nexo** — img `nexo.png`. Descripción: "Plataforma institucional de transparencia y
     participación ciudadana: portal de auditoría pública en tiempo real, programa de gobierno por
     tareas medibles y un módulo de reclutamiento técnico con currículum ciego."
     Botón único: "Ver aplicación" (icono `Globe`) → `https://nexo.hectorrdez.es`.
  3. **Mambo Bot** — icono `Bot` (sin imagen). Descripción: "Bot de música para Discord, self-hosted,
     con cola por servidor, modos de repetición, soporte de listas de YouTube y Spotify, control de
     acceso por rol de DJ y un dashboard web de estadísticas de uso."
     Botón único: "Ver dashboard" (icono `Globe`) → `https://mambo.hectorrdez.es/dashboard`.
  4. **EduGreen** — img `edugreen-logo.svg` (mostrar en un contenedor cuadrado/centrado, no
     `object-cover` a lo ancho como las capturas, es un logo). Descripción: "Plataforma educativa de
     sostenibilidad medioambiental (Proyecto de Fin de Ciclo, DAW): el profesorado crea aulas y retos
     ecológicos, el alumnado los completa y compite en un ranking de clase combinando aprendizaje y
     gamificación." Botones (icono `FolderGit2`, dos): "Repo frontend" →
     `https://github.com/hectorrdez/edugreen-web`, "Repo backend" →
     `https://github.com/hectorrdez/edugreen-api`. **Sin** botón de app — es un TFC, no se muestra
     como acceso activo (instancia no disponible actualmente).
- Nueva entrada en `src/utils/sections.ts`: `{ id: "proyectos", label: "Proyectos" }` insertada entre
  `formacion` y `contacto` — el nav (`Header.tsx`) la recoge automáticamente al iterar `SECTIONS`.
- Componente `src/components/sections/Projects.tsx`: grid de `Card` (reusar, no re-rollear), mismo
  patrón `useScrollReveal` que el resto de secciones (ver `notes.md`). Cada card: imagen/logo/icono
  arriba, título, descripción, fila de botones de icono abajo (usar `Button` o un link con estilo de
  icono consistente con `DESIGN.md` — no hardcodear colores).
- Botones de icono: usar `lucide-react` `Globe` (acceso a app) y `FolderGit2` (repo) — no existen
  iconos de marca (Github/Linkedin) en esta versión de la librería, ya documentado en `notes.md`.
  Cada botón es un `<a target="_blank" rel="noreferrer">` con `aria-label` descriptivo (no solo
  icono sin texto accesible).
- Registrar `Projects` en `src/pages/public/LandingPage.tsx` entre `EducationSkills` y `Contact`.

## Touches existing endpoints
no

## Done when
- Las 4 cards están presentes con su imagen/logo/icono, título y descripción correctos.
- Nazaret336, Nexo y Mambo Bot muestran únicamente el botón de acceso a la app/dashboard (no repo).
- EduGreen muestra únicamente los dos botones de repo (frontend y backend), sin botón de app.
- Nav incluye "Proyectos" entre Formación y Contacto, con scroll y active-state funcionando (mismo
  mecanismo que el resto).
- Playwright: test que verifica las 4 cards, sus textos clave y los `href` de cada botón (incluida
  la ausencia del botón de app en EduGreen).
- test.cjs es verde.
