import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-600 border-t border-gray-300 pt-20 pb-10 px-6 font-mono text-sm">
      <div className="max-w-[90rem] mx-auto flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 border-b border-gray-300 pb-16">
          
          <div className="md:col-span-4 flex flex-col max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="CodeAudit Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-black tracking-tighter text-gray-900 font-sans">
                CodeAudit
              </h3>
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mb-6 border-l-2 border-gray-300 pl-4">
              Stop shipping blind. Security, performance, and architecture audits for modern codebases. Static analysis that catches what your team missed.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 space-y-2">
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <span>System Status</span>
                <span className="text-green-600 font-bold">● Operational</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <span>Engine</span>
                <span className="text-gray-600">v2.0.0-beta</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-1">
                <span>Uptime</span>
                <span className="text-gray-600">99.97%</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">Product</h4>
              <Link href="/products/security-scanner" className="hover:text-blue-600 transition-colors">Security Scanner</Link>
              <Link href="/products/performance-analyzer" className="hover:text-blue-600 transition-colors">Performance Analyzer</Link>
              <Link href="/products/architecture-review" className="hover:text-blue-600 transition-colors">Architecture Review</Link>
              <Link href="/products/ai-code-review" className="hover:text-blue-600 transition-colors">AI Code Review</Link>
              <Link href="/products/dependency-checker" className="hover:text-blue-600 transition-colors">Dependency Checker</Link>
              <Link href="/products/secrets-detection" className="hover:text-blue-600 transition-colors">Secrets Detection</Link>
              <Link href="/products/fix-prompts" className="hover:text-blue-600 transition-colors">AI Fix Prompts</Link>
              <Link href="/products/reports-dashboard" className="hover:text-blue-600 transition-colors">Reports & Dashboards</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">Resources</h4>
              <Link href="/#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
              <Link href="/sample-report" className="hover:text-blue-600 transition-colors">Sample Report</Link>
              <Link href="/secure/nextjs" className="hover:text-blue-600 transition-colors">Stack Security Guides</Link>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link href="/#faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
              <Link href="/compare/snyk" className="hover:text-blue-600 transition-colors">Compare</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wider text-[10px]">Company</h4>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CodeAudit.dev. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="?waitlist=true" scroll={false} className="hover:text-gray-900 transition-colors">Currently in waitlist — join for early access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
