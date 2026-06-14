export interface ProductData {
  slug: string;
  h1: string;
  subheadline: string;
  whatItDoes: string;
  checksFor?: string[];
  features?: string[]; // For reports-dashboard
  exampleFinding?: {
    severity: string;
    title: string;
    description: string;
    fix: string;
  };
  promptCards?: {
    severity: string;
    file: string;
    issue: string;
    fix: string;
  }[];
  workflowDescription: string;
  faqs: { q: string; a: string }[];
  seo: {
    title: string;
    description: string;
  };
}

export const products: ProductData[] = [
  {
    slug: 'security-scanner',
    h1: 'Security Scanner',
    subheadline: 'Find exposed secrets, vulnerable dependencies, and insecure configurations before attackers do.',
    whatItDoes: 'CodeAudit\'s Security Scanner dives deep into your repository to uncover security vulnerabilities before they reach production. It analyzes your code against industry-standard security patterns, catching common mistakes like missing CSRF protection, SQL injection vectors, and hardcoded secrets. Instead of waiting for a penetration test, you get immediate feedback on your security posture with actionable remediation steps.',
    checksFor: [
      'Exposed API keys/secrets',
      'Hardcoded credentials',
      'Authentication/authorization flaws',
      'Insecure configurations (CORS, headers, env handling)',
      'Vulnerable/outdated dependencies',
      'SQL injection patterns',
      'Missing input validation',
      'Insecure direct object references'
    ],
    exampleFinding: {
      severity: 'High',
      title: 'Missing CSRF Protection on Forms',
      description: 'A form endpoint accepting state-changing requests does not implement CSRF token validation, leaving users vulnerable to Cross-Site Request Forgery attacks.',
      fix: 'Implement a CSRF middleware and ensure all state-changing endpoints (POST/PUT/DELETE) validate the token provided in headers or form data.'
    },
    workflowDescription: 'Integrate the Security Scanner into your pre-deployment checklist. Every time you are about to merge a significant feature or release to production, run a quick audit to ensure no new vulnerabilities have been introduced. It acts as an automated security engineer reviewing your PRs.',
    faqs: [
      {
        q: 'Does the scanner access my production environment?',
        a: 'No, the Security Scanner performs static application security testing (SAST) on your source code only. It does not touch your live databases or servers.'
      },
      {
        q: 'How does this compare to GitHub Dependabot?',
        a: 'While Dependabot checks for vulnerable packages, our Security Scanner goes further by analyzing your custom code logic, configurations, and API integrations for deeper vulnerabilities.'
      }
    ],
    seo: {
      title: 'Code Security Scanner | CodeAudit.dev',
      description: 'Audit your codebase for exposed secrets, authentication flaws, and vulnerable dependencies with our automated code security scanner.'
    }
  },
  {
    slug: 'performance-analyzer',
    h1: 'Performance Analyzer',
    subheadline: 'Spot bundle bloat, slow rendering paths, and inefficient code before your users feel it.',
    whatItDoes: 'The Performance Analyzer examines your frontend and backend code to identify bottlenecks that slow down your application. It flags oversized JavaScript bundles, missing caching mechanisms, and inefficient database querying patterns. By catching these issues early, you can optimize your app\'s speed and responsiveness before users complain about slow load times.',
    checksFor: [
      'Large JS bundles',
      'Unused dependencies',
      'Render-blocking resources',
      'Inefficient loops/algorithms',
      'Missing memoization in React',
      'Large unoptimized images/assets',
      'N+1 query patterns',
      'Missing caching'
    ],
    exampleFinding: {
      severity: 'High',
      title: 'N+1 Database Query in API Route',
      description: 'An API route fetching a list of users also fetches their associated posts in a loop, resulting in an N+1 query problem that severely degrades performance as the user base grows.',
      fix: 'Modify the ORM query to eagerly load relations using a JOIN or the appropriate eager-loading method provided by your database client.'
    },
    workflowDescription: 'Run the Performance Analyzer alongside your regular builds or before major traffic events. It helps you keep your bundle sizes in check and ensures your API endpoints remain highly performant as your feature set expands.',
    faqs: [
      {
        q: 'Can it test my live website\'s speed?',
        a: 'The Performance Analyzer relies on static analysis of your code to find structural performance flaws (like N+1 queries or unoptimized loops) rather than running dynamic load tests.'
      },
      {
        q: 'Does it work for both frontend and backend code?',
        a: 'Yes, it checks both frontend frameworks (like React and Next.js) for bundle and rendering issues, and backend code for algorithmic and database inefficiencies.'
      }
    ],
    seo: {
      title: 'Code Performance Audit Tool | CodeAudit.dev',
      description: 'Identify bundle bloat, N+1 queries, and inefficient rendering paths with our code performance audit tool.'
    }
  },
  {
    slug: 'architecture-review',
    h1: 'Architecture Review',
    subheadline: 'Understand your codebase\'s structure, find duplication, and catch technical debt before it compounds.',
    whatItDoes: 'The Architecture Review tool provides a high-level view of your project\'s structural health. It identifies areas of high complexity, massive "god files," and duplicate logic spread across your repo. By addressing these architectural concerns, you keep your codebase maintainable, easier to onboard new developers, and less prone to regression bugs.',
    checksFor: [
      'Code duplication across files',
      'Overly large/complex files (god files/functions)',
      'Inconsistent project structure',
      'Circular dependencies',
      'Missing separation of concerns',
      'Dead code',
      'Naming/convention inconsistencies'
    ],
    exampleFinding: {
      severity: 'Medium',
      title: 'Duplicate Authentication Logic Across 4 Files',
      description: 'The exact same JWT validation and user extraction logic is duplicated across multiple API route handlers instead of being abstracted into a shared middleware.',
      fix: 'Extract the authentication logic into a reusable middleware or wrapper function, and apply it to the protected routes.'
    },
    workflowDescription: 'Use the Architecture Review tool periodically during sprint planning or refactoring cycles. It provides a clear map of your technical debt, helping you prioritize which parts of the system need restructuring before adding new features.',
    faqs: [
      {
        q: 'How does it define a "god file"?',
        a: 'It looks at a combination of line count, cyclomatic complexity, and the number of distinct responsibilities handled by a single file or function.'
      },
      {
        q: 'Will it reorganize my files automatically?',
        a: 'No, it provides insights and recommendations. We provide the AI-ready fix prompts so you can easily guide your AI coding assistant to perform the refactor.'
      }
    ],
    seo: {
      title: 'Code Architecture Review Tool | CodeAudit.dev',
      description: 'Identify technical debt, code duplication, and structural flaws with our automated code architecture review tool.'
    }
  },
  {
    slug: 'ai-code-review',
    h1: 'AI-Generated Code Review',
    subheadline: 'Built for the vibe-coding era — catch the specific mistakes AI coding tools tend to make.',
    whatItDoes: 'AI coding assistants are incredibly fast, but they often hallucinate insecure defaults, leave placeholder code, or duplicate logic when re-prompted. The AI-Generated Code Review tool is specifically trained to detect the unique patterns and pitfalls of "vibe coding." It acts as a safety net, ensuring the code generated by your AI tools is actually production-ready and secure.',
    checksFor: [
      'Unsafe generated code patterns',
      'Duplicate implementations from repeated AI prompts',
      'Missing input validation on AI-generated endpoints',
      'Placeholder/TODO code left in production paths',
      'Inconsistent error handling',
      'Over-permissive database rules (Supabase/Firebase RLS)',
      'Production-readiness gaps'
    ],
    exampleFinding: {
      severity: 'Critical',
      title: 'Supabase Row-Level Security Disabled on Public Table',
      description: 'A Supabase table created via AI generation lacks Row-Level Security (RLS) policies, meaning any authenticated (or unauthenticated) user can potentially read or modify all records.',
      fix: 'Enable RLS on the table and define explicit policies for SELECT, INSERT, UPDATE, and DELETE operations based on the user\'s ID or role.'
    },
    workflowDescription: 'Whenever you use an AI coding assistant (like Cursor, Copilot, or Claude) to generate a large feature or entire app, run this tool immediately afterward. It bridges the gap between functional "vibe-coded" prototypes and robust, production-grade applications.',
    faqs: [
      {
        q: 'How is this different from a standard security scanner?',
        a: 'While standard scanners look for classic vulnerabilities, this tool specifically targets patterns common to AI outputs—such as missing validation layers, over-permissive defaults, and hallucinatory implementations.'
      },
      {
        q: 'Does it rewrite my AI code?',
        a: 'It points out exactly what the AI missed and provides the correct fix prompts, allowing you to feed the exact corrections back into your AI assistant.'
      }
    ],
    seo: {
      title: 'AI Generated Code Review | CodeAudit.dev',
      description: 'Audit your AI-generated code for security flaws, missing validation, and production-readiness with our specialized review tool.'
    }
  },
  {
    slug: 'dependency-checker',
    h1: 'Dependency Checker',
    subheadline: 'Know exactly which packages in your project have known vulnerabilities or are dangerously out of date.',
    whatItDoes: 'Modern projects rely on hundreds of third-party packages, making it easy to unwittingly introduce vulnerabilities. The Dependency Checker scans your package manager files to identify outdated libraries, known Common Vulnerabilities and Exposures (CVEs), and abandoned projects. It helps you maintain a secure and efficient supply chain for your software.',
    checksFor: [
      'Known CVEs in dependencies',
      'Outdated major versions',
      'Unmaintained/abandoned packages',
      'License compliance issues',
      'Unnecessary/unused dependencies inflating bundle size'
    ],
    exampleFinding: {
      severity: 'Critical',
      title: 'Critical Vulnerability in Outdated Package (CVE-2024-XXXX)',
      description: 'The project is using an outdated version of a popular parsing library that is vulnerable to arbitrary code execution when processing maliciously crafted inputs.',
      fix: 'Upgrade the package to version 3.2.1 or later, which patches this specific vulnerability.'
    },
    workflowDescription: 'Integrate the Dependency Checker into your weekly maintenance routine. Before starting a new sprint, review the dependency report to quickly update vulnerable packages and prune abandoned libraries from your stack.',
    faqs: [
      {
        q: 'Does it support npm, yarn, and pnpm?',
        a: 'Yes, it analyzes common package manager lockfiles across the JavaScript ecosystem, as well as pip and poetry for Python.'
      },
      {
        q: 'Will it break my app by auto-updating?',
        a: 'No. We alert you to the issues and provide the exact update commands, but you control when and how the updates are applied to ensure compatibility.'
      }
    ],
    seo: {
      title: 'Dependency Vulnerability Checker | CodeAudit.dev',
      description: 'Track outdated packages, identify known CVEs, and secure your supply chain with our dependency checker.'
    }
  },
  {
    slug: 'secrets-detection',
    h1: 'Secrets Detection',
    subheadline: 'Scan every file and commit pattern for API keys, tokens, and credentials that should never be public.',
    whatItDoes: 'Accidentally pushing an API key or database credential to a public repository can be catastrophic. The Secrets Detection tool acts as your last line of defense, scanning your codebase for high-entropy strings and recognizable key formats from hundreds of providers. It ensures that sensitive data stays in your environment variables, not your source code.',
    checksFor: [
      'Cloud provider keys (AWS/GCP/Azure)',
      'Database connection strings',
      'Third-party API tokens (Stripe, Supabase, OpenAI, etc.)',
      'Private keys/certificates',
      'Hardcoded passwords',
      'Secrets in config files and committed .env files'
    ],
    exampleFinding: {
      severity: 'Critical',
      title: 'Stripe Secret Key Found in Client-Side Code',
      description: 'A Stripe secret key (sk_live_...) was found hardcoded in a frontend React component, exposing it to anyone viewing the compiled source code.',
      fix: 'Remove the key immediately, rotate it in your Stripe dashboard, and move the billing logic to a secure backend endpoint.'
    },
    workflowDescription: 'Make Secrets Detection a mandatory check before publishing any code to a public repository or deploying to production. It gives you peace of mind that no sensitive credentials are slipping through the cracks.',
    faqs: [
      {
        q: 'Does it find keys that aren\'t currently active?',
        a: 'Yes, it detects the structure and patterns of secrets regardless of whether they are currently active, ensuring all potential leaks are flagged.'
      },
      {
        q: 'What if it flags a dummy test key?',
        a: 'You can easily mark specific findings as false positives if they are safely used in local testing environments.'
      }
    ],
    seo: {
      title: 'Exposed Secrets Scanner GitHub | CodeAudit.dev',
      description: 'Detect hardcoded API keys, tokens, and credentials before they are pushed to public repositories.'
    }
  },
  {
    slug: 'fix-prompts',
    h1: 'AI-Ready Fix Prompts',
    subheadline: 'Every finding includes a ready-to-use prompt you can paste directly into Claude, Cursor, or any AI coding agent.',
    whatItDoes: 'Finding an issue is only half the battle; fixing it efficiently is the real challenge. CodeAudit doesn\'t just point out your mistakes—it generates highly structured, context-rich prompts tailored for AI coding assistants. These prompts include the exact file path, the nature of the issue, and explicit instructions on how to implement the remediation. You can literally copy, paste, and watch your AI agent fix the problem without the usual back-and-forth context setting.',
    promptCards: [
      {
        severity: 'Critical',
        file: 'src/auth/config.ts',
        issue: 'A JWT signing secret is hardcoded directly in source.',
        fix: 'Move the secret to an environment variable (JWT_SECRET), update config.ts to read from process.env.JWT_SECRET, add JWT_SECRET to .env.example, and rotate the existing exposed key.'
      },
      {
        severity: 'High',
        file: 'app/api/users/route.ts',
        issue: 'N+1 Database Query in API Route',
        fix: 'Modify the Prisma query to eagerly load related posts using include: { posts: true } instead of fetching posts inside a loop.'
      },
      {
        severity: 'Medium',
        file: 'components/Header.tsx',
        issue: 'Unoptimized Image Usage',
        fix: 'Replace the standard <img> tag with the Next.js <Image> component, providing proper width, height, and alt attributes.'
      }
    ],
    workflowDescription: 'When reviewing your CodeAudit report, simply click "Copy Prompt" next to any finding. Paste it directly into Cursor, Copilot Chat, or Claude. The AI immediately understands the context and applies the fix perfectly on the first try.',
    faqs: [
      {
        q: 'Do these prompts work with any AI model?',
        a: 'Yes, they are formatted with clear context, issue description, and instructions, making them universally effective across models like GPT-4o, Claude 3.5 Sonnet, and specialized agents like Cursor.'
      },
      {
        q: 'Why not just auto-fix the code?',
        a: 'We believe developers should maintain control over their codebase. Providing prompts gives you the speed of AI combined with the safety of human oversight.'
      }
    ],
    seo: {
      title: 'AI Code Fix Prompts | CodeAudit.dev',
      description: 'Copy and paste ready-to-use AI prompts into Cursor or Claude to instantly fix security and performance issues.'
    }
  },
  {
    slug: 'reports-dashboard',
    h1: 'Reports & Dashboards',
    subheadline: 'Professional, shareable reports for your team, clients, or stakeholders.',
    whatItDoes: 'Whether you are a freelancer handing off a project or an engineering lead reporting to stakeholders, presentation matters. The Reports & Dashboards feature generates clean, professional summaries of your codebase health. It categorizes issues by severity, tracks improvements over time, and provides an executive summary that non-technical stakeholders can easily understand.',
    features: [
      'Exportable PDF reports for client handoffs',
      'Severity-prioritized issue lists',
      'Historical comparison to track improvement over time',
      'Shareable, password-protected links for clients and agencies',
      'Executive summaries highlighting key risks and overall health score'
    ],
    workflowDescription: 'Generate a polished report at the end of a milestone or before delivering a client project. Use the historical tracking dashboard internally to ensure your team is consistently paying down technical debt rather than accumulating it.',
    faqs: [
      {
        q: 'Can I white-label the reports?',
        a: 'White-labeled reports with your agency\'s branding will be available in our Team/Agency tier at launch.'
      },
      {
        q: 'How long are reports kept on the dashboard?',
        a: 'Reports are stored securely on your dashboard so you can compare current scans with historical baselines.'
      }
    ],
    seo: {
      title: 'Code Audit Report Example | CodeAudit.dev',
      description: 'Generate professional, shareable code audit reports and track your codebase health over time.'
    }
  }
];
