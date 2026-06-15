# CodeAudit.dev — UI Simplification Spec (Visual/UI Only)

Purpose: reduce visual noise and "trying too hard" feel across the site WITHOUT changing page structure, copy, content sections, SEO, or waitlist functionality from the existing spec. This is a UI/styling pass only.

Core principle: **One signature motif, used sparingly. Everything else calm.**

---

## 1. Pick ONE Signature Element (sitewide)

Choose **the terminal/code-output style box** as the single recurring "technical" motif. Use it in exactly these places, nowhere else:
- Homepage hero (one terminal mockup showing a scan happening)
- Sample Report page (the audit log table)
- `/products/fix-prompts` (the prompt card examples — these are inherently code-like, keep them)

Everywhere else: **remove terminal/CLI styling, monospace status badges, and "system" framing.**

---

## 2. Remove / Simplify These Elements Sitewide

### Remove entirely:
- Duplicate terminal block in the "Why Developers Choose CodeAudit" section (`$ codeaudit run ./src --strict ...`). One terminal demo per page, max — the hero already has one.
- "SECRETS_SCAN PASS / PERF_CHECK PASS / DEP_AUDIT PASS" badge row — this repeats info already shown in the capability grid and audit log.
- "System Status ● OPERATIONAL", "Engine v2.0.0-beta", "Uptime 99.97%" in the footer — these are fake telemetry for a product that isn't live yet and add no value to a visitor deciding whether to join a waitlist.
- "Waitlist Status: OPEN" badge near the final CTA — redundant with the CTA itself.
- "CodeAudit Engine v2.0.0-beta" label above the hero headline.
- Section-header code-style labels: "SEC-CORE ACTIVE", "PERF-CORE ACTIVE", "ARCH-CORE ACTIVE", "AI-REVIEW ACTIVE", "MOD-01/02/03/04", "STEP_01/02/03". Replace with plain numbered or icon-based section markers (e.g., a simple icon + title, or "Step 1 / Step 2 / Step 3" in normal type).
- "Target Architecture" / "SUPPORTED" badges in the audience section — keep the four audience cards (Indie Hacker, Startup Team, Dev Agency, AI Engineer) but drop the "SUPPORTED" tag and "Target Architecture" framing; rename section back to something plain like "Who It's For."
- ">> NO MERCY FOR BAD CODE." tagline in footer.

### Simplify / tone down:
- "Workflow Engine" → just "How It Works" (drop "Workflow Engine" eyebrow label)
- "Analysis Engine" / "Capability Matrix" → just "What We Analyze"
- "Deep Inspection" / "Live Audit Log" → keep "Sample Findings" or "What We Catch", drop "Deep Inspection" eyebrow
- "Engineering Value" → drop this eyebrow label, keep "Why Developers Choose CodeAudit" as the heading
- "Documentation" eyebrow above FAQ → drop, just "FAQ" or "Frequently Asked Questions"
- "Target Architecture" → "Who It's For"
- Headline copy "Uncover logic flaws that standard scanners miss" + "elite engineering teams" → soften to match indie/startup audience tone (e.g., "Find issues before your users do" / "Built for developers shipping fast")

---

## 3. Visual Density Rules (apply across all pages)

- **Max one "live/animated" component visible per viewport scroll** — don't stack terminal + status badges + matrix grid + log table all active-looking at once.
- **Eyebrow labels** (small caps text above headings like "PRODUCT", "RESOURCES"): use at most ONE per section, plain text, no monospace/code styling, no "ACTIVE"/"CORE"/"MODULE" suffixes.
- **Badges/pills**: reserve for severity levels only (Critical/High/Medium/Low in findings). Do not use badge styling for navigation labels, section labels, or status indicators.
- **Monospace font**: restrict to actual code/terminal content (remediation snippets, CLI examples, prompt cards). Do not use monospace for headings, labels, or section eyebrows.
- **Color-coded "PASS/ACTIVE" green indicators**: remove from anywhere that isn't an actual finding's severity or status in a real report context.

---

## 4. Section-by-Section: Homepage Simplification

| Current | Simplified |
|---|---|
| "CodeAudit Engine v2.0.0-beta" + "Stop Shipping Blind." + "codeaudit-cli --stdout" hero terminal | Keep headline + subhead + ONE terminal mockup. Remove version label above headline. |
| "Workflow Engine / How CodeAudit Works" + STEP_01/02/03 + "Target Acquired" / "Execution Time: <45s" / "Output: JSON/Markdown" tags | "How It Works" + 3 plain numbered steps (1, 2, 3), no terminal-style status tags under each step |
| "Analysis Engine / Capability Matrix" + SEC-CORE/PERF-CORE/ARCH-CORE/AI-REVIEW ACTIVE tags | "What We Analyze" — 4 cards, plain icons, no ACTIVE badges |
| "Platform Toolkit / More Than a One-Time Scan" + MOD-01-04 | Keep section, drop MOD-01-04 numbering, keep screenshots + titles + descriptions |
| "Deep Inspection / Live Audit Log" + table + expandable JWT example | Keep — this is the signature element. Drop "Deep Inspection" eyebrow, keep table simpler (maybe show 1 expanded example by default instead of implying a full live system) |
| "Engineering Value" section with second terminal + PASS badges + stack logos | Drop second terminal and PASS badges. Keep "Why Developers Choose CodeAudit" text content + stack logos row only |
| "Target Architecture / Supported Deployment Profiles" + SUPPORTED tags | "Who It's For" — same 4 cards, no SUPPORTED tags, no "Target Architecture" framing |
| "Documentation / FAQ" | "FAQ" — drop "Documentation" eyebrow |
| Final CTA + "Waitlist Status: OPEN" | Keep CTA, drop status badge |
| Footer: System Status/Engine/Uptime/"NO MERCY" | Remove all four; keep brand description + nav columns only |

---

## 5. Product Pillar Pages (`/products/*`) — UI notes

- Remove any "ACTIVE", "CORE", module-ID styling carried over from homepage capability matrix if templated across these pages.
- Each product page should read as a calm, focused single-topic page: heading, subhead, prose, bullet list, one finding card, FAQ. No status badges, no "v2.0.0-beta" references.

---

## 6. Sample Report Page — UI notes

- This page is the natural home for the "full system" feel — it's literally a report. Keep it detailed/technical here.
- Still avoid stacking unrelated status chrome (uptime, engine version) — keep focus on the report itself: severity summary, findings list, one expanded example with remediation code.

---

## 7. General Tone Guidance for Any New Copy

- Avoid words/phrases: "elite", "no mercy", "deterministic pipeline", "operational", "engine v2.x"
- Prefer: direct, plain, confident-but-approachable. The product should feel like a useful tool built by developers, not a sci-fi command center.
- Keep technical credibility through SPECIFIC content (real finding examples, real code snippets, real stack names) rather than through UI chrome (badges, status lights, version numbers).

---

## 8. What to KEEP (don't over-correct)

- Terminal-style hero mockup (one instance)
- Severity badges on actual findings (Critical/High/Medium/Low) — these are meaningful and useful
- Code snippets in remediation examples and fix-prompt cards
- The 4-category icon grid (Security/Performance/Architecture/AI Code Review)
- The 4-audience cards (Indie Hacker/Startup/Agency/AI Engineer) — just without "SUPPORTED" tags
- Stack logos row
- Overall dark/technical color scheme (if that's the template's base) — the issue is element density, not the color palette itself
