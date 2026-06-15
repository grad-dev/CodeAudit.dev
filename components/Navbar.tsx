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
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out bg-white border-b-[4px] border-black shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] ${
          isScrolled ? "py-0" : "py-2"
        }`}
      >
        <div className="w-full max-w-[90rem] mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group bg-white text-black px-2 py-1 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              <img src="/logo.svg" alt="CodeAudit Logo" className="w-8 h-8" />
              <span className="text-xl md:text-2xl font-black tracking-tighter text-black">
                CodeAudit
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 h-full border-x-[4px] border-black bg-white">
              
              <div className="h-full flex items-center relative group cursor-pointer border-r-[4px] border-black hover:bg-yellow-300 transition-colors">
                <span className="text-xs font-black uppercase tracking-widest text-black px-4 lg:px-6">Product</span>
                
                {/* Dropdown Menu */}
                <div className="absolute top-[104%] left-[-4px] hidden group-hover:flex flex-col bg-white border-[4px] border-black w-64 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-50">
                   <Link href="/products/security-scanner" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">Security Scanner</Link>
                   <Link href="/products/performance-analyzer" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">Performance Analyzer</Link>
                   <Link href="/products/architecture-review" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">Architecture Review</Link>
                   <Link href="/products/ai-code-review" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">AI Code Review</Link>
                   <Link href="/products/dependency-checker" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">Dependency Checker</Link>
                   <Link href="/products/secrets-detection" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">Secrets Detection</Link>
                   <Link href="/products/fix-prompts" className="px-4 py-3 hover:bg-black hover:text-white border-b-[4px] border-black text-xs font-black text-black uppercase transition-colors">AI Fix Prompts</Link>
                   <Link href="/products/reports-dashboard" className="px-4 py-3 hover:bg-black hover:text-white text-xs font-black text-black uppercase transition-colors">Reports & Dashboards</Link>
                </div>
              </div>

              <Link href="/#what-we-analyze" className="h-full flex items-center text-xs font-black uppercase tracking-widest text-black px-4 lg:px-6 hover:bg-yellow-300 border-r-[4px] border-black transition-colors">
                Checks
              </Link>
              <Link href="/secure/nextjs" className="h-full flex items-center text-xs font-black uppercase tracking-widest text-black px-4 lg:px-6 hover:bg-yellow-300 border-r-[4px] border-black transition-colors">
                Stack Guides
              </Link>
              <Link href="/pricing" className="h-full flex items-center text-xs font-black uppercase tracking-widest text-black px-4 lg:px-6 hover:bg-yellow-300 border-r-[4px] border-black transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="h-full flex items-center text-xs font-black uppercase tracking-widest text-black px-4 lg:px-6 hover:bg-yellow-300 transition-colors">
                Blog
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center h-full py-2">
                <Link 
                  href="?waitlist=true"
                  scroll={false} 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                type="button"
                className="md:hidden w-10 h-10 flex items-center justify-center bg-white text-black border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                onClick={() => setIsOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 stroke-[3]" />
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
            <div className="flex items-center justify-between w-full px-6 mb-12 border-b-[4px] border-black pb-4">
              <div className="flex items-center gap-3 shrink-0 bg-white text-black px-2 py-1 border-[2px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <img src="/logo.svg" alt="CodeAudit Logo" className="w-8 h-8" />
                <span className="font-black text-xl tracking-tighter text-black">CodeAudit</span>
              </div>
              <button 
                className="w-10 h-10 flex items-center justify-center bg-white text-black border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="flex flex-col font-black text-base uppercase tracking-widest text-black px-6">
              <Link href="/products/security-scanner" onClick={() => setIsOpen(false)} className="hover:bg-yellow-300 hover:pl-4 transition-all flex items-center justify-between border-b-[4px] border-black py-4 group">
                Product <span className="text-gray-400 group-hover:text-black">01</span>
              </Link>
              <Link href="/#what-we-analyze" onClick={() => setIsOpen(false)} className="hover:bg-yellow-300 hover:pl-4 transition-all flex items-center justify-between border-b-[4px] border-black py-4 group">
                Security Checks <span className="text-gray-400 group-hover:text-black">02</span>
              </Link>
              <Link href="/secure/nextjs" onClick={() => setIsOpen(false)} className="hover:bg-yellow-300 hover:pl-4 transition-all flex items-center justify-between border-b-[4px] border-black py-4 group">
                Stack Guides <span className="text-gray-400 group-hover:text-black">03</span>
              </Link>
              <Link href="/pricing" onClick={() => setIsOpen(false)} className="hover:bg-yellow-300 hover:pl-4 transition-all flex items-center justify-between border-b-[4px] border-black py-4 group">
                Pricing <span className="text-gray-400 group-hover:text-black">04</span>
              </Link>
              <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:bg-yellow-300 hover:pl-4 transition-all flex items-center justify-between border-b-[4px] border-black py-4 group">
                Blog <span className="text-gray-400 group-hover:text-black">05</span>
              </Link>
            </div>

            {/* Mobile Menu Footer/CTA */}
            <div className="mt-auto pt-12 w-full px-6">
              <Link 
                href="?waitlist=true"
                scroll={false} 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 text-xs font-black uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
