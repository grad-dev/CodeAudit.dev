import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

interface Props {
  product: ProductData;
}

export default function DependencyCheckerLayout({ product }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black px-4 md:px-8 selection:bg-black selection:text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] mx-auto border-[4px] border-black bg-white p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative z-10">
        
        {/* Root Module */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-black border-b-[4px] border-black pb-2 inline-block">
            {product.h1 || 'Dependency Checker'}
          </h1>
          <p className="text-xs md:text-sm font-bold border-l-[4px] border-black pl-4 mt-2 break-words text-gray-800 bg-yellow-300 py-2">
            {product.subheadline || 'Analyze, update, and secure your dependency tree.'}
          </p>
        </div>

        {/* Tree Connectors */}
        <div className="relative pl-6 md:pl-10">
          <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-black"></div>

          {/* Node 1 */}
          <div className="relative mb-10">
            <div className="absolute top-6 -left-6 md:-left-10 w-6 md:w-10 h-[4px] bg-black"></div>
            <div className="border-[4px] border-black p-4 md:p-6 bg-gray-100 ml-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all">
              <h2 className="text-sm md:text-base font-black uppercase border-b-[4px] border-black pb-2 mb-3 tracking-widest">
                ├─ Description
              </h2>
              <p className="text-xs md:text-sm leading-relaxed break-words font-bold">
                {product.whatItDoes || 'Deep scan your entire node_modules graph. Find vulnerabilities, outdated packages, and bloated dependencies before they hit production.'}
              </p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="relative mb-10">
            <div className="absolute top-6 -left-6 md:-left-10 w-6 md:w-10 h-[4px] bg-black"></div>
            <div className="border-[4px] border-black p-4 md:p-6 bg-white ml-10 md:ml-16 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all">
              <h2 className="text-sm md:text-base font-black uppercase border-b-[4px] border-black pb-2 mb-4 tracking-widest text-blue-700">
                ├─ Features
              </h2>
              <ul className="space-y-3 text-xs md:text-sm font-bold">
                {(product.checksFor || [
                  'Automated vulnerability scanning',
                  'License compliance checks',
                  'Bundle size analysis',
                  'One-click update PRs'
                ]).map((feature, idx) => (
                  <li key={idx} className="flex items-start bg-gray-50 p-2 border-[2px] border-black">
                    <span className="mr-3 flex-shrink-0 text-black font-black">├──</span>
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Node 3 (Nested) */}
          <div className="relative mb-12 pl-10 md:pl-16">
            <div className="absolute top-0 bottom-0 left-10 md:left-16 w-[4px] bg-black"></div>
            <div className="absolute top-6 left-0 w-10 md:w-16 h-[4px] bg-black"></div>
            
            <div className="relative mt-8">
              <div className="absolute top-6 -left-10 md:-left-16 w-10 md:w-16 h-[4px] bg-black"></div>
              <div className="border-[4px] border-black p-5 md:p-8 bg-black text-white ml-6 md:ml-8 shadow-[8px_8px_0_0_#fff] border-white">
                <h2 className="text-sm md:text-base font-black uppercase border-b-[4px] border-white pb-2 mb-4 tracking-widest text-green-400">
                  └─ Action Required
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                  <div className="border-l-[4px] border-white pl-4">
                    <p className="text-xs md:text-sm mb-1 font-black uppercase">Price: <span className="bg-white text-black px-2">Included</span></p>
                    <p className="text-[10px] md:text-xs text-gray-300 font-bold mt-2">Join the waitlist to secure early access.</p>
                  </div>
                  <Link 
                    href="?waitlist=true" 
                    scroll={false}
                    className="inline-block bg-white text-black border-[4px] border-black px-6 py-3 text-xs md:text-sm font-black uppercase hover:bg-gray-200 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.8)] transition-all whitespace-nowrap tracking-widest"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* End of Tree */}
          <div className="relative">
            <div className="absolute top-0 -left-6 md:-left-10 w-6 md:w-10 h-[4px] bg-black"></div>
            <div className="text-[10px] md:text-xs font-black text-black uppercase tracking-widest pl-6 ml-4 mt-[-4px]">
              EOF
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
