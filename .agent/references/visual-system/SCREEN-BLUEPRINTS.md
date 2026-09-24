# Screen Blueprints

These blueprints translate the complete Smart Cameras functional baseline into a coherent visual family. They do not replace detailed capability requirements in `smartcameras-product-guide`.

## Authentication and session

- Focused sign-in card, brand mark, environment/support link and language/theme access.
- Explicit loading, invalid credentials, locked/expired account, MFA, password recovery and session-expired states.
- Do not show operational navigation before authorization is established.

## Overview dashboard

- KPI band: active vehicles, online cameras, unresolved critical events, review backlog, data freshness.
- Fleet health map plus prioritized exception queue.
- Trends and distributions use consistent severity colors and comparable scales.
- Each card exposes time range, scope and drill-down destination.

## Live fleet and map

- Map-first canvas with vehicle/camera result rail.
- Filters: groups, asset, driver, movement, camera connectivity, recency and geography.
- Selected entity detail: identity, last contact, driver, location, motion, camera health and actions.
- Cluster, layer, traffic/geofence and fit-bounds controls remain compact and keyboard reachable.

## Video search/library

- Search/filter bar across time, asset, driver, channel, event and availability.
- Results switch between dense list/table and thumbnail grid.
- Availability/gap states are explicit; download/request/export operations show policy and progress.
- Preview opens a detail route or drawer with provenance, timestamps and retention.

## Event/alert queue

- Dense triage table with severity, type, asset/driver, occurred time, received time, evidence availability, assignee and review state.
- Saved views for new/critical/unassigned/overdue.
- Bulk assignment/status only when semantically safe; resolution requires audit note when configured.

## Event investigation

- Use the canonical evidence-strip + dominant viewer/map + context-rail composition.
- Header shows event ID, severity, review state, asset/driver and occurred timestamp.
- Right rail sections: summary/rule, telemetry, recommendation, assignment, comments and history.
- Accept/reject/escalate/resolve actions are named for the actual workflow and require confirmation only when consequence warrants it.

## Video player

- Multi-channel layout: single, picture-in-picture, 2-up or synchronized grid.
- Controls: play/pause, seek, speed, channel, volume where audio is legal, quality, fullscreen and snapshot/export according to permission.
- Timeline overlays event markers, telemetry, annotations and unavailable segments.
- Always expose timezone, exact timestamp and synchronization status.

## Assets, vehicles and devices

- Table-first registry with search, groups, connectivity, firmware/config state and last contact.
- Detail tabs: overview, assignment, cameras/channels, health, history, configuration and related events.
- Status summary and highest-priority remediation appear above secondary metadata.

## Drivers and people

- Identity/list screen with assigned assets/groups, risk indicators and recent events.
- Personal/sensitive data follows role visibility and redaction policy.
- Driver detail separates coaching/review workflow from raw technical events.

## Safety analytics

- Time/scope controls, safety KPIs, trend, event category distribution, ranked exceptions and drill-through.
- Do not imply causality from correlation; label calculated scores and their freshness/source.

## Reports and exports

- Catalog of report types plus recent/scheduled exports.
- Builder uses a stepper or structured form: report, scope, period/timezone, columns/filters, format, schedule and recipients.
- Generated file state: queued, running, ready, expired, failed; include audit and retry rules.

## Rules, groups and geofences

- List plus detail/editor pattern.
- Rule builder communicates trigger, conditions, scope, schedule, severity and actions in readable order.
- Geofence editor pairs map geometry with name/type/scope and validation.
- Before publishing, summarize effective behavior and conflicts.

## Users, roles and permissions

- User list, invitations/state, group/scope and last access.
- Role matrix groups permissions by domain and separates view, operate, export, configure and administer.
- Dangerous privilege changes show impact and create an audit event.

## System/integration/FT Manager administration

- Administration landing page groups organization, fleet/device setup, users/permissions, rules, retention, integrations and audit.
- Health panels expose service status, connector freshness and remediation links.
- Technical identifiers and raw errors are available in detail, while primary messaging stays actionable.

## Audit and activity

- Filterable immutable table/timeline by actor, domain, action, target and time.
- Detail shows request/source, before/after data when permitted, correlation ID and export policy.

