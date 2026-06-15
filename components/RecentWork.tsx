import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tools = [
  {
    id: "MOD-01",
    title: "Dependency Checker",
    description: "Track outdated and vulnerable packages.",
    image: "/images/dependency_ui.png",
    link: "/products/dependency-checker"
  },
  {
    id: "MOD-02",
    title: "Secrets Detection",
    description: "Catch exposed keys and tokens before pushing.",
    image: "/images/secrets_ui.png",
    link: "/products/secrets-detection"
  },
  {
    id: "MOD-03",
    title: "AI-Ready Fixes",
    description: "Generate copy-paste fix prompts for Claude/Cursor.",
    image: "/images/ai_fix_ui.png",
    link: "/products/fix-prompts"
  },
  {
    id: "MOD-04",
    title: "Reports & Dashboards",
    description: "Shareable, professional security reports.",
    image: "/images/reports_ui.png",
    link: "/products/reports-dashboard"
  }
];

const RecentWork = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full bg-white border-t-[4px] border-black">
      
      <div className="mb-12 max-w-3xl bg-black p-6 text-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(255,0,0,1)]">
        <h2 className="text-[10px] font-black tracking-widest text-black bg-white px-2 py-1 uppercase mb-3 inline-block">
          Platform Toolkit
        </h2>
        <h3 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
          More Than a One-Time Scan
        </h3>
        <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-red-500 pl-4 bg-gray-900 py-2">
          CodeAudit serves as a comprehensive toolkit to maintain your codebase's integrity over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-white border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            {/* Header / ID */}
            <div className="p-3 border-b-[4px] border-black flex justify-between items-center bg-gray-200">
              <span className="font-mono text-[11px] font-black text-black uppercase tracking-widest">{tool.id}</span>
              <div className="w-2.5 h-2.5 bg-green-500 border-[2px] border-black animate-pulse"></div>
            </div>

            {/* Image Container (Strict Box) */}
            <div className="relative w-full h-40 bg-black border-b-[4px] border-black overflow-hidden group-hover:p-1.5 transition-all">
              <div className="relative w-full h-full border-[2px] border-transparent group-hover:border-black bg-gray-900">
                <Image 
                  src={tool.image} 
                  alt={tool.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="p-5 flex flex-col flex-grow bg-white group-hover:bg-yellow-300 transition-colors">
              <h4 className="text-base font-black text-black mb-2 uppercase leading-tight">
                {tool.title}
              </h4>
              <p className="text-black font-bold text-xs mb-5 flex-grow leading-relaxed">
                {tool.description}
              </p>
              
              <Link 
                href={tool.link}
                className="inline-flex items-center gap-2 font-black text-white bg-black border-[4px] border-black text-[10px] hover:bg-white hover:text-black transition-all mt-auto w-fit px-3 py-2 uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                Access Module <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default RecentWork;
