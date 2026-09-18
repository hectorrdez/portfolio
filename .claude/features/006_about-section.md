---
id: "006"
slug: about-section
title: Sección Sobre mí
role: frontend
type: feature
extends: null
---

# Sección Sobre mí

## Description
Sección (`id="sobre-mi"`) con un resumen breve de quién es Héctor profesionalmente, basado en el
párrafo de perfil del CV, con scroll-reveal al entrar en viewport.

## Requirements
- Contenido: adaptar el párrafo de perfil de `hector_cv.md` ("QA Analyst especializado en
  automatización de pruebas y accesibilidad, con experiencia en auditorías de accesibilidad web y
  mobile...") a un texto natural en primera o tercera persona (decidir un tono y mantenerlo en toda
  la página), sin inventar datos no presentes en el CV.
- Idiomas (del CV): Español (nativo), Inglés (lectura técnica), Valenciano (avanzado) — mencionar
  brevemente, puede vivir aquí o en la sección de skills/formación (decidir según qué quede mejor
  visualmente, sin duplicar).
- Scroll-reveal: reusar el mismo mecanismo de animación de entrada que el resto de secciones
  (`IntersectionObserver`, fade + translate-Y sutil, ver `notes.md`/`DESIGN.md`) — extraer a un
  hook/helper compartido si la feature 005 no lo hizo ya, para no duplicar lógica entre secciones.
- Layout: texto + posible imagen/avatar simple (opcional, no inventar assets si no hay foto
  disponible — placeholder geométrico o iniciales está bien).

## Touches existing endpoints
no

## Done when
- Sección visible con el resumen profesional correcto (fiel al CV).
- Anima al hacer scroll hasta ella (mismo patrón que el resto de secciones).
- Playwright: test que hace scroll a la sección y verifica que su contenido es visible.
- test.cjs es verde.
