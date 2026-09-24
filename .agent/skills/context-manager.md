---
name: context-manager
description: Builds a minimal, task-specific context bundle from the current project.
trigger: Before significant tasks, milestone work, domain changes, or changes that may touch more than one project area.
allowedTools:
  - read
version: 1.0.0
---

# context-manager

## Responsibility

Load only the context needed for the current task. Current implementation, Jaxx state, accepted decisions, and maintained project documentation take precedence over historical or temporary evidence.

## Context model

Task context consists of:

- global and repository rules;
- current state and active milestone;
- relevant domain and architecture;
- impacted files and dependencies;
- verification requirements;
- explicit assumptions or missing information.

## Procedure

1. Read `AGENTS.md`, `.agent/STATE.md`, and `.agent/PLAN.md`.
2. Identify the task domain, target surface, active milestone, and requested outcome.
3. Locate only the durable documentation needed for that scope.
4. Inspect current implementation before proposing a new pattern.
5. Identify impacted files, shared components, direct dependencies, and appropriate verification.
6. State assumptions when they could materially change the result.

## Guardrails

- Never load all documentation automatically.
- Do not treat `.agent/tmp`, generated quality reports, logs, screenshots, or reference dumps as required context.
- Never infer architecture from another project or a legacy system without an explicit adoption decision.
- Prefer native Jaxx files for state, plan, progress, decisions, and verification.
- Broaden context only when the task demonstrates the need.

