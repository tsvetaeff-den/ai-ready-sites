---
name: ai-ready-sites
description: "Design, build, improve, or audit websites and web interfaces with scoped UX, visual direction, implementation, and browser verification. Use for landing pages, product UI, responsive components, redesigns, and website readiness checks. Handles small fixes and audit-only requests without imposing a full development process. Not for backend-only tasks or native apps."
license: Apache-2.0
metadata:
  version: "0.2.0"
---

# AI-Ready Sites

A self-contained website and interface skill. All guidance needed for this skill is included here. Do not load another installed skill, invoke an external design engine, or require global instructions to follow this workflow. Use the tools provided by the host and dependencies already appropriate to the project. Optional external tools enhance verification; their absence does not block design or implementation.

## Start at the user's stage

Inspect the request, applicable project instructions, stack, existing components, and relevant product/design documentation. For changes, inspect the existing implementation and rendered UI when available. Briefly identify the outcome and the smallest useful route. The user's brief and project conventions govern visual choices. A missing DESIGN.md is not permission to redesign.

| Request | Read and do |
| --- | --- |
| Plan or discuss | [Brief and UX](references/brief-ux.md), then relevant design guidance; deliver the plan without changing project files unless requested |
| New website or substantial redesign | Brief and UX → [design](references/design.md) → [implementation](references/implementation.md) → [browser QA](references/browser.md) and applicable [quality](references/quality.md) → [completion](references/completion.md) |
| Small component or UI fix | Inspect affected surface; use only relevant design/implementation guidance, focused browser check and required project checks |
| Audit/review only | Relevant design/quality/browser guidance; gather evidence and report prioritized findings; do not edit the audited project |
| Motion | [Motion](references/motion.md), affected UI and reduced-motion verification |
| Ready to ship? | [Completion](references/completion.md), current browser evidence and required project checks; no deployment implied |

Load references when needed, not all at once. This is a selection of capabilities, not a compulsory sequence. Reuse valid evidence; do not repeat equivalent reviews under different names.

## Deliver useful work

- For new work, turn product facts into a coherent direction and finish one working user journey before extending it. For refinement, preserve existing identity and behavior outside scope. For redesign, preserve product truth and required functions while changing the requested visual system.
- Build with real content and working controls. Label demo data, local simulations, and unavailable integrations. Do not invent customer quotes, performance claims, prices, or a working backend.
- Make text, forms, navigation and states usable on the intended screens, with keyboard and assistive semantics. Design ambition fits the surface: expressive marketing, precise task UI, readable editorial, or an experience led by the work itself.
- Confirm behavior by observing the outcome in a real browser. Inspect screenshots for visual claims; source, a successful click, and a successful build do not prove the rendered result.
- If tools, authentication, assets, or runtime prerequisites are unavailable, finish independent work and state the specific missing check. Do not fabricate a PASS, install unrelated tools, or silently replace the user's stack.
- Keep work inside the authorized scope. Site creation does not authorize publication, real form submissions, paid services, or production changes. Continue ordinary authorized work without repeated approval requests.

## Tools and portability

Resolve every reference/script relative to this SKILL.md. No personal paths, specific OS, external skill name, API key, framework, or hosting account is required. [Browser QA](references/browser.md) covers tool discovery, no-browser behavior, and optional included helpers. [Chrome DevTools](references/devtools.md) and [Playwright](references/playwright.md) are in-package instructions, not dependencies on other skills.

The included Node helpers are optional. `scripts/doctor.mjs` reports basic local capabilities without installing anything; `scripts/browser-check.mjs` performs a bounded smoke check when Playwright and a browser already exist. Start with their `--help`. No Node runtime is needed simply to read and use this skill with host tools.

## Finish with evidence

Report the changed surface or audit result first, followed by checks actually performed, relevant artifacts, and limitations. For substantial deliveries, save concise QA evidence using the project's convention. For small fixes the final reply can be sufficient. State NOT RUN when a check could not execute; reserve release PASS for required checks that actually passed with no known blocker. [Completion](references/completion.md) defines the report and acceptance boundaries.

The attribution record is [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md); it is provenance, not runtime instructions. No upstream CLI, binary, paid service, or automatic updater is bundled.
