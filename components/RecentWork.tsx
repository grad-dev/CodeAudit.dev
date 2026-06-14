"use client";
import React, { useState } from "react";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Monitor, RotateCcw, Hand } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

// --- Mobile Swipe Card Component ---
const MobileSwipeCard = ({ project, index, removeCard, activeTab }: any) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-10, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const isFront = index === 0;

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 100 || info.offset.x < -100 || info.velocity.x > 500 || info.velocity.x < -500) {
      removeCard();
    }
  };

  const handleCardClick = () => {
    // Only open link if user clicked, not if they were dragging
    if (Math.abs(x.get()) < 5) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <motion.div
      style={{
        x: isFront ? x : 0,
        rotate: isFront ? rotate : 0,
        opacity: isFront ? opacity : 1,
        scale: isFront ? 1 : Math.max(0.9, 1 - index * 0.05),
        y: isFront ? 0 : index * 12,
        zIndex: 50 - index,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
      onClick={isFront ? handleCardClick : undefined}
      className={`absolute top-0 left-0 w-full h-[480px] bg-white rounded-[2rem] border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden ${isFront ? 'cursor-grab active:cursor-grabbing hover:border-gray-300' : 'pointer-events-none'}`}
    >
      <div className="w-full relative h-[240px] bg-gray-100 border-b border-gray-200 pointer-events-none">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none z-10"></div>
        <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center">
           <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 pointer-events-none bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">{project.des}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/60">
          <div className="flex items-center -space-x-2">
            {project.iconLists?.map((icon: string, i: number) => (
              <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-gray-700 flex items-center justify-center p-1.5 shadow-md">
                <img src={icon} alt="tech icon" className="w-full h-full object-contain filter brightness-200" />
              </div>
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-500">
            Tap to View
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const RecentWork = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("web");
  const [stackIndex, setStackIndex] = useState(0);

  const filteredProjects = projects.filter(p => p.type === activeTab);
  const activeStack = filteredProjects.slice(stackIndex);

  const handleTabChange = (tab: "web" | "mobile") => {
    setActiveTab(tab);
    setStackIndex(0); // Reset swipe stack when changing tabs
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto flex flex-col items-center bg-white rounded-[2rem] md:rounded-[2.5rem] mt-16 md:mt-24 w-full border border-gray-200 shadow-xl relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-12 max-w-2xl relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Recent Work
        </h2>
        <p className="text-gray-600 text-base">
          We don&apos;t just build MVPs. We engineer digital products that dominate their markets.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex bg-gray-100 p-1.5 rounded-full mb-8 md:mb-16 relative z-10 shadow-sm border border-gray-200">
        <button
          onClick={() => handleTabChange("web")}
          className={`relative px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors duration-300 ${activeTab === "web" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
        >
          {activeTab === "web" && (
            <motion.div layoutId="activeTabDark" className="absolute inset-0 bg-white rounded-full shadow-md" />
          )}
          <Monitor className="w-4 h-4 relative z-10" />
          <span className="relative z-10 hidden sm:inline">Web Applications</span>
          <span className="relative z-10 sm:hidden">Web</span>
        </button>
        <button
          onClick={() => handleTabChange("mobile")}
          className={`relative px-6 md:px-8 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors duration-300 ${activeTab === "mobile" ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
        >
          {activeTab === "mobile" && (
            <motion.div layoutId="activeTabDark" className="absolute inset-0 bg-white rounded-full shadow-md" />
          )}
          <Smartphone className="w-4 h-4 relative z-10" />
          <span className="relative z-10 hidden sm:inline">Mobile Apps</span>
          <span className="relative z-10 sm:hidden">Mobile</span>
        </button>
      </div>

      {/* --- DESKTOP VIEW (Grid) --- */}
      <div className="hidden md:block w-full relative z-10 min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
          >
            {filteredProjects.map((project, idx) => {
              // Create a perfect alternating asymmetric bento grid that never leaves holes
              // Pattern for 3 columns: span 2, span 1 | span 1, span 2 | span 2, span 1...
              const isLarge = activeTab === "web" && (idx % 4 === 0 || idx % 4 === 3);
              const isLastRowEmpty = idx === filteredProjects.length - 1 && filteredProjects.length % 3 !== 0;
              
              // If it's the last item and leaves an empty slot, let it span 2 columns to fill the gap.
              const colSpanClass = isLastRowEmpty 
                                    ? "md:col-span-2 lg:col-span-2" 
                                    : (isLarge ? "md:col-span-2 lg:col-span-2" : "col-span-1");

              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex h-full ${colSpanClass}`}
                >
                  <Link href={project.link} target="_blank" className="group flex flex-col w-full bg-white rounded-[1.5rem] overflow-hidden transition-all duration-500 border border-gray-200 relative isolate hover:border-gray-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <div className={`w-full relative overflow-hidden bg-gray-100 border-b border-gray-200 ${isLarge ? "aspect-[2.5/1]" : "aspect-[4/3]"}`}>
                        <Image
                          src={project.img}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none z-10"></div>
                        <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                           <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-1 relative z-20 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{project.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm flex-1 leading-relaxed mb-6">{project.des}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/60">
                          <div className="flex items-center -space-x-2">
                            {project.iconLists?.map((icon, i) => (
                              <div key={i} className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-gray-700 flex items-center justify-center p-1.5 shadow-md relative z-10 hover:z-20 hover:scale-110 transition-transform">
                                  <img src={icon} alt="tech icon" className="w-full h-full object-contain filter brightness-200" />
                              </div>
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-gray-500 group-hover:text-[#0B57D0] transition-colors">
                            {activeTab === 'web' ? 'Visit Live Site' : 'View in Store'}
                          </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- MOBILE VIEW (Swipe Stack) --- */}
      <div className="md:hidden w-full relative z-10 flex flex-col items-center">
        <div className="w-full relative h-[480px] mb-6">
          <AnimatePresence>
            {activeStack.length > 0 ? (
              activeStack.map((project, idx) => (
                <MobileSwipeCard 
                  key={project.id} 
                  project={project} 
                  index={idx} 
                  removeCard={() => setStackIndex(prev => prev + 1)}
                  activeTab={activeTab}
                />
              )).reverse() // Reverse so the first element is on top of the DOM stack (z-index handles visual, but DOM order matters for Framer Motion AnimatePresence sometimes)
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-[2rem] border border-gray-200 shadow-xl"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <RotateCcw className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;ve seen them all!</h3>
                <p className="text-gray-600 text-sm mb-6 text-center px-6">Tap below to reset the stack and view the projects again.</p>
                <button 
                  onClick={() => setStackIndex(0)}
                  className="px-6 py-3 bg-[#0B57D0] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
                >
                  Reset Stack
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Swipe Hint */}
        {activeStack.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500 text-sm font-medium"
          >
            <Hand className="w-4 h-4 animate-bounce" />
            <span>Swipe left or right to explore</span>
          </motion.div>
        )}
      </div>

    </section>
  );
};

export default RecentWork;
