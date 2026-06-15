"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out bg-white ${
          isScrolled ? "border-b border-gray-300" : "border-b border-transparent"
        }`}
      >
        <div className="w-full max-w-[90rem] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img src="/logo.svg" alt="CodeAudit Logo" className="w-8 h-8" />
              <span className="text-xl font-black tracking-tighter text-gray-900 font-sans">
                CodeAudit
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 h-full border-x border-transparent hover:border-gray-200 transition-colors">
              
              <div className="h-full flex items-center relative group cursor-pointer border-r border-transparent hover:border-gray-200 transition-colors">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-gray-600 px-6 group-hover:text-black">Product</span>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-[-1px] hidden group-hover:flex flex-col bg-white border border-gray-300 w-56 shadow-2xl z-50">
                   <Link href="/products/security-scanner" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Security Scanner</Link>
                   <Link href="/products/performance-analyzer" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Performance Analyzer</Link>
                   <Link href="/products/architecture-review" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Architecture Review</Link>
                   <Link href="/products/ai-code-review" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">AI Code Review</Link>
                   <Link href="/products/dependency-checker" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Dependency Checker</Link>
                   <Link href="/products/secrets-detection" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Secrets Detection</Link>
                   <Link href="/products/fix-prompts" className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">AI Fix Prompts</Link>
                   <Link href="/products/reports-dashboard" className="px-4 py-3 hover:bg-gray-50 text-xs font-mono font-bold text-gray-700 hover:text-blue-600">Reports & Dashboards</Link>
                </div>
              </div>

              <Link href="/#what-we-analyze" className="h-full flex items-center font-mono text-[11px] font-bold uppercase tracking-widest text-gray-600 px-6 hover:bg-gray-50 hover:text-black border-r border-transparent hover:border-gray-200 transition-colors">
                Checks
              </Link>
              <Link href="/secure/nextjs" className="h-full flex items-center font-mono text-[11px] font-bold uppercase tracking-widest text-gray-600 px-6 hover:bg-gray-50 hover:text-black border-r border-transparent hover:border-gray-200 transition-colors">
                Stack Guides
              </Link>
              <Link href="/pricing" className="h-full flex items-center font-mono text-[11px] font-bold uppercase tracking-widest text-gray-600 px-6 hover:bg-gray-50 hover:text-black border-r border-transparent hover:border-gray-200 transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="h-full flex items-center font-mono text-[11px] font-bold uppercase tracking-widest text-gray-600 px-6 hover:bg-gray-50 hover:text-black transition-colors">
                Blog
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center h-full">
                <Link 
                  href="?waitlist=true"
                  scroll={false} 
                  className="inline-flex items-center justify-center gap-2 h-10 px-6 bg-gray-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors border border-gray-900"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                type="button"
                className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-50 text-black border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col pt-6 pb-12 overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between w-full px-6 mb-12 border-b border-gray-200 pb-4">
              <span className="font-bold text-xl tracking-tight text-gray-900">CodeAudit</span>
              <button 
                className="w-10 h-10 flex items-center justify-center bg-gray-50 text-black border border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="flex flex-col font-mono font-bold text-sm uppercase tracking-widest text-gray-900 px-6">
              <Link href="/products/security-scanner" onClick={() => setIsOpen(false)} className="hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-200 py-6">
                Product <span className="text-gray-300">01</span>
              </Link>
              <Link href="/#what-we-analyze" onClick={() => setIsOpen(false)} className="hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-200 py-6">
                Security Checks <span className="text-gray-300">02</span>
              </Link>
              <Link href="/secure/nextjs" onClick={() => setIsOpen(false)} className="hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-200 py-6">
                Stack Guides <span className="text-gray-300">03</span>
              </Link>
              <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-200 py-6">
                Pricing <span className="text-gray-300">04</span>
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:bg-gray-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-200 py-6">
                Blog <span className="text-gray-300">05</span>
              </Link>
            </div>

            {/* Mobile Menu Footer/CTA */}
            <div className="mt-auto pt-12 w-full px-6">
              <Link 
                href="?waitlist=true"
                scroll={false} 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-5 font-mono text-sm font-bold uppercase tracking-widest border border-gray-900 hover:bg-gray-800 transition-colors"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
