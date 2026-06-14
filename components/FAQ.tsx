"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const defaultFaqs = [
  {
    id: "SEC-01",
    question: "Does CodeAudit access my private code?",
    answer: "Only repositories you explicitly authorize are analyzed. Source code is never retained or stored after the analysis pipeline completes."
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
    <section id="faq" className="py-24 px-4 md:px-6 max-w-[90rem] mx-auto w-full bg-white border-t border-gray-200">
      
      <div className="mb-12 max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
          Documentation
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Frequently Asked Questions
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          Technical details and platform capabilities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-300">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border-b border-gray-300 bg-white">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-6">
                   <span className="font-mono text-xs font-bold text-gray-400 hidden sm:block w-16">
                     {faq.id || `FAQ-0${index + 1}`}
                   </span>
                   <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-blue-600'}`}>
                     {faq.question}
                   </span>
                </div>
                
                <div className="text-gray-400 ml-4">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              {isOpen && (
                <div className="px-4 md:px-6 pb-8 ml-0 sm:ml-[5.5rem] max-w-2xl">
                  <p className="text-gray-600 text-base leading-relaxed">
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
