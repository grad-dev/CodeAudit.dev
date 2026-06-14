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

  const isContactPage = pathname === "/contact";

  // Detect scroll to transition padding and background
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div 
            className={`relative mx-auto flex items-center justify-between transition-all duration-500 ease-out rounded-full h-16 px-4 ${
              isScrolled 
                ? "bg-white/90 backdrop-blur-md shadow-sm border border-gray-200/50" 
                : "bg-transparent border border-transparent"
            }`}
          >
            
            {/* Logo Section */}
            <Link href="/#home" className="flex items-center gap-3 group shrink-0 relative z-10">
              <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0B57D0] rounded-xl rotate-[10deg] group-hover:rotate-[20deg] scale-95 group-hover:scale-105 opacity-20 transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-[#0B57D0] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-blue-500/30 transition-all duration-300">
                  <span className="text-white font-black text-sm tracking-tight">M</span>
                </div>
              </div>
              <span className="text-xl font-black tracking-tighter transition-colors duration-200 text-black group-hover:text-[#0B57D0] hidden sm:block">
                Monk Studio
              </span>
            </Link>

            {/* Desktop Navigation Links (Absolutely Centered like Plateio) */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 z-0">
              <Link href="/#portfolio" className="relative text-[14px] font-bold px-5 py-2 rounded-full transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full transition-opacity duration-300 -z-10 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 text-gray-600 group-hover:text-black">Work</span>
              </Link>
              <Link href="/#testimonials" className="relative text-[14px] font-bold px-5 py-2 rounded-full transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full transition-opacity duration-300 -z-10 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 text-gray-600 group-hover:text-black">Testimonials</span>
              </Link>
              <Link href="/about" className="relative text-[14px] font-bold px-5 py-2 rounded-full transition-all duration-300 group overflow-hidden">
                <span className="absolute inset-0 rounded-full transition-opacity duration-300 -z-10 bg-gray-100 opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 text-gray-600 group-hover:text-black">About Us</span>
              </Link>
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 relative z-10">
              {!isContactPage && (
                <div className="hidden md:flex items-center gap-3">
                  <Link 
                    href="/contact" 
                    className="relative inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-black text-white text-sm font-bold transition-all duration-300 group shadow-lg shadow-black/10 overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-[#0B57D0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      Book a Call
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button 
                type="button"
                className="md:hidden relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-black hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
                onClick={() => setIsOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay (Light Mode) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-2xl flex flex-col px-6 pt-8 pb-12 overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between w-full mb-16">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-[#0B57D0] rounded-xl flex items-center justify-center text-white font-bold italic">
                  M
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">Monk Studio</span>
              </div>
              <button 
                className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-black hover:bg-gray-100 transition-colors border border-gray-200 shadow-sm"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-[#0B57D0]" />
              </button>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="flex flex-col gap-8 text-3xl font-bold text-gray-900 px-4">
              <Link href="/#portfolio" onClick={() => setIsOpen(false)} className="hover:text-[#0B57D0] transition-colors flex items-center justify-between border-b border-gray-100 pb-6">
                Work <span className="text-gray-300 font-normal text-2xl">01</span>
              </Link>
              <Link href="/#testimonials" onClick={() => setIsOpen(false)} className="hover:text-[#0B57D0] transition-colors flex items-center justify-between border-b border-gray-100 pb-6">
                Testimonials <span className="text-gray-300 font-normal text-2xl">02</span>
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-[#0B57D0] transition-colors flex items-center justify-between border-b border-gray-100 pb-6">
                About Us <span className="text-gray-300 font-normal text-2xl">03</span>
              </Link>
            </div>

            {/* Mobile Menu Footer/CTA */}
            {!isContactPage && (
              <div className="mt-auto pt-12 w-full px-4">
                <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Start a project</p>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-[#0B57D0] text-white py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all group"
                >
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
