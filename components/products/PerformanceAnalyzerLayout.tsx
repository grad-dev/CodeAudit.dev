import type { ProductData } from '@/data/products';
import Link from 'next/link';

export default function PerformanceAnalyzerLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 font-mono text-black px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-6xl border-[3px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden mb-12 mt-8">
        
        {/* Top Banner */}
        <div className="w-full border-b-[3px] border-black bg-white py-3 px-6 flex justify-between items-center text-xs md:text-sm font-bold uppercase tracking-widest">
          <span>Sys_Mon // Telemetry_Active</span>
          <span className="text-blue-600 animate-pulse font-bold">Connection: Stable</span>
        </div>

        {/* Hero Section */}
        <div className="w-full border-b-[3px] border-black bg-gray-50 p-4 md:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-3 break-all sm:break-normal text-black">
              {product.h1}
            </h1>
            <p className="text-sm md:text-base font-bold bg-black text-white inline-block p-2 uppercase border-[3px] border-black">
              {product.subheadline}
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link href="?waitlist=true" scroll={false} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 border-[3px] border-black text-sm uppercase transition-colors whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
              Initialize Audit
            </Link>
          </div>
        </div>

        {/* Description Band */}
        <div className="w-full border-b-[3px] border-black bg-white p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-1 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black pb-4 lg:pb-0 lg:pr-4 flex flex-col justify-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-2">Module_Description</span>
            <div className="text-base md:text-lg font-bold text-gray-300 uppercase break-words">Overview</div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex items-center">
            <p className="text-sm md:text-sm leading-relaxed font-bold max-w-4xl">
              {product.whatItDoes}
            </p>
          </div>
        </div>

        {/* Tabular Readouts: Checks & Workflow */}
        <div className="w-full flex flex-col lg:flex-row border-b-[3px] border-black bg-gray-50">
          
          {/* Left Side: Checks Table */}
          <div className="w-full lg:w-1/2 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black flex flex-col">
            <div className="bg-black text-white p-3 border-b-[3px] border-black uppercase text-xs font-bold tracking-widest">
              Diagnostic Payload
            </div>
            <div className="flex flex-col bg-gray-50 flex-grow">
              {product.checksFor?.map((check, idx) => (
                <div key={idx} className="flex border-b-[3px] border-black last:border-b-0">
                  <div className="w-12 flex-shrink-0 border-r-[3px] border-black p-3 font-bold text-gray-400 bg-white flex items-center justify-center text-sm">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="p-3 w-full font-bold uppercase text-xs md:text-sm flex items-center hover:bg-gray-100 transition-colors">
                    {check}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Example & Workflow */}
          <div className="w-full lg:w-1/2 flex flex-col bg-white">
            <div className="bg-black text-white p-3 border-b-[3px] border-black uppercase text-xs font-bold tracking-widest">
              Telemetry Feed
            </div>
            <div className="p-4 md:p-6 flex-grow flex flex-col justify-center">
              {product.exampleFinding && (
                <div className="mb-6">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4 border-b-[3px] border-black pb-2">Detected Anomaly</span>
                  <div className="border-[3px] border-black p-4 bg-gray-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-3">
                      <h3 className="font-bold text-sm uppercase bg-black text-white inline-block px-2 py-1 border-[3px] border-black">{product.exampleFinding.title}</h3>
                      <span className="font-bold text-xs bg-red-600 text-white px-2 py-1 uppercase border-[3px] border-black whitespace-nowrap">{product.exampleFinding.severity}</span>
                    </div>
                    <p className="text-xs font-bold mb-4 border-l-[3px] border-black pl-3 py-1 text-gray-800 leading-relaxed">{product.exampleFinding.description}</p>
                    <div className="bg-blue-50 border-[3px] border-black p-3">
                      <span className="text-[10px] font-bold text-blue-800 block mb-1 uppercase tracking-widest">Recommended Fix Protocol</span>
                      <p className="text-xs font-bold text-black">{product.exampleFinding.fix}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-auto">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-4 border-b-[3px] border-black pb-2">Execution Protocol</span>
                <p className="text-xs md:text-sm font-bold p-3 border-[3px] border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] leading-relaxed">
                  {product.workflowDescription}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer / FAQ Band */}
        <div className="w-full bg-gray-900 text-white p-4 md:p-6">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4 border-b-[3px] border-gray-700 pb-3">Knowledge Base Queries</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="border-[3px] border-gray-700 bg-black p-4 hover:border-gray-500 transition-colors">
                <p className="text-xs md:text-sm font-bold uppercase mb-2 text-blue-400 leading-snug">&gt; {faq.q}</p>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
