import React from "react";
import { Search, ShieldCheck, Github } from "lucide-react";

const steps = [
  {
    id: "STEP_01",
    title: "Connect Repository",
    desc: "Authenticate via GitHub or paste a public URL. The scanner immediately provisions a sandboxed environment and clones the target codebase.",
    icon: <Github className="w-5 h-5 text-gray-500" />,
    meta: "Target Acquired"
  },
  {
    id: "STEP_02",
    title: "Deep Analysis",
    desc: "The engine runs parallel checks: dependency mapping, hardcoded secrets detection, unparameterized queries, and architectural anti-patterns.",
    icon: <Search className="w-5 h-5 text-gray-500" />,
    meta: "Execution Time: < 45s"
  },
  {
    id: "STEP_03",
    title: "Actionable Report",
    desc: "Receive a prioritized vulnerability list. Every critical issue includes the exact file path, line number, and a drop-in code snippet to fix it.",
    icon: <ShieldCheck className="w-5 h-5 text-gray-500" />,
    meta: "Output: JSON / Markdown"
  }
];

const Approach = () => {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white border-b border-gray-200">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6">
        
        <div className="mb-12 max-w-3xl">
          <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
            Workflow Engine
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            How CodeAudit Works
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            A deterministic three-step pipeline for identifying critical logic flaws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-300">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col p-6 lg:p-10 border-b border-r border-gray-300 hover:bg-gray-50 transition-colors group">
              
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                  {step.id}
                </span>
                {step.icon}
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                {step.desc}
              </p>

              <div className="mt-8 inline-block">
                <span className="font-mono text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 uppercase tracking-wider">
                  {step.meta}
                </span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Approach;
