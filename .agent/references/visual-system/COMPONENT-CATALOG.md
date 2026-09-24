# Component Catalog and Ownership

## Selection policy

Use one FrotaK component API. AlignUI is the only upstream primitive source; vendor files are adapted behind project-owned components, never imported directly by feature routes. Check `ALIGNUI-FREE-COVERAGE.md` before inventing any primitive.

| FrotaK primitive/pattern | AlignUI foundation | Product contract |
|---|---|---|
| Button, icon button, link action | Button, Compact Button, Button Group, Link Button | Loading, destructive, permission and accessible-name states |
| Input family | Input, Label, Hint, Textarea, Checkbox, Radio, Switch, Slider | One field shell, persistent labels, described validation |
| Select/search/filter | Select, Command Menu, Popover, Input, Tag | One focus model; active filters remain visible and removable |
| Date/time range | Datepicker, Popover, Input | Timezone, inclusive bounds and preset clarity |
| Status/meta | Badge, Status Badge, Tag, Avatar | Separate severity, workflow, connectivity and availability vocabularies |
| Feedback | Alert, Banner, Notification, Toast, Tooltip | Persistent for critical/auditable outcomes; toast only for brief confirmation |
| Overlay | Modal, Drawer, Dropdown, Popover, Tooltip | Radix focus behavior; exact purpose determines blocking level |
| Data table | Data Table, Checkbox, Dropdown, Pagination | Sticky header, sorting, filtering, selection, density, columns and real totals |
| Navigation | Breadcrumb, Tabs, Segmented Control, Steppers, Pagination | Route state stays addressable; local view state stays explicit |
| Shell | Button, Tooltip, Drawer, Command Menu, Badge | Original FrotaK composition with responsive offcanvas behavior |
| File/progress | File Upload, Progress Bar, Progress Circle, Alert | Size/type/security, cancel/retry and durable result states |
| Dashboard/chart | Badge, Segmented Control, Tooltip, Divider | Semantic series, units, freshness and accessible summary/table |
| Map workspace | Compact Button, Tooltip, Drawer, Popover, Tag | Original domain canvas, markers, result rail and textual equivalent |
| Video/evidence | Compact Button, Slider, Tooltip, Tabs, Status Badge | Original synchronized player, timeline, channel and gap semantics |
| Review/audit | Avatar, Status Badge, Textarea, Stepper, Divider | Immutable event history separated from editable comments |

## Required primitive states

Implement where applicable: default, hover, focus-visible, pressed, selected/checked, disabled, read-only, loading, empty, no-results, warning, error, success, permission denied, unavailable, offline, stale and partial. Validate light/dark parity if dark mode is enabled, reduced motion, keyboard operation, screen-reader name/role/value and long localized content.

## Original domain components

### Application shell

Persistent sidebar, topbar, product/workspace switcher, global command menu, notification center and user menu. Navigation state is route-driven; mobile uses the AlignUI Drawer primitive. Counts use Badge and never replace text labels.

### Vehicle status chip

Asset identifier, motion/ignition state, connectivity freshness and optional driver. Distinguish moving, stopped, idling, offline and unknown using icon, label and color.

### Camera health indicator

Separate connection, storage, lens obstruction, firmware and channel availability. Always expose last contact and diagnostic detail; a green dot alone is insufficient.

### Severity badge

Levels: informational, low, medium, high and critical. It is not the same component vocabulary as review state. Include a visible label and an icon where density allows.

### Review-state badge

New, triaged, under review, awaiting evidence, resolved, dismissed and escalated. Do not encode safety severity with this component.

### Evidence thumbnail

Fixed aspect ratio, exact timestamp, camera/channel, event marker, loading/error/unavailable overlay, selection and privacy/redaction state. Support keyboard selection and an accessible description.

### Video player shell

Single, picture-in-picture, two-up and synchronized grid layouts. Compose AlignUI actions, Slider, Tooltip, Tabs and Status Badge. Keep channel, timestamp, timezone, sync, quality, audio legality, privacy and export permission visible.

### Telemetry scrubber

Synchronize video time, route position, sensor events and annotations. Expose current timestamp, buffered/available ranges, unavailable gaps, event markers, zoom and playback speed.

### Map shell and marker cluster

Map controls use Compact Button, Button Group, Tooltip, Popover and Drawer. Markers expose entity type, movement/connectivity state and freshness; selected and clustered states need textual equivalents.

### Filter bar

Combine date/timezone, fleet/group, asset/driver, event type, severity, state and saved view. Active values become Tags; reset, result count and applied scope stay visible.

### Audit timeline

Immutable chronology of system events and human actions with actor, exact timestamp/timezone, source, action and before/after data where permitted. Use Avatar, Divider, Status Badge and structured metadata.

### Operational empty state

Original composition built from icon, title, reason, recovery action and retained context. “No records,” “no matches,” “offline,” “permission denied” and “evidence expired” are different states.

## Anti-duplication rule

Before adding shared UI, search the project layer and the complete free inventory. Extend an existing typed variant when semantics match. Create a new domain component only when it encapsulates videotelemetry meaning that no base primitive should own.
