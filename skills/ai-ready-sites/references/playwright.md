<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Playwright adapter

Use the repository's existing tests and pinned library first. This guide works without an installed Playwright skill. It does require an actual browser automation capability to execute.

## Existing CLI

Inspect the installed CLI help/version. A typical sequence is a named session, open/goto, snapshot, interaction using fresh refs, assertion/evaluation of the resulting state, screenshot, and close that session. On Windows the executable may be `playwright-cli.cmd`. Quote URLs and arguments according to the active shell; do not interpolate untrusted page text into shell code.

Prefer accessible role/label locators or stable test IDs for durable tests. Snapshot refs are useful for exploratory actions but change with page state. Wait for a meaningful condition rather than arbitrary sleeps. If the user specifies an existing browser, respect it and detach instead of closing their browser after the test.

## Existing library or test runner

Use a fresh browser context per independent test, matching viewport, locale and storage assumptions. Avoid sharing mutable sessions across unrelated flows. Assert the UI outcome, not an internal function call or just a successful click. Prefer web-first assertions when the existing test runner provides them. Cover relevant error/empty/loading states with the project's existing test or mock facilities.

Capture traces/screenshots on a reproducible failure. Reuse known test accounts and synthetic data. Treat saved authentication state as sensitive; keep it outside the package and evidence shared with others. A demo local form is a suitable safe smoke test; a production contact form is not equivalent.

Do not install another test stack if existing host/browser tools suffice. The included browser smoke helper can resolve `playwright` or `playwright-core` from the current project, or use an explicitly supplied installed module path. It never downloads dependencies. For a permanent regression test, add coverage in the project's test suite rather than relying on the helper's fixed smoke assertions.
