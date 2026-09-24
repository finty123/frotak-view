# Implementation Guide

## Architecture boundary

Create a project-owned UI layer such as `components/ui` plus domain components such as `components/telemetry`. Feature routes consume FrotaK APIs, never raw AlignUI and Preline variants mixed ad hoc.

Recommended layers:

1. tokens/themes;
2. accessible primitives;
3. composed application components;
4. videotelemetry domain components;
5. page layouts and routes.

## AlignUI adoption

- Start from `vendor/alignui-nextjs/components/ui` for accessible React primitives.
- Use `vendor/alignui-remix/app/components/ui` to compare framework integration when a component appears tied to Next.js.
- Start from `vendor/alignui-nextjs/app/globals.css` and `tailwind.config.ts` only as token references; rename to FrotaK semantic roles.
- `vendor/alignui-cli` is the authoritative offline source for newer CSS-first token generation in this snapshot.
- Keep Radix behavior and focus semantics when adapting components.
- Remove unused variants rather than shipping the entire starter blindly.

## Preline adoption

- Use `vendor/preline/src` and `dist` to understand headless behavior.
- Use `theme.css` and `css/themes` as reference for semantic Tailwind v4 variables and light/dark parity.
- Reuse shell/layout markup patterns in project-owned components.
- If Preline JS initializes dynamic controls, initialize once after client navigation and destroy/reinitialize safely; do not combine with an equivalent Radix controller.
- Preserve `PRELINE-LICENSE.txt` and attribution for adapted/distributed source.

## Suggested first component tranche

1. ThemeProvider and semantic tokens.
2. Button/IconButton, Link, Tooltip.
3. Input, Select/Combobox, Checkbox, Switch, Date range.
4. Badge/Status, Avatar, Alert, Toast.
5. Modal, Drawer, Dropdown, Popover.
6. Sidebar, Topbar, PageHeader, FilterBar.
7. DataTable, EmptyState, Skeleton, Pagination.
8. EvidenceThumbnail, VideoPlayerShell, TelemetryTimeline.
9. MapShell, MapToolbar, EntityRail, Marker legend.
10. AuditTimeline, CommentComposer, WorkflowActions.

## Token naming

Prefer semantic names (`surface-raised`, `text-muted`, `status-critical`) over source-scale names in feature code. Raw palette variables may exist only in the foundation layer.

## Story/test matrix

For each reusable component, create examples/tests covering size, variants, content extremes, keyboard, screen reader role/name, light/dark, compact/comfortable, loading/error/disabled and Portuguese/English strings.

## Updating the mirror

1. Re-check the official license and current version.
2. Download into a temporary directory.
3. Record URL, branch/tag, commit and date in `SOURCE-MANIFEST.md`.
4. Replace only the matching vendor snapshot; do not merge generated files into app code automatically.
5. Review upstream changes for behavior, security, dependencies and breaking tokens.
6. Re-run visual, accessibility and component tests before adopting changes.
