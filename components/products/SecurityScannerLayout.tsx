import type { ProductData } from '@/data/products';
import Link from 'next/link';

export default function SecurityScannerLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white font-mono text-black px-4 md:px-8">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] mx-auto border-[4px] border-black shadow-[12px_12px_0_0_#000] relative z-10 bg-white">
        {/* Header */}
        <div className="border-b-[4px] border-black p-6 md:p-8 bg-black text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-2">{product.h1}</h1>
            <p className="text-red-500 uppercase text-[10px] md:text-xs font-black bg-red-950 inline-block px-2 py-1 border-[2px] border-red-500">Incident Report // Classified</p>
          </div>
          <div className="text-left md:text-right w-full md:w-auto border-t-[2px] border-gray-800 md:border-none pt-4 md:pt-0">
            <span className="block text-[10px] md:text-xs text-gray-500 uppercase font-black tracking-widest mb-1">Status</span>
            <span className="text-white bg-red-600 font-black animate-pulse uppercase px-4 py-2 border-[4px] border-red-900 shadow-[4px_4px_0_0_#7f1d1d] inline-block">Critical</span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y-[4px] lg:divide-y-0 lg:divide-x-[4px] divide-black">
          
          {/* Column 1: Briefing */}
          <div className="p-6 md:p-8 bg-white flex flex-col h-full">
            <div className="mb-10">
              <h2 className="text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest bg-gray-100 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">Executive Summary</h2>
              <p className="text-xs md:text-sm leading-relaxed font-bold border-l-[4px] border-red-600 pl-4 bg-red-50 py-2">{product.subheadline}</p>
            </div>
            
            <div className="mb-10 flex-grow">
              <h2 className="text-[10px] font-black text-gray-500 mb-3 uppercase tracking-widest bg-gray-100 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">Operational Scope</h2>
              <p className="text-xs md:text-sm leading-relaxed font-bold">{product.whatItDoes}</p>
            </div>

            <div className="mt-auto pt-6">
              <Link href="?waitlist=true" scroll={false} className="inline-block w-full text-center bg-red-600 hover:bg-white text-white hover:text-black font-black py-4 px-6 border-[4px] border-black uppercase transition-colors shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] tracking-widest text-xs md:text-sm">
                Deploy Scanner
              </Link>
            </div>
          </div>

          {/* Column 2: Detection Capabilities */}
          <div className="p-6 md:p-8 bg-gray-100 flex flex-col h-full">
            <h2 className="text-[10px] font-black text-gray-500 mb-6 uppercase tracking-widest bg-white inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">Active Heuristics</h2>
            <ul className="space-y-4 flex-grow font-bold text-xs md:text-sm">
              {product.checksFor?.map((check, idx) => (
                <li key={idx} className="flex items-start bg-white p-3 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
                  <span className="text-red-600 mr-3 font-black bg-red-100 px-1 border-[2px] border-red-600">[{String(idx + 1).padStart(2, '0')}]</span>
                  <span className="font-black uppercase mt-0.5">{check}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t-[4px] border-black border-dashed">
              <h2 className="text-[10px] font-black text-gray-500 mb-4 uppercase tracking-widest">Integration Workflow</h2>
              <p className="text-xs bg-black text-green-400 p-5 border-[4px] border-black leading-relaxed font-mono shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                {product.workflowDescription}
              </p>
            </div>
          </div>

          {/* Column 3: Telemetry & Findings */}
          <div className="p-6 md:p-8 bg-white flex flex-col h-full">
            {product.exampleFinding && (
              <div className="border-[4px] border-red-600 mb-10 shadow-[6px_6px_0_0_#dc2626]">
                <div className="bg-red-600 text-white p-3 border-b-[4px] border-red-600 flex justify-between items-center">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">Sample Finding</span>
                  <span className="text-[10px] md:text-xs font-black bg-black text-white px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">{product.exampleFinding.severity}</span>
                </div>
                <div className="p-5 bg-red-50">
                  <h3 className="font-black text-red-900 mb-3 uppercase text-xs md:text-sm border-b-[4px] border-red-200 pb-3">{product.exampleFinding.title}</h3>
                  <p className="text-xs md:text-sm text-red-950 mb-5 leading-relaxed font-bold">{product.exampleFinding.description}</p>
                  <div className="bg-white border-[4px] border-black p-4 shadow-[4px_4px_0_0_#000]">
                    <span className="text-[10px] font-black text-gray-500 block mb-2 uppercase tracking-widest bg-gray-100 inline-block px-2 py-1 border-[2px] border-black">Recommended Fix</span>
                    <p className="text-[10px] md:text-xs font-black text-black border-l-[4px] border-black pl-3">{product.exampleFinding.fix}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-auto">
              <h2 className="text-[10px] font-black text-white bg-black inline-block px-3 py-1 mb-6 uppercase tracking-widest shadow-[4px_4px_0_0_#000]">Query Logs (FAQ)</h2>
              <div className="space-y-6">
                {product.faqs.map((faq, idx) => (
                  <div key={idx} className="border-[4px] border-black p-4 bg-gray-50 hover:bg-yellow-50 transition-colors shadow-[4px_4px_0_0_#000]">
                    <p className="text-xs font-black uppercase mb-2 border-b-[2px] border-black pb-2 text-blue-700">Q: {faq.q}</p>
                    <p className="text-xs text-gray-800 font-bold">A: {faq.a}</p>
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
