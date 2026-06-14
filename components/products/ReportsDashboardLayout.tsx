import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function ReportsDashboardLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-900 font-mono text-black px-4 md:px-12 overflow-x-hidden">
      {/* Paper Container */}
      <div className="w-full max-w-[850px] mx-auto bg-white border-[4px] border-black p-4 md:p-6 relative shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] my-6">
        
        {/* Decorative elements simulating printer tracks */}
        <div className="absolute left-[-20px] md:left-[-32px] top-0 bottom-0 w-8 flex flex-col justify-between py-4 bg-white border-r-[4px] border-black">
          {[...Array(40)].map((_, i) => (
            <div key={`left-${i}`} className="w-3 h-3 border-[3px] border-black bg-white mx-auto"></div>
          ))}
        </div>
        <div className="absolute right-[-20px] md:right-[-32px] top-0 bottom-0 w-8 flex flex-col justify-between py-4 bg-white border-l-[4px] border-black">
          {[...Array(40)].map((_, i) => (
            <div key={`right-${i}`} className="w-3 h-3 border-[3px] border-black bg-white mx-auto"></div>
          ))}
        </div>

        {/* Document Header */}
        <div className="border-b-[6px] border-black pb-4 mb-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold uppercase tracking-widest mb-2 bg-black text-white inline-block px-2 py-1">CODEAUDIT.DEV // INTERNAL DOCUMENT</h2>
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mt-2">{product.h1}</h1>
            </div>
            <div className="text-right border-[4px] border-black p-2 bg-gray-50 flex-shrink-0">
              <div className="text-[10px] uppercase font-bold border-b-[3px] border-black pb-1 mb-1">DOC_ID: CA-{new Date().getFullYear()}-REV</div>
              <div className="text-[10px] uppercase font-bold border-b-[3px] border-black pb-1 mb-1">DATE: {new Date().toISOString().split('T')[0]}</div>
              <div className="text-[10px] uppercase font-bold text-white bg-black px-1 mt-2">CLASSIFICATION: CONFIDENTIAL</div>
            </div>
          </div>
          <div className="border-[4px] border-black bg-gray-50 p-3">
            <p className="text-sm md:text-base font-bold uppercase leading-snug">
              {product.subheadline}
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6 border-[4px] border-black p-4 relative">
          <h3 className="bg-black text-white font-bold uppercase text-xs px-2 py-1 inline-block absolute top-[-14px] left-4 border-[3px] border-black">1.0 EXECUTIVE SUMMARY</h3>
          <div className="mt-3">
            <p className="text-xs md:text-sm leading-relaxed font-bold">
              {product.whatItDoes}
            </p>
            <p className="text-xs md:text-sm leading-relaxed font-bold mt-3 border-t-[3px] border-black border-dashed pt-3">
              {product.workflowDescription}
            </p>
          </div>
        </div>

        {/* Features Table */}
        {product.features && product.features.length > 0 && (
          <div className="mb-6">
            <h3 className="bg-black text-white font-bold uppercase text-xs px-2 py-1 inline-block mb-3 border-[3px] border-black">2.0 FEATURE SPECIFICATION</h3>
            <div className="border-[4px] border-black">
              <div className="flex border-b-[4px] border-black bg-gray-50 font-bold uppercase text-[10px]">
                <div className="w-12 border-r-[4px] border-black p-2 flex items-center justify-center">REF</div>
                <div className="p-2 flex-grow">SPECIFICATION_DETAILS</div>
              </div>
              {product.features.map((feature, idx) => (
                <div key={idx} className={`flex border-black ${idx !== product.features!.length - 1 ? 'border-b-[4px]' : ''}`}>
                  <div className="w-12 border-r-[4px] border-black p-2 flex items-center justify-center font-bold text-sm bg-gray-50">
                    2.{idx + 1}
                  </div>
                  <div className="p-2 flex-grow uppercase text-xs font-bold flex items-center">
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-6">
            <h3 className="bg-black text-white font-bold uppercase text-xs px-2 py-1 inline-block mb-3 border-[3px] border-black">3.0 Q&A ADDENDUM</h3>
            <div className="grid grid-cols-1 gap-4">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="border-[4px] border-black p-3 relative bg-white">
                  <div className="absolute top-[-14px] left-4 bg-white px-1 font-bold text-[10px] border-[4px] border-black uppercase">
                    QUERY_{idx + 1}
                  </div>
                  <div className="mt-2">
                    <p className="font-bold text-xs uppercase mb-2 bg-gray-50 p-2 border-[3px] border-black">SUBJECT: {faq.q}</p>
                    <p className="text-xs font-bold pl-2 border-l-[4px] border-black">RESPONSE: {faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer / CTA Action */}
        <div className="mt-8 border-t-[6px] border-black pt-4 flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="flex flex-col flex-grow">
            <span className="text-xs uppercase font-bold mb-1">END OF DOCUMENT // SIGNATURE REQUIRED</span>
            <div className="border-[4px] border-black border-dashed p-4 w-full max-w-sm mt-1 relative">
              <span className="absolute bottom-1 right-1 text-[10px] font-bold uppercase text-gray-400">SIGN HERE X</span>
            </div>
          </div>
          
          <Link href="?waitlist=true" scroll={false} className="border-[6px] border-black bg-white text-black px-4 py-3 font-black uppercase text-sm md:text-base hover:bg-black hover:text-white transition-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]">
            JOIN_WAITLIST_PROTOCOL
          </Link>
        </div>
      </div>
    </div>
  );
}
