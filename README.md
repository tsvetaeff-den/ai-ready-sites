# AI-Ready Sites

[Русская версия](README.ru.md)

[![Validate](https://github.com/tsvetaeff-den/ai-ready-sites/actions/workflows/validate.yml/badge.svg)](https://github.com/tsvetaeff-den/ai-ready-sites/actions/workflows/validate.yml)

One self-contained skill for designing, building, improving and checking websites and web interfaces. Use it for a new landing page, an existing product UI, a focused repair, an audit or a readiness review. It starts at the stage you request and uses the project's existing tools and conventions.

**Version:** 0.3.0. This release includes internal guides for editorial review, technical documentation, site/interface copy and RU/EN translation.

## What you need

The host supplies the model and coding tools. The skill includes its own design, implementation, quality and browser guidance; it does not require another skill, a global `AGENTS.md`, an external design engine, a hosting account, a paid API or a particular framework.

- **To copy and use the skill:** a host that can load the skill folder. Node.js is not required.
- **To use the optional installer:** Node.js 18 or later.
- **To verify a rendered website:** an available host browser tool, or an installed automation runtime and browser. Missing browser tools are reported as a verification limit.

The user README is maintained in English and [Russian](README.ru.md); both describe the same release. Internal instructions and code are in English; you can ask the host model to work in your preferred language.

## Install stable 0.3.0

Choose one installation route to avoid duplicate skills.

Download the [0.3.0 installation archive](https://github.com/tsvetaeff-den/ai-ready-sites/releases/download/v0.3.0/ai-ready-sites-0.3.0.zip), verify it as described below, extract it and open its `ai-ready-sites` directory. Then run:

```text
node scripts/install.mjs
```

Alternatively, clone the exact stable release and install it:

```sh
git clone --branch v0.3.0 --depth 1 https://github.com/tsvetaeff-den/ai-ready-sites.git
cd ai-ready-sites
node scripts/install.mjs
```

The installer copies `skills/ai-ready-sites` into the current user's Codex skills folder. Open a new Codex chat/session and ask:

> Use $ai-ready-sites to build a website from this brief.

### Copy the folder without Node.js

Copy the entire `skills/ai-ready-sites` folder from the package into your Codex user skills folder:

- Default: `~/.codex/skills/ai-ready-sites`
- Windows: `%USERPROFILE%\.codex\skills\ai-ready-sites`
- Custom `CODEX_HOME`: its `skills/ai-ready-sites` subfolder

Keep all references, scripts, licenses and vendor notices with `SKILL.md`. If the destination already exists, preserve it outside the active skills folder first; do not overwrite an unrelated installation. Start a new Codex chat/session after copying.

### Installer behavior and options

Run the installer from the extracted package or repository root. It has no downloads or npm dependencies. It verifies the copied files and does not change accounts, MCP settings or global instructions.

| Situation or option | Result |
| --- | --- |
| No existing installation | Copies the skill and reports `INSTALLED` |
| Identical existing files | Makes no changes and reports `ALREADY_INSTALLED` |
| Different existing files | Stops without replacing them |
| `--replace` | Replaces different files and preserves a backup outside the skills directory; the result includes the backup path |
| `--skills-dir DIRECTORY` | Uses an explicit parent skills directory instead of the default |
| `--help` | Shows usage without installing |

`--skills-dir` is useful for a separate test profile. It only chooses where files are copied; the host must be configured to discover that directory.

## Writing and documentation

The skill includes three internal guides: [editorial review and translation](skills/ai-ready-sites/references/editorial.md), [technical documentation](skills/ai-ready-sites/references/technical-writing.md), and [site and interface copy](skills/ai-ready-sites/references/site-copy.md). They cover text-only work without requiring a website build or design review. Commands, product facts and actual interface labels remain part of the source material to preserve and verify.

### Plugin-capable hosts

The root `plugin.json` is a portable Agent Plugins manifest. `.codex-plugin/plugin.json` provides a Codex compatibility manifest with the same identity. If your host supports local plugin import or a marketplace mechanism, you can use that route instead of copying the skill. This package contains one plugin and no marketplace.

Direct skill-folder installation is the verified low-dependency route. Host-specific plugin import still needs verification in that host. Do not install both plugin and direct-folder forms in the same profile.

## Verify the stable archive

Download `ai-ready-sites-0.3.0.sha256` from the same [0.3.0 release](https://github.com/tsvetaeff-den/ai-ready-sites/releases/tag/v0.3.0). Keep the ZIP and checksum file in the same directory.

- Linux: `sha256sum -c ai-ready-sites-0.3.0.sha256`
- macOS: `shasum -a 256 -c ai-ready-sites-0.3.0.sha256`
- Windows PowerShell: run `Get-FileHash .\ai-ready-sites-0.3.0.zip -Algorithm SHA256` and compare the hash with the checksum file.

The hashes must match. If they do not, do not install that archive. The release ZIP contains one `ai-ready-sites/` directory with the skill, installer, documentation and licenses.

## Example requests

Invoke `$ai-ready-sites` and give it the task and boundaries:

- Build a small website for this product. Use the supplied facts, a responsive layout and a working primary action.
- Improve this dashboard while preserving its components and behavior.
- Fix only the mobile menu overlap and check the affected behavior.
- Audit this site without changing any files. Separate observed issues from hypotheses.
- Check whether this website is ready to ship. Do not publish it.

For writing and documentation, you can also ask:

- Improve this README and translate it into natural Russian. Preserve commands, links, version details and limitations.
- Rewrite this landing page copy using only the supplied product facts.
- Check these setup instructions against the implementation and report anything you could not verify.

## Package contents and boundaries

The package provides one automatically discoverable skill. It loads relevant internal guides for brief/UX, visual direction, implementation, motion, accessibility/performance/SEO, browser QA, DevTools, Playwright and completion. The package also includes the three text guides listed above.

Optional doctor and browser-smoke helpers use existing tools and do not install software. The package has no MCP server, hooks, credentials, telemetry, automatic updater or remote service. The host/model may use network services according to its own settings.

An audit does not authorize edits. Website creation or a readiness review does not authorize publication, real form submissions, paid services or production changes.

## Moving from 0.1.0

Version 0.1.0 exposed seven separate skills. Starting with 0.2.0, their capabilities are consolidated into `$ai-ready-sites` and internal references, with added quality and browser guidance. The old specialist command names are no longer provided.

Keep the old package as a backup outside active skill discovery. Installing both versions can cause overlapping automatic selection. Existing projects and documents do not need migration. This package does not depend on or modify a personal website-workflow; explicitly request `$ai-ready-sites` when selecting it through an existing coordinator.

## Checks and limitations

From the package root, run `node scripts/validate.mjs` for package integrity and `node scripts/test-install.mjs` for isolated installer behavior. Use `node scripts/check-text-artifacts.mjs` to compare the saved RU/EN editorial outputs and the README commands/links. These checks do not run a model or prove semantic equivalence, readability or website quality. See [the editorial evaluation](tests/editorial/REVIEW.md) for the actual source-to-result review.

See [VALIDATION.md](VALIDATION.md) for recorded checks and limitations, [tests/SCENARIOS.md](tests/SCENARIOS.md) for behavioral cases, [CONTRIBUTING.md](CONTRIBUTING.md) for development, and [SECURITY.md](SECURITY.md) for security reporting. A workflow run applies to its recorded commit. It verifies package, installer and saved text artifacts; website quality requires separate checks.

## License and attribution

Original work is Apache-2.0. Attributed adapted material retains applicable notices in [THIRD_PARTY_NOTICES.md](skills/ai-ready-sites/THIRD_PARTY_NOTICES.md) and [upstreams.lock.json](skills/ai-ready-sites/upstreams.lock.json). This is an independent AI-Ready package, not an official distribution endorsed by upstream authors. No upstream binary or browser library is redistributed.
