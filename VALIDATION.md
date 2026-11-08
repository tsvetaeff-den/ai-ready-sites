# Validation — AI-Ready Sites 0.2.0

Validation date: 2026-11-08. Tested on Windows, Node.js 24.15.0 and Chrome 156.0.8078.81. This records the original Windows baseline. Repository checks are run locally; GitHub Actions is not configured. GitHub publication does not imply acceptance into a plugin directory.

## Accepted checks

| Check | Observed result |
| --- | --- |
| Portable manifest | PASS against the official Agent Plugins 1.0 JSON schema; compatibility manifest identity/interface synchronized |
| Skill metadata | PASS with the installed Codex skill validator; YAML parsed independently and implicit selection policy enabled |
| Package integrity | PASS: one skill, contained references, license hashes, seven pinned sources, no personal paths, symlinks or bundled dependencies |
| Installer | PASS: fresh install, identical repeat, refusal to silently overwrite, exact backup on replacement, no config/AGENTS changes |
| Browser helper | PASS on desktop/mobile button result; deliberate overflow/runtime errors correctly FAIL; missing Playwright correctly NOT RUN |
| Isolated discovery | PASS: a separate CODEX_HOME without global AGENTS/MCP/plugins reports only ai-ready-sites enabled; skills discovered from the Windows user home were explicitly disabled in that test profile |
| Small repair | PASS: only a max-width rule added; original desktop width, wording, handler and sentinel preserved. Browser intentionally NOT RUN |
| Audit-only | PASS: semantic control, contrast and overflow findings grounded in source; all file hashes unchanged; browser claims explicitly withheld |
| Planning-only | PASS: useful delayed-orders dashboard plan preserving React/brand and no implementation/files |
| New-site behavioral test | PASS: independent agent used only candidate instructions, built a working static prototype and checked it at 1440, 768, 390 and 320 px |

The new-site test observed the exact status message after Enter and click, keyboard order and visible focus, an opening-hours anchor, three services, no horizontal overflow, no runtime errors and no external requests. Five screenshots were inspected, including mobile, desktop and a text-enlargement approximation. The primary evaluator independently inspected desktop/mobile screenshots and the test code/results. The task-owned server/browser were closed.

## What “without other skills” means here

Two complementary checks were performed: a separate profile's enabled-skill inventory, and independent behavioral tasks restricted to this package's instructions/references. Behavioral agents ran on the existing Windows host with ordinary tools/permissions; other skills were not read or invoked. The accepted fresh build received no external design-hook guidance. This is not a claim of a second physical computer or a freshly installed operating system.

Ordinary coding/browser tools were available. The skill did not need Impeccable, website-workflow, another installed skill, a design engine, an external asset service or a new dependency. The Playwright library and Chrome were existing tools used for live verification, not bundled prerequisites for reading/designing with the skill.

## Evaluation boundaries

An early run received external design-hook guidance and was excluded. A fresh independent build received none. An evaluator read extra internal references of this same package, so minimal reference loading was not established.

## Limits

macOS/Linux execution, a second physical machine, public-directory ingestion, every model's implicit skill choice, real screen-reader use and physical-device behavior were not tested. True browser text zoom was not tested; the extra screenshot used font overrides. Full performance, SEO and WCAG conformance were not claimed for the synthetic demo. Missing browser/runtime checks remain NOT RUN; the helper's limited smoke PASS is not a general site-quality certificate.

Use [tests/SCENARIOS.md](tests/SCENARIOS.md) to reproduce the behavioral tasks in another host. Run the included installer and browser tests under that platform's normal permission controls. Run the included structural and installer checks to reproduce executable validation.
