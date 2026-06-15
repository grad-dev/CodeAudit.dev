import React from "react";
import Link from "next/link";
import { ShieldAlert, Zap, Network, Sparkles, ArrowRight } from "lucide-react";

const capabilities = [
  {
    id: "SEC-CORE",
    title: "Security & Vulnerabilities",
    desc: "Detects exposed API keys, hardcoded credentials, insecure configurations, and vulnerable dependency versions before they reach production.",
    icon: <ShieldAlert className="w-5 h-5 text-white" />,
    link: "/products/security-scanner"
  },
  {
    id: "PERF-CORE",
    title: "Performance Profiling",
    desc: "Identifies rendering bottlenecks, inefficient code patterns, large bundle sizes, and memory leaks in React/Next.js applications.",
    icon: <Zap className="w-5 h-5 text-white" />,
    link: "/products/performance-analyzer"
  },
  {
    id: "ARCH-CORE",
    title: "Architectural Review",
    desc: "Visualizes code duplication, poor project structures, circular dependencies, and technical debt hotspots across the repository.",
    icon: <Network className="w-5 h-5 text-white" />,
    link: "/products/architecture-review"
  },
  {
    id: "AI-REVIEW",
    title: "AI-Generated Code Audit",
    desc: "LLMs generate code with subtle logic flaws. We detect 'vibecoded' mistakes and suggest deterministic, production-ready refinements.",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    link: "/products/ai-code-review"
  }
];

const TechStack = () => {
  return (
    <section id="what-we-analyze" className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full bg-white border-t-[4px] border-black">
      
      <div className="mb-12 max-w-3xl bg-yellow-300 p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl md:text-3xl font-black text-black mb-4 tracking-tighter uppercase leading-[1]">
          What We Analyze
        </h2>
        <p className="text-xs md:text-sm text-black font-bold leading-relaxed border-l-[4px] border-black pl-4 bg-yellow-400 py-2">
          The core scanning vectors executed during a repository audit.
        </p>
      </div>

      <div className="border-[4px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {capabilities.map((cap, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 border-b-[4px] border-black last:border-b-0 hover:bg-yellow-300 transition-colors group">
            
            {/* Content */}
            <div className="md:col-span-9 p-5 md:border-r-[4px] border-black flex flex-col justify-center bg-white group-hover:bg-yellow-300 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-black p-1.5 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {cap.icon}
                </div>
                <h4 className="text-base font-black text-black uppercase">{cap.title}</h4>
              </div>
              <p className="text-black font-bold text-xs leading-relaxed">
                {cap.desc}
              </p>
            </div>

            {/* Action */}
            <div className="md:col-span-3 p-5 flex items-center justify-start md:justify-center bg-white group-hover:bg-yellow-300 transition-colors">
              <Link 
                href={cap.link} 
                className="inline-flex items-center gap-2 bg-white text-black border-[4px] border-black px-4 py-3 text-[10px] md:text-xs font-black uppercase hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] w-full justify-center md:w-auto"
              >
                View Details <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TechStack;
