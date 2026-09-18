---
id: "002"
slug: design-tokens
title: Paleta y tipografía Apple-style (light + dark)
role: frontend
type: feature
extends: null
---

# Paleta y tipografía Apple-style (light + dark)

## Description
Define el sistema visual base del portfolio en `src/index.css` (`@theme`, Tailwind v4): paleta
neutra + un acento, escala tipográfica, y las variantes dark mode de cada token (consumidas por el
toggle de la feature 003). Reemplaza los valores SaaS actuales del scaffold.

## Requirements
- Reescribir el `@theme` de `src/index.css`: paleta neutra (blancos/grises muy claros en light,
  grises muy oscuros/negros suaves en dark — nunca `#000`/`#fff` puros en superficies grandes) + un
  único color de acento (mantener o ajustar `--color-primary`) usado con moderación.
- Añadir bloque de overrides dark mode bajo `[data-theme="dark"]` (selector que usará el
  `ThemeProvider` de la feature 003) redefiniendo las variables de superficie/texto/borde.
- Añadir tokens de tipografía (`--font-*` si se define una familia, o documentar uso del stack del
  sistema) y pesos/tamaños para H1/H2/H3/body/caption coherentes con un look Apple: tamaños grandes
  y confiados en el hero, jerarquía clara entre secciones.
- Eliminar tokens específicos de SaaS que ya no apliquen (header/footer/button/card vars) y
  sustituir por tokens genéricos reutilizables por cualquier sección (surface, surface-muted,
  border, text, text-muted, accent).
- Actualizar `DESIGN.md` → sección "Tokens - source of truth" si cambian nombres de variables.
- Sin librerías nuevas (Google Fonts vía `<link>` está permitido si se decide una tipografía, pero
  por defecto usar el stack de sistema para no añadir peso/dependencia externa).

## Touches existing endpoints
no

## Done when
- `src/index.css` define light + dark tokens genéricos, sin residuos de nombres SaaS.
- Los componentes existentes (Button, Card, Header, Footer) siguen renderizando correctamente con
  los tokens nuevos (ajustar sus clases si referenciaban variables eliminadas).
- test.cjs es verde.
