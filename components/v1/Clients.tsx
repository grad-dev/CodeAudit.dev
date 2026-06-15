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
    <section className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full bg-white border-t border-gray-200">
      <div className="mb-12 max-w-3xl">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Target Architecture
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Supported Deployment Profiles
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          CodeAudit is configured out-of-the-box to support the following operational environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-300 bg-white">
        {profiles.map((profile, i) => (
          <div
            key={i}
            className="flex flex-col p-6 lg:p-8 border-b border-r border-gray-300 hover:bg-gray-50 transition-colors group"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {profile.id}
              </span>
              <span className="font-mono text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                {profile.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {profile.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
