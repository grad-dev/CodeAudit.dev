import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="w-full bg-black text-white border-t-[4px] border-b-[4px] border-black relative overflow-hidden flex flex-col mt-10">
      
      {/* Aggressive Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_2px,transparent_2px),linear-gradient(to_bottom,#ffffff20_2px,transparent_2px)] bg-[size:40px_40px]"></div>
      
      <div className="relative z-10 w-full max-w-[85rem] mx-auto grid grid-cols-1 md:grid-cols-12 items-stretch">
        
        {/* Left Side (Text) */}
        <div className="md:col-span-8 p-8 md:p-16 border-b-[4px] md:border-b-0 md:border-r-[4px] border-white flex flex-col items-start justify-center bg-black">
          


          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-[1] uppercase text-white">
            Secure Your Codebase.<br className="hidden md:block" /> <span className="bg-white text-black px-3 py-1 mt-2 inline-block transform rotate-1">Today.</span>
          </h2>
          
          <p className="text-sm text-white max-w-2xl font-bold leading-tight mb-0 border-l-[4px] border-blue-600 pl-4 py-2 bg-gray-900">
            Join developers relying on CodeAudit to catch critical vulnerabilities before they reach production.
          </p>

        </div>

        {/* Right Side (Action) */}
        <div className="md:col-span-4 p-8 md:p-12 flex flex-col items-center justify-center bg-yellow-300">
          
          <Terminal className="w-16 h-16 text-black mb-8" strokeWidth={3} />
          
          <Link 
            href="?waitlist=true" 
            scroll={false} 
            className="w-full flex items-center justify-center px-6 py-5 bg-black text-white font-black hover:bg-gray-900 hover:-translate-y-1 hover:translate-x-1 transition-all border-[4px] border-black text-base uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-center"
          >
            Request Early Access
          </Link>
          


        </div>

      </div>
    </section>
  );
};

export default SocialProof;
