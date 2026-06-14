export const stacksData = [
  {
    id: "nextjs",
    name: "Next.js",
    seoTitle: "Next.js security audit | CodeAudit.dev",
    seoDescription: "Audit your Next.js application for security vulnerabilities, exposed env vars, unoptimized images, and common architectural flaws before deployment.",
    commonIssues: [
      "Exposed environment variables in client bundles",
      "Missing middleware on API routes",
      "Unoptimized images causing performance degradation",
      "Server actions without proper authorization and validation",
      "getServerSideProps leaking sensitive data to the client",
      "Insecure CORS configurations",
      "Vulnerable dependencies inflating the build size"
    ],
    exampleFinding: {
      title: "Exposed API Secret in Client Bundle",
      severity: "Critical",
      description: "An API key meant for server-side use was found prefixed with NEXT_PUBLIC_, making it accessible in the browser. Attackers can extract this key and misuse your API.",
      fix: "Remove the NEXT_PUBLIC_ prefix, move the key usage to a server-side route or server action, and rotate the exposed secret immediately."
    },
    whyNeedChecks: "Next.js blurs the line between frontend and backend. Features like Server Actions, middleware, and SSR make it powerful but also introduce unique attack vectors. It's incredibly easy to accidentally leak server-side secrets to the client bundle or misconfigure API route protections. CodeAudit specifically looks for these Next.js-specific patterns to ensure your full-stack application remains secure and performant.",
    faqs: [
      {
        q: "Does CodeAudit check my Next.js Server Actions?",
        a: "Yes. We analyze Server Actions for proper input validation, authorization checks, and potential data leakage."
      },
      {
        q: "Can you detect bloated client bundles?",
        a: "Absolutely. We identify oversized packages and components that should be dynamically imported or server-rendered to improve your Core Web Vitals."
      }
    ]
  },
  {
    id: "react",
    name: "React",
    seoTitle: "React security audit | CodeAudit.dev",
    seoDescription: "Secure your React applications by finding XSS vulnerabilities, unnecessary re-renders, state management flaws, and missing error boundaries.",
    commonIssues: [
      "Unnecessary re-renders degrading performance",
      "Missing key props causing subtle UI bugs",
      "Prop drilling and state management issues",
      "XSS via dangerouslySetInnerHTML",
      "Unhandled error boundaries crashing the app",
      "Leaking sensitive data in React state",
      "Overly large component files (God components)"
    ],
    exampleFinding: {
      title: "XSS via dangerouslySetInnerHTML",
      severity: "High",
      description: "User-supplied content is being rendered directly into the DOM using dangerouslySetInnerHTML without proper sanitization. This allows attackers to execute malicious scripts in users' browsers.",
      fix: "Sanitize the input using a library like DOMPurify before passing it to dangerouslySetInnerHTML, or avoid using it altogether by safely rendering text nodes."
    },
    whyNeedChecks: "Modern React applications often manage complex state and logic on the client side. Without careful architecture, this can lead to sluggish performance from excessive re-renders, or worse, critical security flaws like Cross-Site Scripting (XSS). CodeAudit scans your component trees to identify structural weaknesses, inefficient rendering paths, and insecure code practices that standard linters miss.",
    faqs: [
      {
        q: "Does CodeAudit work with Vite or Create React App?",
        a: "Yes. We analyze your React source code regardless of the bundler or build tool you use."
      },
      {
        q: "Can it find where my app is re-rendering too much?",
        a: "Yes. Our performance checks highlight missing memoization and components that are structured in ways that cause cascading re-renders."
      }
    ]
  },
  {
    id: "nodejs",
    name: "Node.js",
    seoTitle: "Node.js code audit | CodeAudit.dev",
    seoDescription: "Audit Node.js backends for missing security headers, unvalidated request bodies, blocking operations, and outdated middleware.",
    commonIssues: [
      "Missing Helmet and essential security headers",
      "Unvalidated request bodies and parameters",
      "Synchronous blocking operations in the event loop",
      "Outdated Express or Fastify middleware",
      "Missing rate limiting on authentication routes",
      "Insecure session management",
      "Uncaught promise rejections and error mishandling"
    ],
    exampleFinding: {
      title: "Missing Rate Limiting on Login Route",
      severity: "High",
      description: "The authentication endpoint allows unlimited login attempts. This exposes the application to brute-force and credential-stuffing attacks.",
      fix: "Implement rate limiting using a middleware like express-rate-limit to restrict the number of failed attempts per IP address."
    },
    whyNeedChecks: "Node.js is highly scalable, but its single-threaded nature means a single blocking operation can take down your entire service. Furthermore, building APIs requires rigorous input validation and secure configurations. CodeAudit inspects your Node.js code for event loop blockers, missing security headers, authentication flaws, and dependency vulnerabilities to keep your backend resilient.",
    faqs: [
      {
        q: "Do you support Express, NestJS, and Fastify?",
        a: "Yes, CodeAudit recognizes the patterns and middlewares associated with all major Node.js frameworks."
      },
      {
        q: "Can it detect blocking synchronous operations?",
        a: "Yes. We scan for synchronous filesystem or crypto operations that should be asynchronous to prevent event loop blocking."
      }
    ]
  },
  {
    id: "django",
    name: "Django",
    seoTitle: "Django security checker | CodeAudit.dev",
    seoDescription: "Check your Django projects for DEBUG=True in production, missing CSRF protection, insecure SECRET_KEYs, and injection risks.",
    commonIssues: [
      "DEBUG=True exposed in production environments",
      "Missing CSRF protection on forms or API endpoints",
      "Insecure SECRET_KEY handling",
      "Unrestricted ALLOWED_HOSTS",
      "Raw SQL queries vulnerable to injection",
      "Misconfigured media and static files",
      "Missing authentication on sensitive views"
    ],
    exampleFinding: {
      title: "Raw SQL Query Vulnerable to Injection",
      severity: "Critical",
      description: "A raw SQL query is executed using string formatting with user input instead of parameterized queries. This allows an attacker to manipulate the query and access or modify unauthorized data.",
      fix: "Use Django's ORM whenever possible. If raw SQL is required, use parameterized queries by passing variables as a list to the execute() method."
    },
    whyNeedChecks: "Django comes with many 'batteries included' for security, but misconfigurations can easily negate them. Deploying with DEBUG=True, mismanaging the SECRET_KEY, or bypassing the ORM with raw SQL can lead to devastating breaches. CodeAudit evaluates your Django settings, views, and models to ensure you're utilizing the framework's built-in protections correctly.",
    faqs: [
      {
        q: "Does CodeAudit check Django REST Framework (DRF)?",
        a: "Yes. We analyze your DRF serializers, viewsets, and permissions classes to ensure proper authorization."
      },
      {
        q: "Can it find misconfigured Django settings?",
        a: "Yes. We inspect settings.py for insecure configurations like missing ALLOWED_HOSTS or hardcoded credentials."
      }
    ]
  },
  {
    id: "fastapi",
    name: "FastAPI",
    seoTitle: "FastAPI code review | CodeAudit.dev",
    seoDescription: "Audit your FastAPI applications for missing input validation, unprotected endpoints, CORS misconfigurations, and blocking I/O.",
    commonIssues: [
      "Missing input validation on Pydantic models",
      "Unprotected sensitive endpoints",
      "CORS misconfigurations (e.g., allow_origins=['*'])",
      "Blocking I/O in async routes",
      "Leaking sensitive data in OpenAPI schemas",
      "Improper dependency injection usage",
      "Hardcoded secrets in the application code"
    ],
    exampleFinding: {
      title: "Blocking I/O in Async Route",
      severity: "High",
      description: "A synchronous, blocking operation (e.g., reading a large file or a slow synchronous database query) is being performed inside an 'async def' route. This blocks the main thread and halts the entire server.",
      fix: "Either change the route to a standard 'def' (so FastAPI runs it in a threadpool) or use an asynchronous library for the I/O operation."
    },
    whyNeedChecks: "FastAPI is blazing fast, but mixing synchronous and asynchronous code incorrectly can cause severe performance bottlenecks. Additionally, while Pydantic makes validation easy, developers sometimes skip rigorous constraints or misconfigure CORS and authentication dependencies. CodeAudit ensures your async patterns are correct and your API boundaries are secure.",
    faqs: [
      {
        q: "Does it check my Pydantic models?",
        a: "Yes. We review Pydantic models to ensure they have appropriate constraints and aren't overly permissive."
      },
      {
        q: "Can CodeAudit detect OpenAPI schema leaks?",
        a: "Yes. We flag endpoints that might inadvertently expose sensitive internal structures through the auto-generated docs."
      }
    ]
  },
  {
    id: "supabase",
    name: "Supabase",
    seoTitle: "Supabase security audit | CodeAudit.dev",
    seoDescription: "Secure your Supabase project by checking for disabled RLS, exposed anon keys, and overly permissive storage policies.",
    commonIssues: [
      "Row-Level Security (RLS) disabled on public tables",
      "Anon key exposed with elevated database permissions",
      "Missing auth checks on Supabase Edge Functions",
      "Overly permissive storage bucket policies",
      "Insecure direct database connections",
      "Lack of validation in database triggers",
      "Exposing the service_role key to clients"
    ],
    exampleFinding: {
      title: "Row-Level Security (RLS) Disabled on Public Table",
      severity: "Critical",
      description: "A table in the public schema has RLS disabled. Since Supabase exposes a public REST API, anyone with the anonymous key can read, modify, or delete all records in this table.",
      fix: "Enable RLS on the table immediately and write appropriate policies to restrict SELECT, INSERT, UPDATE, and DELETE operations based on the auth.uid()."
    },
    whyNeedChecks: "Supabase empowers developers to build incredibly fast by exposing the database directly to the client. However, this shifts the security burden to your database schema. Forgetting to enable Row-Level Security (RLS) or writing a flawed policy can instantly expose your entire database to the world. CodeAudit analyzes your SQL migrations and client code to guarantee your data is locked down.",
    faqs: [
      {
        q: "How does CodeAudit check Supabase configurations?",
        a: "We analyze your SQL migration files and client-side Supabase queries to identify missing RLS policies and insecure access patterns."
      },
      {
        q: "Does it check Edge Functions?",
        a: "Yes. We scan your Deno Edge Functions for missing authorization checks and hardcoded secrets."
      }
    ]
  },
  {
    id: "typescript",
    name: "TypeScript",
    seoTitle: "TypeScript code audit | CodeAudit.dev",
    seoDescription: "Audit your TypeScript codebase for use of 'any', unsafe assertions, missing strict mode, and inconsistent error typing.",
    commonIssues: [
      "Extensive use of 'any' defeating type safety",
      "Unsafe type assertions ('as Type')",
      "Missing 'strict' mode in tsconfig.json",
      "Inconsistent error typing in catch blocks",
      "Implicit any in function parameters",
      "Missing return types on complex functions",
      "Misuse of non-null assertions ('!')"
    ],
    exampleFinding: {
      title: "Unsafe Type Assertion Bypassing Validation",
      severity: "Medium",
      description: "An object is being forcefully cast to a type using the 'as' keyword without verifying its shape at runtime. If the underlying data changes (e.g., from an API response), this will cause unexpected crashes.",
      fix: "Replace the type assertion with a runtime validation library like Zod or custom type guards to ensure the data matches the expected structure before processing."
    },
    whyNeedChecks: "TypeScript is phenomenal for developer experience, but it only provides compile-time guarantees. Relying heavily on 'any', forceful type casting, or skipping strict mode creates a false sense of security where runtime errors still occur. CodeAudit helps you maximize TypeScript's value by catching unsafe patterns and ensuring your types align with reality.",
    faqs: [
      {
        q: "Can CodeAudit help me migrate to strict mode?",
        a: "Yes. We highlight the most critical areas where types are missing or unsafe, giving you a prioritized path to enabling strict mode."
      },
      {
        q: "Does it check my tsconfig.json?",
        a: "Yes. We review your TypeScript compiler options to ensure security and performance best practices are enabled."
      }
    ]
  }
];
