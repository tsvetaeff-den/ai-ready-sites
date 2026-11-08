<!-- AI-Ready Sites 0.3.0: original synthesis and selective ru-text adaptation. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json. -->

# Site and interface copy

Use this guide when copy is part of the requested website/interface work, or when the user asks to write, review or translate it. Keep a text-only task scoped to text. For established interfaces, read the actual behavior and current labels before proposing changes. For new work, agree the interaction and its wording together.

## Content that helps a visitor decide

Explain the actual offer, intended audience and next action using supplied or verified product facts. Use supported examples and concrete benefits. Do not invent testimonials, customers, certifications, prices, scarcity, performance figures or guarantees. Distinguish product capabilities, planned capabilities and local demonstrations. If evidence is missing, ask for the consequential fact or write a narrower supported statement.

Each section should answer a reader's question or enable a next action. Give headings informative wording, keep claims near their evidence, and make the primary action describe what happens. Preserve qualifications affecting eligibility, cost, availability or commitment. Natural copy need not be casual, dramatic or full of personal anecdotes.

## Controls and states

| Surface | Useful copy |
| --- | --- |
| Button or link | Describe the actual action/destination. Use the product's established term consistently. A link to pricing does not promise a purchase. |
| Field | A persistent label plus necessary format/eligibility help; placeholder text does not replace the label. |
| Validation error | Identify the affected value, the real constraint and a supported correction. Avoid blame. |
| Service failure | Explain what is known, whether the outcome is uncertain, and a supported next step. Do not claim that data was saved without evidence. |
| Empty state | Distinguish no data from no matches or unavailable data. Offer an action only if it exists. |
| Loading or success | Describe actual progress or confirmed outcome. “Sent” requires evidence of submission; a local preview needs a demo label. |
| Consequential action | State what will change, including loss or commitment when relevant; keep the final action label specific. |

During an editorial-only pass, preserve existing button labels and other behaviorally significant strings. If a label itself needs improvement, report a proposal separately. Change it only when interface-copy changes are within scope, then keep visible text, accessible names, translations, documentation and relevant tests consistent. A stylistic improvement must not create an instruction for a control that does not exist.

## Localization and verification

Use [editorial review](editorial.md) for RU/EN translation and fact/literal preservation. Keep placeholders and plural/interpolation syntax intact; use the project's locale system. Text expansion must fit the actual UI without hiding necessary information. Do not abbreviate away a condition simply to fit a button.

For changed rendered UI text, check relevant widths, wrapping/truncation, labels and accessible names, and the state where each message appears. Use existing [browser QA](browser.md) evidence where valid. For a copy document without a rendered implementation, review meaning and consistency and state that layout/behavior were not checked. Do not invent a browser PASS from a text review.
