"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Code2, Zap, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Kabeer Joshi",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEPlPRhQRMVOQ/profile-displayphoto-scale_400_400/B56Z1oLhIeIAAk-/0/1775569349750?e=1781740800&v=beta&t=pupb5aAUs-fgcjD9Z3ux03OBw23EHjj4rY9y_toB5-M",
    linkedin: "https://www.linkedin.com/in/kabeer-joshi-7173061aa",
    github: "https://github.com/kabeerx9/",
    description: "Architecting scalable web applications and crafting pixel-perfect interfaces with a focus on modern web technologies."
  },
  {
    name: "Suraj Rawat",
    role: "Backend Infrastructure",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFlKD4NCn9WgA/profile-displayphoto-scale_200_200/B56Z2rClp0IkAY-/0/1776691077061?e=1782345600&v=beta&t=MCrjgj3PKg436DE100ZhYV1rT0LNZqSBgJcfGRHrSJE",
    linkedin: "https://www.linkedin.com/in/suraj-rawat-",
    github: "https://github.com/rawatsuri",
    description: "Designing robust systems, building secure APIs, and managing cloud infrastructure to ensure high availability and performance."
  },
  {
    name: "Zaid Williams",
    role: "Team Member",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEloYW_AAhQZg/profile-displayphoto-crop_800_800/B4EZ4SpFz7IMAI-/0/1778429224360?e=1782345600&v=beta&t=s0XRtJ1qS0tfx4kw78BffuTF9tXM7WxAAwS-Nvps1Uw",
    linkedin: "https://www.linkedin.com/in/zaid-williams-b9317658/",
    github: "", 
    description: "Bringing creative problem-solving and strategic thinking to our digital products, ensuring seamless user experiences."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#0B57D0] selection:text-white overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Background Grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0B57D0] text-sm font-semibold mb-6 shadow-sm"
        >
          <Zap className="w-4 h-4" />
          <span>The Minds Behind Monk Studio</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 max-w-4xl leading-[1.1]"
        >
          Crafting Digital Excellence, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#0B57D0]">
            Without the Bloat.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-16"
        >
          We are a specialized development trio bridging the gap between world-class design and robust engineering. We focus on crafting high-performance digital products directly with you. No middle-men, just pure execution.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
        >
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B57D0] flex items-center justify-center mb-6 shadow-inner">
               <Code2 className="w-7 h-7" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Excellence</h3>
             <p className="text-base text-gray-600">Built right the first time with modern, scalable, and secure infrastructure.</p>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B57D0] flex items-center justify-center mb-6 shadow-inner">
               <Rocket className="w-7 h-7" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Execution</h3>
             <p className="text-base text-gray-600">Rapid iterations and seamless delivery without compromising on quality.</p>
           </div>
           <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0B57D0] flex items-center justify-center mb-6 shadow-inner">
               <Zap className="w-7 h-7" />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Collaboration</h3>
             <p className="text-base text-gray-600">Work directly with the founders. No bureaucracy or delays, just results.</p>
           </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Meet the Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The technical experts turning your ideas into scalable, production-ready reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group flex flex-col h-full"
              >
                <div className="relative mb-8 inline-block self-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-[#0B57D0] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 transform scale-150 -z-10"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#0B57D0] font-semibold text-sm tracking-wide uppercase mb-4">{member.role}</p>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                  {member.description}
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  {member.linkedin && (
                    <Link 
                      href={member.linkedin}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0B57D0] hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  )}
                  {member.github && (
                    <Link 
                      href={member.github}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow-sm"
                    >
                      <Github className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B57D0] rounded-full blur-[120px] opacity-20"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">Ready to build something great?</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
            Let&apos;s discuss how our technical expertise can help bring your vision to life faster and better than you imagined.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300 relative z-10 shadow-xl"
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
