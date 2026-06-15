"use client";

import React, { useState } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function WaitlistPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codeaudit.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Waitlist",
        "item": "https://codeaudit.dev/waitlist"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col justify-center bg-white ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 border-[4px] border-black bg-yellow-300 p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-black mb-4 uppercase">
            Get Early Access
          </h1>
          <p className="text-xs md:text-sm text-black font-bold border-l-[4px] border-black pl-4 bg-white py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            CodeAudit.dev is launching soon. Join developers and founders getting priority access to automated security, performance, and architecture audits.
          </p>
        </div>

        <div className="bg-white border-[4px] border-black p-6 md:p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative">
          {/* Header Bar */}
          <div className="absolute top-0 left-0 right-0 bg-black text-white flex justify-between items-center px-4 py-2 border-b-[4px] border-black">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Waitlist_Terminal</span>
            </div>
          </div>

          <div className="pt-8">
            {status === "success" ? (
              <div className="text-center py-10 bg-white border-[4px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-16 h-16 bg-black border-[4px] border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_0px_rgba(0,255,0,1)]">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-4 uppercase tracking-tighter bg-green-400 inline-block px-4 py-2 border-[4px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Access Granted</h3>
                <p className="text-black font-bold mb-8 text-xs md:text-sm leading-relaxed border-l-[4px] border-black pl-4 mt-4">System recorded your entry. We will notify you when deployment is ready.</p>
                <Link 
                  href="/"
                  className="inline-block w-full bg-white border-[4px] border-black hover:bg-black hover:text-white text-black font-black py-3 uppercase text-xs md:text-sm tracking-widest transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center"
                >
                  Return to Dashboard
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                <div>
                  <label htmlFor="name" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Operator Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-100 border-[4px] border-black focus:bg-white focus:ring-0 outline-none transition-all text-black font-bold text-sm placeholder-gray-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[4px] focus:translate-y-[4px]"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-100 border-[4px] border-black focus:bg-white focus:ring-0 outline-none transition-all text-black font-bold text-sm placeholder-gray-400 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[4px] focus:translate-y-[4px]"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="usecase" className="block text-[10px] md:text-xs font-black text-black mb-2 uppercase tracking-widest bg-yellow-300 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    What will you primarily audit?
                  </label>
                  <select
                    id="usecase"
                    name="usecase"
                    className="w-full px-4 py-3 bg-gray-100 border-[4px] border-black focus:bg-white focus:ring-0 outline-none transition-all text-black font-bold text-sm appearance-none rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[4px] focus:translate-y-[4px] cursor-pointer"
                  >
                    <option value="Personal project">Personal project</option>
                    <option value="Startup">Startup</option>
                    <option value="Client work">Client work</option>
                    <option value="Agency">Agency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex justify-center py-4 px-4 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base font-black text-white bg-black hover:bg-white hover:text-black transition-all uppercase tracking-widest disabled:opacity-70 mt-6 active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
                >
                  {status === "submitting" ? "Processing..." : "Join the Waitlist"}
                </button>
              </form>
            )}
            <p className="mt-6 text-center text-xs font-bold text-gray-500 border-t-[2px] border-gray-300 pt-4">
              We'll email you when we're ready. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
