import React from "react";
import Link from "next/link";
import { ShieldAlert, Zap, Network, Sparkles, ArrowRight } from "lucide-react";

const capabilities = [
  {
    id: "SEC-CORE",
    title: "Security & Vulnerabilities",
    desc: "Detects exposed API keys, hardcoded credentials, insecure configurations, and vulnerable dependency versions before they reach production.",
    icon: <ShieldAlert className="w-5 h-5 text-gray-500" />,
    status: "ACTIVE",
    link: "/products/security-scanner"
  },
  {
    id: "PERF-CORE",
    title: "Performance Profiling",
    desc: "Identifies rendering bottlenecks, inefficient code patterns, large bundle sizes, and memory leaks in React/Next.js applications.",
    icon: <Zap className="w-5 h-5 text-gray-500" />,
    status: "ACTIVE",
    link: "/products/performance-analyzer"
  },
  {
    id: "ARCH-CORE",
    title: "Architectural Review",
    desc: "Visualizes code duplication, poor project structures, circular dependencies, and technical debt hotspots across the repository.",
    icon: <Network className="w-5 h-5 text-gray-500" />,
    status: "ACTIVE",
    link: "/products/architecture-review"
  },
  {
    id: "AI-REVIEW",
    title: "AI-Generated Code Audit",
    desc: "LLMs generate code with subtle logic flaws. We detect 'vibecoded' mistakes and suggest deterministic, production-ready refinements.",
    icon: <Sparkles className="w-5 h-5 text-gray-500" />,
    status: "ACTIVE",
    link: "/products/ai-code-review"
  }
];

const TechStack = () => {
  return (
    <section id="what-we-analyze" className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full bg-white border-b border-gray-200">
      
      <div className="mb-12 max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Analysis Engine
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Capability Matrix
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          The core scanning vectors executed during a repository audit.
        </p>
      </div>

      <div className="border-t border-l border-gray-300">
        {capabilities.map((cap, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-300 group hover:bg-gray-50 transition-colors">
            
            {/* ID & Status */}
            <div className="md:col-span-2 p-6 md:border-r border-gray-300 flex flex-row md:flex-col justify-between md:justify-start gap-4">
               <span className="font-mono text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                 {cap.id}
               </span>
               <span className="font-mono text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 border border-green-200 uppercase w-fit">
                 {cap.status}
               </span>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-6 md:border-r border-gray-300 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                {cap.icon}
                <h4 className="text-lg font-bold text-gray-900">{cap.title}</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cap.desc}
              </p>
            </div>

            {/* Action */}
            <div className="md:col-span-3 p-6 flex items-center justify-start md:justify-center">
              <Link 
                href={cap.link} 
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                View Module <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TechStack;
