"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyMvpsFail = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-4 md:px-6 max-w-6xl mx-auto w-full">
      <div className="text-center mb-12 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 font-semibold text-xs md:text-sm mb-6 border border-red-500/20 uppercase tracking-widest"
        >
          The Problem
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6"
        >
          Why most MVPs <span className="text-gray-400">fail to launch.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto"
        >
          Traditional agencies focus on billable hours, not your success. This leads to three fatal mistakes that drain your runway before you even get your first user.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Card 1: Endless Timelines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col border border-gray-200 shadow-lg overflow-hidden group"
        >
          <div className="h-40 md:h-48 w-full bg-gray-50 rounded-xl mb-8 flex flex-col items-center justify-center relative border border-gray-200 overflow-hidden">
            {/* Custom Micro-graphic: Infinite Loading / Timeline */}
            <div className="w-full px-8 relative">
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden relative">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
              </div>
              <div className="flex justify-between w-full mt-3">
                <span className="text-gray-600 text-xs">Month 1</span>
                <span className="text-red-500 text-xs font-bold animate-pulse">Month 6...</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Endless Timelines</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            What should be a fast build stretches into months of scope creep and &apos;research&apos;. You lose the first-mover advantage.
          </p>
        </motion.div>

        {/* Card 2: Budget Bleed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col border border-gray-200 shadow-lg overflow-hidden group"
        >
          <div className="h-40 md:h-48 w-full bg-gray-50 rounded-xl mb-8 flex items-end justify-center pb-8 relative border border-gray-200 overflow-hidden">
             {/* Custom Micro-graphic: Depleting Chart */}
             <div className="flex items-end gap-2 md:gap-3 h-24">
               {[80, 60, 40, 20, 5].map((height, i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: "100%" }}
                   whileInView={{ height: `${height}%` }}
                   transition={{ duration: 1, delay: i * 0.2 }}
                   className={`w-6 md:w-8 rounded-t-sm ${i === 4 ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'bg-gray-200'}`}
                 />
               ))}
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Budget Hemorrhage</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            &ldquo;Unforeseen complexities&rdquo; double your initial quote. You&apos;re held hostage halfway through development and drain your marketing budget.
          </p>
        </motion.div>

        {/* Card 3: Tech Debt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col border border-gray-200 shadow-lg overflow-hidden group lg:col-span-1 md:col-span-2 lg:mx-0 md:mx-auto md:w-1/2 lg:w-full"
        >
          <div className="h-40 md:h-48 w-full bg-gray-50 rounded-xl mb-8 flex items-center justify-center relative border border-gray-200 overflow-hidden p-6">
             {/* Custom Micro-graphic: Spaghetti Code */}
             <div className="w-full space-y-2 opacity-60">
               <div className="w-3/4 h-2 bg-red-500/50 rounded animate-pulse" />
               <div className="w-1/2 h-2 bg-gray-300 rounded ml-4" />
               <div className="w-full h-2 bg-red-500/30 rounded animate-pulse" />
               <div className="w-5/6 h-2 bg-gray-300 rounded ml-2" />
               <div className="w-1/3 h-2 bg-red-500/80 rounded animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">Technical Debt</h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Agencies use unscalable templates. The moment you get real users, the servers crash and you have to rewrite the app from scratch.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyMvpsFail;
