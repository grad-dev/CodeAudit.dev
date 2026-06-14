"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Telescope, Cpu, Rocket, ShieldCheck } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Architecture",
    duration: "Phase 1",
    icon: <Telescope className="w-6 h-6 text-blue-500" />,
    description: "We don't guess. We map out your entire database schema, user flows, and system architecture before writing a single line of code. You receive a comprehensive technical blueprint.",
    metrics: ["System Blueprint", "Database Schema", "Tech Stack Selection"]
  },
  {
    id: "02",
    title: "Core Infrastructure & Backend",
    duration: "Phase 2",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    description: "Our senior engineers set up enterprise-grade cloud infrastructure, configure secure authentication, build the core APIs, and lay the foundation using battle-tested modules to save weeks of dev time.",
    metrics: ["Cloud Setup", "Auth Integration", "Core API Endpoints"]
  },
  {
    id: "03",
    title: "Frontend & Rapid Iteration",
    duration: "Phase 3",
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    description: "We build out the pixel-perfect user interface and connect it to the backend. You get access to a live staging environment to watch the product come to life and provide immediate feedback.",
    metrics: ["Pixel-Perfect UI", "Live Staging Link", "Real-time Feedback"]
  },
  {
    id: "04",
    title: "QA, Security & Launch",
    duration: "Phase 4",
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    description: "We rigorously test for edge cases, perform security audits, and optimize performance. Once approved, we deploy to production and transfer 100% of the codebase ownership to your team.",
    metrics: ["Security Audit", "Production Deployment", "IP Transfer"]
  }
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 px-4 md:px-6 max-w-5xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
            How we ship your <span className="text-[#0B57D0]">Product.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            No magic. No cutting corners. Just a hyper-optimized engineering process leveraging reusable modules and senior talent to build enterprise-grade software.
          </p>
        </motion.div>
      </div>

      {/* Process Timeline */}
      <div className="px-4 md:px-6 max-w-4xl mx-auto pb-32 relative z-10">
        
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-[50px] top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

        <div className="flex flex-col gap-12 md:gap-24">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 relative"
            >
              {/* Timeline Node */}
              <div className="hidden md:flex flex-col items-center z-10">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg mb-4 relative group">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
                  {step.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 bg-white border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden group hover:border-gray-300 transition-colors duration-500">
                <div className="absolute top-0 right-0 text-[8rem] font-black text-gray-900/[0.03] -translate-y-10 translate-x-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  {step.id}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">{step.title}</h3>
                  <div className="px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm font-semibold whitespace-nowrap w-fit">
                    {step.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 relative z-10">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-3 relative z-10">
                  {step.metrics.map((metric, i) => (
                    <div key={i} className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at the bottom of process */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center bg-white border border-gray-200 rounded-[2rem] p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10 tracking-tight">Ready to start the clock?</h2>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B57D0] text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg relative z-10"
          >
            Schedule Strategy Call
          </Link>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
}
