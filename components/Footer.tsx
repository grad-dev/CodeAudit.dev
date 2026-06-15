import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t-[8px] border-black pt-20 pb-10 px-6 text-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto flex flex-col relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b-[4px] border-white pb-16">
          
          <div className="md:col-span-4 flex flex-col max-w-sm">
            <div className="flex items-center gap-4 mb-6 bg-white text-black p-4 border-[2px] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
              <img src="/logo.svg" alt="CodeAudit Logo" className="w-10 h-10" />
              <h3 className="text-3xl font-black tracking-tighter">
                CodeAudit
              </h3>
            </div>
            <p className="text-white text-base font-bold leading-relaxed mb-8 border-l-[4px] border-blue-600 pl-4 bg-gray-900 py-2">
              Stop shipping blind. Security, performance, and architecture audits for modern codebases. Static analysis that catches what your team missed.
              <br/><br/>
              <span className="text-yellow-400 uppercase tracking-widest text-[10px]">&gt;&gt; AUDIT YOUR CODE. SHIP WITH CONFIDENCE.</span>
            </p>

          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 bg-white text-black p-8 border-[4px] border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-black mb-4 uppercase tracking-widest border-b-[4px] border-black pb-2 text-sm bg-yellow-300 inline-block px-2 py-1">Product</h4>
              <Link href="/products/security-scanner" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Security Scanner</Link>
              <Link href="/products/performance-analyzer" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Performance Analyzer</Link>
              <Link href="/products/architecture-review" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Architecture Review</Link>
              <Link href="/products/ai-code-review" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">AI Code Review</Link>
              <Link href="/products/dependency-checker" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Dependency Checker</Link>
              <Link href="/products/secrets-detection" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Secrets Detection</Link>
              <Link href="/products/fix-prompts" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">AI Fix Prompts</Link>
              <Link href="/products/reports-dashboard" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Reports & Dashboards</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-black mb-4 uppercase tracking-widest border-b-[4px] border-black pb-2 text-sm bg-yellow-300 inline-block px-2 py-1">Resources</h4>
              <Link href="/#how-it-works" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">How It Works</Link>
              <Link href="/sample-report" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Sample Report</Link>
              <Link href="/secure/nextjs" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Stack Security Guides</Link>
              <Link href="/blog" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Blog</Link>
              <Link href="/#faq" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">FAQ</Link>
              <Link href="/compare/snyk" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Compare</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-black text-black mb-4 uppercase tracking-widest border-b-[4px] border-black pb-2 text-sm bg-yellow-300 inline-block px-2 py-1">Company</h4>
              <Link href="/about" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">About</Link>
              <Link href="/contact" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Contact</Link>
              <Link href="/privacy" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Privacy Policy</Link>
              <Link href="/terms" className="font-bold hover:bg-black hover:text-white px-2 py-1 transition-colors uppercase text-xs tracking-wider">Terms of Service</Link>
            </div>
          </div>

        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm font-bold text-white bg-blue-600 p-4 border-[2px] border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
          <p className="uppercase tracking-widest mb-4 md:mb-0">© {new Date().getFullYear()} CodeAudit.dev. All rights reserved.</p>
          <div className="flex items-center">
            <Link href="?waitlist=true" scroll={false} className="bg-black text-white px-4 py-2 hover:bg-white hover:text-black transition-colors uppercase tracking-widest border-[2px] border-white">
              Currently in waitlist — join for early access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
