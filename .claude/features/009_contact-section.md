---
id: "009"
slug: contact-section
title: Sección Contacto + descarga de CV
role: frontend
type: feature
extends: null
---

# Sección Contacto + descarga de CV

## Description
Última sección (`id="contacto"`), destino del CTA del hero: links directos de contacto y el botón
de descarga del CV en PDF. Sin formulario ni backend (decisión del usuario).

## Requirements
- Copiar `HectorRodriguezTovar_cv.pdf` (raíz del repo padre, `D:\git\portfolio\`) a
  `public/cv/HectorRodriguezTovar_cv.pdf` dentro del proyecto.
- Botón "Descargar CV": `<a href="/cv/HectorRodriguezTovar_cv.pdf" download>` (o equivalente
  `ButtonLink`), nombre accesible claro.
- Links directos de contacto (del CV): email `mailto:hectorrdez@gmail.com`, teléfono
  `tel:+34601274516`, LinkedIn `https://www.linkedin.com/in/hectorrdez/`. Cada uno con icono
  (`lucide-react`: `Mail`, `Phone`, `Linkedin`) + texto legible (no solo icono).
- Ubicación: Alicante, España — mostrar como texto simple, no como link.
- Sin formulario HTML, sin envío de datos a ningún servicio.
- Layout centrado, coherente con el resto de secciones (mismos tokens/spacing de `DESIGN.md`).

## Touches existing endpoints
no

## Done when
- El PDF real es descargable desde el botón (verificar `Content-Disposition`/atributo `download`
  funciona sirviendo el build, o al menos que el `href` resuelve a un asset existente en `public/`).
- Los tres links de contacto abren el protocolo/URL correctos.
- Playwright: test que verifica que el link de LinkedIn tiene el `href` correcto y que el botón de
  descarga apunta a un archivo PDF existente.
- test.cjs es verde.
