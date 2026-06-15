import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

interface Props {
  product: ProductData;
}

export default function ArchitectureReviewLayout({ product }: Props) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black px-4 sm:px-8 selection:bg-blue-200 selection:text-black">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] mx-auto border-[4px] border-black bg-white relative overflow-hidden shadow-[12px_12px_0_0_#000] z-10">
        
        {/* Blueprint Grid Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="relative z-10">
          {/* Header Block */}
          <header className="border-b-[4px] border-black bg-blue-600 flex flex-col md:flex-row text-white">
            <div className="p-4 md:p-6 border-b-[4px] md:border-b-0 md:border-r-[4px] border-black flex-1">
              <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 break-all sm:break-normal leading-[1] border-b-[4px] border-white pb-2 inline-block">
                {product.h1 || 'Architecture Review'}
              </h1>
              <p className="text-sm md:text-base font-black text-white uppercase mt-2">
                {product.subheadline || 'System Design Analysis & Optimization'}
              </p>
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Column (Details) */}
            <div className="col-span-1 lg:col-span-2 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black">
              
              {/* Description Block */}
              <div className="p-6 md:p-8 border-b-[4px] border-black bg-white">
                <h2 className="text-lg md:text-xl font-black uppercase mb-4 text-black border-b-[4px] border-black pb-2">
                  1.0 Specification
                </h2>
                <p className="text-xs md:text-sm leading-relaxed font-bold border-l-[4px] border-black pl-4 bg-gray-100 py-2 pr-4">
                  {product.whatItDoes || 'A comprehensive tear-down of your application architecture. We evaluate scalability, security, performance bottlenecks, and technical debt. Delivered as a highly actionable engineering document.'}
                </p>
              </div>

              {/* Features Block */}
              <div className="p-6 md:p-8 bg-white">
                <h2 className="text-lg md:text-xl font-black uppercase mb-6 text-black border-b-[4px] border-black pb-2">
                  2.0 Core Components
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(product.checksFor || [
                    'Database Schema Audit',
                    'API Design Review',
                    'Infrastructure as Code',
                    'Security & Auth Patterns'
                  ]).map((feature, idx) => (
                    <div key={idx} className="border-[4px] border-black p-4 relative bg-gray-100 shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] transition-transform">
                      {/* Isometric corner accent */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-black"></div>
                      <div className="text-[10px] font-black text-gray-500 mb-2 border-b-[2px] border-black inline-block bg-white px-1">
                        FIG {idx + 1}
                      </div>
                      <h3 className="font-black text-[10px] md:text-xs uppercase">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar/Action) */}
            <div className="col-span-1 bg-white flex flex-col">
              
              {/* Info Block */}
              <div className="p-6 md:p-8 border-b-[4px] border-black flex-1 bg-gray-100">
                <h2 className="text-lg md:text-xl font-black uppercase mb-6 text-black border-b-[4px] border-black pb-2">
                  System Parameters
                </h2>
                <ul className="space-y-4 text-[10px] md:text-xs font-bold">
                  <li className="flex justify-between border-b-[2px] border-black pb-2">
                    <span className="font-black uppercase text-gray-600">Complexity</span>
                    <span className="font-black text-black">High</span>
                  </li>
                  <li className="flex justify-between border-b-[2px] border-black pb-2">
                    <span className="font-black uppercase text-gray-600">Format</span>
                    <span className="font-black text-black">PDF / Web</span>
                  </li>
                  <li className="flex justify-between border-b-[2px] border-black pb-2">
                    <span className="font-black uppercase text-gray-600">Price</span>
                    <span className="font-black text-black">Included</span>
                  </li>
                </ul>
              </div>

              {/* Action Block */}
              <div className="p-6 md:p-8 bg-yellow-300 mt-auto">
                <h2 className="text-lg md:text-xl font-black uppercase mb-4 border-b-[4px] border-black pb-2 text-black">
                  Execute Build
                </h2>
                <p className="text-[10px] md:text-xs font-bold mb-6 text-black leading-relaxed bg-white border-[4px] border-black p-2">
                  Initialize the waitlist sequence to secure your spot for the architecture review.
                </p>
                <Link 
                  href="?waitlist=true" 
                  scroll={false}
                  className="block text-center bg-black text-white border-[4px] border-black px-4 py-3 text-[10px] md:text-xs font-black uppercase hover:bg-white hover:text-black shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 transition-all tracking-widest"
                >
                  [ Initialize ]
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
