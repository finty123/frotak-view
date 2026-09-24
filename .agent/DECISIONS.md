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

The original FrotaK visual language will be implemented through project-owned semantic tokens and components adapted from the complete free AlignUI v1.2 base system. AlignUI PRO, premium Figma material and other separately licensed assets are excluded unless a later explicit license decision records their use.

The mandatory contract is `.agent/skills/videotelemetry-visual-system.md` with detail in `.agent/references/visual-system/`. AlignUI is the single upstream source for foundations and React primitives; application shells, responsive compositions and videotelemetry patterns are original FrotaK components built from those primitives. Feature code consumes one FrotaK component API.

## D-004 — Frontend-only application architecture

**Status:** Accepted

The visual delivery is a React + TypeScript single-page application built with Vite, React Router and Tailwind CSS. AlignUI supplies the project-owned accessible primitive baseline; shell and domain compositions are original FrotaK implementations. Remix Icon is the single icon family; Recharts renders data visualizations.

All 36 mapped routes are implemented inside one authenticated application shell. Screen content uses deterministic local fixtures and client-side interaction only. There are no API, database, authentication-provider or backend integrations in this milestone. Local UI state must not be presented as persisted production data.

Shared boundaries are `components/ui` for primitives, `components/layout` for the shell, `components/domain` for videotelemetry patterns, `data` for fixtures, `pages` for route surfaces and `routes` for the canonical route manifest. Features may compose these layers but must not create parallel design systems.

## D-005 — Jaxx complexity threshold for declarative UI

**Status:** Accepted

The Jaxx cyclomatic-complexity ceiling is 20 for this frontend. The default ceiling of 10 incorrectly rejects declarative React compositions whose branches represent visible responsive states, tab panels and route-local UI states rather than hidden business logic. Domain and service logic introduced in later milestones should use smaller dedicated functions and may adopt a stricter package-specific gate.

This adjustment does not relax TypeScript, ESLint, route-manifest, build, duplication, audit-trail or blast-radius checks.

## D-006 — AlignUI is the definitive upstream visual system

**Status:** Accepted

FrotaK View uses the complete free AlignUI v1.2 system as its only upstream visual foundation. The local package must cover Color and Typography plus all 49 documented free entries across Actions, Displaying Data, Feedback, Form, Layout, Navigation, Overlays and Utils.

The public starter, CLI token source and official documentation-only Banner and Toast sources are preserved under `.agent/references/visual-system/` with provenance and license. Feature routes do not import vendor snapshots directly: shared primitives are adapted behind FrotaK-owned APIs, while the application shell and videotelemetry components remain original project compositions.

Any future introduction of a second general-purpose UI kit, AlignUI PRO material or premium design assets requires an explicit new decision and applicable license record.

## D-007 — Complete AlignUI package is installed in the runtime

**Status:** Accepted

The complete free AlignUI source inventory is installed under `src/components/alignui/` with its official helper and hook layer. FrotaK-owned components in `src/components/ui/` remain the stable application API and adapt those primitives to the Smart Cameras capability model.

Routes may use domain compositions but must not import another visual kit or reintroduce raw native form controls where an AlignUI primitive exists. Visual literals belong only to the canonical AlignUI foundation or explicitly documented simulated media surfaces; charts consume semantic CSS variables.
