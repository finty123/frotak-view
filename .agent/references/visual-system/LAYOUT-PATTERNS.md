# Layout Patterns

## 1. Global application shell

- Left navigation: 248–280 px expanded, 64–72 px collapsed; logo/workspace at top, search/command access, primary domains, utilities at bottom.
- Topbar: 52–60 px; breadcrumbs/context on left, global search/notifications/help/account on right.
- Content: fluid, `min-width: 0`, scroll ownership explicit. The shell itself should not create nested accidental page scrollbars.
- Mobile: sidebar becomes an offcanvas drawer; topbar retains page title and highest-priority global actions.

Suggested domain groups: Overview, Live, Events, Video, Fleet, Safety, Reports, Administration. Exact names follow the product guide and permissions.

## 2. Map-first operations

- Main map takes 60–75% of usable width.
- Results/entity rail takes 320–420 px and can collapse.
- Floating controls are grouped by function: zoom/navigation, layers, drawing/selection, fit bounds, help.
- Live status and data freshness are visible without covering the map.
- Selected asset opens a side card/drawer rather than a large opaque popup.

## 3. Video review and event investigation

- Header: event context, severity, state, asset/driver/time and workflow actions.
- Evidence strip: synchronized thumbnails for cabin/road/side channels and route snapshot.
- Main region: video player and map can split 60/40 or switch tabs on smaller widths.
- Timeline: synchronized telemetry/events under the primary viewer.
- Right rail: event facts, rule, recommendation, comments, assignments and audit trail.
- Fullscreen mode keeps exit, time, channel, playback, event markers and privacy controls accessible.

## 4. Data management/listing

- Page header with title, result count, saved view and primary create/import action.
- Persistent filter row, optional advanced filter drawer, active filter chips.
- Table with sticky header, selection, sort, resize/visibility, pagination or virtual scrolling.
- Bulk actions appear only after selection and remain permission-aware.
- Row click opens detail; explicit menu carries destructive/secondary actions.

## 5. Dashboard

- First row: critical operational KPIs with trend and freshness.
- Second row: active alerts, fleet/camera health and map overview.
- Third row: safety trends, event distribution, review queue and exceptions.
- Every visualization supports drill-down and a textual/table equivalent.
- Avoid a mosaic of equally weighted cards; size reflects decision priority.

## 6. Configuration/editor

- Narrow readable form column or two-column label/control grid.
- Sticky summary/validation rail only for complex policies or rules.
- Use sections, accordions only for secondary optional configuration, and a clear save/cancel footer.
- Warn about unsaved changes; show effective scope, inherited values and permission impact.

## 7. Master-detail

- Desktop: list/table left or top, detail right/below based on comparison needs.
- Deep-link the selected record.
- Preserve list filters and scroll position when returning.
- Mobile: separate route or full-height drawer, never squeeze two unreadable panes.

## 8. Empty/error/offline canvases

- Explain what is absent, why, and the next permitted action.
- Preserve toolbar and filter context when a query has no results.
- Offline mode shows last successful refresh and which actions are unavailable.
- Partial video/map failure does not blank unrelated metadata or workflow controls.

