# State — FrotaK View

## Status

ALIGNUI_RUNTIME_REFACTOR_COMPLETE

## Current milestone

Complete AlignUI-only runtime adoption across all 36 FrotaK View routes.

## Current focus

The 36-route frontend is fully refactored to the complete free AlignUI package. Foundations, shared primitives, navigation shell, data displays, feedback, forms, overlays and operational controls consume the definitive semantic token layer through FrotaK-owned component APIs.

## Last session

Jaxx session `session-2026-09-24T18-05-32-237Z` installed the complete AlignUI runtime, refactored all route surfaces and completed technical and browser QA.

## Next steps

1. Use `ALIGNUI-FREE-COVERAGE.md` before creating or changing shared controls.
2. Extend only the FrotaK component layer; route code must not create parallel primitives.
3. Preserve the 36-route contract while backend boundaries are introduced.
4. Keep route, visual, accessibility and production-build checks in the delivery pipeline.

## Blockers

No blocker. Backend, API and database work remain intentionally outside this milestone.
