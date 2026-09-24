---
name: videotelemetry-visual-system
description: Defines the mandatory visual language, layouts, component choices and interaction patterns for FrotaK View, combining the approved videotelemetry direction with licensed AlignUI and Preline references.
trigger: Before planning, designing, implementing, reviewing or testing any FrotaK View screen, UI component, navigation, map, video, dashboard, table, filter, alert, workflow or responsive behavior.
allowedTools:
  - read
version: 1.0.0
---

# videotelemetry-visual-system

## Mission

Make FrotaK View look and behave like one coherent, professional videotelemetry platform. Use the user-provided visual direction for composition and operational density, AlignUI for refined React primitives and semantic foundations, and Preline for application shells, data-heavy patterns, overlays, navigation and Tailwind interaction behavior.

This skill is a design contract, not permission to copy another product's brand, logo, proprietary artwork, wording, data or exact screen.

## Required sources

Read progressively from `.agent/references/visual-system/README.md`:

1. `VISUAL-DIRECTION.md` for the approved look and composition;
2. `FOUNDATIONS.md` for tokens and hierarchy;
3. `COMPONENT-CATALOG.md` for component selection;
4. `LAYOUT-PATTERNS.md` and `SCREEN-BLUEPRINTS.md` for complete screens;
5. `INTERACTION-ACCESSIBILITY.md` and `QA-CHECKLIST.md` before review;
6. `SOURCE-MANIFEST.md`, licenses and `vendor/` only when provenance or exact upstream implementation matters.

Also load `.agent/skills/smartcameras-product-guide.md` whenever the work changes product capabilities or mapped workflows. Functional completeness comes from Smart Cameras; visual behavior comes from this skill.

## Non-negotiable visual contract

- Build an original FrotaK View identity with a light, calm operational canvas, compact blue-led controls and high-information map/video workspaces.
- Use semantic tokens. Never scatter raw colors, radii, shadows, spacing or z-index values through feature code.
- Keep the global shell stable: collapsible left navigation, restrained topbar, contextual page header, then the work canvas.
- Let map, video or data be the dominant object. Chrome must support the task, not compete with it.
- Use progressive disclosure: summary first, details in side panels, drawers, tabs or drill-down routes.
- Treat safety severity, connection state, review state and evidence status as different semantic dimensions; never encode them with color alone.
- Maintain high-density desktop layouts without shrinking touch targets or typography below accessible limits.
- Support light and dark themes at token level. Map/video workspaces may use a focused dark presentation while surrounding controls retain semantic parity.
- Every async or data-driven region needs loading, empty, error, stale/offline, partial and success behavior.
- Every action needs visible hover, focus, pressed, disabled and permission-denied behavior.
- Use Remix Icon consistently unless the repository adopts another single icon family by recorded decision.
- Default to AlignUI primitives when an accessible React primitive exists; use Preline structures/plugins for shell, responsive composition and behaviors not covered by the chosen primitive. Do not mount two competing implementations of the same control in one screen.

## Composition rule

For an operational detail screen, prefer this sequence:

1. context header with back navigation, entity, timestamp/status and primary actions;
2. evidence strip or key metrics;
3. dominant map/video/timeline/data canvas;
4. contextual right rail for findings, recommendations, metadata or collaboration;
5. drawers/modals only for focused edits or secondary detail.

On narrower widths, convert the right rail into a drawer and the sidebar into an offcanvas navigation. Preserve the primary task above the fold.

## Implementation rule

Before adding a component:

1. identify its semantic role and state model;
2. check the component matrix in `COMPONENT-CATALOG.md`;
3. reuse an existing FrotaK primitive if present;
4. otherwise adapt the licensed upstream source into project-owned code and tokens;
5. preserve required attribution and license notices;
6. verify keyboard, screen reader, responsive and reduced-motion behavior;
7. document a durable decision if the new pattern changes the system language.

## Forbidden shortcuts

- no direct copying of myGeotab/Michelin branding, logos, exact trade dress or account data;
- no AlignUI PRO, premium Figma assets, Preline Pro blocks or other paid material unless separately licensed and recorded;
- no unmodified public redistribution of Preline as a general-purpose competing design system;
- no route-local component library, icon mixture, decorative gradients, excessive glass effects or arbitrary shadows;
- no hidden critical action behind hover-only affordances;
- no status conveyed only by red/green;
- no desktop-only composition for workflows that must be usable in the field.

## Definition of done

A UI change is complete only when it:

- maps to a documented product capability;
- uses the system foundations and approved component family;
- matches a blueprint or records a justified new one;
- handles all relevant data and interaction states;
- passes responsive, keyboard, contrast and reduced-motion checks;
- does not introduce unlicensed or premium source material;
- keeps source attribution and traceability intact.

