# Interaction and Accessibility Contract

## Navigation

- Current route is visible in sidebar and page context; collapse never removes accessible names.
- Back actions respect history/context and do not discard unsaved work silently.
- Deep links preserve selected entity, tab and safe filter state.
- Global command/search offers keyboard access and permission-filtered results.

## Keyboard

- Logical focus order follows reading/task order.
- All menus, dialogs, drawers, tabs, selects, tables, media and map alternatives are keyboard operable.
- Focus is trapped only in modal contexts and restored to the trigger on close.
- Provide documented shortcuts for playback and high-frequency review actions; do not override browser/assistive shortcuts.

## Map accessibility

- Every essential map result is also available as a list/table.
- Selected location has a textual address/coordinates and timestamp.
- Zoom/layer controls have names and visible focus.
- Route/event color encodings include legend, labels or patterns.

## Video accessibility

- Provide captions/transcripts when audio is present and available.
- Player controls have names, values and keyboard shortcuts.
- Do not autoplay audio; respect reduced motion and system volume.
- Evidence descriptions identify channel, time, event and availability without depending on the image.

## Feedback and confirmation

- Optimistic updates only when rollback is safe and visible.
- Destructive or irreversible actions state the exact target and consequence.
- Toasts supplement, not replace, persistent state or audit history.
- Long tasks expose progress, cancellation where supported and a durable result location.

## Live data

- Announce meaningful state changes without flooding assistive technology.
- Show last refresh and distinguish live, delayed, stale and offline.
- Avoid rapid table row reordering while a user is interacting; buffer or offer controlled refresh.

## Privacy and safety

- Mask sensitive media/PII by role and policy.
- Clearly signal recording, audio, redaction, download and sharing states.
- Never hide unavailable evidence or gaps; explain retention, connectivity or permission causes.

## Localization

- Store timestamps with timezone and render locale-aware values.
- Layout tolerates longer Portuguese and English labels.
- Units and decimal/date conventions are explicit; do not encode meaning through ambiguous abbreviations.

