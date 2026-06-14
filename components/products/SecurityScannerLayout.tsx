import type { ProductData } from '@/data/products';
import Link from 'next/link';

export default function SecurityScannerLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-white font-mono text-black px-4 md:px-8">
      <div className="max-w-7xl mx-auto border-[3px] border-black">
        {/* Header */}
        <div className="border-b-[3px] border-black p-4 bg-black text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest">{product.h1}</h1>
            <p className="text-red-400 mt-1 uppercase text-sm font-bold">Incident Report // Classified</p>
          </div>
          <div className="text-right">
            <span className="block text-xs text-gray-400 uppercase">Status</span>
            <span className="text-red-500 font-bold animate-pulse uppercase">Critical</span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-[3px] md:divide-y-0 md:divide-x-[3px] divide-black">
          
          {/* Column 1: Briefing */}
          <div className="p-6 bg-white flex flex-col h-full">
            <div className="mb-8">
              <h2 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Executive Summary</h2>
              <p className="text-lg leading-tight font-bold border-l-[3px] border-red-500 pl-4">{product.subheadline}</p>
            </div>
            
            <div className="mb-8 flex-grow">
              <h2 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Operational Scope</h2>
              <p className="text-sm leading-relaxed">{product.whatItDoes}</p>
            </div>

            <div className="mt-auto pt-8">
              <Link href="?waitlist=true" scroll={false} className="inline-block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 border-[3px] border-black uppercase transition-colors">
                Deploy Scanner
              </Link>
            </div>
          </div>

          {/* Column 2: Detection Capabilities */}
          <div className="p-6 bg-gray-50 flex flex-col h-full">
            <h2 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Active Heuristics</h2>
            <ul className="space-y-3 flex-grow">
              {product.checksFor?.map((check, idx) => (
                <li key={idx} className="flex items-start text-sm border-b-2 border-dashed border-gray-300 pb-2">
                  <span className="text-red-600 mr-2 font-bold">[{String(idx + 1).padStart(2, '0')}]</span>
                  <span className="font-medium">{check}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t-[3px] border-black">
              <h2 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Integration Workflow</h2>
              <p className="text-sm bg-black text-green-400 p-4 border-[3px] border-black leading-relaxed font-bold">
                {product.workflowDescription}
              </p>
            </div>
          </div>

          {/* Column 3: Telemetry & Findings */}
          <div className="p-6 bg-white flex flex-col h-full">
            {product.exampleFinding && (
              <div className="border-[3px] border-red-600 mb-8">
                <div className="bg-red-600 text-white p-2 border-b-[3px] border-red-600 flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-widest">Sample Finding</span>
                  <span className="text-xs font-bold bg-black px-2 py-0.5 border border-black">{product.exampleFinding.severity}</span>
                </div>
                <div className="p-4 bg-red-50">
                  <h3 className="font-bold text-red-900 mb-2 uppercase text-sm border-b-[3px] border-red-200 pb-2">{product.exampleFinding.title}</h3>
                  <p className="text-xs text-red-800 mb-4 leading-relaxed font-medium">{product.exampleFinding.description}</p>
                  <div className="bg-white border-[3px] border-black p-3">
                    <span className="text-xs font-bold text-gray-500 block mb-1 uppercase tracking-widest">Recommended Fix</span>
                    <p className="text-xs font-bold text-black">{product.exampleFinding.fix}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-auto">
              <h2 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest border-b-[3px] border-black pb-2">Query Logs (FAQ)</h2>
              <div className="space-y-4">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="border-l-[3px] border-black pl-3">
                    <p className="text-xs font-bold uppercase mb-1">Q: {faq.q}</p>
                    <p className="text-xs text-gray-700 font-medium">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
