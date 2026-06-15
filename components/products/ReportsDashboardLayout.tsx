import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function ReportsDashboardLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white font-mono text-black px-4 md:px-12 overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      {/* Paper Container */}
      <div className="w-full max-w-[85rem] mx-auto bg-white border-[4px] border-black p-6 md:p-10 relative shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] my-6 z-10">
        
        {/* Decorative elements simulating printer tracks */}
        <div className="absolute left-[-24px] md:left-[-36px] top-0 bottom-0 w-8 flex flex-col justify-between py-4 bg-white border-r-[4px] border-black">
          {[...Array(40)].map((_, i) => (
            <div key={`left-${i}`} className="w-4 h-4 border-[4px] border-black bg-white mx-auto"></div>
          ))}
        </div>
        <div className="absolute right-[-24px] md:right-[-36px] top-0 bottom-0 w-8 flex flex-col justify-between py-4 bg-white border-l-[4px] border-black">
          {[...Array(40)].map((_, i) => (
            <div key={`right-${i}`} className="w-4 h-4 border-[4px] border-black bg-white mx-auto"></div>
          ))}
        </div>

        {/* Document Header */}
        <div className="border-b-[6px] border-black pb-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 bg-black text-white inline-block px-3 py-1">CODEAUDIT.DEV // INTERNAL DOCUMENT</h2>
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mt-2 bg-yellow-300 inline-block px-4 py-2 border-[4px] border-black shadow-[4px_4px_0_0_#000]">{product.h1}</h1>
            </div>
            <div className="text-right border-[4px] border-black p-4 bg-gray-100 flex-shrink-0 shadow-[4px_4px_0_0_#000]">
              <div className="text-[10px] md:text-xs uppercase font-black border-b-[4px] border-black pb-2 mb-2">DOC_ID: CA-{new Date().getFullYear()}-REV</div>
              <div className="text-[10px] md:text-xs uppercase font-black border-b-[4px] border-black pb-2 mb-2">DATE: {new Date().toISOString().split('T')[0]}</div>
              <div className="text-[10px] md:text-xs uppercase font-black text-white bg-red-600 px-2 py-1 mt-3 border-[2px] border-black">CLASSIFICATION: CONFIDENTIAL</div>
            </div>
          </div>
          <div className="border-[4px] border-black bg-blue-600 text-white p-5 shadow-[6px_6px_0_0_#000]">
            <p className="text-xs md:text-sm font-black uppercase leading-snug">
              {product.subheadline}
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-10 border-[4px] border-black p-6 md:p-8 relative bg-white shadow-[6px_6px_0_0_#000]">
          <h3 className="bg-black text-white font-black uppercase text-[10px] md:text-xs px-3 py-1 inline-block absolute top-[-16px] left-6 border-[4px] border-black shadow-[2px_2px_0_0_#fff]">1.0 EXECUTIVE SUMMARY</h3>
          <div className="mt-4">
            <p className="text-xs md:text-sm leading-relaxed font-bold border-l-[4px] border-black pl-4 bg-gray-50 py-2">
              {product.whatItDoes}
            </p>
            <p className="text-xs md:text-sm leading-relaxed font-bold mt-6 border-t-[4px] border-black border-dashed pt-4">
              {product.workflowDescription}
            </p>
          </div>
        </div>

        {/* Features Table */}
        {product.features && product.features.length > 0 && (
          <div className="mb-10">
            <h3 className="bg-black text-white font-black uppercase text-[10px] md:text-xs px-3 py-1 inline-block mb-4 border-[4px] border-black shadow-[4px_4px_0_0_#000]">2.0 FEATURE SPECIFICATION</h3>
            <div className="border-[4px] border-black shadow-[6px_6px_0_0_#000]">
              <div className="flex border-b-[4px] border-black bg-gray-200 font-black uppercase text-[10px] md:text-xs tracking-widest">
                <div className="w-16 border-r-[4px] border-black p-3 flex items-center justify-center">REF</div>
                <div className="p-3 flex-grow">SPECIFICATION_DETAILS</div>
              </div>
              {product.features.map((feature, idx) => (
                <div key={idx} className={`flex border-black bg-white hover:bg-yellow-50 transition-colors ${idx !== product.features!.length - 1 ? 'border-b-[4px]' : ''}`}>
                  <div className="w-16 border-r-[4px] border-black p-3 flex items-center justify-center font-black text-xs md:text-sm bg-gray-100">
                    2.{idx + 1}
                  </div>
                  <div className="p-4 flex-grow uppercase text-[10px] md:text-xs font-bold flex items-center">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-10">
            <h3 className="bg-black text-white font-black uppercase text-[10px] md:text-xs px-3 py-1 inline-block mb-4 border-[4px] border-black shadow-[4px_4px_0_0_#000]">3.0 Q&A ADDENDUM</h3>
            <div className="grid grid-cols-1 gap-6">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="border-[4px] border-black p-5 relative bg-gray-100 shadow-[6px_6px_0_0_#000]">
                  <div className="absolute top-[-16px] left-6 bg-white px-2 py-0.5 font-black text-[10px] md:text-xs border-[4px] border-black uppercase tracking-widest">
                    QUERY_{idx + 1}
                  </div>
                  <div className="mt-4">
                    <p className="font-black text-[10px] md:text-xs uppercase mb-3 bg-white p-3 border-[4px] border-black">SUBJECT: {faq.q}</p>
                    <p className="text-[10px] md:text-xs font-bold pl-4 border-l-[4px] border-black py-1 text-gray-800">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer / CTA Action */}
        <div className="mt-12 border-t-[6px] border-black pt-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col flex-grow">
            <span className="text-[10px] md:text-xs uppercase font-black mb-2 tracking-widest">END OF DOCUMENT // SIGNATURE REQUIRED</span>
            <div className="border-[4px] border-black border-dashed p-6 w-full max-w-md mt-2 relative bg-gray-50">
              <span className="absolute bottom-2 right-2 text-[10px] md:text-xs font-black uppercase text-gray-400">SIGN HERE X</span>
            </div>
          </div>
          
          <Link href="?waitlist=true" scroll={false} className="border-[6px] border-black bg-black text-white px-8 py-4 font-black uppercase text-xs md:text-sm hover:bg-white hover:text-black transition-none shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] tracking-widest text-center">
            JOIN_WAITLIST_PROTOCOL
          </Link>
        </div>
      </div>
    </div>
  );
}
