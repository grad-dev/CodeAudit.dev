"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white">
      <Navbar />
      
      <div className="relative pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full relative z-10">
          
          {/* Left Side: Context */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm mb-6 border border-blue-500/20 w-fit">
              Strategy Call
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
              Let&apos;s build something <span className="text-[#0B57D0]">legendary.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-md leading-relaxed">
              We don&apos;t just take orders; we partner with ambitious founders to build products that dominate. Tell us about your vision.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Fast Response</h3>
                  <p className="text-gray-600">We typically review projects and respond within 2-4 hours during business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">No Commitments</h3>
                  <p className="text-gray-600">The 30-minute strategy call is completely free. We&apos;ll map out your architecture whether you hire us or not.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[80px] rounded-full pointer-events-none"></div>

              {formState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
                  <p className="text-gray-600 text-lg max-w-sm">We&apos;re reviewing your project details. Look out for an email from our lead engineer shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-600 pl-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-600 pl-1">Work Email</label>
                      <input required type="email" placeholder="john@company.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Company / Project Name</label>
                    <input required type="text" placeholder="Acme Corp" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Mobile Number</label>
                    <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-600 pl-1">Project Details</label>
                    <textarea required placeholder="Tell us about the problem you are trying to solve..." rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B57D0] focus:ring-1 focus:ring-[#0B57D0] transition-all resize-none"></textarea>
                  </div>

                  <button 
                    disabled={formState === "submitting"}
                    className="w-full mt-4 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-[#0B57D0] text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_40px_-10px_rgba(11,87,208,0.6)] hover:shadow-[0_0_60px_-15px_rgba(11,87,208,0.8)] transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      {formState === "submitting" ? "Sending Request..." : "Request Strategy Call"} 
                      {formState !== "submitting" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
