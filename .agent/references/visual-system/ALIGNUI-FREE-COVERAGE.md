# Complete AlignUI Free Coverage

Audit date: 2026-09-24
Official documentation: AlignUI v1.2
Coverage: 2 foundations + 49 component/utility entries, complete

This ledger is the authoritative bridge between the public AlignUI documentation, the installed local source and FrotaK View usage. “Installed” means source or documented composition is available in the local reference package; feature code must adapt it through the project-owned UI layer.

## Foundations — 2/2

| Official entry | Local source | FrotaK application |
|---|---|---|
| Color | `vendor/alignui-cli/src/` and starter theme files | Semantic surface, text, stroke, brand, status and data-visualization tokens |
| Typography | `vendor/alignui-cli/src/` and starter theme files | Operational heading, label, paragraph, microcopy and tabular-data scales |

## Actions — 5/5

| Official entry | Installed source | Primary use |
|---|---|---|
| Button | `components/ui/button.tsx` | Primary, secondary, destructive and toolbar actions |
| Button Group | `components/ui/button-group.tsx` | Mutually related view or action sets |
| Compact Button | `components/ui/compact-button.tsx` | Dense map, video and table controls |
| Fancy Button | `components/ui/fancy-button.tsx` | Rare emphasized action; never routine operational chrome |
| Link Button | `components/ui/link-button.tsx` | Route and inline navigation actions |

## Displaying Data — 13/13

| Official entry | Installed source | Primary use |
|---|---|---|
| Avatar | `components/ui/avatar.tsx` | Driver, reviewer and user identity |
| Avatar Group | `components/ui/avatar-group.tsx` | Assignees and collaborators |
| Avatar Group Compact | `components/ui/avatar-group-compact.tsx` | Dense queues and table cells |
| Badge | `components/ui/badge.tsx` | Neutral metadata and counts |
| Banner | `components/ui/banner.tsx` | Page-wide outage, policy or critical service notice |
| Data Table | `components/ui/table.tsx` | Registry, queue, audit and report comparison surfaces |
| Divider | `components/ui/divider.tsx` | Semantic grouping without nested cards |
| Kbd | `components/ui/kbd.tsx` | Discoverable keyboard shortcuts |
| Progress Bar | `components/ui/progress-bar.tsx` | Upload, export, buffering and batch progress |
| Progress Circle | `components/ui/progress-circle.tsx` | Compact progress or scored completion |
| Rating | `components/ui/svg-rating-icons.tsx` + documented composition | Qualitative review input only; not safety severity |
| Status Badge | `components/ui/status-badge.tsx` | Connectivity, workflow and availability with separate vocabularies |
| Tag | `components/ui/tag.tsx` | Active filters, labels and removable classifications |

## Feedback — 4/4

| Official entry | Installed source | Primary use |
|---|---|---|
| Alert | `components/ui/alert.tsx` | Persistent inline validation, warning and outcome |
| Notification | `components/ui/notification.tsx` and `notification-provider.tsx` | Durable notification center items |
| Toast | `components/ui/toast.tsx` and `toast-alert.tsx` | Brief noncritical confirmation; powered by Sonner |
| Tooltip | `components/ui/tooltip.tsx` | Icon-action explanation and compact control help |

## Form — 13/13

| Official entry | Installed source | Primary use |
|---|---|---|
| Checkbox | `components/ui/checkbox.tsx` | Independent multi-selection |
| Color Picker | `components/ui/color-picker.tsx` | Geofence/rule display configuration, never status meaning |
| Datepicker | `components/ui/datepicker.tsx` | Search, report and audit periods with timezone context |
| Digit Input | `components/ui/digit-input.tsx` | Verification or fixed-length numeric input |
| File Upload | `components/ui/file-upload.tsx` | Import and evidence/configuration upload |
| Hint | `components/ui/hint.tsx` | Field guidance, constraint and validation copy |
| Input | `components/ui/input.tsx` | Search, identifiers and general text data |
| Label | `components/ui/label.tsx` | Persistent accessible field naming |
| Radio | `components/ui/radio.tsx` | One choice from a visible set |
| Select | `components/ui/select.tsx` | Bounded single/multiple option selection |
| Slider | `components/ui/slider.tsx` | Video volume/speed ranges and numeric tuning |
| Switch | `components/ui/switch.tsx` | Immediate binary setting, never destructive confirmation |
| Textarea | `components/ui/textarea.tsx` | Review notes, comments and descriptions |

## Layout — 5/5

| Official entry | Installed source | Primary use |
|---|---|---|
| Accordion | `components/ui/accordion.tsx` | Secondary optional configuration sections |
| Breadcrumb | `components/ui/breadcrumb.tsx` | Hierarchical administrative context |
| Segmented Control | `components/ui/segmented-control.tsx` | Small mutually exclusive local views |
| Tab Menu Horizontal | `components/ui/tab-menu-horizontal.tsx` | Detail sections and responsive surface switching |
| Tab Menu Vertical | `components/ui/tab-menu-vertical.tsx` | Settings subsections in wide layouts |

## Navigation — 4/4

| Official entry | Installed source | Primary use |
|---|---|---|
| Dot Stepper | `components/ui/dot-stepper.tsx` | Compact progress through short guided flows |
| Horizontal Stepper | `components/ui/horizontal-stepper.tsx` | Report/rule builders on desktop |
| Pagination | `components/ui/pagination.tsx` | Real page navigation with total and page size |
| Vertical Stepper | `components/ui/vertical-stepper.tsx` | Long builders or narrow layouts |

## Overlays — 5/5

| Official entry | Installed source | Primary use |
|---|---|---|
| Command Menu | `components/ui/command-menu.tsx` | Global search, navigation and permitted quick actions |
| Drawer | `components/ui/drawer.tsx` | Mobile navigation, filters and nonblocking detail |
| Dropdown | `components/ui/dropdown.tsx` | Contextual row and toolbar actions |
| Modal | `components/ui/modal.tsx` | Focused confirmation or short blocking task |
| Popover | `components/ui/popover.tsx` | Anchored filters, calendars and compact detail |

## Utils — 4/4

| Official entry | Installed source | Responsibility |
|---|---|---|
| cn | `utils/cn.ts` | Deterministic class composition and Tailwind conflict resolution |
| Polymorphic | `utils/polymorphic.ts` | Typed `as` support |
| Recursive Clone Children | `utils/recursive-clone-children.tsx` | Controlled propagation of compound-component variants |
| tv | `utils/tv.ts` | Typed variants, slots and defaults |

## Supporting public starter files

The starter also provides `avatar-empty-icons.tsx`, `file-format-icon.tsx`, `social-button.tsx`, `notification-provider.tsx`, `toast-alert.tsx` and `svg-rating-icons.tsx`. These support official entries but do not increase the official inventory count.

## Dependency notes

- Radix UI packages provide accessible behaviors for dialogs, menus, selects, tooltips and other interactive primitives.
- `tailwind-variants`, `tailwind-merge` and `clsx` support typed style composition.
- `@remixicon/react` is the approved icon family.
- `sonner` is required only when the Toast primitive is adopted into runtime code.
- `react-day-picker` and date utilities are required when Datepicker is adopted.
- `@tanstack/react-table` is optional for advanced sorting/filtering/virtualization; the official Data Table visual primitive remains `table.tsx`.

## Coverage rules

- A row cannot be marked covered by name alone; the source/composition, dependency and intended semantic use must be known.
- New domain components must resolve their basic controls to this inventory before inventing a primitive.
- An upstream component may be simplified when adopted, but keyboard, focus, accessible naming and required operational states must remain.
- Premium examples or blocks never satisfy a free-kit coverage row.
