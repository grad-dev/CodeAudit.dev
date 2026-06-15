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
            className="absolute inset-0 bg-white/80 backdrop-blur-md"
            onClick={close}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white w-full max-w-md border-2 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] z-10 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gray-900 text-white flex justify-between items-center px-4 py-3 border-b-2 border-gray-900">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-xs font-bold uppercase tracking-wider">Waitlist_Entry</span>
              </div>
              <button 
                onClick={close}
                className="text-gray-400 hover:text-white hover:bg-white/10 p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:16px_16px]">
              {status === "success" ? (
                <div className="text-center py-8 bg-white border border-gray-300 p-6">
                  <div className="w-12 h-12 bg-green-500 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Access Granted</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">System recorded your entry. We will notify you when deployment is ready.</p>
                  <button 
                    onClick={close}
                    className="w-full bg-white border border-gray-900 hover:bg-gray-100 text-gray-900 font-bold py-3 uppercase text-sm tracking-widest transition-colors"
                  >
                    Close Session
                  </button>
                </div>
              ) : (
                <div className="bg-white border border-gray-300 p-6">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans tracking-tight">Secure Early Access</h3>
                    <p className="text-gray-600 text-xs leading-relaxed border-l-2 border-gray-300 pl-3">
                      Initialize your position in the queue to secure founder pricing.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-gray-900 mb-1 uppercase tracking-widest">Operator Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all text-gray-900 text-sm placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-bold text-gray-900 mb-1 uppercase tracking-widest">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all text-gray-900 text-sm placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="audience" className="block text-[10px] font-bold text-gray-900 mb-1 uppercase tracking-widest">Primary Audit Target</label>
                      <select 
                        id="audience" 
                        name="audience"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 focus:border-gray-900 focus:bg-white focus:ring-0 outline-none transition-all text-gray-900 text-sm appearance-none rounded-none"
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
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 text-xs uppercase tracking-widest transition-colors disabled:opacity-70 flex items-center justify-center gap-2 mt-4 border border-gray-900 shadow-[4px_4px_0px_0px_rgba(209,213,219,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(209,213,219,1)]"
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
