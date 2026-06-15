import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function FixPromptsLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black px-4 md:px-8">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="w-full max-w-[85rem] mx-auto border-[4px] border-black bg-white flex flex-col shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative z-10">
        {/* Header */}
        <div className="border-b-[4px] border-black bg-blue-600 text-white p-4 md:p-6 flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[1]">{product.h1}</h1>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col p-4 md:p-8 space-y-8 bg-gray-100">
          
          {/* USER Message */}
          <div className="flex flex-col items-end w-full">
            <div className="w-full md:w-[80%] border-[4px] border-black bg-white p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between border-b-[4px] border-black pb-2 mb-4">
                <span className="text-xs md:text-sm font-black uppercase tracking-widest text-blue-600">USER PROMPT</span>
                <span className="text-[10px] md:text-xs font-black uppercase">{new Date().toISOString().split('T')[1].split('.')[0]}</span>
              </div>
              <p className="text-sm md:text-base font-black uppercase leading-snug text-black">{product.subheadline}</p>
            </div>
          </div>

          {/* AGENT Message */}
          <div className="flex flex-col items-start w-full">
            <div className="w-full md:w-[90%] border-[4px] border-black bg-white p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between border-b-[4px] border-black pb-2 mb-4 bg-black text-white p-2">
                <span className="text-xs md:text-sm font-black uppercase tracking-widest text-green-400">AI RESPONSE</span>
                <span className="text-[10px] md:text-xs font-black uppercase">CODEAUDIT_AI</span>
              </div>
              
              <p className="mb-6 leading-relaxed font-bold text-xs md:text-sm border-l-[6px] border-black pl-4 bg-gray-50 py-2">
                {product.whatItDoes}
              </p>
              
              {product.promptCards && product.promptCards.length > 0 && (
                <div className="border-[4px] border-black mb-8 shadow-[4px_4px_0_0_#000]">
                  <div className="bg-black text-white p-3 text-[10px] md:text-xs font-black uppercase border-b-[4px] border-black flex justify-between tracking-widest">
                    <span>GENERATED_PROMPTS.JSON</span>
                    <span className="bg-yellow-300 text-black px-2 py-0.5 border-[2px] border-white">{product.promptCards.length} FILES</span>
                  </div>
                  <div className="p-4 grid grid-cols-1 gap-6 bg-gray-200">
                    {product.promptCards.map((card, idx) => (
                      <div key={idx} className="border-[4px] border-black bg-white p-4 relative shadow-[4px_4px_0_0_#000]">
                        <div className="absolute top-[-16px] left-4 bg-black text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase border-[4px] border-black shadow-[2px_2px_0_0_#fff]">
                          {card.severity} SEVERITY
                        </div>
                        <div className="mt-4 flex justify-between items-center mb-4 border-b-[4px] border-black pb-2">
                          <span className="font-black text-[10px] md:text-xs uppercase truncate text-blue-700">FILE: {card.file}</span>
                        </div>
                        <div className="mb-4 bg-gray-50 p-2 border-[2px] border-black">
                          <span className="font-black block mb-2 text-xs md:text-sm text-red-600 uppercase tracking-widest border-b-[2px] border-red-600 pb-1">ISSUE_DETECTED:</span>
                          <p className="text-[10px] md:text-xs font-bold border-l-[4px] border-red-500 pl-3 py-1">{card.issue}</p>
                        </div>
                        <div>
                          <span className="font-black block mb-2 text-xs md:text-sm text-black uppercase tracking-widest border-b-[2px] border-black pb-1">RECOMMENDED_FIX_PROMPT:</span>
                          <div className="border-[4px] border-black bg-gray-900 text-green-400 p-4 font-mono text-[10px] md:text-xs mt-2 relative shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] leading-relaxed">
                            {card.fix}
                            <button className="absolute top-3 right-3 bg-white text-black border-[4px] border-black px-3 py-1 text-[10px] font-black hover:bg-gray-200 shadow-[2px_2px_0_0_#fff] active:translate-y-1 active:shadow-none transition-all">
                              COPY
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <span className="text-black text-sm font-black uppercase mb-3 block tracking-widest border-b-[4px] border-black pb-2">WORKFLOW INSTRUCTION</span>
                <p className="text-sm border-l-[4px] border-black pl-4 py-2 font-bold bg-yellow-100">
                  {product.workflowDescription}
                </p>
              </div>

              {product.faqs && product.faqs.length > 0 && (
                <div className="mt-8 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
                  <div className="bg-blue-600 text-white p-3 text-[10px] md:text-xs font-black uppercase border-b-[4px] border-black tracking-widest">
                    KNOWLEDGE_BASE_QUERY
                  </div>
                  <div className="p-4 bg-white space-y-4">
                    {product.faqs.map((faq, idx) => (
                      <div key={idx} className="border-[4px] border-black p-3 bg-gray-50 text-[10px] md:text-xs">
                        <p className="font-black text-[10px] md:text-xs uppercase border-b-[4px] border-black pb-2 mb-2">Q: {faq.q}</p>
                        <p className="text-[10px] md:text-xs font-bold mt-2">A: {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Input Footer */}
        <div className="border-t-[4px] border-black bg-yellow-300 p-4 md:p-6 flex flex-col md:flex-row gap-4 items-stretch">
          <div className="flex-grow border-[4px] border-black bg-black text-green-400 p-4 flex items-center shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
            <span className="text-green-400 mr-4 font-black">{'>'}</span>
            <span className="animate-pulse w-3 h-5 bg-green-400"></span>
          </div>
          <Link href="?waitlist=true" scroll={false} className="border-[4px] border-black bg-white text-black px-6 py-4 text-xs md:text-sm font-black uppercase hover:bg-gray-100 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex items-center justify-center text-center tracking-widest">
            EXECUTE_WAITLIST_JOIN
          </Link>
        </div>
      </div>
    </div>
  );
}
