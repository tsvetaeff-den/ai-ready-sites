<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Browser QA without external skills

Use the user's preferred tool when specified. Otherwise inspect the actual tools and project scripts available, then choose one capable route. Instructions in this package are sufficient; do not ask for another skill installation.

| Available capability | Route |
| --- | --- |
| Connected Chrome DevTools | Follow [DevTools guidance](devtools.md) using the actual tool schemas |
| Host browser / computer-use tool | Read that tool's own API instructions; navigate, inspect and exercise the target |
| Existing project Playwright / Playwright CLI | Follow [Playwright guidance](playwright.md); use named sessions or project tests |
| Existing Playwright library plus browser | Optional `scripts/browser-check.mjs` for a bounded smoke check; see `--help` |
| None | Finish permitted source work and existing static/build checks; browser/visual verification is NOT RUN. Explain the missing capability and offer the smallest setup if needed |

Do not claim browser control just because Chrome is installed. The optional `scripts/doctor.mjs` detects only local commands/libraries; host MCP capabilities must be inspected separately. Do not install or download packages/browsers without authorization. Creating a site does not automatically authorize changing global MCP configuration. Do not make an account, paid API key, external design engine or network documentation fetch a prerequisite for core work.

## Establish the test

Reuse the appropriate local server or start the project's documented preview. Identify final URL, route and state, build revision when available, browser, viewport and relevant environment. Do not assume an isolated browser shares the user's login. Preserve unsaved state and avoid navigation audits that would discard it.

Use the change's acceptance criteria. For substantial websites check representative mobile and desktop sizes (for example 390×844 and 1440×900), adding an intermediate width or supported theme/locale when the layout demands it. For a narrow fix test the affected component and relevant regression only. Emulation is not a physical-device test.

## Observe, act, assert

1. Confirm correct page/content, no framework error overlay, and no broken critical resources.
2. Inspect the accessibility/DOM snapshot for controls, labels and states. Use identifiers from the current snapshot or robust role/label locators, not guessed stale IDs.
3. Perform the main action with test data and verify its observable outcome. For a form include validation and a non-destructive success path where available. Never submit real enquiries/payments or change production data merely to test a button.
4. Exercise keyboard order, focus visibility and component keyboard behavior. Check zoom/reflow and relevant empty/loading/error states.
5. Inspect screenshots at the relevant sizes for hierarchy, clipping, overflow, wrapping, image crops and overlay placement. A screenshot file existing is not proof somebody inspected it.
6. Check relevant console/page errors and failed resources. Separate incidental noise from failures that affect the task; do not hide a critical error in an aggregate score.
7. For motion, test reduced-motion behavior. For stateful UI verify back/forward, refresh or repeated entry where affected.

Fix authorized failures and rerun the affected case. Audit-only means recommendations, not project edits. Keep task-owned sessions and artifacts separate from unrelated work. Close only resources created for this check; never use a global kill-all as routine cleanup.

## Included smoke helper

`browser-check.mjs` uses an already installed Playwright-compatible library, opens an isolated browser context, visits the URL at two sizes, captures screenshots and reports horizontal overflow, navigation status and runtime errors. Optional `--button` and `--expect-status` exercise one explicitly named button and assert the exact status text. Use only safe test actions. The helper does not prove keyboard accessibility, visual quality, full responsive behavior, SEO, or performance.

Its exit codes are 0 for its checks passing, 1 for a failed check, and 2 for missing prerequisites. Missing browser capability remains NOT RUN. Read its JSON report and inspect its screenshots before making visual claims. Extend the project's real tests for richer flows rather than turning this smoke helper into an application-specific suite.
