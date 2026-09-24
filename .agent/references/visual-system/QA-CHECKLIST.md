# Visual QA Checklist

## System consistency

- [ ] Screen uses the shared shell, tokens, icons and component APIs.
- [ ] Primary task is visually dominant; secondary chrome is restrained.
- [ ] Density matches comparable screens.
- [ ] No unapproved raw colors, arbitrary spacing, radii, shadows or z-index values.
- [ ] Severity, workflow state, connectivity and evidence availability remain distinct.

## Content and data

- [ ] Timestamps include timezone/recency where operationally relevant.
- [ ] Units, identifiers, source and freshness are explicit.
- [ ] Long names, missing values, large counts and localization do not break layout.
- [ ] Empty, no-results, partial, stale, offline, error and loading states are designed.

## Interaction

- [ ] Hover, focus-visible, pressed, selected, disabled, loading and permission-denied states work.
- [ ] Primary, destructive and cancel actions are visually and semantically distinct.
- [ ] Drawers/modals restore focus and avoid hidden background interaction.
- [ ] Async actions prevent accidental duplication and expose outcome.

## Responsive

- [ ] Mobile, tablet, laptop and wide-desktop layouts were inspected.
- [ ] Sidebar/right rail collapse deliberately rather than squeeze.
- [ ] Map/video remains usable and controls do not overlap important content.
- [ ] Tables provide horizontal strategy or responsive alternative without data loss.

## Accessibility

- [ ] Keyboard-only path completes the task.
- [ ] Visible focus and contrast meet WCAG AA targets.
- [ ] Controls have accessible names; headings and landmarks are ordered.
- [ ] Color is not the sole carrier of meaning.
- [ ] Reduced motion, zoom to 200% and screen-reader announcements were considered.
- [ ] Essential map/video information has a textual equivalent.

## Provenance

- [ ] No paid/proprietary AlignUI or Preline material was introduced without license.
- [ ] Adapted source retains required license/attribution.
- [ ] User visual reference influenced composition only; external brand assets were not copied.

