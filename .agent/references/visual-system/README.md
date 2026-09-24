# FrotaK View — Visual System Reference

This directory is the durable visual source of truth for FrotaK View. It turns the approved videotelemetry reference, AlignUI's MIT component foundations and Preline's licensed application patterns into an original product language.

## Reading order

| Need | Read |
|---|---|
| Understand the expected look | `VISUAL-DIRECTION.md` |
| Apply colors, type, spacing, radii and elevation | `FOUNDATIONS.md` |
| Choose the right primitive or pattern | `COMPONENT-CATALOG.md` |
| Assemble shell and workspaces | `LAYOUT-PATTERNS.md` |
| Design a product screen | `SCREEN-BLUEPRINTS.md` |
| Specify behavior and accessibility | `INTERACTION-ACCESSIBILITY.md` |
| Implement from upstream sources | `IMPLEMENTATION-GUIDE.md` |
| Review visual quality | `QA-CHECKLIST.md` |
| Audit origin, version and license | `SOURCE-MANIFEST.md`, `licenses/`, `catalogs/`, `vendor/` |

## Precedence

1. Implemented FrotaK semantic tokens and shared components.
2. Accepted decisions in `.agent/DECISIONS.md`.
3. This reference and the `videotelemetry-visual-system` skill.
4. Licensed upstream source snapshots.
5. Live external documentation.

The attached image is a composition reference only. AlignUI and Preline are source material, not the FrotaK brand. When sources disagree, favor accessibility, product task clarity, semantic consistency and the current repository architecture.

## Stored assets

- `assets/videotelemetry-visual-direction.png`: user-supplied visual direction.
- `vendor/alignui-nextjs/`: public MIT starter with the complete AlignUI base component set available in that snapshot.
- `vendor/alignui-remix/`: public MIT Remix starter, retained for framework-neutral comparison and completeness.
- `vendor/alignui-cli/`: public MIT token/CLI source.
- `vendor/preline/`: public Preline source snapshot with its dual license preserved.

Do not edit vendor snapshots. Adapt code into the application's own component layer and retain attribution where required.
