import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DifferentApproach = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full border-t-[4px] border-black bg-white">
      
      <div className="mb-12 max-w-3xl bg-blue-600 p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-[10px] font-black tracking-widest text-white uppercase mb-3 bg-black px-2 py-1 inline-block">
          Engineering Value
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
          Why Developers Choose CodeAudit
        </h3>
        <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-black pl-4 bg-blue-700 py-2">
          Stop wasting engineering cycles on manual review and fragmented tooling. 
          CodeAudit drops seamlessly into your workflow to enforce architectural and security standards automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* Box 1: Save Hours (2 columns wide) */}
        <div className="col-span-1 md:col-span-2 border-[4px] border-black bg-white p-6 md:p-10 flex flex-col justify-between hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
          <div className="mb-8">
             <h3 className="text-xl font-black text-black mb-3 uppercase leading-[1]">Save Hours of <span className="bg-yellow-300 px-2">Manual</span> Review</h3>
             <p className="text-black text-xs md:text-sm font-bold leading-relaxed max-w-xl">
               Get a complete architectural and security audit in seconds. CodeAudit processes thousands of lines of code locally without needing to configure complex CI pipelines.
             </p>
          </div>
          <div className="bg-[#0a0a0c] text-green-400 font-mono p-5 border-[4px] border-black text-[10px] md:text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-x-auto relative">
            <div className="absolute top-0 right-0 bg-white text-black font-black text-[10px] px-2 py-0.5 border-b-[2px] border-l-[2px] border-black">
              TERMINAL
            </div>
            <div className="text-white mb-2 bg-blue-600 inline-block px-2 py-0.5">$ codeaudit run ./src --strict</div>
            <div className="flex items-center gap-2 mb-1.5"><span className="text-blue-400 font-black">ℹ</span> Analyzing 42,012 LOC across 148 files...</div>
            <div className="flex items-center gap-2 mb-1.5"><span className="text-green-500 font-black">✔</span> Scan completed in 0.04s</div>
            <div className="flex items-center gap-2 mb-1.5"><span className="text-green-500 font-black">✔</span> 0 Critical Vulnerabilities detected</div>
            <div className="flex items-center gap-2 mt-3 text-white font-bold bg-black inline-block px-2 py-0.5">$ ready for deployment.</div>
          </div>
        </div>
        
        {/* Box 2: Confidence (1 column wide) */}
        <div className="col-span-1 border-[4px] border-black bg-black text-white p-6 md:p-10 flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] hover:-translate-y-1 transition-transform">
          <div>
            <h3 className="text-xl font-black text-white mb-3 uppercase leading-[1]">Launch With <span className="text-red-500">Confidence</span></h3>
            <p className="text-gray-300 text-xs md:text-sm font-bold leading-relaxed">
              Catch critical issues, exposed secrets, and performance bottlenecks before your users do.
            </p>
          </div>
          
          <div className="mt-8 flex flex-col font-mono text-[10px] md:text-xs border-[2px] border-white p-3 space-y-3">
             <div className="flex justify-between items-center bg-gray-900 p-2 border border-gray-700">
               <span className="text-white font-bold">SECRETS_SCAN</span>
               <span className="text-black font-black bg-green-400 px-2 py-0.5 uppercase">PASS</span>
             </div>
             <div className="flex justify-between items-center bg-gray-900 p-2 border border-gray-700">
               <span className="text-white font-bold">PERF_CHECK</span>
               <span className="text-black font-black bg-green-400 px-2 py-0.5 uppercase">PASS</span>
             </div>
             <div className="flex justify-between items-center bg-gray-900 p-2 border border-gray-700">
               <span className="text-white font-bold">DEP_AUDIT</span>
               <span className="text-black font-black bg-green-400 px-2 py-0.5 uppercase">PASS</span>
             </div>
          </div>
        </div>

        {/* Box 3: Modern Projects (Full width) */}
        <div className="col-span-1 md:col-span-3 border-[4px] border-black p-6 md:p-10 flex flex-col md:flex-row justify-between items-center bg-yellow-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-4">
           <div className="md:w-1/2 mb-6 md:mb-0">
             <h3 className="text-xl font-black text-black mb-3 uppercase leading-[1]">Built For Modern Stacks</h3>
             <p className="text-black text-xs md:text-sm font-bold leading-relaxed max-w-xl bg-yellow-400 p-2 border-l-[4px] border-black">
               CodeAudit works natively with your existing ecosystem. No proprietary configuration files or complex setup required.
             </p>
           </div>
           <div className="md:w-1/2 flex flex-wrap gap-3 md:justify-end font-mono text-[10px] md:text-xs uppercase tracking-widest font-black">
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">React.js</span>
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">Next.js</span>
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">Node.js</span>
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">TypeScript</span>
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">Django</span>
              <span className="border-[2px] border-black bg-white px-3 py-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">FastAPI</span>
           </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default DifferentApproach;
