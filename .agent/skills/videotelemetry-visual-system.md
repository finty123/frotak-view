---
name: videotelemetry-visual-system
description: Mandatory AlignUI-only visual contract for every FrotaK View screen, component, map, video surface, table, form, navigation flow, overlay and visual QA decision.
trigger: Before any UI, UX, component, layout, token, map, video, table, dashboard, interaction, responsive or visual QA work in FrotaK View.
allowedTools: read
version: 2.0.0
---

# Videotelemetry Visual System

## Mission

Make FrotaK View one coherent, high-trust videotelemetry operations console. The Smart Cameras mapping defines functional scope; the user-approved screenshot defines composition and density; the complete free AlignUI v1.2 system defines visual primitives, foundations and interaction behavior.

AlignUI is the single upstream visual source. All product-facing APIs, tokens and domain compositions remain owned by FrotaK View.

## Required reading

Read progressively for the task at hand:

1. `../references/visual-system/README.md` for authority, source order and boundaries.
2. `../references/visual-system/ALIGNUI-FREE-COVERAGE.md` to select an installed free primitive and verify coverage.
3. `../references/visual-system/FOUNDATIONS.md` for tokens, typography, density, color and state semantics.
4. `../references/visual-system/COMPONENT-CATALOG.md` for component ownership and videotelemetry compositions.
5. `../references/visual-system/LAYOUT-PATTERNS.md` and `SCREEN-BLUEPRINTS.md` for page structure.
6. `../references/visual-system/INTERACTION-ACCESSIBILITY.md` for behavior, keyboard, map and video accessibility.
7. `../references/visual-system/IMPLEMENTATION-GUIDE.md` before adding or changing shared UI code.
8. `../references/visual-system/QA-CHECKLIST.md` before considering visual work complete.

Use `VISUAL-DIRECTION.md` when judging hierarchy and composition, and `SOURCE-MANIFEST.md` when copying or updating upstream source.

## Installed free AlignUI contract

The local reference package covers both foundations and all 49 free v1.2 component/utility entries:

- Foundations: Color and Typography.
- Actions: 5 entries.
- Displaying Data: 13 entries.
- Feedback: 4 entries.
- Form: 13 entries.
- Layout: 5 entries.
- Navigation: 4 entries.
- Overlays: 5 entries.
- Utils: 4 entries.

Canonical source locations:

- React primitives: `../references/visual-system/vendor/alignui-nextjs/components/ui/`.
- Utilities: `../references/visual-system/vendor/alignui-nextjs/utils/`.
- Tailwind CSS v4 token generator and semantic scales: `../references/visual-system/vendor/alignui-cli/`.
- License: `../references/visual-system/licenses/ALIGNUI-MIT-LICENSE.txt`.

`Banner`, `Toast` and `Toast Alert` are preserved from the official v1.2 documentation because they are not present in the public starter revision. `Data Table` maps to `table.tsx`; `Rating` is an official composition using `svg-rating-icons.tsx` rather than a monolithic primitive.

## Non-negotiable rules

- Use only project-owned components in feature pages. Never mix raw upstream markup ad hoc.
- Start from the installed AlignUI primitive whenever one exists; extend it through typed variants and semantic tokens.
- Maintain one implementation per control type and one interaction model per surface.
- Use Remix Icon consistently; every icon-only action needs an accessible name and tooltip where discovery is not obvious.
- Keep map, video, telemetry, evidence and audit components in the domain layer, composed from AlignUI primitives.
- Never use raw palette values in feature code. Use semantic roles for surfaces, text, strokes, brand, severity, workflow, connectivity and evidence availability.
- Severity, review state, connectivity and evidence availability are separate semantics and must never share one ambiguous badge family.
- Operational timestamps show timezone or explicit recency; data surfaces show freshness and source.
- Every interactive control supports hover, focus-visible, pressed, selected, disabled, loading and permission-denied states where applicable.
- Every map result has a list/table equivalent; every meaningful chart has a summary or tabular equivalent; video gaps and unavailable evidence remain visible.
- Responsive layouts recompose deliberately. Sidebar, context rail, tables, map and video must not merely shrink.
- Preserve WCAG AA contrast, keyboard completion, focus restoration, reduced motion and 200% zoom usability.

## Visual character

- Calm, neutral operational shell with restrained blue brand accents.
- White and pale-gray surfaces, subtle strokes and shallow elevation.
- Dense but legible typography; tabular numerals for telemetry, timestamps and identifiers.
- Strong task hierarchy: one dominant operational canvas, supporting evidence, and a contextual action rail.
- Red is reserved for critical/destructive meaning; status is always reinforced by text or icon.
- Immersive dark treatment is limited to media contexts, never the whole administration surface by default.

## Completion gate

Visual work is complete only when:

1. the screen maps to the Smart Cameras capability baseline;
2. all controls resolve to an installed AlignUI primitive or a documented FrotaK domain composition;
3. responsive, empty, loading, stale, offline, error, permission and content-extreme states are covered;
4. keyboard and accessible names are verified;
5. the visual QA checklist passes; and
6. no unlicensed premium material or secondary UI system is introduced.

## Forbidden

- proprietary product branding, copied trade dress, paid AlignUI PRO blocks, sector templates or premium Figma assets without a recorded license decision;
- introducing a second general-purpose component system;
- one-off colors, spacing, radii, shadows or z-index values in feature code;
- decorative dashboards that obscure operational priority;
- silent omission of unavailable evidence, data gaps, permissions or failure states.
