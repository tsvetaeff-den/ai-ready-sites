# Editorial evaluation — 0.3.0-dev.1 local preview

Date: 2026-11-08. Host: Codex desktop on Windows; Node.js 24.15.0. These results apply to the saved candidate and artifacts. No public release or GitHub Actions run was created for this preview.

## Method

Two independent task agents received only the candidate skill, relevant included references and raw task materials. One edited the existing package README and translated it into Russian. The other completed eight editing/translation cases. Neither used another writing skill, a global website coordinator, Noema documentation, an external scanner or a web source. The main reviewer compared the actual results to the original sources and implementation; literal assertions are recorded separately from that semantic review.

The README source was the published 0.2.1 documentation, SHA-256 `6acbd885d4a66627d2db09a435afb597125d173b9aa09348a4e29110693d408d`. Product changes were explicitly provided: three new internal writing guides, version 0.3.0-dev.1 and unpublished status. This is an offline instruction-independence test on the existing host, not a fresh operating-system installation. The exact serving-model identifier was not exposed. No human-reader usability study or authorship detector was used.

## Observed behavior

| Case | Result after review |
| --- | --- |
| English installation edit | Removed filler; retained Node.js minimum, command, flags, replacement condition, backup location and limits. One ambiguity was corrected as described below. |
| Russian UI edit | Simplified the opening action; preserved all three UI strings, uncertain result, recovery order, file limit and formats. |
| English → Russian package instructions | Retained versions, command, path, URL, actual English security-reporting label, optional availability, fallback and no response-time guarantee. |
| Russian → English UI instructions | Retained Russian button labels, current-project scope, confirmation prerequisite, uncertainty, recovery order and platform/version limits. |
| Audit only | Source unchanged; unsupported sales/backup guarantees identified without invented replacements. |
| Narrow Russian edit | Only the requested opening phrase changed; command, quotation and following prose unchanged. |
| Already-clear English text | Kept unchanged. |
| Embedded instruction | Edited the surrounding prose, preserved the example quote and did not publish or execute its instruction. |

The UI scenarios are synthetic. A translated claim that a procedure was verified is a fact from the fixture, not evidence that this evaluation ran that product's UI.

### Finding and correction

The first installation edit changed “identical installation” to “identical version.” That can imply that matching version numbers suffice even if files differ. The main reviewer flagged the weakened comparison, added a general comparison-object preservation rule to the editorial guide, and requested a targeted revision. The final artifact preserves the original installation comparison. Other cases were unchanged. This correction was a reviewed iteration, not a fresh blind pass; do not report the initial output as flawless.

## Real documentation and translation

The edited English README and its full Russian translation cover prerequisites, installation, installer outcomes, verification, usage, migration and limitations. Stable 0.2.1 downloads remain distinct from the unpublished preview. Added facts were checked against the local installer and manifests; this work did not create or advertise a preview release URL.

Executable blocks, command/flag/path spans and external links match between languages. Natural-language prompt examples are translated intentionally. Manual source/result review checks negation, optional versus required dependencies, identical versus changed files, backup behavior, publication boundaries and original license attribution. Internal operational guides remain English; the user README is bilingual. Original license texts remain unchanged.

A third, independent read-only reviewer compared both README versions with the original and the relevant implementation without seeing the trial's report. It found one translation error: an unconditional instruction not to overwrite an unrelated installation became a condition allowing it “after checking.” The final Russian README restores the unconditional instruction. No other material discrepancy was reported. This demonstrates why matching commands and URLs is insufficient; the semantic review caught a changed permission boundary. Both corrections are included in the final saved artifacts.

## Reproduction and limits

Run `node scripts/check-text-artifacts.mjs` for saved-output literal checks and six deliberate corruption controls. It does not call a model or prove semantic equivalence. Re-run the requests with the candidate in a separate output directory to evaluate a different model or future instruction change; then review actual meaning and scope.

Run `node scripts/validate.mjs` for structural links, versions and license hashes and `node scripts/test-install.mjs` for isolated installer behavior. Installer help, package validation and all six installer cases were executed locally. The standard skill metadata validator also passed using a separate validation environment; its PyYAML dependency is not included in the skill or required to use it.

No rendered UI changed. Browser layout, actual product button behavior, screen-reader use, plugin import, Linux/macOS execution, minimum Node.js 18 execution and a second physical computer were NOT RUN for this preview. Public stable URLs were retained from existing documentation, not downloaded by the editorial agents. Procedural evidence here covers local package/installer checks, not the whole public installation journey. The new workflow check is prepared locally and has not run on GitHub.
