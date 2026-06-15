import React from "react";
import { Search, ShieldCheck, Github } from "lucide-react";

const steps = [
  {
    stepNum: "1",
    title: "Connect Repository",
    desc: "Authenticate via GitHub or paste a public URL. The scanner immediately provisions a sandboxed environment and clones the target codebase.",
    icon: <Github className="w-5 h-5" />
  },
  {
    stepNum: "2",
    title: "Deep Analysis",
    desc: "The engine runs parallel checks: dependency mapping, hardcoded secrets detection, unparameterized queries, and architectural anti-patterns.",
    icon: <Search className="w-5 h-5" />
  },
  {
    stepNum: "3",
    title: "Actionable Report",
    desc: "Receive a prioritized vulnerability list. Every critical issue includes the exact file path, line number, and a drop-in code snippet to fix it.",
    icon: <ShieldCheck className="w-5 h-5" />
  }
];

const Approach = () => {
  return (
    <section id="how-it-works" className="w-full py-24 bg-white border-t-[4px] border-black">
      <div className="max-w-[85rem] mx-auto px-4 md:px-8">
        
        <div className="mb-12 max-w-3xl bg-blue-600 p-6 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
            How It Works
          </h2>
          <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-black pl-4 bg-blue-700 py-2">
            A deterministic three-step pipeline for identifying critical logic flaws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col p-6 lg:p-8 border-[4px] border-black bg-white hover:bg-yellow-300 hover:-translate-y-1 transition-all group overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              
              <span className="absolute -bottom-6 -right-4 text-[70px] font-black text-gray-200 group-hover:text-black/10 leading-none select-none pointer-events-none font-sans z-0">
                {step.stepNum}
              </span>

              <div className="relative z-10 flex justify-end items-center mb-6 pb-4 border-b-[4px] border-black">
                <span className="bg-black text-white p-2 inline-flex border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  {step.icon}
                </span>
              </div>

              <h4 className="relative z-10 text-lg font-black text-black mb-3 uppercase leading-tight">{step.title}</h4>
              <p className="relative z-10 text-black font-bold leading-relaxed text-xs flex-grow">
                {step.desc}
              </p>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Approach;
