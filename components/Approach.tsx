import React from "react";
import { Search, ShieldCheck, Github } from "lucide-react";

const steps = [
  {
    id: "STEP_01",
    stepNum: "01",
    title: "Connect Repository",
    desc: "Authenticate via GitHub or paste a public URL. The scanner immediately provisions a sandboxed environment and clones the target codebase.",
    icon: <Github className="w-5 h-5" />,
    meta: "Target Acquired"
  },
  {
    id: "STEP_02",
    stepNum: "02",
    title: "Deep Analysis",
    desc: "The engine runs parallel checks: dependency mapping, hardcoded secrets detection, unparameterized queries, and architectural anti-patterns.",
    icon: <Search className="w-5 h-5" />,
    meta: "Execution Time: < 45s"
  },
  {
    id: "STEP_03",
    stepNum: "03",
    title: "Actionable Report",
    desc: "Receive a prioritized vulnerability list. Every critical issue includes the exact file path, line number, and a drop-in code snippet to fix it.",
    icon: <ShieldCheck className="w-5 h-5" />,
    meta: "Output: JSON / Markdown"
  }
];

const Approach = () => {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white border-t-[4px] border-black">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        
        <div className="mb-12 max-w-3xl bg-blue-600 p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-[10px] font-black tracking-widest text-white uppercase mb-3 bg-black px-2 py-1 inline-block">
            Workflow Engine
          </h2>
          <h3 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
            How CodeAudit Works
          </h3>
          <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-black pl-4 bg-blue-700 py-2">
            A deterministic three-step pipeline for identifying critical logic flaws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col p-6 lg:p-8 border-[4px] border-black bg-white hover:bg-yellow-300 hover:-translate-y-1 transition-all group overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              
              <span className="absolute -bottom-6 -right-4 text-[70px] font-black text-gray-200 group-hover:text-black/10 leading-none select-none pointer-events-none font-mono z-0">
                {step.stepNum}
              </span>

              <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b-[4px] border-black">
                <span className="font-mono text-[10px] font-black text-black uppercase tracking-widest bg-white border-[2px] border-black px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black group-hover:text-white transition-colors">
                  {step.id}
                </span>
                <span className="bg-black text-white p-2 inline-flex border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  {step.icon}
                </span>
              </div>

              <h4 className="relative z-10 text-lg font-black text-black mb-3 uppercase leading-tight">{step.title}</h4>
              <p className="relative z-10 text-black font-bold leading-relaxed text-xs flex-grow">
                {step.desc}
              </p>

              <div className="relative z-10 mt-6 inline-block">
                <span className="font-mono text-[10px] font-black text-white bg-blue-600 px-2 py-1 uppercase tracking-widest border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
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
