---
name: smartcameras-product-guide
description: Uses the complete FT Vision and FT Manager mapping as the functional baseline for planning, designing, implementing, reviewing, and testing FrotaK View. Apply whenever work affects fleet monitoring, video evidence, alerts, risk, reports, mobile-data consumption, drivers, vehicles, users, tasks, or sharing rules.
trigger: Before product scoping, UX flows, architecture, implementation, backlog decomposition, gap analysis, acceptance criteria, or QA for functionality inspired by the mapped Smart Cameras platform.
allowedTools:
  - read
version: 1.1.0
---

# smartcameras-product-guide

## Responsibility

Use the authenticated Smart Cameras mapping as the functional blueprint for FrotaK View. Preserve the breadth of capabilities, entity relationships, workflows, states, controls, and audit expectations while building an original product identity and architecture.

This is a requirements guide, not authorization to copy Michelin branding, protected assets, proprietary code, or undocumented behavior. Reproduce useful product capability and interaction intent; design the implementation from the FrotaK View repository and explicit product decisions.

## Canonical references

The exhaustive source material lives in `documentacao-smart-camera/`. Read the files relevant to the task in full. Do not rely only on this summary.

### Always read for cross-cutting or multi-module work

- `documentacao-smart-camera/README.md` — scope and document index.
- `documentacao-smart-camera/00-visao-geral-e-navegacao.md` — shell, navigation, recurring components and visual organization.
- `documentacao-smart-camera/07-matriz-de-controles.md` — control-to-effect catalog and observed verification level.
- `documentacao-smart-camera/08-rotas-inventariadas.csv` — complete screen and derived-flow inventory.
- `documentacao-smart-camera/09-metodologia-e-limites.md` — evidence quality, unconfirmed behavior and limits.
- `documentacao-smart-camera/11-revisao-integral-telas-exibicoes-e-funcoes.md` — audited screen-by-screen functional and visual contract.
- `documentacao-smart-camera/12-matriz-mestra-de-superficies.csv` — canonical inventory of routed and non-routed surfaces.
- `documentacao-smart-camera/13-lacunas-e-validacoes-pendentes.md` — unresolved behavior and controlled validation backlog.

### Read by product area

- Global shell, topbar, user center, notifications and downloads → `01-topbar-e-central-do-usuario.md`.
- Dashboard, live monitoring, risk monitoring and trip playback → `02-dashboard-e-monitoramento.md`.
- Video playback, video library, alerts and alarm detail → `03-centro-de-evidencias.md`.
- Safety analytics, risk lists, report catalog, scheduled email and operational reports → `04-centro-de-relatorios.md`.
- Cellular-data overview, device list and traffic detail → `05-centro-de-consumo-de-dados.md`.
- Unknown-driver review, fleets, vehicles, devices/channels and drivers → `06-identificacao-e-gestao.md`.
- FT Manager administration, login audit, users, evidence/audio tasks and shipper sharing → `10-ft-manager.md`.

If a task touches several areas, read every applicable chapter. If a reference conflicts with current implementation or an accepted decision, surface the conflict and resolve it explicitly; do not silently drop a capability.

## Product capability contract

FrotaK View must be able to express the following product surface unless the product owner explicitly defers or replaces an item.

### Shared authenticated shell

- Persistent topbar and collapsible hierarchical sidebar.
- Product/workspace switcher equivalent to the observed FT Vision and FT Manager separation.
- Global search, language selector, downloads, notifications, user profile and confirmed logout.
- User center containing account data, notifications, tools/about information and download-task states.
- Breadcrumbs, contextual back navigation, active-menu feedback and consistent page titles.
- Shared filter cards, collapsible advanced filters, tables, cards, tabs, maps, pagination and empty states.

### Operational overview and monitoring

- Dashboard totals for fleets, vehicles and drivers, including vehicle operating-state breakdown.
- Risk distribution, top-risk rankings and work queues requiring treatment.
- Live fleet/vehicle map with hierarchy, plate/device search, online/offline/signal state and synchronized selection.
- Routine and key-watch vehicle sets.
- Vehicle actions for live video, trip history, audio dispatch and trip sharing.
- Historical trip playback with period selection, trips, duration, distance, origin/destination, OBD/GPS modes, video correlation, map path, timeline and playback speed.
- Risk-monitoring table with driver/vehicle context, expandable detail, score and configurable auto-refresh.

### Video and evidence center

- Device recording playback selected by vehicle and date, with channel/timeline context.
- Video library organized by completed, downloading, waiting, failed and starred states.
- Video-import request flow covering vehicles, start time, duration, media type, name, recording/black-box source, channels, network policy and transfer speed.
- Alert list with grid/list modes, favorites, comprehensive filtering, batch selection and validation.
- Alert cards containing event, new state, vehicle, speed, trigger, direction, time, place, thumbnail and contextual actions.
- Alert actions for validation, favorite, email, report/evidence export, quick sharing and driver linking.
- Alarm detail with metadata, GPS, evidence, map, nearby events and processing/action/access audit trails.

### Safety analytics and reports

- Configurable safety-score model based on weighted alarms and distance, with documented low-distance behavior.
- Fleet, vehicle and driver analysis dimensions.
- Event distribution, daily trends, heatmaps, time-of-day analysis and risk rankings.
- Driver/vehicle risk list containing exposure, score and categorized event counts.
- Report catalog with preview before generation.
- Scheduled email-report list and two-step creation flow with recipients, cadence, run time and scope.
- Monthly summary covering vehicle status, alarm counts, alarms per 100 km, trends and driver safety score.
- Transmission-status statistics and monthly/detail views.
- Last GPS/online state report.
- Positioning statistics and positioning-detail report.

### Device data consumption

- Monthly/daily device traffic overview, timezone, totals, averages, exceedance indicators and ranking.
- Consumption composition by live viewing, playback, video download, monitoring, communication, evidence/image import, device update and other functions.
- Fleet/device list with monthly and daily use, allowance state, treatment state, responsible user and timestamp.
- Per-device/month detail with total traffic, duration and volume by function plus daily breakdown.

### Driver identity and fleet master data

- Unknown-driver work queue split between untreated and processed items, with fleet/vehicle filters and batch treatment.
- Hierarchical fleet list, creation, deletion eligibility, external identifiers, address, subgroup/vehicle counts and audit metadata.
- Vehicle list with group transfer, plate, fleet, code, state, type, serial, model, used channels, SIM and audit metadata.
- Vehicle detail linking basic data, hardware/device and channels; support channel enablement and semantic roles such as ADAS and DSM.
- Driver list and creation with name, CPF/identifier, status, fleet, iButton or equivalent credential, notes and recognition photo.

### Administrative manager

- Prioritized custom alert-notification configurations scoped to vehicles or vehicle groups.
- Login audit with normal, anomalous/out-of-location and long-inactive/blocked states, including policy-version evidence.
- User management with status, role/function, masked contact data, fleet scope, approver and creation/update audit.
- Three-step user creation: basic information, function authorization and data authorization.
- Evidence-task center with completed/downloading/waiting/failed states, evidence cards and multichannel detail.
- Audio-download task center with downloading/not-started/completed lifecycle and device-delivery progress.
- Shipper-sharing rules connecting authorized vehicles and authorized shippers, with status/time filters and event validation.
- Rule creation with searchable, paginated selection modals and selected-item summaries.

## Domain model that implementation must support

Treat these as conceptual entities until architecture decisions define storage and service boundaries:

- Fleet and fleet hierarchy.
- Vehicle, plate, operating status and group membership.
- Device, serial, model, SIM and network state.
- Camera channel, enabled state and role such as ADAS/DSM.
- Driver, identifier/CPF, iButton credential, fleet, photo and recognition status.
- Trip, GPS point, OBD sample, speed, distance, origin and destination.
- Event/alarm, category, severity, trigger, direction, validation, favorite state and driver association.
- Evidence asset, media channel, origin, duration, file size and transfer lifecycle.
- Risk score, event weight, distance exposure and ranking.
- Data-consumption record by device, day/month and functional category.
- Report definition, generated report and scheduled email task.
- User, role/function, data scope, approver, status and login record.
- Shipper/carrier and vehicle-sharing rule.
- Notification, download task, audio task and audit record.

Expected relationships include fleet → vehicles; vehicle → device/SIM/channels; vehicle/trip → telemetry; driver ↔ vehicle/event; event → evidence/location/audit; device → traffic records; report → entity scope; user → role/data scope; sharing rule ↔ vehicles and shippers.

These relationships were inferred from the UI. Validate them before committing to a database schema.

## Cross-cutting behavior

Every applicable screen must account for:

- Loading, populated, empty, partial, failed and stale-data states.
- Disabled controls until prerequisites or selections exist.
- Single-item and batch selection behavior.
- Filter application, reset and advanced-filter collapse.
- Pagination, page size, sorting and horizontal overflow for wide tables.
- Grid/list alternatives where documented.
- Clear primary, secondary and destructive action hierarchy.
- Confirmation and permission checks for create, update, delete, validation, sharing, email, audio, downloads and logout.
- Role/data-scope enforcement across fleet hierarchy.
- Auditability for security-sensitive and operational actions.
- Timezone-aware timestamps, date ranges and monthly/daily aggregation.
- Long-running job states: waiting, not started, downloading/processing, complete and failed.
- Live/near-live refresh without losing the user's filters or selection.
- Accessible labels, keyboard focus, semantic status indicators and non-color-only feedback.
- Responsive treatment for sidebars, maps, wide tables, video mosaics, drawers and dialogs.
- Internationalization-ready labels; do not preserve visibly incorrect source translations as requirements.

## Evidence levels and uncertainty

Interpret the source labels strictly:

- **Testado/Verificada** — navigation or visible behavior was observed.
- **Inspecionado até confirmação** — fields and pre-submit behavior were observed, but persistence/result was not.
- **Não executado** — outcome is a requirement hypothesis from label and context, not proof of backend behavior.
- **Inferido** — entity relationship or purpose derived from the interface, requiring product/technical validation.

Sample counts, plates, timestamps, scores, addresses, consumption values and software version are evidence examples, never fixed acceptance values.

For unconfirmed behavior, write acceptance criteria that state the intended result and mark it `product validation required`. Do not invent hidden rules, APIs, calculations or permissions.

## Required workflow for future work

### Planning

1. Identify the relevant capability and read its full references.
2. List screens, derived flows, entities, actions, states and permissions involved.
3. Create a **Smart Cameras coverage** section with `covered`, `deferred`, `changed intentionally` and `unknown` items.
4. Preserve dependency order: master data and access control before flows that depend on them; task lifecycles before dashboards that summarize them.
5. Turn unverified outcomes into explicit discovery or product-decision items.

### Design and implementation

1. Preserve functional intent and information hierarchy while using FrotaK View's own identity and components.
2. Implement shared shell and recurring patterns once, not separately per route.
3. Keep device/media/network operations asynchronous and observable.
4. Do not hardcode source sample data, routes, brand names or account-specific values.
5. Keep permission, audit, timezone and failure behavior inside the feature scope rather than postponing them invisibly.

### Review and QA

1. Compare the implemented surface with the relevant chapter, route inventory and control matrix.
2. Compare it with the canonical surface matrix and the integral review; routed and non-routed surfaces both count.
3. Test navigation, filters, dependencies, row/card actions, batch actions, derived screens and return paths.
4. Exercise loading, empty, populated, partial, stale/offline, error, unauthorized and long-running states.
5. Verify destructive and representational actions at the confirmation boundary.
6. Record every functional gap. A missing capability must be explicitly deferred or intentionally redesigned; absence is not completion.

## Definition of done for a mapped capability

A capability is complete only when:

- its navigation entry or intentional replacement exists;
- the main screen and documented derived flows work;
- all visible controls have defined behavior and appropriate enabled/disabled states;
- required entities and relationships are represented;
- loading, empty, error and success states are implemented;
- filters, reset, pagination/sorting and selection work where applicable;
- permissions, sensitive data handling and auditability are addressed;
- asynchronous work exposes lifecycle and retry/failure behavior;
- responsive and accessible behavior has been verified;
- acceptance evidence maps back to the relevant documentation chapter;
- deviations from the Smart Cameras baseline are recorded as product decisions.

## Scope discipline

The mapping is the completeness baseline, not a mandate to clone every visual detail or ship everything in one milestone. Phasing is allowed; silent scope loss is not. Product decisions may simplify, combine, rename or replace flows when the resulting behavior remains traceable and the tradeoff is recorded in `.agent/DECISIONS.md` and the active plan.
