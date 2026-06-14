"use client";
import React from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 max-w-4xl leading-[1.1]"
      >
        Ship Your MVP Faster <br className="hidden md:block" /> Not in 6 Months
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl px-4"
      >
        Battle-tested code. Enterprise-grade. AI-accelerated. <br className="hidden md:block" />
        Stop losing to competitors who ship faster.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20 w-full sm:w-auto px-4"
      >
        <Link 
          href="/contact"
          className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-blue-600 to-[#0B57D0] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_40px_-10px_rgba(11,87,208,0.6)] hover:shadow-[0_0_60px_-15px_rgba(11,87,208,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10">Schedule Strategy Call</span>
        </Link>
        <Link 
          href="/process"
          className="w-full sm:w-auto bg-white/60 backdrop-blur-md text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
        >
          View Our Process
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-gray-100 pt-12 mb-20 w-full max-w-5xl"
      >
        {[
          { stat: "50+", label: "Clients" },
          { stat: "6+", label: "Years" },
          { stat: "100%", label: "On-Time" },
          { stat: "98%", label: "Success Rates" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{item.stat}</span>
            <span className="text-sm md:text-base text-gray-500 font-medium tracking-wide uppercase">{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Images section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-8 w-full items-center justify-center max-w-6xl mx-auto"
      >
        <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative bg-gray-50 group border border-gray-100">
          <Image 
            src="/images/dashboard_mockup.png" 
            alt="Dashboard" 
            width={1200}
            height={800}
            className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] pointer-events-none"></div>
        </div>
        <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative bg-gray-50 group border border-gray-100">
           <Image 
            src="/images/mobile_mockup.png" 
            alt="Mobile App" 
            width={1200}
            height={800}
            className="w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
