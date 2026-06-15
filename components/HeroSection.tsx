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
    <section className="relative pt-32 md:pt-40 pb-24 px-4 md:px-8 w-full bg-white border-b-[4px] border-black overflow-hidden">
      
      {/* Aggressive Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 w-full max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Copy */}
        <div className="flex flex-col items-start text-left max-w-xl bg-white p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black mb-6 leading-none uppercase">
            Stop <br/>
            Shipping <br/>
            <span className="bg-black text-white px-3 py-1 inline-block mt-2 transform -rotate-1">Blind.</span>
          </h1>
          
          <p className="text-sm text-black font-bold mb-8 leading-relaxed border-l-[4px] border-blue-600 pl-4 py-2 bg-gray-50">
            Connect your repository and receive a comprehensive security, performance, and architecture audit in seconds. Find issues before your users do.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <Link 
              href="?waitlist=true"
              scroll={false}
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 text-xs font-black border-[3px] border-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tight"
            >
              Initialize Scan <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>
            <Link 
              href="/sample-report"
              className="w-full sm:w-auto bg-white text-black border-[3px] border-black px-6 py-3 text-xs font-black hover:bg-gray-100 transition-all flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase tracking-tight"
            >
              View Docs
            </Link>
          </div>
        </div>

        {/* Right: Animated Terminal Output */}
        <div className="w-full relative mt-8 lg:mt-0">
          <div className="bg-[#0a0a0a] border-[4px] border-black p-0 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group max-w-xl mx-auto lg:mx-0">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b-[4px] border-black bg-gray-200 p-3">
              <div className="flex items-center gap-3">
                <Terminal className="w-4 h-4 text-black" />
                <span className="text-[10px] font-mono font-black text-black uppercase tracking-widest">codeaudit-cli --stdout</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white border-[2px] border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                <div className="w-3 h-3 bg-white border-[2px] border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
                <div className="w-3 h-3 bg-black border-[2px] border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
              </div>
            </div>

            {/* Terminal Lines */}
            <div className="font-mono text-[10px] sm:text-[11px] leading-[1.8] tracking-tight min-h-[260px] p-4 text-green-400">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                  key={i} 
                  className={`
                  ${line.type === 'cmd' ? 'text-white font-bold mb-3 bg-blue-600 inline-block px-2' : ''}
                  ${line.type === 'log' ? 'text-gray-400' : ''}
                  ${line.type === 'warn' ? 'text-black bg-yellow-400 font-bold px-2 inline-block mt-2 mb-1' : ''}
                  ${line.type === 'error' ? 'text-white bg-red-600 font-bold px-2 inline-block mt-2 mb-1' : ''}
                  ${line.type === 'code' ? 'text-gray-500 ml-3 border-l-[2px] border-gray-700 pl-3' : ''}
                  ${line.type === 'code_error' ? 'text-red-400 bg-red-950/50 ml-3 border-l-[4px] border-red-600 pl-3 py-1 font-bold' : ''}
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
                  className="text-white bg-white w-2 h-4 inline-block mt-1 align-middle"
                >
                </motion.div>
              )}
              {visibleLines < codeLines.length && (
                <div className="w-2 h-4 bg-white inline-block animate-pulse mt-1 align-middle ml-2"></div>
              )}
            </div>
            
            {/* Scan Line Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
