import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 w-full max-w-7xl mx-auto mb-12">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden flex flex-col items-center text-center border border-gray-200 shadow-xl">
        {/* Abstract Glowing Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8 tracking-tight max-w-3xl relative z-10 leading-[1.1]">
          Ready to turn your vision into a reality?
        </h2>
        <p className="text-gray-600 text-base md:text-xl max-w-2xl mb-10 md:mb-12 relative z-10 px-2">
          Stop wasting time on endless development cycles. Let us build your production-ready MVP.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto px-4 sm:px-0">
          <Link 
            href="/contact" 
            className="group w-full sm:w-auto px-6 md:px-8 py-4 bg-[#0B57D0] text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/#portfolio" 
            className="w-full sm:w-auto px-6 md:px-8 py-4 bg-transparent text-gray-900 font-semibold rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
