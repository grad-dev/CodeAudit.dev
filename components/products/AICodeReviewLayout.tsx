import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function AICodeReviewLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black font-mono px-4 md:px-8">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] mx-auto border-[4px] border-black bg-white shadow-[12px_12px_0_0_#000] relative z-10">
        {/* Diff Header */}
        <div className="bg-blue-600 text-white border-b-[4px] border-black p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-sm md:text-base font-black tracking-tighter break-all sm:break-normal uppercase">
              --- a/codebase/{product.slug}.ts
            </h1>
            <h2 className="text-sm md:text-base font-black tracking-tighter mt-1 break-all sm:break-normal uppercase text-yellow-300">
              +++ b/codebase/{product.slug}.ts
            </h2>
          </div>
          <Link href="?waitlist=true" scroll={false} className="mt-4 sm:mt-0 px-6 py-3 bg-black text-white font-black border-[4px] border-black hover:bg-white hover:text-black uppercase text-sm shadow-[4px_4px_0_0_#fff] hover:translate-x-1 hover:-translate-y-1 transition-all">
            Fix Issues
          </Link>
        </div>

        {/* Diff Content */}
        <div className="text-sm leading-relaxed overflow-hidden break-words">
          {/* Context Line */}
          <div className="px-4 py-3 md:px-6 text-black bg-gray-200 border-b-[4px] border-black font-black uppercase tracking-widest text-[10px] md:text-xs">
            @@ -1,5 +1,5 @@ CodeAudit: {product.h1}
          </div>

          {/* Deletion (Problem statement) */}
          <div className="px-4 py-4 md:px-6 bg-red-100 text-red-900 flex">
            <span className="select-none mr-4 font-black w-4 flex-shrink-0 text-right">-</span>
            <div className="min-w-0">
              <p className="font-black mb-2 text-xs uppercase">{"// The old way (Error-prone & Slow)"}</p>
              <p className="font-bold">{product.subheadline}</p>
            </div>
          </div>

          {/* Addition (Solution) */}
          <div className="px-4 py-4 md:px-6 bg-green-100 text-green-900 flex border-y-[4px] border-black">
            <span className="select-none mr-4 font-black w-4 flex-shrink-0 text-right">+</span>
            <div className="min-w-0">
              <p className="font-black mb-2 text-xs uppercase">{"// The CodeAudit way (Automated & Secure)"}</p>
              <p className="font-bold">{product.whatItDoes}</p>
            </div>
          </div>

          {/* Features as additions */}
          {product.checksFor && product.checksFor.length > 0 && (
            <>
              <div className="px-4 py-3 md:px-6 text-black bg-gray-200 border-b-[4px] border-black font-black uppercase tracking-widest text-[10px] md:text-xs">
                @@ -20,10 +20,10 @@ Features Detected
              </div>
              <div className="border-b-[4px] border-black">
                {product.checksFor.map((check, idx) => (
                  <div key={idx} className="px-4 py-3 md:px-6 bg-green-100 text-green-900 flex">
                    <span className="select-none mr-4 font-black w-4 flex-shrink-0 text-right">+</span>
                    <span className="min-w-0 font-bold">{check}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Example Finding */}
          {product.exampleFinding && (
            <>
              <div className="px-4 py-3 md:px-6 text-black bg-gray-200 border-b-[4px] border-black font-black uppercase tracking-widest text-[10px] md:text-xs">
                @@ -50,15 +50,15 @@ Example Finding
              </div>
              <div className="px-4 py-4 md:px-6 bg-red-100 text-red-900 flex">
                <span className="select-none mr-4 font-black w-4 flex-shrink-0 text-right">-</span>
                <div className="min-w-0">
                  <p className="font-black uppercase break-words bg-red-500 text-white inline-block px-2 py-0.5 mb-2 border-[2px] border-red-900 shadow-[2px_2px_0_0_#7f1d1d] text-[10px]">[{product.exampleFinding.severity} SEVERITY]: {product.exampleFinding.title}</p>
                  <p className="mt-2 font-bold text-sm">{product.exampleFinding.description}</p>
                </div>
              </div>
              <div className="px-4 py-4 md:px-6 bg-green-100 text-green-900 flex border-t-[4px] border-black">
                <span className="select-none mr-4 font-black w-4 flex-shrink-0 text-right">+</span>
                <div className="min-w-0">
                  <p className="font-black uppercase break-words bg-green-500 text-white inline-block px-2 py-0.5 mb-2 border-[2px] border-green-900 shadow-[2px_2px_0_0_#14532d] text-[10px]">[FIX SUGGESTION]</p>
                  <p className="mt-2 font-bold text-sm border-l-[4px] border-green-900 pl-3 py-1">{product.exampleFinding.fix}</p>
                </div>
              </div>
            </>
          )}

          <div className="px-4 py-8 md:px-6 bg-yellow-300 border-t-[4px] border-black text-center">
            <h3 className="text-sm md:text-base font-black mb-6 uppercase tracking-tighter">{product.workflowDescription}</h3>
            <Link href="?waitlist=true" scroll={false} className="inline-block px-8 py-4 bg-black text-white font-black border-[4px] border-black shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:bg-gray-900 hover:translate-x-1 hover:-translate-y-1 transition-all uppercase text-sm tracking-widest">
              Start Free Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
