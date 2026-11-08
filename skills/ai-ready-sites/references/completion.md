<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Completion and readiness

Define acceptance from the requested deliverable and repository rules. Discover actual build/lint/typecheck/test commands and relevant CI. Keep existing lockfiles and configuration. Do not weaken checks or upgrade dependencies just to obtain a pass.

## Scale the check

- Small repair: affected rendered behavior/appearance plus relevant existing checks. No mandatory whole-site audit or new documentation tree.
- Copy, documentation or translation: source/result comparison for facts, conditions, commands and UI labels; verify changed procedures and rendered copy only where relevant. Editorial quality and literal equality are different checks; neither proves the other. Use [editorial review](editorial.md).
- Substantial site/interface: primary journeys, responsive composition, supported states, relevant accessibility checks, production build when defined and applicable quality checks.
- Audit: confirmed findings and source hypotheses with priorities and evidence, without project edits unless separately requested.
- Release readiness: all applicable required checks, fresh relevant browser evidence and unresolved blocker review. Reuse evidence if changes since the run do not invalidate it.

## Report accurately

Use PASS / FAIL / NOT RUN for individual checks; give the reason for NOT RUN. Keep pre-existing failures separate. A release verdict is PASS only when applicable requirements passed and no known blocker remains. Use INCOMPLETE when required evidence is missing; do not mark unavailable checks as passing. A prototype may be complete as a prototype while production integration is explicitly outside scope.

For substantial work use the project's evidence location, or a concise `docs/qa/` report if none exists:

| Check / journey | URL or target, environment and conditions | Actual result | Evidence | Status |
| --- | --- | --- | --- | --- |
| Primary action | Record the actual tested route and viewport | Observed state change | Snapshot/test output | PASS, FAIL or NOT RUN |

Record actual commands and relevant exit status; exact tool versions where measurements depend on them. Include screenshots only when inspected or label them captured but not reviewed. Source reasoning, automated audits, manual keyboard tests and human/physical-device acceptance are different evidence.

Conclude with the result, material changes or findings, completed checks and remaining limitations. Give the smallest next action for an actual blocker. Do not invent a deployment URL or public availability from a local preview. Publishing, uploading, pushing changes or performing external transactions needs authorization; a release-readiness verdict alone does not supply it.
