"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const defaultFaqs = [
  {
    id: "SEC-01",
    question: "Does CodeAudit access my private code?",
    answer: "Only repositories you explicitly authorize are analyzed. We do not retain or store source code beyond the active analysis session."
  },
  {
    id: "PERF-01",
    question: "How long does an audit take?",
    answer: "Typical repository scans complete within 5 to 45 seconds, depending on the complexity of the dependency tree and total lines of code."
  },
  {
    id: "RES-01",
    question: "Do you provide automated fixes?",
    answer: "Every vulnerability detected includes an exact trace to the source file, an explanation of the risk, and a drop-in code snippet to remediate the issue."
  },
  {
    id: "ARCH-01",
    question: "Is this a penetration test?",
    answer: "No. CodeAudit performs static code analysis (SAST) and architectural review. It is designed to run locally or in CI/CD to catch issues before deployment."
  },
  {
    id: "ENV-01",
    question: "What repositories are supported?",
    answer: "Currently supporting GitHub repositories. Support for GitLab and Bitbucket will be introduced in subsequent platform updates."
  },
  {
    id: "LAUNCH-01",
    question: "When will CodeAudit launch?",
    answer: "The platform is in private beta. Initial access batches are being provisioned to waitlist members. Ensure you request access to secure your position in the queue."
  },
  {
    id: "BILL-01",
    question: "What will it cost?",
    answer: "Pricing documentation is pending release. Waitlist members will receive priority pricing allocations during the beta period."
  }
];

interface FAQProps {
  faqs?: { id?: string, question: string; answer: string }[];
}

const FAQ = ({ faqs = defaultFaqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 md:px-8 max-w-[85rem] mx-auto w-full bg-white border-t-[4px] border-black">
      
      <div className="mb-12 max-w-3xl bg-blue-600 p-6 text-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-[1]">
          Frequently Asked Questions
        </h2>
        <p className="text-xs md:text-sm text-white font-bold leading-relaxed border-l-[4px] border-black pl-4 bg-blue-700 py-2">
          Technical details and platform capabilities.
        </p>
      </div>

      <div className="max-w-3xl mx-auto border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-white">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b-[4px] border-black last:border-b-0 bg-white">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full flex items-center justify-between py-5 px-5 text-left transition-colors group ${isOpen ? 'bg-yellow-300' : 'hover:bg-gray-100'}`}
              >
                <div className="flex items-center gap-4">
                   <span className={`text-base font-black uppercase tracking-tight transition-colors ${isOpen ? 'text-black' : 'text-black group-hover:text-blue-600'}`}>
                     {faq.question}
                   </span>
                </div>
                
                <div className={`ml-4 p-1.5 border-[2px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${isOpen ? 'bg-white text-black' : 'bg-black text-white group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all'}`}>
                  {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </div>
              </button>
              
              {isOpen && (
                <div className="px-5 pb-6 ml-0 sm:ml-[4.5rem] max-w-xl bg-yellow-300">
                  <p className="text-black text-xs md:text-sm font-bold leading-relaxed border-l-[4px] border-black pl-4 py-2 bg-white">
                    {faq.answer}
                  </p>
                </div>
               )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
