<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Purposeful motion

Finish static composition and usable responsive behavior first. Motion should communicate feedback, state, continuity or a deliberate narrative. Keep text and primary actions available without it. Use CSS transitions or the Web Animations API for simple effects; use the project's existing GSAP only when choreography, scroll sequencing or coordination warrants it.

Choose duration and easing for the task. Small product interactions should not make people wait for choreography. Avoid assigning the same delayed entrance to every section. Respect `prefers-reduced-motion`: remove nonessential spatial movement and retain the information and final state. Verify this in a browser.

## GSAP when already appropriate

- Register plugins before use. Use timeline labels and position parameters for coordinated motion; avoid competing writers of the same property.
- Use `gsap.matchMedia()` for breakpoint/reduced-motion behavior and revert its context on teardown.
- In React, use an available `useGSAP` integration with a scoped ref, or a scoped `gsap.context()` with cleanup. Wrap callbacks created later as needed by the installed integration.
- Animate a child of a pinned region rather than the pinned element. Refresh scroll measurements when layout-affecting assets settle, not continuously.
- Remove triggers, listeners and timelines on route/component teardown. Verify repeated navigation and resizing rather than only first load.

Prefer transform/opacity for frequent movement and measure expensive filters, masks, large shadows or blur on the target device class. `will-change` is a measured optimization, not a permanent attribute on every element. Avoid layout reads interleaved with writes in animation loops.

Do not copy GSAP or a paid plugin into this package or a project as a side effect. The project uses the library under its own applicable license and installation decision. The guidance here does not require GSAP.
