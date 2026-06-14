import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'code audit report example | CodeAudit.dev',
  description: 'See a sample code audit report. View prioritized security vulnerabilities, performance bottlenecks, and AI-generated code issues.',
  alternates: {
    canonical: 'https://codeaudit.dev/sample-report',
  },
  openGraph: {
    title: 'code audit report example | CodeAudit.dev',
    description: 'See a sample code audit report. View prioritized security vulnerabilities, performance bottlenecks, and AI-generated code issues.',
    url: 'https://codeaudit.dev/sample-report',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function SampleReportPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codeaudit.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sample Report",
        "item": "https://codeaudit.dev/sample-report"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 bg-white font-mono text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-black pb-8">
          <h1 className="text-4xl font-bold text-black mb-4 uppercase">System_Audit_Report</h1>
          <p className="text-xl text-gray-600">
            {'>'} OUTPUT LOG: Example repository scan results.
          </p>
        </div>

        <div className="border border-black bg-white mb-16">
          <div className="border-b border-black p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-100">
            <div>
              <h2 className="text-xl font-bold text-black">TARGET: github.com/example/saas-starter</h2>
              <p className="text-black mt-1">TIMESTAMP: October 24, 2026</p>
            </div>
            <div className="flex space-x-2">
              <span className="text-black border border-black bg-white px-3 py-1 text-sm font-bold uppercase">3 Critical</span>
              <span className="text-black border border-black bg-white px-3 py-1 text-sm font-bold uppercase">7 High</span>
              <span className="text-black border border-black bg-white px-3 py-1 text-sm font-bold uppercase">12 Medium</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-12 bg-white text-black">
            <section>
              <h3 className="text-xl font-bold text-black mb-6 uppercase border-b border-black pb-2">
                [1] Security_Findings
              </h3>
              
              <div className="space-y-6">
                <div className="border border-black p-5 relative">
                  <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs font-bold uppercase border-b border-l border-black">
                    Critical
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2 uppercase">VULN_01: JWT Secret Hardcoded</h4>
                  <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                    A JWT signing secret was found directly in source code (`src/auth/config.ts`). If exposed, attackers could generate valid authentication tokens and impersonate users.
                  </p>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="text-sm text-black font-bold uppercase mb-1">Recommended_Fix:</p>
                    <p className="text-sm text-black">Move secrets to environment variables (`process.env.JWT_SECRET`) and rotate the exposed key immediately.</p>
                  </div>
                </div>

                <div className="border border-black p-5 relative">
                  <div className="absolute top-0 right-0 bg-gray-300 text-black px-2 py-1 text-xs font-bold uppercase border-b border-l border-black">
                    High
                  </div>
                  <h4 className="text-lg font-bold text-black mb-2 uppercase">VULN_02: Missing Rate Limiting on Auth Endpoints</h4>
                  <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                    Authentication endpoints (`/api/login`, `/api/reset-password`) do not implement rate limiting, increasing the risk of brute-force attacks.
                  </p>
                  <div className="bg-gray-100 p-4 border border-black">
                    <p className="text-sm text-black font-bold uppercase mb-1">Recommended_Fix:</p>
                    <p className="text-sm text-black">Add request throttling using a library like `express-rate-limit` or Redis-based rate limiting.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-black mb-6 uppercase border-b border-black pb-2">
                [2] AI-Generated_Code_Review
              </h3>
              
              <div className="border border-black p-5 relative">
                <div className="absolute top-0 right-0 bg-black text-white px-2 py-1 text-xs font-bold uppercase border-b border-l border-black">
                  Critical
                </div>
                <h4 className="text-lg font-bold text-black mb-2 uppercase">ERR_01: Supabase RLS Disabled on Public Table</h4>
                <p className="text-gray-800 mb-4 text-sm leading-relaxed">
                  The `users_profiles` table has Row-Level Security (RLS) disabled. This is a common AI coding mistake where tables are created rapidly without proper security policies, allowing anyone with the anon key to read or modify all records.
                </p>
                <div className="bg-gray-100 p-4 border border-black">
                  <p className="text-sm text-black font-bold uppercase mb-1">Recommended_Fix:</p>
                  <p className="text-sm text-black">Enable RLS on the table and add specific policies for SELECT and UPDATE operations based on `auth.uid()`.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-black mb-6 uppercase border-b border-black pb-2">
                [3] AI_Fix_Prompt_Generation
              </h3>
              <p className="text-black mb-4 uppercase">{'>'} Copy payload to agent</p>
              
              <div className="bg-black border border-black p-5 text-sm text-green-400 font-mono">
                <p className="mb-2"><span className="text-white">Fix:</span> JWT Secret Hardcoded (Critical)</p>
                <p className="mb-2"><span className="text-white">File:</span> src/auth/config.ts</p>
                <p className="mb-2"><span className="text-white">Issue:</span> A JWT signing secret is hardcoded directly in source.</p>
                <p><span className="text-white">Instructions:</span> Move the secret to an environment variable (JWT_SECRET), update config.ts to read from process.env.JWT_SECRET, add JWT_SECRET to .env.example, and rotate the existing exposed key.</p>
              </div>
            </section>
          </div>
        </div>

        <div className="border-t border-black pt-12">
          <h2 className="text-2xl font-bold text-black mb-6 uppercase">{'>'} Ready to scan your repository?</h2>
          <Link href="?waitlist=true" scroll={false} className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gray-900 hover:bg-black transition-colors duration-200 border border-black uppercase">
            Join the Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
