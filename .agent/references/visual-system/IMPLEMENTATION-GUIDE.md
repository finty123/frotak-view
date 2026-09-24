# AlignUI-Only Implementation Guide

## Architecture boundary

Feature routes consume FrotaK-owned APIs, never files under `vendor/`. Keep five layers:

1. semantic tokens and theme;
2. accessible UI primitives adapted from AlignUI;
3. reusable application compositions;
4. videotelemetry domain components;
5. route layouts and pages.

Current project boundaries are `src/components/ui`, `src/components/layout`, `src/components/domain`, `src/pages`, `src/routes` and `src/data`.

## Adoption workflow

1. Find the official entry in `ALIGNUI-FREE-COVERAGE.md`.
2. Inspect its canonical source under `vendor/alignui-nextjs/components/ui` and any utility dependency under `vendor/alignui-nextjs/utils`.
3. Inspect `vendor/alignui-cli` for the source semantic token or Tailwind CSS v4 foundation.
4. Copy only the needed primitive into the project layer, updating import paths and semantic tokens.
5. Preserve Radix behavior, keyboard semantics, accessible names, focus management and ref forwarding.
6. Add FrotaK-specific variants through typed props; do not edit a one-off class string in feature pages.
7. Record any new dependency and why it is necessary.
8. Test required states, responsive behavior, localized content and assistive interaction before feature adoption.

The Remix snapshot is comparison material only for framework differences. React/Vite runtime code must use the canonical React primitive contract rather than framework-specific page examples.

## Foundations

- Use the AlignUI CLI snapshot as the authoritative free token generator/reference for Tailwind CSS v4.
- Map upstream colors to project semantic roles; feature code never consumes numbered palette scales directly.
- Keep typography, shadows and radii centralized.
- Preserve a stable mapping from AlignUI semantics to FrotaK roles so upstream refreshes cannot silently alter severity or workflow meaning.

## Component dependency strategy

- Add Radix packages per adopted primitive; do not install unused interactive packages preemptively.
- Add `sonner` only when Toast is moved into runtime code.
- Add Datepicker dependencies only when that primitive is adopted.
- Add TanStack Table only for behavior such as sorting, filtering, column state or virtualization; the visual table remains project-owned.
- Reuse the approved Remix Icon package for base and domain iconography.

## Recommended adoption order

1. ThemeProvider and semantic token contract.
2. Button, CompactButton, LinkButton, Tooltip and Kbd.
3. Label, Hint, Input, Textarea, Select, Checkbox, Radio, Switch and Datepicker.
4. Badge, StatusBadge, Tag, Avatar, Alert, Banner, Notification and Toast.
5. Modal, Drawer, Dropdown, Popover and CommandMenu.
6. Breadcrumb, Tabs, SegmentedControl, Steppers and Pagination.
7. DataTable, FileUpload and progress primitives.
8. AppShell, PageHeader, FilterBar, EmptyState and LoadingState.
9. EvidenceThumbnail, VideoPlayerShell and TelemetryScrubber.
10. MapShell, MapToolbar, EntityRail, AuditTimeline and WorkflowActions.

## Token naming

Prefer semantic names such as `surface-raised`, `text-muted`, `status-critical`, `workflow-review`, `connectivity-offline` and `evidence-unavailable`. Raw palette variables may exist only in the foundation layer.

## Story and test matrix

For every reusable component cover:

- size and density variants;
- content extremes and Portuguese/English strings;
- default, hover, focus-visible, pressed, selected, disabled and loading;
- empty, stale, offline, error, permission and partial states where applicable;
- keyboard path, screen-reader name/role/value and focus restoration;
- narrow phone, tablet, laptop and wide desktop;
- 200% zoom, reduced motion and contrast requirements.

## Updating the AlignUI mirror

1. Check the current official license, docs version and free inventory.
2. Compare repository HEADs with `SOURCE-MANIFEST.md`.
3. Download changes into a temporary directory.
4. Replace only the matching vendor snapshot; never merge vendor code directly into runtime code.
5. Reconcile Banner, Toast, Data Table and Rating documentation differences.
6. Update the source manifest, documentation catalog and coverage ledger together.
7. Review dependencies, breaking tokens, behavior and accessibility.
8. Run typecheck, lint, tests, production build, route smoke tests and visual QA.
