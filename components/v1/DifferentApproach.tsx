import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DifferentApproach = () => {
  return (
    <section className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full border-t border-gray-200 bg-white">
      
      <div className="mb-16 max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Engineering Value
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Why Developers Choose CodeAudit
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Stop wasting engineering cycles on manual review and fragmented tooling. 
          CodeAudit drops seamlessly into your workflow to enforce architectural and security standards automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Box 1: Save Hours (2 columns wide) */}
        <div className="col-span-1 md:col-span-2 border border-gray-300 bg-white p-8 md:p-10 flex flex-col justify-between hover:border-gray-400 transition-colors">
          <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">Save Hours of Manual Review</h3>
             <p className="text-gray-600 text-base leading-relaxed max-w-lg">
               Get a complete architectural and security audit in seconds. CodeAudit processes thousands of lines of code locally without needing to configure complex CI pipelines.
             </p>
          </div>
          <div className="bg-[#0a0a0c] text-green-400 font-mono p-5 rounded border border-gray-800 text-xs sm:text-sm shadow-inner overflow-x-auto">
            <div className="text-gray-500 mb-2">$ codeaudit run ./src --strict</div>
            <div className="flex items-center gap-2 mb-1"><span className="text-blue-400">ℹ</span> Analyzing 42,012 LOC across 148 files...</div>
            <div className="flex items-center gap-2 mb-1"><span className="text-green-500">✔</span> Scan completed in 0.04s</div>
            <div className="flex items-center gap-2 mb-1"><span className="text-green-500">✔</span> 0 Critical Vulnerabilities detected</div>
            <div className="flex items-center gap-2 mt-3 text-gray-300">$ ready for deployment.</div>
          </div>
        </div>
        
        {/* Box 2: Confidence (1 column wide) */}
        <div className="col-span-1 border border-gray-300 bg-white p-8 md:p-10 flex flex-col justify-between hover:border-gray-400 transition-colors">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Launch With Confidence</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Catch critical issues, exposed secrets, and performance bottlenecks before your users do.
            </p>
          </div>
          
          <div className="mt-8 border-t border-gray-200 flex flex-col font-mono text-xs md:text-sm">
             <div className="py-4 border-b border-gray-200 flex justify-between items-center">
               <span className="text-gray-500 font-bold">SECRETS_SCAN</span>
               <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-200">PASS</span>
             </div>
             <div className="py-4 border-b border-gray-200 flex justify-between items-center">
               <span className="text-gray-500 font-bold">PERF_CHECK</span>
               <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-200">PASS</span>
             </div>
             <div className="py-4 border-b border-gray-200 flex justify-between items-center">
               <span className="text-gray-500 font-bold">DEP_AUDIT</span>
               <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-200">PASS</span>
             </div>
          </div>
        </div>

        {/* Box 3: Modern Projects (Full width) */}
        <div className="col-span-1 md:col-span-3 border border-gray-300 p-8 md:p-10 flex flex-col md:flex-row justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
           <div className="md:w-1/2 mb-6 md:mb-0">
             <h3 className="text-2xl font-bold text-gray-900 mb-3">Built For Modern Stacks</h3>
             <p className="text-gray-600 text-base leading-relaxed max-w-md">
               CodeAudit works natively with your existing ecosystem. No proprietary configuration files or complex setup required.
             </p>
           </div>
           <div className="md:w-1/2 flex flex-wrap gap-3 md:justify-end font-mono text-sm uppercase tracking-wider font-bold">
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">React.js</span>
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">Next.js</span>
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">Node.js</span>
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">TypeScript</span>
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">Django</span>
             <span className="border border-gray-300 bg-white px-4 py-2 text-gray-800 shadow-sm">FastAPI</span>
           </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default DifferentApproach;
