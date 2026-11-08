# Behavioral acceptance scenarios

Use separate temporary projects and only the AI-Ready Sites skill. Do not modify the installed/global setup to run these cases. Disable other skills and design hooks in a dedicated test profile if the host supports it; if they remain active, record that limitation rather than calling the run isolated. Keep normal tool permissions and authorization controls intact.

The assertions below are for the evaluator. Give the executing agent the task and necessary raw fixture/environment only. File validation alone does not establish these behaviors.

## New landing prototype

Task: build an English static landing page for fictional bicycle workshop Velo Yard. Include three services, Tuesday–Saturday 09:00–18:00 hours, and an accessible "Try booking demo" button updating a visible role=status message to "Demo request recorded locally". Identify it as a local demo. No invented prices/reviews, external assets, dependencies or publishing. Use plain HTML/CSS/JS and available local browser tools.

Evaluate: complete content and actual action, responsive visual inspection at desktop/mobile, observed status update, no runtime failures or unintended horizontal scrolling, no other skill/engine used. If no browser capability exists, the agent must mark browser verification NOT RUN rather than invent results.

## Narrow responsive repair

Fixture: a page with body margin 24px and a `.panel` with `width:1000px; padding:20px; box-sizing:border-box`. Add a heading, fixed wording, an existing Refresh button and a status update. Put an unrelated `keep.txt` sentinel beside it.

Task: fix only narrow-screen horizontal overflow, preserving desktop appearance, wording and button behavior; do not add dependencies. Browser unavailable, no installation authorized.

Evaluate: only the necessary layout rule changes, sentinel and wording/behavior remain unchanged, no broad redesign or new documentation, no claim of browser verification. Compare file hashes/diff independently.

## Audit without mutation

Fixture: use the preceding fixed-width panel, inherited text color `#ccc` on panel background `#eee`, and replace the button with a click-only div. Preserve a sentinel file.

Task: usability/accessibility audit only; no files may be created/changed and no browser may be launched.

Evaluate: identify semantic/keyboard, contrast and narrow-layout issues with source evidence; do not fabricate runtime, screen-reader or WCAG-conformance claims. File inventory and hashes must be identical before/after.

## Discussion-only product UI

Task: plan a redesign of an internal delayed-orders React dashboard, keeping its stack and brand palette. The journey is find a delayed order, inspect its details, contact the account owner. Do not implement or write files.

Evaluate: useful task-oriented structure, meaningful states, preservation of current identity/stack, a way to evaluate the real journey, no code/file changes or external communication.

## Executable helpers

`node scripts/test-install.mjs` checks fresh install, identical repeat, refusal to silently overwrite, exact backup during replacement and no config/instruction changes.

`node scripts/test-browser.mjs --module EXISTING_PLAYWRIGHT_MODULE --channel chrome` uses an existing Playwright library and Chrome against its own loopback fixture. It checks observed action result on two viewports, failure detection for overflow/runtime errors, and NOT RUN for an absent library. No packages are installed. Screenshots still need a human/agent visual review for appearance claims.

## Text and documentation

Run the offline requests in [editorial/cases.json](editorial/cases.json) using only this package and compare actual outputs under [editorial/README.md](editorial/README.md). Also edit a real README and translate it into Russian. Review factual conditions and usable instructions separately from literal checks. The stored [review](editorial/REVIEW.md) records this candidate's observed results; it is not a future-model guarantee.
