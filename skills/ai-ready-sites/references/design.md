<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Visual design and review

Adapted and condensed from attributed design sources; these are context-dependent decisions, not universal style bans.

## Establish a direction

Inspect the visual truth of the current site: rendered page, tokens, components, type, assets and accepted references. For a new visual system choose a specific direction grounded in the product: composition, type voice, palette/material, imagery, density and motion. Use a few concrete visual decisions that can be implemented and evaluated. Do not substitute adjectives for a working composition.

Use real subject matter and meaningful content to make the result distinctive. Repeated icon/title/text cards, giant metric heroes, excessive gradients, glass effects or ornamental grids need a reason tied to the brief. They are not universally forbidden. Familiar patterns are valuable in task-oriented interfaces. Honor an explicit aesthetic even when it is currently fashionable.

For requested alternatives, change a meaningful variable such as composition, density or type system; keep content and functional constraints comparable. Present variants in a runnable preview when available. Do not require a proprietary variant engine or generate options for every small fix.

## Design system

- Define semantic tokens for background/surface/text/border/accent and feedback states. Maintain contrast in supported themes. Color must not be the only indication of state.
- Establish readable type roles and a deliberate hierarchy. Long prose generally benefits from about 60–80 characters per line; compact data layouts have different constraints. Use flexible sizing where appropriate, without breaking text zoom or labels.
- Group related items tightly and separate unrelated sections. Use consistent spacing and clear alignment; let content determine the layout rather than wrapping everything in nested cards.
- Choose imagery, crops, aspect ratios, icon weight and lighting consistently. Use licensed or supplied assets; do not claim generated illustrations or mockups document real products or customers.
- Preserve native expectations for controls. A system font and conventional layout can be correct for product UI. A marketing direction can justify distinctive type and composition.
- Extract reusable tokens/components when repetition or established product policy justifies them. Do not invent a general component framework for a one-page change.

## Responsive composition

Adapt structure, not just font size: navigation collapse, column order, readable content width, tables, filters, sticky elements and safe-area behavior. Check intermediate widths and long content. Avoid horizontal scrolling except for explicitly designed content regions such as tables. Do not hide essential information on mobile to make a screenshot fit.

## Craft review on the rendered result

Batch visual inspection at relevant sizes. Check hierarchy, alignment, whitespace, text wrapping, awkward crops, contrast, clipped overlays, stacking, focus/hover/selected/disabled states, touch use and real content. Do not impose states that a component cannot meaningfully have. Review loading, validation, empty and error states of the actual journey.

Use severity based on impact: blocked action or inaccessible content first, then misleading hierarchy or poor comprehension, then visual consistency. A detector warning is a lead to inspect, not a design authority. Keep aesthetic preferences separate from reproducible defects.

For polish, change the smallest set of tokens/components that resolves the issue. For clarification, use specific action labels and recoverable errors while preserving factual and legal meaning. For simplification, remove redundancy without hiding required functionality. Explain why removed complexity improves the visitor's task rather than claiming improvement without evidence.
