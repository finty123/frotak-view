---
name: documentation-manager
description: Keeps project documentation synchronized with implementation, decisions, and Jaxx state.
trigger: After meaningful changes to architecture, contracts, domain behavior, product behavior, milestones, decisions, or project state.
allowedTools:
  - read
version: 1.0.0
---

# documentation-manager

## Responsibility

Keep durable documentation synchronized with the current implementation without duplicating Jaxx sources of truth or preserving obsolete instructions.

## Procedure

After relevant changes, determine whether they affect:

1. architecture;
2. contracts or integrations;
3. domain behavior;
4. product behavior;
5. current state or blockers;
6. milestone scope;
7. durable decisions;
8. verification evidence.

Update only the appropriate source.

## Sources of truth

Use native Jaxx files for:

- state: `.agent/STATE.md`;
- plan: `.agent/PLAN.md`;
- progress: `.agent/PROGRESS.md`;
- decisions: `.agent/DECISIONS.md`;
- verification: `.agent/VERIFICATION.md`.

Use project documentation directories for maintained knowledge not already represented by those files.

## Update routing

- Current status or blocker → `STATE.md`.
- Milestone scope or acceptance item → `PLAN.md`.
- Completed meaningful delivery → `PROGRESS.md`.
- Durable technical, product, or visual rule → `DECISIONS.md`.
- Session proof → `VERIFICATION.md`, preferably generated through the managed session.
- Domain, API, schema, UX, or operational reference → the maintained project documentation area.

## Guardrails

- Do not create duplicate state, plan, progress, decision, or verification files.
- Do not invent missing product details to make documentation appear complete.
- Do not use temporary screenshots, logs, or generated reports as the source of truth.
- Keep temporary, fixture-only, mocked, or unverified behavior explicitly labeled.
- Documentation must follow verified implementation and accepted decisions; it must not silently replace them.

