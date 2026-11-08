# AI-Ready Sites 0.2.1

[![Validate](https://github.com/tsvetaeff-den/ai-ready-sites/actions/workflows/validate.yml/badge.svg)](https://github.com/tsvetaeff-den/ai-ready-sites/actions/workflows/validate.yml)

An independent skill for designing, building, improving and checking websites and web interfaces. Start at the stage you need: a new landing page, an established product UI, a small repair, a design audit, or release readiness.

All design, implementation, quality and browser guidance is included in `skills/ai-ready-sites`. No other skills, global AGENTS.md, Impeccable engine, hosting account, paid API or framework is required. The host supplies the model and coding tools. Actual browser verification needs an available host browser tool, or an installed automation runtime and browser. The skill honestly reports unavailable checks.

## Quick start

Download the [0.2.1 installation archive](https://github.com/tsvetaeff-den/ai-ready-sites/releases/download/v0.2.1/ai-ready-sites-0.2.1.zip), extract it and open its `ai-ready-sites` directory, or clone the exact release:

```sh
git clone --branch v0.2.1 --depth 1 https://github.com/tsvetaeff-den/ai-ready-sites.git
cd ai-ready-sites
node scripts/install.mjs
```

The installer requires Node.js 18 or later. For installation without Node, copy the skill folder as described below. Open a new Codex chat and ask: `Use $ai-ready-sites to build a website from this brief.`

Instructions, code and examples are in English; English is the maintained documentation language. You can ask the host model to work in your preferred language.

## Install on another computer

Choose **one** installation route, to avoid duplicate skills.

### Copy one folder — no installer required

Copy the entire `skills/ai-ready-sites` folder from this archive into your Codex user skills folder, normally `~/.codex/skills/ai-ready-sites`. On Windows this is `%USERPROFILE%\.codex\skills\ai-ready-sites`. If you use a custom `CODEX_HOME`, use its `skills` folder. Keep the references, scripts, license and vendor notices together with SKILL.md.

If that destination already exists, preserve it outside the skills folder first. Do not overwrite an unrelated installation. Start a new Codex chat/session and ask: `Use $ai-ready-sites to review this page.`

### Optional installer — Node.js 18 or later

From the extracted package directory:

```text
node scripts/install.mjs
```

The installer has no downloads or npm dependencies. It copies the same skill folder, verifies contents, and leaves accounts, MCP settings and global instructions alone. An identical installation is a no-op. A different existing version is not changed unless `--replace` is supplied; that option preserves a backup outside the skills directory. `--skills-dir` selects an explicit parent skills directory, useful for a separate test profile.

### Plugin-capable hosts

The root `plugin.json` is a portable Agent Plugins manifest; `.codex-plugin/plugin.json` preserves a Codex compatibility manifest with the same identity. Use your host's supported local plugin import/marketplace mechanism if preferred. This archive contains one plugin and no marketplace. Direct skill-folder installation above is the verified low-dependency distribution route. Do not install both forms into the same profile.

## Verify the downloaded archive

Download `ai-ready-sites-0.2.1.sha256` from the same [release](https://github.com/tsvetaeff-den/ai-ready-sites/releases/tag/v0.2.1). On Linux use `sha256sum -c ai-ready-sites-0.2.1.sha256`; on macOS use `shasum -a 256 -c ai-ready-sites-0.2.1.sha256`. On Windows run `Get-FileHash .\ai-ready-sites-0.2.1.zip -Algorithm SHA256` in PowerShell and compare with the checksum file. Keep both files in the same directory.

The release ZIP contains one `ai-ready-sites/` directory with the skill, installer, documentation and licenses. Manual copying needs no Node runtime; the optional installer requires Node.js 18+.

## Examples

- `Build a small website for this product. Use the supplied facts, responsive layout and a working primary action.`
- `Improve this dashboard while preserving its components and behavior.`
- `Fix only the mobile menu overlap and check the affected behavior.`
- `Audit this site without changing any files. Separate observed issues from hypotheses.`
- `Check whether this website is ready to ship. Do not publish it.`

## What is included

One automatically discoverable skill with internal guides for brief/UX, visual direction, implementation, motion, accessibility/performance/SEO, browser QA, DevTools, Playwright and completion. Guides are loaded only when relevant. The optional doctor and browser-smoke helpers use existing tools and do not install software.

The package has no MCP server, hooks, credentials, telemetry, automatic updater or remote service. A host/model may itself use network services according to its settings; that is separate from this package.

## Migration from 0.1.0

Version 0.1.0 exposed seven separate skills. Version 0.2.0 consolidates their capabilities into `$ai-ready-sites` and internal references, adds quality and browser adapters, and removes the need to consult other installed skills. Old specialist command names are not provided by 0.2.0. Keep the old package as a backup outside active discovery; installing both can produce overlapping automatic selection. Existing projects and documents do not need migration.

This package does not depend on or modify a personal website-workflow. To explicitly use it alongside an existing global coordinator, request `$ai-ready-sites`; the coordinator should honor that choice.

## Verification and limits

Run `node scripts/validate.mjs` for package integrity and `node scripts/test-install.mjs` for isolated installer behavior. These do not prove model behavior or site quality. See [VALIDATION.md](VALIDATION.md) for performed checks and limitations, [tests/SCENARIOS.md](tests/SCENARIOS.md) for behavioral cases, [CONTRIBUTING.md](CONTRIBUTING.md) for development and [SECURITY.md](SECURITY.md) for security reporting.

## License and attribution

Original work is Apache-2.0. Attributed adapted material retains applicable notices in [THIRD_PARTY_NOTICES.md](skills/ai-ready-sites/THIRD_PARTY_NOTICES.md) and [upstreams.lock.json](skills/ai-ready-sites/upstreams.lock.json). This is an independent AI-Ready package, not an official distribution endorsed by upstream authors. No upstream binary or browser library is redistributed.
