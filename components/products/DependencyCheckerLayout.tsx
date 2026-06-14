import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

interface Props {
  product: ProductData;
}

export default function DependencyCheckerLayout({ product }: Props) {
  // Assuming product has fields: name, tagline, description, features, price, etc.
  
  return (
    <div className="min-h-screen pt-32 pb-12 bg-white text-black font-mono px-4 md:px-8 selection:bg-black selection:text-white">
      <div className="max-w-5xl mx-auto border-[3px] border-black bg-white p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Root Module */}
        <div className="mb-6">
          <h1 className="text-xl md:text-3xl font-bold uppercase tracking-tighter mb-2 bg-black text-white inline-block px-3 py-1 break-all sm:break-normal">
            {product.h1 || 'Dependency Checker'}
          </h1>
          <p className="text-xs md:text-sm font-bold border-l-4 border-black pl-3 mt-2 break-words text-gray-700">
            {product.subheadline || 'Analyze, update, and secure your dependency tree.'}
          </p>
        </div>

        {/* Tree Connectors */}
        <div className="relative pl-6">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-black"></div>

          {/* Node 1 */}
          <div className="relative mb-6">
            <div className="absolute top-4 -left-6 w-6 h-px bg-black"></div>
            <div className="border-[3px] border-black p-3 bg-gray-50 hover:bg-gray-100 transition-none ml-2 md:ml-4">
              <h2 className="text-xs md:text-sm font-bold uppercase border-b-2 border-black pb-1 mb-2">
                ├─ Description
              </h2>
              <p className="text-xs leading-relaxed break-words">
                {product.whatItDoes || 'Deep scan your entire node_modules graph. Find vulnerabilities, outdated packages, and bloated dependencies before they hit production.'}
              </p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="relative mb-6">
            <div className="absolute top-4 -left-6 w-6 h-px bg-black"></div>
            <div className="border-[3px] border-black p-3 bg-white ml-6 md:ml-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xs md:text-sm font-bold uppercase border-b-2 border-black pb-1 mb-2">
                ├─ Features
              </h2>
              <ul className="space-y-1 text-xs">
                {(product.checksFor || [
                  'Automated vulnerability scanning',
                  'License compliance checks',
                  'Bundle size analysis',
                  'One-click update PRs'
                ]).map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 flex-shrink-0 text-gray-500">├──</span>
                    <span className="font-bold break-words">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Node 3 (Nested) */}
          <div className="relative mb-8 pl-6 md:pl-12">
            <div className="absolute top-0 bottom-0 left-6 md:left-12 w-px bg-black"></div>
            <div className="absolute top-4 left-0 w-6 md:w-12 h-px bg-black"></div>
            
            <div className="relative mt-6">
              <div className="absolute top-4 -left-6 w-6 h-px bg-black"></div>
              <div className="border-[3px] border-black p-3 bg-gray-900 text-white ml-2 md:ml-4">
                <h2 className="text-xs md:text-sm font-bold uppercase border-b-2 border-white pb-1 mb-2">
                  └─ Action Required
                </h2>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <div>
                    <p className="text-xs md:text-sm mb-1 font-bold">Price: {'Included'}</p>
                    <p className="text-[10px] md:text-xs text-gray-400">Join the waitlist to secure early access.</p>
                  </div>
                  <Link 
                    href="?waitlist=true" 
                    scroll={false}
                    className="inline-block bg-white text-black border-[3px] border-black px-3 py-2 text-xs font-bold uppercase hover:bg-gray-200 active:translate-y-1 active:translate-x-1 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none transition-all whitespace-nowrap"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* End of Tree */}
          <div className="relative">
            <div className="absolute top-0 -left-6 w-6 h-px bg-black"></div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest pl-4">
              EOF
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
