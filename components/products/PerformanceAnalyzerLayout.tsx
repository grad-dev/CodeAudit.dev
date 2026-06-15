import type { ProductData } from '@/data/products';
import Link from 'next/link';

export default function PerformanceAnalyzerLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white font-mono text-black px-4 md:px-8 flex justify-center">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="w-full max-w-[85rem] border-[4px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative z-10">
        
        {/* Top Banner */}
        <div className="w-full border-b-[4px] border-black bg-yellow-300 py-3 px-6 flex justify-between items-center text-[10px] md:text-xs font-black uppercase tracking-widest">
          <span>Sys_Mon // Telemetry_Active</span>
          <span className="text-blue-700 animate-pulse font-black bg-white border-[2px] border-black px-2 py-0.5">Connection: Stable</span>
        </div>

        {/* Hero Section */}
        <div className="w-full border-b-[4px] border-black bg-white p-6 md:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-4xl font-black uppercase leading-none tracking-tighter mb-4 break-all sm:break-normal text-black bg-blue-600 text-white inline-block px-4 py-2 shadow-[4px_4px_0_0_#000]">
              {product.h1}
            </h1>
            <br />
            <p className="text-xs md:text-sm font-black bg-black text-white inline-block p-3 uppercase border-[4px] border-black mt-2">
              {product.subheadline}
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link href="?waitlist=true" scroll={false} className="block w-full text-center bg-black hover:bg-white text-white hover:text-black font-black py-4 px-8 border-[4px] border-black text-xs md:text-sm uppercase transition-colors whitespace-nowrap shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none tracking-widest">
              Initialize Audit
            </Link>
          </div>
        </div>

        {/* Description Band */}
        <div className="w-full border-b-[4px] border-black bg-gray-100 p-6 md:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="col-span-1 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black pb-6 lg:pb-0 lg:pr-6 flex flex-col justify-center">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Module_Description</span>
            <div className="text-xs md:text-sm font-black text-black uppercase break-words bg-white border-[2px] border-black inline-block px-2 py-1 self-start shadow-[2px_2px_0_0_#000]">Overview</div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex items-center">
            <p className="text-xs md:text-sm leading-relaxed font-bold max-w-4xl border-l-[4px] border-blue-600 pl-4 bg-white p-3">
              {product.whatItDoes}
            </p>
          </div>
        </div>

        {/* Tabular Readouts: Checks & Workflow */}
        <div className="w-full flex flex-col lg:flex-row border-b-[4px] border-black bg-white">
          
          {/* Left Side: Checks Table */}
          <div className="w-full lg:w-1/2 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black flex flex-col">
            <div className="bg-black text-white p-4 border-b-[4px] border-black uppercase text-[10px] font-black tracking-widest">
              Diagnostic Payload
            </div>
            <div className="flex flex-col bg-white flex-grow">
              {product.checksFor?.map((check, idx) => (
                <div key={idx} className="flex border-b-[4px] border-black last:border-b-0 hover:bg-yellow-100 transition-colors">
                  <div className="w-16 flex-shrink-0 border-r-[4px] border-black p-4 font-black text-black bg-gray-200 flex items-center justify-center text-[10px] md:text-xs">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="p-4 w-full font-black uppercase text-[10px] md:text-xs flex items-center">
                    {check}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Example & Workflow */}
          <div className="w-full lg:w-1/2 flex flex-col bg-gray-50">
            <div className="bg-blue-600 text-white p-4 border-b-[4px] border-black uppercase text-[10px] font-black tracking-widest">
              Telemetry Feed
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              {product.exampleFinding && (
                <div className="mb-8">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4 border-b-[4px] border-black pb-2">Detected Anomaly</span>
                  <div className="border-[4px] border-black p-5 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-5 gap-3">
                      <h3 className="font-black text-[10px] md:text-xs uppercase bg-black text-white inline-block px-3 py-1 border-[4px] border-black">{product.exampleFinding.title}</h3>
                      <span className="font-black text-[10px] md:text-xs bg-red-600 text-white px-3 py-1 uppercase border-[4px] border-black whitespace-nowrap shadow-[2px_2px_0_0_#7f1d1d]">{product.exampleFinding.severity}</span>
                    </div>
                    <p className="text-[10px] md:text-xs font-bold mb-5 border-l-[4px] border-black pl-3 py-1 text-gray-800 leading-relaxed bg-gray-100">{product.exampleFinding.description}</p>
                    <div className="bg-green-100 border-[4px] border-black p-4">
                      <span className="text-[10px] font-black text-green-800 block mb-2 uppercase tracking-widest bg-white border-[2px] border-green-800 inline-block px-2 py-0.5">Recommended Fix Protocol</span>
                      <p className="text-[10px] md:text-xs font-bold text-black border-l-[4px] border-green-800 pl-2">{product.exampleFinding.fix}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-auto">
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-4 border-b-[4px] border-black pb-2">Execution Protocol</span>
                <p className="text-[10px] md:text-xs font-bold p-4 border-[4px] border-black bg-yellow-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] leading-relaxed">
                  {product.workflowDescription}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer / FAQ Band */}
        <div className="w-full bg-black text-white p-6 md:p-8">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-6 border-b-[4px] border-gray-700 pb-3">Knowledge Base Queries</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.faqs.map((faq, idx) => (
              <div key={idx} className="border-[4px] border-gray-700 bg-gray-900 p-5 hover:border-white transition-colors">
                <p className="text-[10px] md:text-xs font-black uppercase mb-3 text-yellow-300 leading-snug">&gt; {faq.q}</p>
                <p className="text-[10px] md:text-xs text-gray-300 font-bold leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
