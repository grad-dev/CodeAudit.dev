import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="w-full bg-white border-y border-gray-300 text-gray-900 relative overflow-hidden flex flex-col">
      
      {/* Precision Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
        
        {/* Left Side (Text) */}
        <div className="md:col-span-8 p-12 md:p-24 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col items-start justify-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-300 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-700">System Online</span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-8 leading-[1.05]">
            Secure Your Codebase.<br className="hidden md:block" /> Today.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed mb-0 border-l-2 border-gray-300 pl-4">
            Join elite engineering teams relying on CodeAudit to catch critical vulnerabilities before they reach production.
          </p>

        </div>

        {/* Right Side (Action) */}
        <div className="md:col-span-4 p-12 md:p-24 flex flex-col items-center justify-center bg-gray-50">
          
          <Terminal className="w-12 h-12 text-gray-400 mb-8" />
          
          <Link 
            href="?waitlist=true" 
            scroll={false} 
            className="w-full flex items-center justify-center px-8 py-6 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors border border-gray-900 text-lg"
          >
            Request Early Access
          </Link>
          
          <div className="w-full mt-6 flex justify-between items-center border-t border-gray-300 pt-6">
            <span className="font-mono text-xs text-gray-500 uppercase">Waitlist Status</span>
            <span className="font-mono text-xs font-bold text-gray-900">Open</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProof;
