# Foundations

These are implementation targets for the first FrotaK design-system pass. The app must expose them as semantic variables so brand tuning does not require rewriting features.

## Color roles

| Role | Light target | Dark target | Use |
|---|---|---|---|
| `canvas` | cool gray 25–50 | neutral 950 | Application background |
| `surface` | white | neutral 900 | Sidebar, panels, cards |
| `surface-subtle` | cool gray 50–100 | neutral 800 | Grouping, inactive rows |
| `surface-raised` | white | neutral 850 | Menus, drawers, overlays |
| `text-strong` | neutral 950 | neutral 50 | Titles, critical values |
| `text-default` | neutral 700 | neutral 200 | Body and labels |
| `text-muted` | neutral 500–600 | neutral 400 | Metadata |
| `stroke-soft` | neutral 150–200 | neutral 700 | Default separators |
| `stroke-strong` | neutral 300 | neutral 600 | Active boundaries |
| `primary` | blue around AlignUI `#335CFF` | blue 400–500 | Selected navigation, primary action, focus |
| `route` | violet 600 | violet 400 | Route/evidence correlation; not generic primary |
| `info` | sky/blue | sky | Informational status |
| `success` | green 600 | green 400 | Online, completed, accepted |
| `warning` | amber 600 | amber 400 | Attention, expiring, partial |
| `critical` | red 600 | red 400 | High severity, destructive action |
| `offline` | neutral 500 | neutral 400 | Disconnected/unknown |

Rules:

- Map layers and chart series have their own tokens; do not reuse button colors blindly.
- Use tinted backgrounds plus icon/text for status. Never rely on hue alone.
- Reserve saturated red for genuinely critical or destructive states.
- Meet WCAG AA contrast for normal text and visible focus at minimum.

## Typography

- Primary family: Inter or the repository's approved neutral sans.
- Monospace: telemetry identifiers, coordinates, hashes and machine timestamps only.
- Operational scale: 12, 14, 16, 18, 20, 24, 32 px; marketing-scale AlignUI headings are not default inside the app.
- Page title: 20–24 px, medium/semibold.
- Section title: 16–18 px, medium/semibold.
- Body: 14 px desktop dense, 16 px touch-first/mobile.
- Metadata/table secondary: 12–13 px with adequate line height.
- Numeric KPI: tabular numerals; unit visually secondary but not ambiguous.
- Labels use sentence case. Avoid all caps except short technical tags.

## Spacing and density

- Base unit: 4 px.
- Common gaps: 4, 8, 12, 16, 20, 24, 32.
- Desktop shell padding: 16–24 px; dense table cells: 8–12 px vertical and 12–16 px horizontal.
- Minimum pointer target: 44×44 px for touch; compact desktop visuals may be 32–36 px only when the interactive hit area remains sufficient.
- Maintain a comfortable density mode as default and allow a compact mode for dispatch/monitoring tables if product requirements confirm it.

## Shape

- Inputs and compact controls: 8 px radius.
- Cards/panels: 10–12 px.
- Large canvas containers/drawers: 12–16 px.
- Pills only for badges, tags, segmented states and compact filters.
- Do not use excessive fully rounded buttons for all actions.

## Elevation

- Level 0: flat canvas and table rows.
- Level 1: bordered panels/cards, optionally a 1–2 px subtle shadow.
- Level 2: sticky toolbars and floating map controls.
- Level 3: dropdowns, popovers and context menus.
- Level 4: modal/dialog and blocking overlays.
- Prefer borders and surface contrast over shadow for persistent layout regions.

## Icons

- Default family: Remix Icon, 1.5–2 px optical stroke, 16/20/24 px sizes.
- Pair icon with text for primary navigation and unfamiliar actions.
- Tooltips describe icon-only controls; accessible names are mandatory.
- Vehicle/camera/map markers may use domain-specific SVGs but must share size, stroke and state conventions.

## Motion

- Micro feedback: 120–180 ms.
- Drawer/sidebar transitions: 180–240 ms.
- Avoid animating map position or live data in a way that implies false precision.
- Honor `prefers-reduced-motion`; disable nonessential parallax, pulse and route animation.

## Responsive breakpoints by behavior

- `< 768`: offcanvas navigation, single-column task, bottom sheets/drawers for context.
- `768–1199`: compact/collapsed sidebar; two-region layouts only when both remain usable.
- `1200–1599`: standard operational desktop, persistent sidebar and optional right rail.
- `>= 1600`: wider map/video canvas; cap text rails and avoid stretching forms/tables beyond readable measure.

