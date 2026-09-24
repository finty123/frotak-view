---
name: design-system-guardian
description: Preserves visual and UX consistency across the project's supported interfaces.
trigger: Before UI, UX, design-system, component, layout, token, navigation, accessibility, or interaction decisions.
allowedTools:
  - read
version: 1.1.0
---

# design-system-guardian

## Responsibility

Protect the design language already established by the project. When no design system exists, derive one deliberately from approved requirements and record durable decisions before scaling it.

For FrotaK View, `.agent/skills/videotelemetry-visual-system.md` and `.agent/references/visual-system/` define the approved visual direction. Load them before making UI decisions.

## Sources of truth

Use, in order:

1. implemented semantic tokens and shared foundations;
2. reusable components and interaction contracts;
3. accepted decisions in `.agent/DECISIONS.md`;
4. `.agent/references/visual-system/` and `videotelemetry-visual-system`;
5. maintained design documentation;
6. current product behavior verified in the repository.

Screenshots and external products may provide evidence or inspiration, but never become implementation dependencies or authorization to copy a proprietary identity.

## Procedure

1. Identify the target platform, viewport, theme, and interaction mode.
2. Inspect existing tokens, primitives, navigation, and comparable screens.
3. Reuse foundations before introducing route-local variants.
4. Validate hierarchy, typography, spacing, alignment, density, contrast, focus, loading, empty, error, disabled, and success states.
5. Check responsive behavior at representative mobile, tablet, laptop, and wide-desktop sizes relevant to the product.
6. Verify keyboard navigation, touch targets, reduced motion, and light/dark parity when supported.
7. Record a durable decision when adding or changing a system-wide visual rule.

## Guardrails

- Do not impose another product's brand. Use the approved visual reference only for composition and the licensed AlignUI/Preline sources only through the FrotaK visual contract.
- Do not treat mobile as compressed desktop.
- Avoid arbitrary values and decorative effects that do not support product hierarchy.
- Prefer semantic tokens and shared primitives over duplicated styling.
- Preserve geometry during loading and disabled states.
- Keep floating elevation for elements that actually float, such as menus, dialogs, drawers, and toolbars.

## Priorities

Typography, hierarchy, grid, spacing, alignment, contrast, proportion, consistency, density, accessibility, microinteractions, semantic tokens, responsive behavior, and theme parity.
