# Branching Strategy

- `main` — always shippable. Protected where possible.
- `feat/<slug>` — one feature per branch.
- `fix/<slug>` — bug fixes.
- Merge through a pull request by default. Push directly to a deployment branch only when the project owner explicitly requests it.

## Enforcement

Run `jaxx doctor` to verify expected branches and working-tree state before starting work when the project is a Git repository.

## Conflict resolution

`AGENT_LOG.jsonl`, `.agent/quality/`, and `.agent/tmp/` are local and ignored. Resolve conflicts in `STATE.md`, `PLAN.md`, `PROGRESS.md`, `DECISIONS.md`, and `VERIFICATION.md` semantically; do not discard another session's record.

