# Contributing

Use GitHub issues for reproducible bugs and focused proposals. Include revision, host/OS, exact request, tool availability, expected behavior and actual result. Redact credentials and private project content.

Keep the skill self-contained: no personal paths, mandatory other skills/accounts, global instructions or automatic downloads. Preserve small fixes, audit-only and planning-only scope. Load references progressively and distinguish source hypotheses from browser evidence.

## Checks

Node.js 18 or later is sufficient; no npm install is required:

```sh
node scripts/validate.mjs
node scripts/test-install.mjs
node scripts/check-text-artifacts.mjs
```

For text behavior, also use [tests/editorial/README.md](tests/editorial/README.md) and review actual outputs for meaning and scope; literal checks alone are insufficient.

For behavioral changes, use [tests/SCENARIOS.md](tests/SCENARIOS.md). For browser-helper changes, run `node scripts/test-browser.mjs --module /absolute/path/to/playwright/index.js --channel chrome` with an existing runtime/browser. Report unavailable checks honestly; see [VALIDATION.md](VALIDATION.md).

Keep both plugin manifests and skill metadata consistent. Retain licenses/notices when adapting upstream material and update `skills/ai-ready-sites/upstreams.lock.json` with verified revisions and affected paths. Skill instructions and code examples are maintained in English. The user README is maintained in English and Russian; update both when behavior changes. Translate prose, not executable commands or unlocalized UI labels. Preserve original license texts.

Submit focused pull requests explaining behavior, rationale, validation and limitations. Contributions use Apache-2.0 with applicable third-party notices retained. Changes do not authorize deployment or production actions.
