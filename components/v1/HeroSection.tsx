"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const codeLines = [
  { text: "$ codeaudit scan ./src --fail-on-critical", type: "cmd" },
  { text: "[INFO] Initializing AST parsers... Done.", type: "log" },
  { text: "[INFO] Traversing dependency tree... Found 412 packages.", type: "log" },
  { text: "[WARN] lib/auth.ts:13 - Potential hardcoded secret detected.", type: "warn" },
  { text: "    12 | const verifyUser = (token) => {", type: "code" },
  { text: "  > 13 |   const JWT_SECRET = 'super-secret-dev-key-1234';", type: "code_error" },
  { text: "    14 |   return jwt.verify(token, JWT_SECRET);", type: "code" },
  { text: "[CRITICAL] src/api/users.ts:21 - Unparameterized SQL query.", type: "error" },
  { text: "[ERROR] Scan completed with 1 Critical, 1 Warning.", type: "error" }
];

const HeroSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, visibleLines === 0 ? 800 : Math.random() * 300 + 50); // initial delay, then random fast typing
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <section className="relative pt-32 md:pt-48 pb-24 px-4 md:px-6 w-full bg-white border-b border-gray-200 overflow-hidden">
      
      {/* Precision Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial fade to smooth the grid edges */}
      <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white_70%)]"></div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left: Copy */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-gray-300 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider">v2.0.0-beta</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tighter text-gray-900 mb-6 leading-[1.05]">
            Stop Shipping <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 bg-[length:200%_auto] animate-gradient">Blind.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light border-l-2 border-gray-300 pl-4">
            Connect your repository and receive a comprehensive security, performance, and architecture audit in seconds. Uncover logic flaws that standard scanners miss.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="?waitlist=true"
              scroll={false}
              className="w-full sm:w-auto bg-gray-900 text-white px-8 py-4 font-bold border border-gray-900 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
            >
              Initialize Scan <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/sample-report"
              className="w-full sm:w-auto bg-white text-gray-900 border border-gray-300 px-8 py-4 font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              View Documentation
            </Link>
          </div>
        </div>

        {/* Right: Animated Terminal Output */}
        <div className="w-full relative lg:pl-10">
          <div className="bg-[#050505] border border-gray-800 p-6 relative overflow-hidden shadow-2xl group">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
              <div className="flex items-center gap-4">
                <Terminal className="w-5 h-5 text-green-500" />
                <span className="text-xs font-mono font-bold text-gray-500">codeaudit-cli --stdout</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
            </div>

            {/* Terminal Lines */}
            <div className="font-mono text-[11px] sm:text-xs leading-[1.8] tracking-tight min-h-[250px]">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  key={i} 
                  className={`
                  ${line.type === 'cmd' ? 'text-green-400 font-bold mb-2' : ''}
                  ${line.type === 'log' ? 'text-gray-400' : ''}
                  ${line.type === 'warn' ? 'text-yellow-500 mt-2' : ''}
                  ${line.type === 'error' ? 'text-red-500 mt-2 font-bold' : ''}
                  ${line.type === 'code' ? 'text-gray-500 ml-4 border-l border-gray-800 pl-4' : ''}
                  ${line.type === 'code_error' ? 'text-red-400 bg-red-500/10 ml-4 border-l-2 border-red-500 pl-4 py-1' : ''}
                `}>
                  {line.text}
                </motion.div>
              ))}
              
              {/* Blinking Cursor */}
              {visibleLines >= codeLines.length && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="text-green-500 font-bold mt-2"
                >
                  $ _
                </motion.div>
              )}
              {visibleLines < codeLines.length && (
                <div className="w-2 h-4 bg-gray-500 inline-block animate-pulse mt-1 ml-1"></div>
              )}
            </div>
            
            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-20"></div>
          </div>
          
          {/* Decorative measuring lines */}
          <div className="absolute top-10 right-4 w-4 h-4 border-t border-r border-gray-300"></div>
          <div className="absolute bottom-10 lg:left-6 left-0 w-4 h-4 border-b border-l border-gray-300"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
