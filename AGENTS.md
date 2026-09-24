# Agent Operation Protocol — FrotaK View

This project uses the Agent Jaxx Model. The project control plane lives in `.agent/`.

## Hard Rules

- Never use `--no-verify` or `-n` on `git commit`.
- Never add the versioned `.agent/` control-plane files to `.gitignore`.
- Code or durable documentation changes must be accompanied by a managed Jaxx session when the project is a Git repository.
- Do not create duplicate files for state, plan, progress, decisions, or verification.
- Jaxx native files are the official sources for those concerns.

## Project Governance

Use these project skills when relevant:

- `context-manager`
- `architecture-guardian`
- `design-system-guardian`
- `documentation-manager`
- `smartcameras-product-guide`
- `videotelemetry-visual-system`

Use `smartcameras-product-guide` before planning, designing, implementing, reviewing, or testing functionality derived from the mapped Smart Cameras platform.
Use `videotelemetry-visual-system` for every screen, component, layout, map, video, table, dashboard, interaction or visual QA decision. Functional scope comes from the Smart Cameras guide; visual scope comes from the videotelemetry visual system.

Load project documentation progressively. Do not assume an application framework, architecture, design language, milestone, or external integration until the repository establishes it.

## Required Workflow

### Before a change

- Read `.agent/STATE.md` and `.agent/PLAN.md`.
- When Jaxx is initialized for the repository, open a managed session with `jaxx session open --agent <your-name>`.

### During work

- Log meaningful actions with `jaxx log <INFO|WARN|ERROR|DONE|GIT> "<message>" --agent <your-name>`.

### Before commit

- Run verification proportional to the change and `jaxx verify` when available.
- Close the session with `jaxx session close --summary "<what was done and how it was verified>"`.

### Commit

- Commit normally, without bypass flags.
