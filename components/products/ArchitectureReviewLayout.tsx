import React from 'react';
import Link from 'next/link';
import type { ProductData } from '@/data/products';

interface Props {
  product: ProductData;
}

export default function ArchitectureReviewLayout({ product }: Props) {
  // Assuming product has fields: name, tagline, description, features, price, etc.
  
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 text-black font-mono px-4 sm:px-8 selection:bg-blue-200 selection:text-black">
      <div className="max-w-6xl mx-auto border-[3px] border-black bg-white relative overflow-hidden">
        
        {/* Blueprint Grid Background Pattern (CSS via inline style or classes) */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>

        <div className="relative z-10">
          {/* Header Block */}
          <header className="border-b-[3px] border-black bg-blue-50/50 flex flex-col md:flex-row">
            <div className="p-4 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex-1">
              <h1 className="text-xl md:text-3xl font-bold uppercase tracking-tight mb-1 break-all sm:break-normal">
                {product.h1 || 'Architecture Review'}
              </h1>
              <p className="text-xs md:text-sm font-bold text-gray-600 uppercase">
                {product.subheadline || 'System Design Analysis & Optimization'}
              </p>
            </div>
            <div className="p-4 w-full md:w-48 flex flex-col justify-center bg-white">
              <div className="text-[10px] font-bold uppercase mb-1 border-b border-black text-gray-500">Project ID</div>
              <div className="text-sm font-bold">AR-9000</div>
              <div className="text-[10px] font-bold uppercase mt-3 border-b border-black text-gray-500">Status</div>
              <div className="text-xs font-bold text-blue-600">PENDING_REVIEW</div>
            </div>
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Column (Details) */}
            <div className="col-span-1 lg:col-span-2 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
              
              {/* Description Block */}
              <div className="p-4 border-b-[3px] border-black bg-white">
                <h2 className="text-xs font-bold uppercase mb-2 bg-blue-100 inline-block px-2 py-1 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  1.0 Specification
                </h2>
                <p className="text-xs leading-relaxed font-medium">
                  {product.whatItDoes || 'A comprehensive tear-down of your application architecture. We evaluate scalability, security, performance bottlenecks, and technical debt. Delivered as a highly actionable engineering document.'}
                </p>
              </div>

              {/* Features Block */}
              <div className="p-4 bg-white">
                <h2 className="text-xs font-bold uppercase mb-4 bg-blue-100 inline-block px-2 py-1 border-[3px] border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  2.0 Core Components
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(product.checksFor || [
                    'Database Schema Audit',
                    'API Design Review',
                    'Infrastructure as Code',
                    'Security & Auth Patterns'
                  ]).map((feature, idx) => (
                    <div key={idx} className="border-[3px] border-black p-2 relative bg-gray-50">
                      {/* Isometric corner accent */}
                      <div className="absolute top-0 right-0 w-3 h-3 bg-black"></div>
                      <div className="text-[10px] font-bold text-gray-500 mb-1 border-b border-black inline-block">
                        FIG {idx + 1}
                      </div>
                      <h3 className="font-bold text-xs">{feature}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar/Action) */}
            <div className="col-span-1 bg-gray-50 flex flex-col">
              
              {/* Info Block */}
              <div className="p-4 border-b-[3px] border-black flex-1">
                <h2 className="text-xs font-bold uppercase mb-3 bg-black text-white inline-block px-2 py-1">
                  System Parameters
                </h2>
                <ul className="space-y-2 text-xs">
                  <li className="flex justify-between border-b border-black pb-1">
                    <span className="font-bold uppercase text-gray-600">Complexity</span>
                    <span className="font-bold">High</span>
                  </li>
                  <li className="flex justify-between border-b border-black pb-1">
                    <span className="font-bold uppercase text-gray-600">Format</span>
                    <span className="font-bold">PDF / Web</span>
                  </li>
                  <li className="flex justify-between border-b border-black pb-1">
                    <span className="font-bold uppercase text-gray-600">Price</span>
                    <span className="font-bold text-green-600">{'Included'}</span>
                  </li>
                </ul>
              </div>

              {/* Action Block */}
              <div className="p-4 bg-white border-t-[3px] border-black mt-auto">
                <h2 className="text-xs font-bold uppercase mb-2 border-b-[3px] border-black pb-1">
                  Execute Build
                </h2>
                <p className="text-[10px] font-bold mb-4 text-gray-500 leading-relaxed">
                  Initialize the waitlist sequence to secure your spot for the architecture review.
                </p>
                <Link 
                  href="?waitlist=true" 
                  scroll={false}
                  className="block text-center bg-black text-white border-[3px] border-black px-3 py-2 text-xs font-bold uppercase hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  [ Initialize ]
                </Link>
              </div>
            </div>
          </div>
          
          {/* Blueprint Footer */}
          <footer className="border-t-[3px] border-black p-4 bg-black text-white flex justify-between items-center text-sm font-bold uppercase">
            <div>CodeAudit.dev © 2026</div>
            <div>Rev 1.0.0</div>
          </footer>
        </div>
      </div>
    </div>
  );
}
