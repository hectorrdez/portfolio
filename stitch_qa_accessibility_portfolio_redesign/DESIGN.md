---
name: Precision Engineering & Inclusive Craft
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#91db2a'
  on-tertiary: '#1f3700'
  tertiary-container: '#4c7a00'
  on-tertiary-container: '#d3ff9b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#acf847'
  tertiary-fixed-dim: '#91db2a'
  on-tertiary-fixed: '#102000'
  on-tertiary-fixed-variant: '#304f00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the identity of a specialized QA Analyst focused on Test Automation and Accessibility (WCAG / Axe). The visual philosophy merges the rigorous precision of Swiss International Typographic Style with the operational utility of modern developer tooling. Accessibility is not treated as an afterthought or compliance checklist; it serves as the signature aesthetic foundation. 

The visual tone is disciplined, architectural, and razor-sharp. It conveys absolute confidence, computational accuracy, and uncompromising inclusivity. Clean geometry, disciplined layouts, and deliberate information density establish an environment engineered for parsing complex automation suites, test heuristics, and accessibility compliance audits without visual fatigue. The interface projects high-craft tactile feedback through decisive state changes, explicit borders, and hyper-legible typographic rhythms.

## Colors

The palette is engineered around high-contrast ratios exceeding WCAG AAA standards for critical readability thresholds, balanced with striking signal markers.

- **Primary (`#2563EB`)**: Electric Cobalt. Delivers authoritative interactive presence, robust focus outlines, and immediate visual anchor points. Maintains a minimum 4.5:1 contrast against surface layers and 7:1 against dark baselines.
- **Secondary (`#10B981`)**: Signal Emerald. Represents automated test passes, zero-violation Axe states, and stable builds with distinct luminous clarity.
- **Tertiary (`#84CC16`)**: Vivid Chartreuse. A dynamic diagnostic accent utilized for performance metrics, warning indicators, and real-time execution states.
- **Neutral (`#0F172A`)**: Deep Slate/Charcoal base. Serves as the bedrock dark canvas, eliminating stark OLED glare while preserving pitch-black contrast definition through tonal layers (`#1E293B` for surfaces, `#334155` for structural borders).

In light mode transitions, the baseline shifts to warm crisp porcelain (`#F8FAFC`) with deep charcoal ink (`#0F172A`), retaining identical cobalt and emerald signal values mapped for AAA compliance.

## Typography

The typography strategy reflects an intentional duality: **Inter** handles narrative clarity and UI orientation with neutral Swiss modernism, while **JetBrains Mono** surfaces all diagnostic metrics, automated execution times, test assertions, and WCAG criteria tags.

- Tabular figures are enforced for numerical metrics and execution timers to prevent horizontal layout shift during live test streaming.
- Monospace labels strictly use uppercase letterforms with widened tracking (`0.05em` to `0.08em`) to guarantee optical separation at compact viewport dimensions.
- Line heights are scaled comfortably above standard body ratios (minimum 1.5x) to optimize reading performance for users with cognitive or visual accessibility considerations.

## Layout & Spacing

The layout is built on a strict 8pt structural rhythm integrated into a 12-column responsive fluid grid. 

- **Desktop (1200px+)**: 12 columns, `1.5rem` (24px) gutters, `3rem` (48px) exterior margins. Suitable for side-by-side test step inspectors, raw JSON payload viewers, and accessibility violation trees.
- **Tablet (768px - 1199px)**: 8 columns, `1.5rem` gutters, `2rem` margins. Modules reflow logically into stacked master-detail configurations.
- **Mobile (320px - 767px)**: 4 columns, `1rem` (16px) gutters, `1.25rem` (20px) margins. High-density metric grids transition into single-column scroll cascades with full-width action strips.

Interactive tap targets never drop below `44px x 44px` (WCAG 2.2 Target Size), enforced through bounding layout envelopes independent of compact typography sizes.

## Elevation & Depth

This system intentionally rejects muddy, multi-layered diffuse drop shadows in favor of **Tonal Layering with Crisp Structural Borders**. Visual depth is created through architectural contrast and physical precision:

- **Base Layer (L0)**: Canvas baseline (`#0F172A` in dark mode).
- **Surface Layer (L1)**: Card containers and structural panels (`#1E293B`) framed with a 1px solid border (`#334155`).
- **Interactive Elevated Layer (L2)**: Hover states, flyout menus, and active modal overlays (`#1E293B`) supported by a high-contrast 1px border (`#475569`) and a tactile 2px hard offset shadow: `0 4px 0 0 #020617`.
- **Focus Rings**: A mandatory global signature consisting of a `2px solid #2563EB` ring separated by a `2px` transparent offset gutter, visible against any surface mode.

## Shapes

The design uses a **Soft** shape geometry (`roundedness: 1`). 

- Default elements (cards, input fields, test assertion blocks, dialogs) carry a clean `0.25rem` (4px) corner radius, reinforcing technical precision.
- Larger spatial grouping containers use `rounded-lg` at `0.5rem` (8px).
- Badges, status markers, and execution state pills selectively utilize full pill curves (`9999px`) to create an immediate structural distinction between data containers (rectangular) and diagnostic metadata indicators (pill).

## Components

### Buttons
- **Primary**: Solid Cobalt Blue (`#2563EB`) fill, White (`#FFFFFF`) Inter medium label. Tactile click state with `0 1px 0 0 #000000` inner shadow. 2px focus ring with 2px gap on keyboard navigation.
- **Secondary / Ghost**: Slate fill (`#1E293B`), 1px border (`#334155`), JetBrains Mono label. Hover triggers border transition to `#64748B`.
- **Destructive**: Crisp crimson border (`#EF4444`) with 10% translucent crimson tint; never relies solely on color, incorporating an explicit warning icon prefix.

### Status Indicators & Pills
- Monospaced JetBrains Mono uppercase labels at `10px` or `12px`.
- High-visibility status dot prefix (6px circle):
  - **Passed / AAA Compliant**: Emerald (`#10B981`)
  - **Warning / Review Needed**: Chartreuse (`#84CC16`)
  - **Critical Failure / Non-Compliant**: High-contrast Crimson (`#F43F5E`)
  - **Running / Automated Execution**: Electric Cobalt (`#2563EB`) pulsing indicator.

### Input Fields & Controls
- Height fixed at `44px` for touch accessibility.
- Dark canvas fill with 1px border (`#334155`). Focus immediately renders a `2px solid #2563EB` perimeter with no layout shift.
- Monospace placeholder strings with explicit label elements positioned strictly above the field (never floating or placeholder-only).

### Checkboxes & Radio Buttons
- 20px x 20px geometric touch container embedded within a 44px safe touch envelope.
- Custom checked state using high-contrast thick geometric paths (2.5px stroke) ensuring visibility for low-vision users.

### Test-Run Status Widgets & Cards
- Rigid structural containers framed with 1px `#334155` borders.
- Header bars feature metadata strips showcasing timestamp, duration, and Axe engine versions using `code-sm`.
- Nested pass/fail assertion lists with alternating sub-surface zebra fills (`#1E293B` to `#162032`) to anchor row scanning.