# Plan — FrotaK View

## Active milestone

Complete frontend-only visual package for all 36 mapped Smart Cameras routes.

## Milestone scope

- React/Vite application shell with responsive sidebar, topbar, product switcher and user surfaces.
- Semantic tokens and reusable AlignUI/Preline-derived components.
- All 27 FT Vision and 9 FT Manager routes, with deterministic fixtures and navigable derived flows.
- Client-side filters, tabs, pagination, sorting, selections, drawers, modals and multi-step forms.
- Map, video, telemetry, chart, report and audit visualizations without external services.
- Responsive and accessibility verification, production build, route smoke tests, commit and push.

Backend APIs, persistence, real authentication, device control and external delivery are explicitly out of scope.

## Product baseline

The complete Smart Cameras mapping is the capability baseline. Future milestones must use `.agent/skills/smartcameras-product-guide.md` and declare Smart Cameras coverage as `covered`, `deferred`, `changed intentionally`, or `unknown`.

## Backlog

- Confirm product goals, target users and delivery boundaries.
- Convert the guide's capability contract into a phased, traceable backlog.
- Define architecture only from verified requirements and repository constraints.
- Define an original FrotaK View design system and navigation model.
- Implement the approved semantic token layer and shared components using the videotelemetry visual reference.
- Build the canonical shell, map-first workspace and event-investigation composition before multiplying feature screens.
- Prioritize shared shell, master data, permissions and audit foundations before dependent operational modules.
- Preserve explicit discovery items for behaviors that were not confirmed in the source system.
- Use `12-matriz-mestra-de-superficies.csv` as the screen-coverage ledger and `13-lacunas-e-validacoes-pendentes.md` as the controlled discovery backlog.

## Acceptance policy

Each milestone must define observable outcomes, affected capabilities, screens and derived flows, verification commands, permissions/audit requirements, failure states and external dependencies. Missing mapped capabilities must be explicitly deferred or intentionally redesigned.

UI milestones must also identify the applicable visual blueprint, reusable components, responsive behavior, data states, accessibility checks and source-license implications.
