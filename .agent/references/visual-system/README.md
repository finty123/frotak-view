# FrotaK View Visual System

This directory is the definitive visual source of truth for FrotaK View. It combines the approved videotelemetry composition, the complete free AlignUI v1.2 base system and product-specific rules for maps, video, telemetry, evidence, safety and fleet administration.

## Authority order

1. `../../skills/smartcameras-product-guide.md` and its references define what the product must do.
2. `../../skills/videotelemetry-visual-system.md` defines the mandatory visual contract.
3. `VISUAL-DIRECTION.md` defines the expected operational composition and visual character.
4. `FOUNDATIONS.md` defines tokens, state semantics, density, motion and typography.
5. `ALIGNUI-FREE-COVERAGE.md` is the auditable inventory of every installed free AlignUI entry.
6. `COMPONENT-CATALOG.md` maps AlignUI primitives to project-owned and domain components.
7. `LAYOUT-PATTERNS.md` and `SCREEN-BLUEPRINTS.md` define reusable screen structures.
8. `INTERACTION-ACCESSIBILITY.md`, `IMPLEMENTATION-GUIDE.md` and `QA-CHECKLIST.md` govern implementation and acceptance.

When sources disagree, favor task clarity, accessibility, semantic consistency, the Smart Cameras capability contract and the current repository architecture.

## Package structure

- `assets/`: user-provided composition reference.
- `catalogs/alignui-docs.md`: official v1.2 documentation index.
- `licenses/ALIGNUI-MIT-LICENSE.txt`: required upstream license.
- `vendor/alignui-nextjs/`: canonical free React primitives and utilities; includes the official documentation-only Banner and Toast sources needed for complete v1.2 coverage.
- `vendor/alignui-cli/`: official Tailwind CSS v4 foundations and token generator.
- `vendor/alignui-remix/`: official secondary implementation snapshot for framework comparison only; never the project runtime source.

## Single-system rule

AlignUI is the only upstream visual system. Feature pages consume project-owned components from the FrotaK layers; they do not import vendor snapshots directly. Domain components may compose several AlignUI primitives, but must preserve one token model, one state vocabulary and one interaction model.

## Source versus product

The vendor directory is an offline, licensed implementation reference—not application code that is copied wholesale. Adapt only the needed primitive into `src/components/ui`, retain accessibility behavior and expose a FrotaK-owned API. Map, video, evidence, telemetry, review, audit and fleet-management components are original domain compositions.

The attached screenshot is a composition reference only. It does not authorize copying brand, imagery, wording, account data or exact trade dress.

## Update policy

1. Recheck the official free inventory and license.
2. Compare upstream revisions with `SOURCE-MANIFEST.md`.
3. Update the matching vendor snapshot in isolation.
4. Reconcile `ALIGNUI-FREE-COVERAGE.md`, dependencies and documentation-only components.
5. Review behavior, tokens, accessibility and breaking changes before adoption.
6. Run type, lint, test, build, route, responsive and visual QA.

Paid AlignUI PRO blocks, sector templates and premium Figma assets remain excluded unless a separate license decision is recorded.
