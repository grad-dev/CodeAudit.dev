import React from "react";

const SocialProof = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-xl md:text-2xl font-medium text-gray-900 max-w-3xl leading-relaxed mb-12">
        Trusted by visionary teams and forward-thinking founders
        <span className="text-[#0B57D0]"> — companies that chose speed over uncertainty.</span>
      </h2>

      {/* Client Names based on actual projects */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
        <span className="text-2xl font-bold tracking-tighter">Goreeva</span>
        <span className="text-xl font-bold tracking-widest lowercase">akimafilms</span>
        <span className="text-2xl font-black italic">Plateio</span>
        <span className="text-xl font-bold uppercase tracking-widest text-blue-900">ReviewQR</span>
        <span className="text-xl font-semibold">Sumukha</span>
      </div>

      <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
        Supporting <span className="font-bold text-gray-700">thousands</span> of active users with <span className="font-bold text-gray-700">99.9%</span> uptime, delivering production-ready applications <span className="font-bold text-gray-700">3x faster</span> than the industry average.
      </p>
    </section>
  );
};

export default SocialProof;
