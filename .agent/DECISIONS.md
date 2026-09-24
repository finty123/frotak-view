# Decisions — FrotaK View

## D-001 — Neutral control-plane baseline

**Status:** Accepted

The project starts with a neutral Jaxx baseline. Architecture, design rules, milestones, routes, integrations, and technology-specific conventions must be derived from this repository and explicit product requirements rather than inherited from another product.

Generated logs, temporary screenshots, quality reports, and historical sessions are local evidence and are not imported as durable project decisions.

## D-002 — Smart Cameras mapping is the functional completeness baseline

**Status:** Accepted

The authenticated FT Vision and FT Manager mapping in `documentacao-smart-camera/` is the product capability baseline for FrotaK View. Future planning, implementation and QA must use `smartcameras-product-guide` and maintain traceability to the mapped screens, controls, states and derived flows.

The baseline governs capability and workflow intent, not branding, proprietary assets, source routes, account-specific values or undocumented internals. FrotaK View will use an original visual identity and repository-defined architecture. A mapped capability may be phased, combined, renamed or replaced only when the decision and tradeoff are recorded; it may not disappear silently.

## D-003 — Videotelemetry visual baseline

**Status:** Accepted

FrotaK View uses the user-provided videotelemetry image as a composition and density reference, not as authorization to copy myGeotab/Michelin branding, assets, copy, data or exact trade dress.

The original FrotaK visual language will be implemented through project-owned semantic tokens and components adapted from the licensed AlignUI base components and Preline public source. AlignUI PRO, premium Figma material, Preline Pro and other separately licensed assets are excluded unless a later explicit license decision records their use.

The mandatory contract is `.agent/skills/videotelemetry-visual-system.md` with detail in `.agent/references/visual-system/`. AlignUI is the preferred source for refined React primitives; Preline is the preferred source for application shells, responsive compositions and complementary headless behaviors. A feature must consume a single FrotaK component API rather than expose two competing libraries.

## D-004 — Frontend-only application architecture

**Status:** Accepted

The visual delivery is a React + TypeScript single-page application built with Vite, React Router and Tailwind CSS. AlignUI patterns supply project-owned accessible primitives and Preline supplies licensed shell/composition references and Tailwind behavior. Remix Icon is the single icon family; Recharts renders data visualizations.

All 36 mapped routes are implemented inside one authenticated application shell. Screen content uses deterministic local fixtures and client-side interaction only. There are no API, database, authentication-provider or backend integrations in this milestone. Local UI state must not be presented as persisted production data.

Shared boundaries are `components/ui` for primitives, `components/layout` for the shell, `components/domain` for videotelemetry patterns, `data` for fixtures, `pages` for route surfaces and `routes` for the canonical route manifest. Features may compose these layers but must not create parallel design systems.

## D-005 — Jaxx complexity threshold for declarative UI

**Status:** Accepted

The Jaxx cyclomatic-complexity ceiling is 20 for this frontend. The default ceiling of 10 incorrectly rejects declarative React compositions whose branches represent visible responsive states, tab panels and route-local UI states rather than hidden business logic. Domain and service logic introduced in later milestones should use smaller dedicated functions and may adopt a stricter package-specific gate.

This adjustment does not relax TypeScript, ESLint, route-manifest, build, duplication, audit-trail or blast-radius checks.
