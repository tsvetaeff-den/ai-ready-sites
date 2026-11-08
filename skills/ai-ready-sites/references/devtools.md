<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Chrome DevTools adapter

This is included guidance for a connected tool, not a requirement to install the Chrome DevTools skill. Tool versions differ: discover current capabilities and read their schemas before calling. Do not assume these illustrative names or fields exist unchanged.

## Page and interaction

- Enumerate pages; create or select the authorized target and retain its returned page identifier.
- Navigate and wait for a meaningful loaded state. Take a fresh snapshot to find accessible names and interaction IDs.
- Click/fill/select with the current identifiers and required page argument. Verify the resulting UI state after the action.
- Use screenshots for appearance. Inspect computed styles, console messages, individual network failures or focused DOM evaluation to investigate a concrete issue, not broad dumps.
- Use viewport/device emulation for relevant responsive checks. Record and reset throttling or emulation changes between profiles.

Do not attach to an existing personal browser profile or expose remote debugging without an authorized setup. An isolated profile usually has no login state. Never write cookies or tokens into reports.

## Measurement and debugging

Where available, `performance_start_trace` and focused insight analysis provide load/interaction evidence. Record reload/interaction, cache, viewport, CPU/network and authentication conditions. `lighthouse_audit` may cover accessibility, SEO, best practices and agentic browsing while excluding Performance. Keep the trace and audit claims separate.

A navigation audit reloads the page. Use a supported snapshot mode for a state that must be preserved, or defer the audit. Never reload an unsaved form without accounting for its state.

Use accessibility-tree inspection plus keyboard actions for focus or semantic issues. Investigate cookies only for an actual storage/session failure; report attributes and behavior without exposing values. Investigate memory only for repeated growth or lifecycle symptoms: reproduce the same sequence, compare retained objects, and fix listeners/timers/subscriptions supported by evidence. Generic website delivery does not need these specialist investigations.

Keep large screenshots, traces and audit reports as artifacts where the tool supports it. Summarize actionable findings and limitations. Avoid rerunning a healthy audit after every styling adjustment unless it could affect the result.
