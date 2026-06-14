"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const DifferentApproach = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-[1400px] mx-auto w-full relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none hidden md:block"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-20 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4 md:mb-6">
          A completely different <span className="text-[#0B57D0]">approach.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto px-2">
          We threw out the traditional agency playbook. No bloated sprints, no unpredictable billing. Just rapid execution and enterprise-grade code.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8 lg:gap-12 relative z-10">
        
        {/* The Old Way */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#FAFAFA] border border-gray-200 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 md:opacity-10 pointer-events-none">
            <X className="w-24 h-24 md:w-32 md:h-32 text-gray-500" />
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-6 md:mb-8 border-b border-gray-200 pb-4 md:pb-6">
            The Traditional Way
          </h3>
          
          <ul className="space-y-4 md:space-y-6">
            {[
              "Billable hours with unpredictable final costs",
              "Endless 'discovery' phases delaying launch",
              "Junior developers learning on your dime",
              "You don't own the source code until final payment",
              "Spaghetti code that can't scale past 1,000 users"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-gray-500">
                <div className="mt-1 bg-red-100 rounded-full p-1 flex-shrink-0">
                  <X className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                </div>
                <span className="text-sm md:text-lg leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* The Monk Way */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 bg-white border border-blue-200 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Premium Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs md:text-sm mb-4 md:mb-6 border border-blue-500/20 relative z-10">
            <Check className="w-3 h-3 md:w-4 md:h-4" /> The Monk Studio Way
          </div>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 border-b border-blue-100 pb-4 md:pb-6 tracking-tight relative z-10">
            Production-Ready Faster
          </h3>
          
          <ul className="space-y-4 md:space-y-6 relative z-10">
            {[
              "Fixed pricing. No surprises, no scope creep.",
              "Battle-tested architecture deployed on Day 1.",
              "Senior engineers building core business logic.",
              "100% intellectual property ownership from the start.",
              "Enterprise-grade infrastructure built to scale instantly."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 md:gap-4 text-gray-700">
                <div className="mt-1 bg-blue-500/20 rounded-full p-1 flex-shrink-0 border border-blue-500/30">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                </div>
                <span className="text-sm md:text-lg leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 md:mt-12 relative z-10">
            <button className="flex items-center gap-2 text-[#0B57D0] font-bold group text-sm md:text-base hover:text-blue-700">
              Start your build 
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DifferentApproach;
