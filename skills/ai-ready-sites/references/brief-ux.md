<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Brief and user experience

Start with what the visitor needs to accomplish, the actual audience, and the business/product facts available. Inspect supplied assets, existing copy and project docs before asking questions. Infer reversible details; ask for missing facts that would change functionality, content claims, identity, or delivery scope. Do not block a small repair on a full discovery workshop.

For a substantial build, establish:

- Primary user outcome and observable success, relevant pages and navigation.
- Content, supported languages, visual constraints, real assets, protected behavior and technical constraints.
- Main journey and its meaningful states: loading, empty, partial, error, success, disabled, unavailable or permission-limited where relevant.
- Acceptance scope: devices/viewports, relevant accessibility behavior, integrations, existing build/test commands, and what is a prototype versus production behavior.

Preserve these decisions in existing project docs. If none exist and durable context is useful, create concise PRODUCT.md and DESIGN.md as part of authorized substantial implementation. Do not create a duplicate documentation system or rewrite accepted decisions for a small edit.

## Match the surface to the visitor's task

| Surface | Priority | Typical trap |
| --- | --- | --- |
| Marketing / landing | Understand the offer, believe it, act | Impressive decoration with vague claims or a non-working CTA |
| Product / dashboard | Complete tasks accurately and efficiently | Decorative controls, hidden state, inconsistent familiar patterns |
| Documentation / editorial | Read, navigate, understand | Low contrast, long lines, intrusive effects, weak heading structure |
| Portfolio / showcase | Experience the actual work | Generic card grids that overshadow the work |

A product's marketing page and its dashboard can need different treatments. Decide per surface.

## Interaction contract

For each important control, identify what it changes, where the result appears, and how failure can be recovered. Use a link for navigation and a button for an action. Specify labels and useful error messages. Do not use modal dialogs by default when an inline or separate-page task is clearer.

For forms, preserve entered values on recoverable failure; expose errors beside fields and associate them programmatically. Separate client validation, sending, server rejection, and confirmed success. A local simulated success must say that it is a demo and not a real submission.

For data views, distinguish no data, no search matches, loading and service failure. Define sort/filter state and appropriate pagination. Preserve user orientation after updates. For localization, use real language content supplied or translated within scope; allow text expansion, localized number/date formats and directional layout if supported.

## Existing sites

Record what must remain: content facts, URLs, integrations, semantics, recognizable identity and user muscle memory. A usability fix does not authorize a new brand. An authorized full redesign may replace visual direction while keeping required functionality. Separate observed defects from taste preferences and explain changes through visitor outcomes.
