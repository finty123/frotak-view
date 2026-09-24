# Component Catalog and Source Selection

## Selection policy

Use a single FrotaK component API. Upstream components are implementation references, never imported as two parallel visual systems.

| FrotaK primitive/pattern | Preferred source | Notes |
|---|---|---|
| Button, compact icon button, link button | AlignUI | Preserve size/mode/variant model; expose loading and permission states |
| Input, textarea, label, hint, checkbox, radio, switch, slider | AlignUI | Compose labels, validation and affixes consistently |
| Select, combobox, search and advanced filters | AlignUI primitive + Preline behavior when needed | One focus model; searchable large datasets require virtualization |
| Badge, status badge, tag, avatar | AlignUI | Status is icon/text/color; badges never replace full labels where ambiguity exists |
| Alert, toast, notification | AlignUI | Toasts are transient; critical/auditable events remain in page history |
| Modal, drawer, dropdown, popover, tooltip | AlignUI/Radix | Use Preline layout examples, not duplicate JS overlays |
| Data table | AlignUI shell + project table engine | Sticky header, sort, filter, selection, density, pagination, columns and export |
| Sidebar, navbar, responsive shell | Preline | Adapt markup/tokens to FrotaK; preserve keyboard/offcanvas behavior |
| Timeline/activity feed | Preline | For alert lifecycle, review history, evidence and audit events |
| Tabs, stepper, breadcrumb, pagination | AlignUI; Preline for complex responsive variant | Do not use tabs as hidden route replacement without URL state |
| Card/list group/skeleton/spinner | Preline composition + FrotaK tokens | Keep geometry stable during loading |
| Charts | Preline integration guidance + chosen chart library | Semantic palettes, units, accessible summary/table fallback |
| Maps | Preline map integration guidance + project map provider | Map controls use FrotaK compact primitives and domain markers |
| Video player/evidence strip | FrotaK domain component | AlignUI controls and Preline layout only; video semantics are project-owned |
| Command menu | AlignUI | Global navigation/action discovery; permission-aware results |
| File upload/progress | AlignUI | Camera media/import workflows require size/type/security states |

## Required states for every primitive

Document and implement, when applicable:

- default, hover, focus-visible, pressed/active, selected/checked;
- disabled, read-only, loading, skeleton;
- empty, no-results, error, warning, success;
- permission denied, unavailable/offline, stale, partial data;
- light/dark/high-contrast and reduced-motion behavior;
- keyboard and screen-reader semantics.

## Domain components

### Vehicle status chip

Contains asset identifier, motion/ignition state, connectivity freshness and optional driver. It must distinguish `moving`, `stopped`, `idling`, `offline` and `unknown` with text/icon plus color.

### Camera health indicator

Separates connection, storage, lens obstruction, firmware and channel availability. A green dot alone is insufficient; expose last contact and diagnostic detail.

### Severity badge

Levels: informational, low, medium, high, critical. Include label and, where space permits, icon. Severity is not workflow state.

### Review-state badge

Examples: new, triaged, under review, awaiting evidence, resolved, dismissed, escalated. Use a separate token family from severity.

### Evidence thumbnail

Fixed aspect ratio, timestamp, camera/channel, event marker, loading/error overlay, selection state and privacy/redaction state. Keyboard selection and accessible description are mandatory.

### Telemetry scrubber

Synchronizes video time, route position, sensor events and annotations. Must expose current timestamp, buffered/available ranges, gaps and playback speed.

### Map marker/cluster

Shows type, state and freshness. Selection must not rely only on size; clustered counts and offscreen event indicators need accessible equivalents.

### Filter bar

Combines date/timezone, fleet/group, asset/driver, event type, severity, status and saved views. Active filters stay visible as removable chips; provide reset and result count.

### Audit timeline

Immutable chronological presentation of system events and human actions with actor, timestamp/timezone, action, before/after when appropriate and source.

## Upstream inventories

The full documentation link inventories live in `catalogs/alignui-docs.md` and `catalogs/preline-docs.md`. Exact source is stored under `vendor/` for licensed offline inspection.

