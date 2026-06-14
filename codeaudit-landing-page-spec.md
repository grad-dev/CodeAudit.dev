# CodeAudit.dev — Landing Page & Waitlist Site Spec (for AI Agent Execution)

This document specifies the full multi-page landing/waitlist site for CodeAudit.dev. It is written so an AI coding agent can implement it directly using an existing design template.

---

## 0. IMPORTANT — Design & Template Instructions

- A design template is already chosen and will be provided/used as the visual foundation. **Take ONLY the design system from the template**: layout structure, spacing, typography scale, color system, component styles (cards, buttons, nav, footer), animations, and section patterns (hero, feature grid, testimonials, FAQ, CTA bands).
- **Remove all template-specific content**: placeholder copy, demo product names, fake testimonials, unrelated product screenshots, and any third-party branding.
- **Replace with CodeAudit.dev content** as specified in this document.
- Reference site `checkvibe.dev` is provided as a structural/positioning reference for a similar product category (vibe-coding security/audit tool) — agent may look at its page structure (multi-product pillar pages, hero with live scan animation, feature grid, testimonials, FAQ, blog hub, footer with grouped links) for inspiration on INFORMATION ARCHITECTURE, not for design styling (design comes from the template).
- Do not copy any text, testimonials, or copyrighted content from checkvibe.dev. All copy here is original.

---

## 1. Site Mode: Waitlist Phase

The entire site currently operates in **waitlist mode**:
- No live product, no scanner, no signup/login.
- Every page still showcases the FULL planned product (all features, all tools, all pages) — exactly as if live — but every primary CTA ("Audit My Repository", "Try Free Scan", "Get Started", "Start Free Audit", etc.) opens a **waitlist signup form/modal** instead of a working tool.
- A persistent banner/badge across the site: `"CodeAudit.dev is launching soon — join the waitlist for early access"`.

### Waitlist Form Requirements
- Fields: Email (required), optionally Name and "What will you primarily audit?" (dropdown: Personal project / Startup / Client work / Agency / Other).
- On submit: send form data to **gradviseofficial@gmail.com**.
- Implementation note for agent: use a form backend suitable for the stack (e.g., FormSubmit, Resend, a serverless function, or an email API) configured to deliver all submissions to `gradviseofficial@gmail.com`. Store submissions in a database table as well if one exists, in addition to emailing.
- After submission: show a success state ("You're on the list — we'll email you when CodeAudit.dev is ready.") and optionally a "Share with a friend" prompt.
- Add basic spam protection (honeypot field or simple bot-check).

### Where the waitlist form appears
- Modal triggered by any primary CTA button sitewide.
- Dedicated inline form in the homepage hero section.
- Dedicated inline form at the bottom of every page (final CTA band).

---

## 2. Site Structure / Page List

```
/                                  → Homepage
/how-it-works
/pricing                           → "Coming soon" pricing tiers (showcase, not billable yet)
/sample-report                     → Static example audit report
/faq
/waitlist                          → Standalone waitlist page (for direct links/ads)

Products (pillar pages — one per tool/feature):
/products/security-scanner
/products/performance-analyzer
/products/architecture-review
/products/ai-code-review
/products/dependency-checker
/products/secrets-detection
/products/fix-prompts            → AI-ready fix prompts (agent-native output)
/products/reports-dashboard

Stack/security guide pages:
/secure/nextjs
/secure/react
/secure/nodejs
/secure/django
/secure/fastapi
/secure/supabase
/secure/typescript

Resources:
/blog                              → Blog index
/blog/[slug]                       → Articles (see Section 7)
/compare/[competitor]              → Comparison pages

Company:
/about
/contact
/privacy
/terms
```

---

## 3. Global Elements

### Header / Navigation
```
Logo (left) — "CodeAudit.dev"

Nav links:
  Product (dropdown) → links to all /products/* pages
  Security Checks → links to overview of what's analyzed (anchor on homepage or /security-checks page)
  Stack Guides → /secure (index of stack pages)
  Pricing → /pricing
  Blog → /blog

Right side:
  "Join Waitlist" button (primary CTA, opens waitlist modal)
```

### Footer
```
Column 1 — Brand
  Logo, one-line tagline: "Stop shipping blind. Security, performance, and
  architecture audits for modern codebases."
  Social links (X/Twitter, GitHub) — placeholder handles, agent can leave
  as "#" or template defaults until provided.

Column 2 — Product
  Security Scanner
  Performance Analyzer
  Architecture Review
  AI Code Review
  Dependency Checker
  Secrets Detection
  AI Fix Prompts
  Reports & Dashboards

Column 3 — Resources
  How It Works
  Sample Report
  Stack Security Guides
  Blog
  FAQ
  Compare

Column 4 — Company
  About
  Contact
  Privacy Policy
  Terms of Service

Bottom bar:
  "© 2026 CodeAudit.dev. All rights reserved."
  Small text: "Currently in waitlist — join for early access" (links to /waitlist)
```

### Persistent Banner (top of every page)
```
"🚀 CodeAudit.dev is launching soon. [Join the Waitlist →]"
```
Dismissible, reappears on new session.

---

## 4. Homepage (`/`)

### 4.1 Hero Section
```yaml
badge: "Coming Soon — Join the Waitlist"
h1: "Stop Shipping Blind."
subheadline: "Paste your GitHub repository and receive a detailed security,
  performance, and architecture audit in minutes. Find vulnerabilities,
  exposed secrets, performance bottlenecks, technical debt, and
  AI-generated code issues before they reach production."
primary_cta: "Join Waitlist for Early Access"  # opens waitlist modal
secondary_cta: "See Sample Report"  # links to /sample-report
visual: "Animated/static mockup of a repo URL being pasted and a report
  generating — use template's existing hero animation/mockup component,
  restyle copy to match (e.g., 'github.com/yourname/yourrepo' → scanning →
  findings list with severity badges)"
trust_line: "Built for indie hackers, startups, and developers shipping
  AI-generated code"
```

### 4.2 How It Works (3-step)
```yaml
section_heading: "How It Works"
steps:
  - number: 1
    title: "Paste Your Repository"
    description: "Connect a GitHub repository or paste a public repository URL."
  - number: 2
    title: "Automated Analysis"
    description: "CodeAudit scans your codebase using security analyzers,
      dependency checks, architecture reviews, and AI-powered analysis."
  - number: 3
    title: "Receive Your Report"
    description: "Get a detailed report with prioritized issues,
      explanations, severity ratings, and actionable fixes."
```

### 4.3 What We Analyze (category grid)
```yaml
section_heading: "What We Analyze"
categories:
  - title: "Security"
    icon: "shield"
    items:
      - "Exposed API keys and secrets"
      - "Hardcoded credentials"
      - "Authentication and authorization issues"
      - "Insecure configurations"
      - "Vulnerable dependencies"
    link: "/products/security-scanner"
  - title: "Performance"
    icon: "zap"
    items:
      - "Large bundles and assets"
      - "Inefficient code patterns"
      - "Rendering bottlenecks"
      - "Dependency bloat"
      - "Frontend optimization opportunities"
    link: "/products/performance-analyzer"
  - title: "Architecture"
    icon: "layers"
    items:
      - "Code duplication"
      - "Large or complex files"
      - "Poor project structure"
      - "Maintainability concerns"
      - "Technical debt hotspots"
    link: "/products/architecture-review"
  - title: "AI-Generated Code Review"
    icon: "sparkles"
    items:
      - "Common vibe-coding mistakes"
      - "Unsafe generated code"
      - "Duplicate implementations"
      - "Missing validation"
      - "Production-readiness concerns"
    link: "/products/ai-code-review"
```

### 4.4 Beyond the Basics — Additional Tools Teaser
*(New section — showcases the broader product suite, similar in spirit to a "platform" section)*
```yaml
section_heading: "More Than a One-Time Scan"
intro: "CodeAudit.dev goes beyond a single report — a full toolkit to keep
  your codebase healthy as it grows."
tools:
  - title: "Dependency Checker"
    description: "Continuously track outdated and vulnerable packages
      across your stack."
    link: "/products/dependency-checker"
  - title: "Secrets Detection"
    description: "Catch exposed API keys, tokens, and credentials before
      they're ever pushed to a public repo."
    link: "/products/secrets-detection"
  - title: "AI-Ready Fix Prompts"
    description: "Every finding includes a copy-paste prompt you can drop
      into Claude, Cursor, or any AI coding agent to fix it instantly."
    link: "/products/fix-prompts"
  - title: "Reports & Dashboards"
    description: "Shareable, professional reports for your team, clients,
      or stakeholders."
    link: "/products/reports-dashboard"
```

### 4.5 Example Findings (sample report preview)
```yaml
section_heading: "Example Findings"
findings:
  - severity: "Critical"
    title: "JWT Secret Hardcoded"
    description: "A JWT signing secret was found directly in source code.
      If exposed, attackers could generate valid authentication tokens and
      impersonate users."
    fix: "Move secrets to environment variables and rotate the exposed
      key immediately."
  - severity: "High"
    title: "Missing Rate Limiting"
    description: "Authentication endpoints do not implement rate limiting,
      increasing the risk of brute-force attacks."
    fix: "Add request throttling on login and password reset endpoints."
  - severity: "Medium"
    title: "Oversized Frontend Bundle"
    description: "The application ships over 2.8 MB of JavaScript on first
      load, negatively affecting performance and user experience."
    fix: "Introduce code splitting and lazy loading."
cta: "See Full Sample Report" # links to /sample-report
```

### 4.6 Why Developers Use CodeAudit
```yaml
section_heading: "Why Developers Use CodeAudit"
points:
  - title: "Launch With Confidence"
    description: "Catch critical issues before your users do."
  - title: "Save Hours of Manual Review"
    description: "Get a complete audit in minutes instead of spending
      days reviewing code."
  - title: "Understand Every Finding"
    description: "Every issue includes an explanation, severity level,
      and recommended fix."
  - title: "Built For Modern Projects"
    description: "Works with React, Next.js, Node.js, TypeScript, Django,
      FastAPI, and more."
```

### 4.7 Perfect For (audience grid)
```yaml
section_heading: "Perfect For"
audiences:
  - "Indie Hackers"
  - "SaaS Founders"
  - "Startup Teams"
  - "Freelancers"
  - "Agencies"
  - "Developers Shipping AI-Generated Code"
```

### 4.8 Social Proof / Waitlist Momentum
*(New section — since there are no real testimonials yet, use a waitlist-momentum framing instead of fake quotes)*
```yaml
section_heading: "Be Among the First"
content: "Join developers and founders signing up for early access to
  CodeAudit.dev. Early waitlist members get [priority access / a free
  audit / founder pricing — agent: pick one consistent incentive and use
  it across the site]."
visual: "Use template's stat-counter or social-proof component style,
  but show something honest like 'Join the waitlist' rather than a fake
  user count, unless real numbers exist."
```

> **Do not fabricate testimonials, user counts, or "trusted by X developers" claims** until real data exists. This is a key difference from the checkvibe.dev reference — that site has real users; CodeAudit.dev does not yet.

### 4.9 FAQ
```yaml
section_heading: "Frequently Asked Questions"
faqs:
  - q: "Does CodeAudit access my private code?"
    a: "Only repositories you explicitly authorize are analyzed."
  - q: "How long does an audit take?"
    a: "Most repositories are analyzed within a few minutes."
  - q: "Do you provide fixes?"
    a: "Yes. Every finding includes recommended remediation steps and
      implementation guidance."
  - q: "Is this a penetration test?"
    a: "No. CodeAudit performs static code analysis and architecture
      review to identify issues before deployment."
  - q: "What repositories are supported?"
    a: "Any GitHub repository. Support for additional providers will be
      added in future releases."
  - q: "When will CodeAudit.dev launch?"
    a: "We're putting the finishing touches on the platform. Join the
      waitlist to get notified the moment it's live, plus early-access
      perks."
  - q: "What will it cost?"
    a: "Pricing details are coming soon — see our Pricing page for planned
      tiers. Waitlist members will get early-access pricing."
```

### 4.10 Final CTA Band
```yaml
heading: "Before you deploy, run CodeAudit."
subheading: "Get a detailed security, performance, and architecture review
  in minutes. Join the waitlist to be first in line."
cta: "Join Waitlist"  # opens modal
```

---

## 5. Product Pillar Pages (`/products/*`)

Each product page follows this template. Generate full content for each — do not leave placeholders.

```yaml
template:
  hero:
    h1: "<Product Name>"
    subheadline: "<1-2 sentence value prop specific to this tool>"
    cta: "Join Waitlist"
  sections:
    - "What it does" (150-250 words, prose)
    - "What it checks for" (bulleted list, 5-8 items)
    - "Example finding" (use Finding Card format: severity, title,
        description, recommended fix — must be specific to this product)
    - "How it fits into your workflow" (100-150 words)
    - "FAQ" (2-3 product-specific Q&As)
  cta_band: "Join the waitlist to get early access to <Product Name>"
```

### 5.1 `/products/security-scanner`
- H1: "Security Scanner"
- Subhead: "Find exposed secrets, vulnerable dependencies, and insecure configurations before attackers do."
- Checks for: exposed API keys/secrets, hardcoded credentials, authentication/authorization flaws, insecure configurations (CORS, headers, env handling), vulnerable/outdated dependencies, SQL injection patterns, missing input validation, insecure direct object references.
- Example finding: reuse "JWT Secret Hardcoded" (Critical) from homepage, or generate a new one (e.g., "Missing CSRF Protection on Forms" - High).

### 5.2 `/products/performance-analyzer`
- H1: "Performance Analyzer"
- Subhead: "Spot bundle bloat, slow rendering paths, and inefficient code before your users feel it."
- Checks for: large JS bundles, unused dependencies, render-blocking resources, inefficient loops/algorithms, missing memoization in React, large unoptimized images/assets, N+1 query patterns, missing caching.
- Example finding: "Oversized Frontend Bundle" (Medium) from homepage, or new: "N+1 Database Query in API Route" (High).

### 5.3 `/products/architecture-review`
- H1: "Architecture Review"
- Subhead: "Understand your codebase's structure, find duplication, and catch technical debt before it compounds."
- Checks for: code duplication across files, overly large/complex files (god files/functions), inconsistent project structure, circular dependencies, missing separation of concerns, dead code, naming/convention inconsistencies.
- Example finding: "Duplicate Authentication Logic Across 4 Files" (Medium).

### 5.4 `/products/ai-code-review`
- H1: "AI-Generated Code Review"
- Subhead: "Built for the vibe-coding era — catch the specific mistakes AI coding tools tend to make."
- Checks for: unsafe generated code patterns, duplicate implementations from repeated AI prompts, missing input validation on AI-generated endpoints, placeholder/TODO code left in production paths, inconsistent error handling, over-permissive database rules (Supabase/Firebase RLS), production-readiness gaps.
- Example finding: "Supabase Row-Level Security Disabled on Public Table" (Critical).

### 5.5 `/products/dependency-checker`
- H1: "Dependency Checker"
- Subhead: "Know exactly which packages in your project have known vulnerabilities or are dangerously out of date."
- Checks for: known CVEs in dependencies, outdated major versions, unmaintained/abandoned packages, license compliance issues, unnecessary/unused dependencies inflating bundle size.
- Example finding: "Critical Vulnerability in Outdated Package (CVE Reference)" (Critical).

### 5.6 `/products/secrets-detection`
- H1: "Secrets Detection"
- Subhead: "Scan every file and commit pattern for API keys, tokens, and credentials that should never be public."
- Checks for: cloud provider keys (AWS/GCP/Azure), database connection strings, third-party API tokens (Stripe, Supabase, OpenAI/Anthropic, etc.), private keys/certificates, hardcoded passwords, secrets in config files and .env files committed to the repo.
- Example finding: "Stripe Secret Key Found in Client-Side Code" (Critical).

### 5.7 `/products/fix-prompts`
- H1: "AI-Ready Fix Prompts"
- Subhead: "Every finding includes a ready-to-use prompt you can paste directly into Claude, Cursor, or any AI coding agent."
- Description focus: explain that each finding ships with a structured prompt containing the issue, file/location context, severity, and the recommended fix — written so an AI agent can implement the fix correctly without additional back-and-forth.
- Include a visual "prompt card" example, e.g.:
  ```
  Fix: JWT Secret Hardcoded (Critical)
  File: src/auth/config.ts
  Issue: A JWT signing secret is hardcoded directly in source.
  Fix: Move the secret to an environment variable (JWT_SECRET), update
  config.ts to read from process.env.JWT_SECRET, add JWT_SECRET to
  .env.example, and rotate the existing exposed key.
  ```
- No "Example Finding" section needed (this page IS about the fix format) — instead include 2-3 example prompt cards.

### 5.8 `/products/reports-dashboard`
- H1: "Reports & Dashboards"
- Subhead: "Professional, shareable reports for your team, clients, or stakeholders."
- Checks for: N/A (descriptive page) — instead describe: exportable PDF reports, severity-prioritized issue lists, historical comparison (track improvement over time), shareable links for clients/agencies.
- Example: describe a sample report layout (severity summary chart + categorized findings list) rather than a single finding.

---

## 6. Stack Security Guide Pages (`/secure/[stack]`)

One page per stack: nextjs, react, nodejs, django, fastapi, supabase, typescript.

```yaml
template:
  h1: "Security & Code Audit for <Stack> Projects"
  subheadline: "CodeAudit.dev checks your <Stack> codebase for the
    vulnerabilities, performance issues, and architecture problems most
    common to <Stack> applications."
  sections:
    - "Common <Stack> Issues We Detect" — bulleted list, 5-8 stack-specific items
    - "Example Finding" — one finding card specific to this stack
    - "Why <Stack> Projects Need Specialized Checks" — 150-200 words prose
    - "FAQ" — 2-3 stack-specific Q&As
  cta: "Join the waitlist to audit your <Stack> project"
```

Generate stack-specific issue lists (examples to guide content generation):
- **Next.js**: exposed env vars in client bundles, missing middleware on API routes, unoptimized images, server actions without validation, getServerSideProps leaking data.
- **React**: unnecessary re-renders, missing key props causing bugs, prop drilling/state management issues, XSS via dangerouslySetInnerHTML, unhandled error boundaries.
- **Node.js**: missing helmet/security headers, unvalidated request bodies, synchronous blocking operations, outdated Express middleware, missing rate limiting.
- **Django**: DEBUG=True in production, missing CSRF protection, insecure SECRET_KEY handling, unrestricted ALLOWED_HOSTS, raw SQL queries vulnerable to injection.
- **FastAPI**: missing input validation on Pydantic models, unprotected endpoints, CORS misconfiguration, blocking I/O in async routes.
- **Supabase**: RLS disabled on tables, anon key exposed with elevated permissions, missing auth checks on edge functions, overly permissive storage bucket policies.
- **TypeScript**: use of `any` defeating type safety, unsafe type assertions, missing strict mode, inconsistent error typing.

---

## 7. Blog (`/blog`, `/blog/[slug]`)

### Blog Index Page
- Grid/list of article cards: title, short excerpt, category tag, read time, date.
- Filter/category tags (optional, based on template capability).

### Articles to generate (initial set — full articles, not stubs)

1. `slug: "ai-generated-code-vulnerabilities-2026"` — "10 Most Common Security Mistakes in AI-Generated Code"
2. `slug: "hardcoded-secrets-guide"` — "How to Find and Fix Hardcoded Secrets in Your Codebase"
3. `slug: "pre-launch-saas-security-checklist"` — "25-Point Pre-Launch Security Checklist for SaaS Founders"
4. `slug: "vibe-coding-security-risks"` — "Vibe Coding Security: What AI Coding Tools Don't Tell You"
5. `slug: "code-audit-vs-pentest-vs-code-review"` — "Code Audit vs Penetration Test vs Code Review: What Do You Need?"
6. `slug: "reduce-nextjs-bundle-size"` — "How to Reduce JavaScript Bundle Size in Next.js"
7. `slug: "jwt-secret-hardcoded-fix"` — "JWT Secret Hardcoded in Source Code: Risk and Fix"
8. `slug: "supabase-rls-security-checklist"` — "Supabase RLS: A Security Checklist Before You Launch"

### Per-article structure
```yaml
word_count: 1200-2000
structure:
  - h1: "<title>"
  - intro: 2-3 sentences, state the problem directly
  - h2 sections: 4-7, each 100-250 words, code snippets where relevant
  - faq_section: 3-5 Q&A pairs at the end
  - cta_block: mid-article and end-article — "Want CodeAudit to check your
    repo for this automatically? Join the waitlist."
internal_linking:
  - minimum 2 links to relevant /products/* or /secure/* pages
  - minimum 1 link to another blog article
```

---

## 8. Comparison Pages (`/compare/[competitor]`)

```yaml
competitors: ["snyk", "sonarqube", "codeant"]
template:
  h1: "CodeAudit.dev vs <Competitor>: Which Is Right for You?"
  sections:
    - "Quick comparison table" — Feature | CodeAudit.dev | <Competitor>
      (focus: setup time, target audience, AI-generated-code-specific
      checks, pricing accessibility — factual, no unverifiable claims)
    - "Who <Competitor> is built for" — 100-150 words, neutral
    - "Who CodeAudit.dev is built for" — 100-150 words
    - "When you might use both" — 80-120 words
  cta: "Join the CodeAudit.dev Waitlist"
tone_rules:
  - "Never disparage competitors; factual and neutral only"
  - "Do not state specific competitor pricing unless verifiable — use
    general descriptions instead"
```

---

## 9. Sample Report Page (`/sample-report`)

- Static, fully-designed mockup of what a real audit report looks like.
- Structure:
  - Report header: repo name (use placeholder like "github.com/example/saas-starter"), scan date, overall summary (e.g., "3 Critical, 7 High, 12 Medium, 5 Low")
  - Severity breakdown visual (chart/bar component from template)
  - Categorized findings list (Security / Performance / Architecture / AI Code Review), each with 2-3 example findings using the Finding Card format
  - One example "AI Fix Prompt" card (see Section 5.7 format)
  - CTA: "This is what your repo's report could look like. Join the waitlist to get yours."

---

## 10. Pricing Page (`/pricing`)

Showcase planned tiers (not billable yet — every CTA opens waitlist modal with note "Pricing will be available at launch").

```yaml
tiers:
  - name: "Free"
    price: "$0"
    description: "One-time audit for a single public repository."
    features:
      - "1 repository audit"
      - "Security, performance, and architecture findings"
      - "Severity-rated report"
    cta: "Join Waitlist"
  - name: "Pro"
    price: "Coming soon"
    description: "For founders and freelancers shipping multiple projects."
    features:
      - "Unlimited repository audits"
      - "AI-ready fix prompts"
      - "Private repository support"
      - "Re-scan and track progress over time"
    cta: "Join Waitlist"
  - name: "Team / Agency"
    price: "Coming soon"
    description: "For agencies and teams managing multiple client projects."
    features:
      - "Everything in Pro"
      - "Multiple projects / client workspaces"
      - "Shareable client-facing reports"
      - "Priority support"
    cta: "Join Waitlist"
note: "Exact pricing will be announced at launch. Waitlist members get
  early-access pricing."
```

---

## 11. About & Contact Pages

### `/about`
- Short founder/story-style section: why CodeAudit.dev exists (tie to the "AI-generated code shipping with security holes" problem), what it does, who it's for.
- Keep to 300-500 words, no fabricated team bios/photos unless provided.

### `/contact`
- Simple contact form (name, email, message) — submissions also route to `gradviseofficial@gmail.com`.
- Optional: direct email link as fallback.

---

## 12. SEO Implementation (applies across all pages above)

### 12.1 Positioning
- Primary entity: "AI-generated code audit" / "vibe coding security audit"
- Secondary entity: "code audit" / "code review tool"
- Brand voice: direct, technical, no fluff.

### 12.2 Per-Page Metadata Template
For every page, generate:
```json
{
  "title": "<Primary Keyword> | CodeAudit.dev",
  "description": "<150-155 char description with primary keyword + action verb>",
  "canonical": "https://codeaudit.dev/<path>",
  "og": {
    "title": "<same or shortened>",
    "description": "<same as meta description>",
    "image": "https://codeaudit.dev/og/<slug>.png",
    "type": "website"
  },
  "twitter": { "card": "summary_large_image" }
}
```
Rules: title ≤ 60 chars (keyword in first 40), description ≤ 155 chars with one action verb (Audit, Scan, Check, Find), no duplicate titles/descriptions across the site.

### 12.3 Keyword Map

| Page | Primary Keyword |
|---|---|
| `/` | AI generated code security audit |
| `/products/security-scanner` | code security scanner |
| `/products/performance-analyzer` | code performance audit tool |
| `/products/architecture-review` | code architecture review tool |
| `/products/ai-code-review` | AI generated code review |
| `/products/dependency-checker` | dependency vulnerability checker |
| `/products/secrets-detection` | exposed secrets scanner GitHub |
| `/products/fix-prompts` | AI code fix prompts |
| `/secure/nextjs` | Next.js security audit |
| `/secure/react` | React security audit |
| `/secure/nodejs` | Node.js code audit |
| `/secure/django` | Django security checker |
| `/secure/fastapi` | FastAPI code review |
| `/secure/supabase` | Supabase security audit |
| `/secure/typescript` | TypeScript code audit |
| `/sample-report` | code audit report example |
| `/pricing` | code audit tool pricing |
| `/compare/snyk` | Snyk alternative |
| `/compare/sonarqube` | SonarQube alternative |
| `/compare/codeant` | CodeAnt alternative |
| `/blog/ai-generated-code-vulnerabilities-2026` | AI generated code vulnerabilities |
| `/blog/hardcoded-secrets-guide` | how to find hardcoded secrets |
| `/blog/pre-launch-saas-security-checklist` | pre-launch security checklist SaaS |
| `/blog/vibe-coding-security-risks` | vibe coding security |
| `/blog/jwt-secret-hardcoded-fix` | JWT secret hardcoded fix |
| `/blog/supabase-rls-security-checklist` | Supabase RLS security checklist |
| `/waitlist` | code audit tool waitlist |

### 12.4 Structured Data (Schema.org)
```yaml
Organization:
  applies_to: "sitewide (footer/homepage)"
  fields: [name, url, logo, sameAs]

SoftwareApplication:
  applies_to: "homepage, pricing, all /products/* pages"
  fields:
    applicationCategory: "DeveloperApplication"
    operatingSystem: "Web"
    offers: { price: "0", priceCurrency: "USD" }  # waitlist phase = free signup

FAQPage:
  applies_to: "homepage FAQ, every /products/* and /secure/* FAQ section,
    every blog article with FAQ, comparison pages"

Article:
  applies_to: "all /blog/[slug] pages"
  fields: [headline, datePublished, dateModified, author, image]

BreadcrumbList:
  applies_to: "all non-homepage pages"
```

### 12.5 Technical SEO Checklist
```yaml
- sitemap.xml: auto-generate, include all static pages + blog posts,
    update on new content
- robots.txt: allow all (no product pages to hide during waitlist phase)
- canonical_tags: every page, self-referencing
- heading_hierarchy: exactly one H1 per page, logical H2/H3 nesting
- image_alt_text: required on all images, descriptive
- internal_linking: every page links to ≥2 other internal pages; no
    orphan pages
- page_speed: lazy-load below-fold images, target LCP < 2.5s
- mobile_responsive: test all pages at 375px width
- url_format: lowercase, hyphen-separated, no trailing slashes
```

### 12.6 AEO (Answer Engine Optimization) Notes
- Write FAQ and intro sections in clear, direct, self-contained Q&A format so AI engines (ChatGPT, Claude, Perplexity, Google AI Overviews) can extract answers easily.
- Ensure the site is server-rendered (not purely client-side JS) so AI crawlers can read content — critical given the target audience often ships client-only SPAs that AI crawlers can't see.
- Add an `llms.txt` file at the root summarizing the site's purpose and key pages for AI crawler discovery.

---

## 13. Content Generation Rules (apply to all generated copy)

1. Output complete files (page/component/markdown) including metadata block from 12.2.
2. Include schema.org JSON-LD as a separate `<script type="application/ld+json">` block per page.
3. Follow each page's content schema exactly — no omitted sections, no lorem ipsum, no placeholder copy.
4. Every primary CTA button sitewide must trigger the waitlist modal/form during this phase — verify no dead links or "live" product actions exist.
5. Do not fabricate testimonials, user counts, star ratings, or "trusted by" claims.
6. All waitlist and contact form submissions deliver to **gradviseofficial@gmail.com**.
