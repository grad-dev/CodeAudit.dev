"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WaitlistModal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isOpen = searchParams.get("waitlist") === "true";
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const close = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("waitlist");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    setTimeout(() => setStatus("idle"), 300);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formsubmit.co/ajax/gradviseofficial@gmail.com", {
        method: "POST",
        body: formData,
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("idle"); // Fallback
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-mono">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={close}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white w-full max-w-md border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] z-10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-black text-white flex justify-between items-center px-4 py-3 border-b-[4px] border-black">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="text-xs md:text-sm font-black uppercase tracking-widest">Waitlist_Entry</span>
              </div>
              <button 
                onClick={close}
                className="text-white hover:text-black hover:bg-white border-[2px] border-transparent hover:border-black p-1 transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,0)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-yellow-300">
              {status === "success" ? (
                <div className="text-center py-8 bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="w-16 h-16 bg-black border-[4px] border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,255,0,1)]">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-black mb-2 uppercase tracking-tighter bg-green-400 inline-block px-2 py-1 border-[2px] border-black">Access Granted</h3>
                  <p className="text-black font-bold mb-8 text-xs md:text-sm leading-relaxed border-l-[4px] border-black pl-3 mt-4">System recorded your entry. We will notify you when deployment is ready.</p>
                  <button 
                    onClick={close}
                    className="w-full bg-white border-[4px] border-black hover:bg-black hover:text-white text-black font-black py-4 uppercase text-xs md:text-sm tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Close Session
                  </button>
                </div>
              ) : (
                <div className="bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter bg-black text-white inline-block px-3 py-1">Secure Early Access</h3>
                    <p className="text-black font-bold text-xs md:text-sm leading-relaxed border-l-[4px] border-black pl-3 bg-gray-100 py-2">
                      Initialize your position in the queue to secure founder pricing.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    <div>
                      <label htmlFor="name" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 border-[2px] border-black">Operator Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-3 bg-white border-[4px] border-black focus:bg-gray-100 focus:ring-0 outline-none transition-all text-black font-bold text-xs md:text-sm placeholder-gray-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px]"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 border-[2px] border-black">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-3 bg-white border-[4px] border-black focus:bg-gray-100 focus:ring-0 outline-none transition-all text-black font-bold text-xs md:text-sm placeholder-gray-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="audience" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 border-[2px] border-black">Primary Audit Target</label>
                      <select 
                        id="audience" 
                        name="audience"
                        className="w-full px-4 py-3 bg-white border-[4px] border-black focus:bg-gray-100 focus:ring-0 outline-none transition-all text-black font-bold text-xs md:text-sm appearance-none rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] cursor-pointer"
                      >
                        <option value="">Select target environment...</option>
                        <option value="Personal project">Personal / Indie</option>
                        <option value="Startup">Startup Core</option>
                        <option value="Client work">Client Infrastructure</option>
                        <option value="Agency">Agency Portfolio</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-black hover:bg-white hover:text-black text-white font-black py-4 text-xs md:text-sm uppercase tracking-widest transition-all disabled:opacity-70 flex items-center justify-center gap-2 mt-6 border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      {status === "submitting" ? "Processing..." : "Submit Entry"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
