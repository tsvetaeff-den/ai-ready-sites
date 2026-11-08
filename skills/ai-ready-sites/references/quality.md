<!-- AI-Ready Sites 0.2.0: rewritten and adapted guidance. See ../THIRD_PARTY_NOTICES.md and ../upstreams.lock.json for sources and modifications. -->

# Evidence-led web quality

Choose checks for the affected surface. A minor copy change does not need a whole-site audit. An audit-only task reports findings without editing the site. Establish representative URLs, states, mobile/desktop scope and build/environment before collecting evidence.

## Accessibility and interaction

Test semantic names/roles/states, labels, keyboard reachability and operation, visible focus, logical order, appropriate dialog focus return and escape behavior. Check text zoom, responsive reflow, contrast and non-color indicators. Body text normally needs 4.5:1 contrast; large text 3:1. WCAG 2.2 AA target-size checks use 24 by 24 CSS pixels or applicable exceptions; about 44–48 pixels is a useful touch design target, not the universal AA threshold.

Check informative image alternatives, meaningful links, page language and exposed validation/status messages. Native semantics are preferable to invalid or unnecessary ARIA. Automated scans can detect a subset of problems; keyboard checks and actual interaction remain necessary. Do not claim WCAG conformance from Lighthouse or this checklist alone.

## Performance

Measure before changing code for speed. Separate source hypotheses, one-session lab measurements and aggregated field data. For field Core Web Vitals, the usual good thresholds at the 75th percentile are LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1; report form factor, scope and time window. Missing field data is unavailable, not a pass. A load trace without interactions does not establish field INP.

Use a trace or available Lighthouse performance measurement under recorded viewport, CPU/network throttling, cache, authentication and build conditions. For a decision based on a headline metric, compare several equivalent runs and report variation. DevTools MCP Lighthouse may omit Performance; use its performance trace tools rather than interpreting other category scores as speed.

Follow observed causes: delayed LCP resource discovery, server latency, render-blocking resources, long tasks, unnecessary hydration/JavaScript, layout shifts or oversized assets. Reserve image dimensions, avoid lazy-loading the main above-fold image, defer noncritical resources, and load fonts deliberately. Do not preload every asset, remove useful functionality, or memoize everything to chase a score. Recheck affected behavior after optimization.

## SEO for discoverable public pages

Check meaningful titles/descriptions, semantic headings, canonical URLs, indexability, status codes, internal links, sitemap where useful and language variants where supported. Keep authenticated and staging pages private when intended; do not remove noindex globally. Structured data must reflect actual visible content. Do not fabricate reviews, prices or organization facts. SEO scores do not guarantee ranking; `llms.txt` and agentic-browsing scores do not prove AI citation or discoverability.

## Web best practices

Inspect relevant console/network failures, broken resources, mixed content, unsupported APIs, accidental secrets and unsafe HTML handling. Review third-party scripts and dependency issues in scope. Do not blindly add CSP/HSTS, disable source maps, upgrade dependencies, change production headers or weaken checks to obtain a green audit. Changes must fit the deployment and application requirements.

## Finding format

For each material issue give location/route, observed condition, impact, evidence type and confidence, smallest useful fix and verification. Distinguish pre-existing failures, new failures and untested areas. Prioritize blocked actions and inaccessible content before cosmetic issues. Use equivalent conditions when rerunning measurements. Preserve reports/artifacts only when useful to reproduce or review the result.
