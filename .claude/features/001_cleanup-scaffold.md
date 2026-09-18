---
id: "001"
slug: cleanup-scaffold
title: Limpiar scaffold ScoutLog a portfolio base
role: frontend
type: feature
extends: null
---

# Limpiar scaffold ScoutLog a portfolio base

## Description
El scaffold generado (`create-project` template "ScoutLog") trae páginas y rutas de un SaaS
genérico (auth, private routes, pricing, products, resources, support, policies) que no aplican a
un portfolio personal de una sola página. Esta feature elimina ese contenido y deja el esqueleto
mínimo (routing, layout, contexts) listo para construir las secciones reales.

## Requirements
- Borrar páginas: `src/pages/private/*` (CreateActivityPage, ProfilePage, SettingsPage),
  `src/pages/public/access/*` (LoginPage, CreateAccountPage, ForgotPasswordPage),
  `src/pages/public/PricingPage.tsx`, `ProductsPage.tsx`, `ResourcesPage.tsx`, `SupportPage.tsx`,
  `src/pages/public/policies/*` (CookiesPage, DataPolicyPage, UserTermsPage).
- Simplificar `src/pages/Routes.tsx` (SiteMap) a una única ruta pública `/` (landing single-page).
  No dejar referencias a las rutas borradas.
- Borrar `src/components/routing/RouteProtector.tsx` y `src/contexts/AuthContext.tsx` (sin auth).
- Borrar `src/layouts/Aside.tsx` y su uso en `AsideContext.tsx`/`Page.tsx` (sin sidebar; landing
  single-page no lo necesita). Si `AsideContext` queda sin consumidores, bórralo también.
- Borrar `src/components/cards/CookiesCard.tsx` y `src/contexts/CookiesContext.tsx` (scope-out:
  sin cookie banner por ahora — es una landing estática sin tracking).
- Limpiar `src/layouts/Header.tsx` y `Footer.tsx`: quitar textos/links placeholder ("ScoutLog",
  nav SaaS, dropdown "Hola", CTA "Probar gratis", columnas Footer con "A"). Dejar estructura mínima
  (logo/nombre + nav vacía de momento) — el contenido real lo rellenan las features 004/009.
- `src/App.tsx` y `src/pages/public/LandingPage.tsx`: dejar wiring mínimo funcional (sin el texto
  placeholder "Esta es la pagina principal").
- Revisar `src/types/data.ts` y `src/utils/PathUtils.tsx`: quitar tipos/helpers que ya no apliquen
  (Auth, Aside, Cookies) sin romper lo que quede.
- Ver `notes.md` para qué componentes SÍ se conservan (Button, ButtonLink, Card, Row/Column, etc.).

## Touches existing endpoints
no

## Done when
- No quedan imports/rutas rotos ni referencias a archivos borrados (`npm run build` limpio).
- `Routes.tsx` solo expone `/`.
- `LandingPage` renderiza vía `Page` sin contenido placeholder ni sidebar.
- test.cjs es verde.
