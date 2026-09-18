---
id: "004"
slug: layout-shell
title: Header/Footer de navegación por secciones
role: frontend
type: feature
extends: null
---

# Header/Footer de navegación por secciones

## Description
Convierte `Header.tsx` y `Footer.tsx` (limpiados en la feature 001) en la navegación real de la
landing single-page: scroll suave a cada sección (Home, Sobre mí, Experiencia, Formación/Skills,
Contacto) y un footer simple con redes/copyright. Incluye el toggle de tema de la feature 003.

## Requirements
- `Header.tsx`: nombre "Héctor Rodríguez Tovar" (o iniciales) como logo/inicio, nav con anchors a
  cada sección (`#sobre-mi`, `#experiencia`, `#formacion`, `#contacto`, etc. — usar `id`s reales que
  definan las features 006-009), scroll suave nativo (`scroll-behavior: smooth` en CSS o
  `element.scrollIntoView({behavior:"smooth"})`), estado de link activo según sección visible
  (`IntersectionObserver`, sin librería). Incluye el `ButtonToogle` de tema. Menú responsive/mobile
  simple (reusar `DropdownFloating` si aplica, o un patrón CSS simple — sin hamburger animado
  complejo si no aporta).
- `Footer.tsx`: copyright, link a LinkedIn (`https://www.linkedin.com/in/hectorrdez/`), email
  (`mailto:hectorrdez@gmail.com`). Sin columnas de links legales inventados.
- Quitar del scaffold cualquier resto de nav/dropdown SaaS no limpiado en la 001.
- Usar tokens de `DESIGN.md`/`index.css`, no hardcodear colores.

## Touches existing endpoints
no

## Done when
- Nav visible en todas las viewport (desktop + mobile), cada link hace scroll a su sección.
- Toggle de tema visible y funcional en el Header.
- Footer muestra LinkedIn + email reales del usuario.
- Playwright: test de navegación que hace click en un link del header y verifica que la sección
  correspondiente queda en viewport.
- test.cjs es verde.
