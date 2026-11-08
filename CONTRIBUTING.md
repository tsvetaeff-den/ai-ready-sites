# Contributing

Use GitHub issues for reproducible bugs and focused proposals. Include revision, host/OS, exact request, tool availability, expected behavior and actual result. Redact credentials and private project content.

Keep the skill self-contained: no personal paths, mandatory other skills/accounts, global instructions or automatic downloads. Preserve small fixes, audit-only and planning-only scope. Load references progressively and distinguish source hypotheses from browser evidence.

## Checks

Node.js 18 or later is sufficient; no npm install is required:

```sh
node scripts/validate.mjs
node scripts/test-install.mjs
```

For behavioral changes, use [tests/SCENARIOS.md](tests/SCENARIOS.md). For browser-helper changes, run `node scripts/test-browser.mjs --module /absolute/path/to/playwright/index.js --channel chrome` with an existing runtime/browser. Report unavailable checks honestly; see [VALIDATION.md](VALIDATION.md).

Keep both plugin manifests and skill metadata consistent. Retain licenses/notices when adapting upstream material and update `skills/ai-ready-sites/upstreams.lock.json` with verified revisions and affected paths. Instructions, documentation and code examples are maintained in English.

Submit focused pull requests explaining behavior, rationale, validation and limitations. Contributions use Apache-2.0 with applicable third-party notices retained. Changes do not authorize deployment or production actions.
