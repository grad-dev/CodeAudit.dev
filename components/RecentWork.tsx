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
    <section className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full bg-white border-b border-gray-200">
      
      <div className="mb-12 max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Platform Toolkit
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          More Than a One-Time Scan
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          CodeAudit serves as a comprehensive toolkit to maintain your codebase's integrity over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-300">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className="group flex flex-col bg-white border-b border-r border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {/* Header / ID */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <span className="font-mono text-xs font-bold text-gray-500">{tool.id}</span>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>

            {/* Image Container (Strict Box) */}
            <div className="relative w-full h-48 bg-gray-100 border-b border-gray-200 overflow-hidden">
              <Image 
                src={tool.image} 
                alt={tool.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-top filter contrast-[1.05]"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {tool.title}
              </h4>
              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {tool.description}
              </p>
              
              <Link 
                href={tool.link}
                className="inline-flex items-center gap-2 font-bold text-gray-900 text-sm hover:text-blue-600 transition-colors mt-auto w-fit"
              >
                Access Module <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default RecentWork;
