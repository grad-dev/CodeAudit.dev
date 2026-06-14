"use client";
import React from "react";
import { motion } from "framer-motion";

const tools = [
  { name: "React", iconColor: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20", letter: "Re" },
  { name: "React Native", iconColor: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", letter: "RN" },
  { name: "Java", iconColor: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", letter: "Ja" },
  { name: "Spring Boot", iconColor: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20", letter: "SB" },
  { name: "Node.js", iconColor: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", letter: "No" },
  { name: "TypeScript", iconColor: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", letter: "TS" },
  { name: "PostgreSQL", iconColor: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20", letter: "Pg" },
  { name: "Docker", iconColor: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20", letter: "Do" },
  { name: "AWS", iconColor: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20", letter: "AW" },
  { name: "Vercel", iconColor: "text-black", bg: "bg-black/5", border: "border-black/10", letter: "Ve" },
  { name: "Tailwind", iconColor: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/20", letter: "Tw" },
  { name: "Supabase", iconColor: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", letter: "Su" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const TechStack = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Powered by Enterprise Tech
        </h2>
        <p className="text-lg text-gray-500">
          We build scalable, robust systems using battle-tested technologies that power the world&apos;s leading tech companies.
        </p>
      </motion.div>

      <div className="w-full bg-white rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden border border-gray-200">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 relative z-10"
        >
          {tools.map((tool, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl border ${tool.border} bg-gray-50/80 backdrop-blur-md hover:bg-white transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`w-14 h-14 ${tool.bg} ${tool.iconColor} rounded-2xl flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                {tool.letter}
              </div>
              <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors tracking-wide">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
