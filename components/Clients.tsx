import React from "react";

const profiles = [
  { 
    id: "INDIE_HACKER", 
    desc: "Solo developers shipping full-stack products.",
    status: "SUPPORTED"
  },
  { 
    id: "STARTUP_TEAM", 
    desc: "Lean teams moving fast with frequent deployments.",
    status: "SUPPORTED"
  },
  { 
    id: "DEV_AGENCY", 
    desc: "Consultancies managing multiple client codebases.",
    status: "SUPPORTED"
  },
  { 
    id: "AI_ENGINEER", 
    desc: "Developers shipping complex AI-generated code.",
    status: "SUPPORTED"
  }
];

const Clients = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full bg-white border-t-[4px] border-black">
      <div className="mb-12 max-w-3xl bg-black p-6 text-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,255,1)]">
        <h2 className="text-[10px] font-black tracking-widest text-black bg-white px-2 py-1 uppercase mb-3 inline-block">
          Target Architecture
        </h2>
        <h3 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
          Supported Deployment Profiles
        </h3>
        <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-blue-500 pl-4 bg-gray-900 py-2">
          CodeAudit is configured out-of-the-box to support the following operational environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex flex-col p-6 lg:p-8 border-[4px] border-black bg-white hover:bg-yellow-300 hover:-translate-y-1 transition-all group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="text-[60px] md:text-[70px] font-black text-gray-200 group-hover:text-black/10 absolute -bottom-4 -right-2 select-none pointer-events-none leading-none z-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="relative z-10 flex flex-col items-start mb-5">
              <span className="font-mono text-[10px] font-black text-white bg-blue-600 px-2 py-1 border-[2px] border-black uppercase mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black">
                {profile.status}
              </span>
              <span className="font-mono text-base font-black text-black uppercase tracking-tighter">
                {profile.id}
              </span>
            </div>
            <div className="relative z-10 text-[10px] font-mono font-black text-black uppercase tracking-widest mb-1.5 border-b-[2px] border-black pb-0.5 inline-block w-fit">Description</div>
            <p className="relative z-10 text-xs md:text-sm font-bold text-gray-900 leading-relaxed mt-1">
              {profile.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
