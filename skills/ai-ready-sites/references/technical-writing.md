<!-- AI-Ready Sites 0.3.0: original documentation guidance. -->

# Task-oriented technical documentation

Use this guide for product instructions, setup guides, troubleshooting, API/CLI references and other technical documentation requested with this skill. Documentation-only work does not require a design process, a website build or a whole-site audit.

## Decide what the reader needs

Read the relevant implementation, existing documentation and verified behavior. Internal specifications supply facts; they are not necessarily an appropriate structure or voice for a public manual. Identify the audience, their goal, product version and starting state. Reuse the project's documentation structure and terminology. Ask only for missing information that changes the instructions.

Choose a useful document form. These distinctions follow [Diátaxis](https://diataxis.fr/); this guide contains the operational guidance needed here, so reading that site is optional.

| Need | Form | Keep the focus on |
| --- | --- | --- |
| Learn by completing a first exercise | Tutorial | A supported starting state, guided practice and a visible result |
| Accomplish a known task | How-to | Prerequisites, decisions and steps needed for that result |
| Look up exact behavior | Reference | Inputs, outputs, defaults, constraints, types and supported versions |
| Understand the reason or model | Explanation | Concepts, tradeoffs and links to the relevant procedures |

A short guide can include enough context to make its steps understandable. Do not force four documents where one page is sufficient. Keep a fact in one authoritative location and link to it where practical; examples and translations must remain consistent with it.

## Write a procedure people can follow

For a substantial procedure, establish a compact scenario: **goal → prerequisites → starting location → actions → expected result → verification/recovery**. This is a completeness check, not a mandatory set of headings.

- Name necessary versions, permissions, files, tools and the working directory before they matter. Distinguish required dependencies from optional helpers. Do not introduce prerequisites unsupported by the product.
- Give one meaningful action per step. Preserve order where the next action depends on the previous one. Include only choices the reader actually needs to make.
- Copy commands from verified sources. Specify the shell when syntax differs, quote paths appropriately, distinguish literal arguments from placeholders, and avoid putting explanatory prose inside executable blocks. Never substitute typography into code.
- Use actual interface locations and labels. If you cannot inspect them, identify the source/version and mark the UI path unverified; do not invent a convenient button.
- Describe where the result appears and how to recognize success. A process starting is not proof it finished. Distinguish an example response from observed output and a local preview from publication.
- Explain confirmed failure cases with their observed symptom, known state and supported recovery. Do not assert that data was saved, a backup exists or retrying is safe without evidence. Put consequential warnings next to the affected step.

For a CLI/API reference, preserve exact names, allowed values, defaults, units, error semantics and version boundaries. Examples should be runnable in the stated environment or explicitly illustrative. Avoid implying that a happy-path example covers every failure state.

Public documentation should contain available behavior and relevant limitations. Keep private paths, credentials, internal task numbers, development debates and acceptance bookkeeping out of user instructions. A release note or contributor guide may appropriately discuss implementation changes; match the document's purpose.

## Verify, then edit

Use [editorial review](editorial.md) to improve clarity without changing facts or executable text. Run documented commands in an authorized, bounded test location when execution is needed and safe. Use disposable test data; an instruction to publish, pay, delete or transmit is not authorization to perform it. Verify independent local steps and mark external or unavailable steps NOT RUN.

Check a procedure from its stated starting point, including its working directory and prerequisites. Inspect the actual result and relevant failure behavior rather than only the exit code. For UI instructions, use available browser tools to observe the named controls and result when the claim depends on the rendered interface. Do not require browser testing for a prose-only correction or CLI-only guide.

Record the revision/environment and checks for substantial documentation. Separate source review, executed checks and reader evaluation. If an instruction cannot be verified, retain the uncertainty in the handoff; do not describe it as tested. Finish with the document readers can use, not just advice about how someone else could write it.
