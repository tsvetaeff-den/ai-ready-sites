<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Implementation

Use the project's existing stack, package manager, lockfile and commands. Read the relevant implementation before editing. For an empty project, choose the smallest stack that serves the requested behavior; explain material dependencies. A static site need not become a framework application. Avoid replacing architecture as a visual improvement.

Complete one representative journey with real responsive layout and behavior before copying patterns across routes. Keep anchors, actions, navigation and forms functional. Preserve route semantics, keyboard interaction, data contracts and existing tests.

## HTML and CSS

Use semantic structure and native controls before custom ARIA widgets. Give controls accessible names and inputs persistent labels; placeholders are not labels. Use meaningful headings, alt text for informative imagery and empty alt for decoration. Link field errors to inputs and expose important async status appropriately.

Use reusable classes/tokens with a clear cascade. Avoid specificity escalation and arbitrary one-off values for repeated design decisions. Reserve media dimensions to prevent shifts; use appropriate responsive images. Keep content usable without decorative animation or delayed reveal code. Respect reduced motion and user text zoom.

## React and similar component systems, when applicable

Keep state near its consumers; derive values rather than mirroring them in effects. Use stable keys tied to identity and stable component definitions. Prevent async results from updating the wrong request or an unmounted view. Clean up subscriptions, timers and browser observers.

Parallelize independent data requests when the framework permits it. Avoid serial fetch chains introduced only by component nesting. Keep large client-only dependencies off routes that do not need them. Preserve server/client boundaries and hydration consistency. Measure a relevant interaction before adding memoization or complexity as a performance fix.

## Content and integration boundaries

Use explicit demo data when real content is unavailable and a prototype is authorized. Do not show a sent/paid/saved state unless the implementation actually confirms it, or visibly identifies it as simulated. Keep secrets in the application's supported configuration, never in source, screenshots or generated reports.

Do not add a backend, analytics, payment service, external font service or hosting account merely to complete a checklist. Use an existing approved integration or identify the missing requirement. For changes to public-site metadata or redirects, preserve established route and language behavior.

## Meaningful checks

Run the project's checks proportionate to the change. Use an existing behavior test for an affected critical flow; add regression coverage for a reproduced defect or durable behavior when useful. Do not write a test that only restates the implementation, or a large new test suite for a minor visual correction. Validate actual rendered behavior through [browser QA](browser.md).
