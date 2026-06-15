import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function SecretsDetectionLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black font-mono px-4 md:px-8">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] w-full mx-auto border-[4px] border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-6 md:p-10 relative mt-6 mb-6 z-10">
        {/* Top Secret Banner */}
        <div className="absolute top-0 left-0 w-full bg-black text-white text-center py-2 font-black tracking-widest uppercase border-b-[4px] border-black text-xs md:text-sm">
          TOP SECRET // CLASSIFIED // {product.slug.toUpperCase()}
        </div>

        <div className="mt-10 mb-8 text-center border-b-[4px] border-black pb-8 border-dashed">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-[1]">
            {product.h1}
          </h1>
          <p className="text-xs md:text-sm font-black bg-yellow-300 text-black inline-block px-3 py-1 select-none border-[4px] border-black shadow-[4px_4px_0_0_#000]">
            {product.subheadline}
          </p>
        </div>

        <div className="space-y-6 text-sm leading-relaxed max-w-4xl mx-auto">
          <p className="bg-gray-100 p-4 border-[4px] border-black font-bold text-xs md:text-sm">
            <span className="bg-black text-white select-none px-2 py-0.5 font-black uppercase tracking-widest mr-2">CLASSIFIED MEMO:</span> {product.whatItDoes}
          </p>

          <div className="border-[4px] border-black p-5 md:p-8 bg-white shadow-[6px_6px_0_0_#000]">
            <h2 className="text-[10px] md:text-xs font-black mb-4 uppercase underline decoration-[4px] underline-offset-4 tracking-widest">Threat Vectors Detected</h2>
            <ul className="list-none space-y-3 font-bold text-xs md:text-sm">
              {product.checksFor?.map((check, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-red-600 mr-3 font-black">[{idx + 1}]</span>
                  <span className={idx % 2 === 0 ? "bg-black text-white select-none px-2" : "px-2"}>
                    {check}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {product.exampleFinding && (
            <div className="border-[4px] border-black p-6 md:p-8 bg-white border-dashed shadow-[6px_6px_0_0_#000]">
              <h2 className="text-[10px] md:text-xs font-black mb-6 uppercase text-red-600 bg-red-100 inline-block px-3 py-1 border-[4px] border-red-600 shadow-[4px_4px_0_0_#dc2626]">Incident Report</h2>
              <div className="space-y-4">
                <p className="font-black uppercase text-[10px] md:text-xs">Severity: <span className="bg-red-600 text-white select-none px-3 py-1 ml-2 border-[2px] border-black">{product.exampleFinding.severity}</span></p>
                <p className="font-black uppercase border-b-[4px] border-black pb-3 text-[10px] md:text-xs">Title: <span className="bg-yellow-300 px-2 py-0.5 border-[2px] border-black">{product.exampleFinding.title}</span></p>
                <p className="pt-3 font-bold text-[10px] md:text-xs bg-gray-50 p-3 border-[2px] border-black"><span className="font-black uppercase text-red-600 block mb-2">Description:</span> {product.exampleFinding.description}</p>
                <p className="pt-3"><span className="font-black uppercase text-green-600 block mb-2 text-[10px] md:text-xs">Required Action:</span> <span className="bg-black text-green-400 select-none px-4 py-2 block font-mono font-bold border-[4px] border-black text-[10px] md:text-xs">{product.exampleFinding.fix}</span></p>
              </div>
            </div>
          )}

          <div className="pt-8 text-center border-t-[4px] border-black border-dashed mt-8">
            <p className="font-black uppercase mb-6 text-[10px] md:text-xs bg-white border-[4px] border-black inline-block px-4 py-2 shadow-[4px_4px_0_0_#000]">{product.workflowDescription}</p>
            <br />
            <Link href="?waitlist=true" scroll={false} className="inline-block px-8 py-4 bg-black text-white font-black border-[4px] border-black hover:bg-white hover:text-black uppercase text-[10px] md:text-xs shadow-[8px_8px_0px_0px_rgba(255,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] tracking-widest transition-all">
              DECRYPT PROJECT
            </Link>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-12 text-center text-[10px] md:text-xs font-black uppercase tracking-widest border-t-[4px] border-black pt-4 bg-yellow-300 mx-[-24px] md:mx-[-40px] px-6 md:px-10 mb-[-24px] md:mb-[-40px] pb-4">
          END OF REPORT // UNAUTHORIZED DISTRIBUTION PROHIBITED
        </div>
      </div>
    </div>
  );
}
