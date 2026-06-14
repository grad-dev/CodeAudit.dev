import { MetadataRoute } from 'next';

const BASE_URL = 'https://codeaudit.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/how-it-works',
    '/pricing',
    '/sample-report',
    '/faq',
    '/waitlist',
    '/products/security-scanner',
    '/products/performance-analyzer',
    '/products/architecture-review',
    '/products/ai-code-review',
    '/products/dependency-checker',
    '/products/secrets-detection',
    '/products/fix-prompts',
    '/products/reports-dashboard',
    '/secure/nextjs',
    '/secure/react',
    '/secure/nodejs',
    '/secure/django',
    '/secure/fastapi',
    '/secure/supabase',
    '/secure/typescript',
    '/blog',
    '/blog/ai-generated-code-vulnerabilities-2026',
    '/blog/hardcoded-secrets-guide',
    '/blog/pre-launch-saas-security-checklist',
    '/blog/vibe-coding-security-risks',
    '/blog/code-audit-vs-pentest-vs-code-review',
    '/blog/reduce-nextjs-bundle-size',
    '/blog/jwt-secret-hardcoded-fix',
    '/blog/supabase-rls-security-checklist',
    '/compare/snyk',
    '/compare/sonarqube',
    '/compare/codeant',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
