# AlignUI Free Documentation Catalog

Base URL: `https://www.alignui.com/docs/v1.2/`
Audited: 2026-09-24
Official product tier: Base Components FREE

## Getting started and foundations

- `introduction`
- `installation`
- `foundation/color`
- `foundation/typography`

## Actions — 5

- `ui/button`
- `ui/button-group`
- `ui/compact-button`
- `ui/fancy-button`
- `ui/link-button`

## Displaying Data — 13

- `ui/avatar`
- `ui/avatar-group`
- `ui/avatar-group-compact`
- `ui/badge`
- `ui/banner`
- `ui/data-table`
- `ui/divider`
- `ui/kbd`
- `ui/progress-bar`
- `ui/progress-circle`
- `ui/rating`
- `ui/status-badge`
- `ui/tag`

## Feedback — 4

- `ui/alert`
- `ui/notification`
- `ui/toast`
- `ui/tooltip`

## Form — 13

- `ui/checkbox`
- `ui/color-picker`
- `ui/datepicker`
- `ui/digit-input`
- `ui/file-upload`
- `ui/hint`
- `ui/input`
- `ui/label`
- `ui/radio`
- `ui/select`
- `ui/slider`
- `ui/switch`
- `ui/textarea`

## Layout — 5

- `ui/accordion`
- `ui/breadcrumb`
- `ui/segmented-control`
- `ui/tab-menu-horizontal`
- `ui/tab-menu-vertical`

## Navigation — 4

- `ui/dot-stepper`
- `ui/horizontal-stepper`
- `ui/pagination`
- `ui/vertical-stepper`

## Overlays — 5

- `ui/command-menu`
- `ui/drawer`
- `ui/dropdown`
- `ui/modal`
- `ui/popover`

## Utils — 4

- `utils/cn`
- `utils/polymorphic`
- `utils/recursive-clone-children`
- `utils/tv`

## Interpretation notes

- Total documented free entries: 49 plus 2 foundations.
- Data Table installs as `table.tsx`; advanced examples may add TanStack Table behavior.
- Rating is a composition using rating icons rather than one monolithic component file.
- Toast installs `toast.tsx` and the documented `toast-alert.tsx` composition and requires Sonner when adopted.
- Banner and Toast are documented free sources not present in the public Next.js starter revision, so their official source is stored alongside the starter snapshot.
- `ALIGNUI-FREE-COVERAGE.md` maps every entry to its exact local implementation and approved FrotaK usage.

PRO components/blocks, sector templates and premium Figma products are intentionally excluded.
