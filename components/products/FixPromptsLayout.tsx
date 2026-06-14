import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function FixPromptsLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 font-mono text-black px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto border-[3px] border-black bg-white flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <div className="border-b-[3px] border-black bg-black text-white p-3 flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest">{product.h1} {"// TERMINAL"}</h1>
          <span className="bg-white text-black px-2 py-1 text-[10px] font-bold border-[3px] border-white">STATUS: ONLINE</span>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col p-4 md:p-6 space-y-4 bg-white">
          
          {/* USER Message */}
          <div className="flex flex-col items-end w-full">
            <div className="w-full md:w-[80%] border-[3px] border-black bg-gray-50 p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between border-b-[3px] border-black pb-2 mb-3">
                <span className="text-[10px] md:text-xs font-bold uppercase">USER_PROMPT_INIT</span>
                <span className="text-[10px] md:text-xs font-bold uppercase">{new Date().toISOString().split('T')[1].split('.')[0]}</span>
              </div>
              <p className="text-sm md:text-base font-bold uppercase leading-snug">{product.subheadline}</p>
            </div>
          </div>

          {/* AGENT Message */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full md:w-[90%] border-[3px] border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between border-b-[3px] border-black pb-2 mb-3 bg-gray-900 text-white p-2">
                <span className="text-[10px] md:text-xs font-bold uppercase">SYSTEM_RESPONSE // AGENT</span>
                <span className="text-[10px] md:text-xs font-bold uppercase">CODEAUDIT_AI</span>
              </div>
              
              <p className="mb-4 leading-relaxed font-bold text-xs md:text-sm border-l-[6px] border-black pl-3">
                {product.whatItDoes}
              </p>
              
              {product.promptCards && product.promptCards.length > 0 && (
                <div className="border-[3px] border-black mb-6">
                  <div className="bg-black text-white p-2 text-xs font-bold uppercase border-b-[3px] border-black flex justify-between">
                    <span>GENERATED_PROMPTS.JSON</span>
                    <span>{product.promptCards.length} FILES</span>
                  </div>
                  <div className="p-3 grid grid-cols-1 gap-4 bg-gray-50">
                    {product.promptCards.map((card, idx) => (
                      <div key={idx} className="border-[3px] border-black bg-white p-3 relative">
                        <div className="absolute top-[-14px] left-4 bg-black text-white px-2 py-1 text-[10px] font-bold uppercase border-[3px] border-black">
                          {card.severity} SEVERITY
                        </div>
                        <div className="mt-2 flex justify-between items-center mb-3 border-b-[3px] border-black pb-2">
                          <span className="font-bold text-xs uppercase truncate">FILE: {card.file}</span>
                        </div>
                        <div className="mb-3">
                          <span className="font-bold block mb-1 text-[10px] md:text-xs bg-gray-900 text-white inline-block px-1">ISSUE_DETECTED:</span>
                          <p className="text-xs font-bold border-l-[3px] border-black pl-2">{card.issue}</p>
                        </div>
                        <div>
                          <span className="font-bold block mb-1 text-[10px] md:text-xs bg-black text-white inline-block px-1">RECOMMENDED_FIX_PROMPT:</span>
                          <div className="border-[3px] border-black bg-gray-900 text-green-400 p-2 font-mono text-xs mt-2 relative">
                            {card.fix}
                            <button className="absolute top-2 right-2 bg-white text-black border-[3px] border-black px-2 py-1 text-[10px] font-bold hover:bg-gray-200">
                              COPY
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <span className="bg-black text-white px-2 py-1 text-[10px] md:text-xs font-bold uppercase mb-2 inline-block">WORKFLOW_INSTRUCTION</span>
                <p className="text-xs md:text-sm border-[3px] border-black p-3 bg-gray-50 font-bold">
                  {product.workflowDescription}
                </p>
              </div>

              {product.faqs && product.faqs.length > 0 && (
                <div className="mt-6 border-[3px] border-black">
                  <div className="bg-black text-white p-2 text-[10px] md:text-xs font-bold uppercase border-b-[3px] border-black">
                    KNOWLEDGE_BASE_QUERY
                  </div>
                  <div className="p-3 bg-white space-y-3">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="border-[3px] border-black p-2 bg-gray-50 text-xs md:text-sm">
                        <p className="font-bold text-xs uppercase border-b-[3px] border-black pb-2 mb-2">Q: {faq.q}</p>
                        <p className="text-xs md:text-sm">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Input Footer */}
        <div className="border-t-[3px] border-black bg-gray-50 p-3 md:p-4 flex flex-col md:flex-row gap-3 items-stretch">
          <div className="flex-grow border-[3px] border-black bg-white p-2 flex items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-gray-400 mr-4 font-bold">{'>'}</span>
            <span className="animate-pulse w-3 h-4 bg-black"></span>
          </div>
          <Link href="?waitlist=true" scroll={false} className="border-[3px] border-black bg-black text-white px-4 py-3 text-sm md:text-base font-bold uppercase hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center text-center">
            EXECUTE_WAITLIST_JOIN
          </Link>
        </div>
      </div>
    </div>
  );
}
