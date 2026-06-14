import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function AICodeReviewLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-white text-black font-mono px-4 md:px-8">
      <div className="max-w-4xl mx-auto border-[3px] border-black bg-white">
        {/* Diff Header */}
        <div className="bg-gray-50 border-b-[3px] border-black p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-tighter break-all sm:break-normal">
              --- a/codebase/{product.slug}.ts
            </h1>
            <h2 className="text-sm sm:text-base font-bold tracking-tighter mt-1 break-all sm:break-normal">
              +++ b/codebase/{product.slug}.ts
            </h2>
          </div>
          <Link href="?waitlist=true" scroll={false} className="mt-4 sm:mt-0 px-4 py-2 bg-black text-white font-bold border-[3px] border-black hover:bg-white hover:text-black uppercase text-sm">
            Fix Issues
          </Link>
        </div>

        {/* Diff Content */}
        <div className="text-xs md:text-sm leading-relaxed overflow-hidden break-words">
          {/* Context Line */}
          <div className="px-4 py-2 text-gray-500 bg-gray-50 border-b-[3px] border-black font-bold">
            @@ -1,5 +1,5 @@ CodeAudit: {product.h1}
          </div>

          {/* Deletion (Problem statement) */}
          <div className="px-4 py-3 bg-red-50 text-red-900 flex">
            <span className="select-none mr-4 font-bold w-4 flex-shrink-0 text-right">-</span>
            <div className="min-w-0">
              <p className="font-bold mb-2">{"// The old way (Error-prone & Slow)"}</p>
              <p>{product.subheadline}</p>
            </div>
          </div>

          {/* Addition (Solution) */}
          <div className="px-4 py-3 bg-green-50 text-green-900 flex border-y-[3px] border-black">
            <span className="select-none mr-4 font-bold w-4 flex-shrink-0 text-right">+</span>
            <div className="min-w-0">
              <p className="font-bold mb-2">{"// The CodeAudit way (Automated & Secure)"}</p>
              <p>{product.whatItDoes}</p>
            </div>
          </div>

          {/* Features as additions */}
          {product.checksFor && product.checksFor.length > 0 && (
            <>
              <div className="px-4 py-2 text-gray-500 bg-gray-50 border-b-[3px] border-black font-bold">
                @@ -20,10 +20,10 @@ Features Detected
              </div>
              <div className="border-b-[3px] border-black">
                {product.checksFor.map((check, idx) => (
                  <div key={idx} className="px-4 py-2 bg-green-50 text-green-900 flex">
                    <span className="select-none mr-4 font-bold w-4 flex-shrink-0 text-right">+</span>
                    <span className="min-w-0">{check}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Example Finding */}
          {product.exampleFinding && (
            <>
              <div className="px-4 py-2 text-gray-500 bg-gray-50 border-b-[3px] border-black font-bold">
                @@ -50,15 +50,15 @@ Example Finding
              </div>
              <div className="px-4 py-3 bg-red-50 text-red-900 flex">
                <span className="select-none mr-4 font-bold w-4 flex-shrink-0 text-right">-</span>
                <div className="min-w-0">
                  <p className="font-bold uppercase break-words">[{product.exampleFinding.severity} SEVERITY]: {product.exampleFinding.title}</p>
                  <p className="mt-2">{product.exampleFinding.description}</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-green-50 text-green-900 flex border-t-[3px] border-black">
                <span className="select-none mr-4 font-bold w-4 flex-shrink-0 text-right">+</span>
                <div className="min-w-0">
                  <p className="font-bold uppercase break-words">[FIX SUGGESTION]</p>
                  <p className="mt-2">{product.exampleFinding.fix}</p>
                </div>
              </div>
            </>
          )}

          <div className="px-4 py-6 bg-white border-t-[3px] border-black text-center">
            <h3 className="text-sm font-bold mb-4">{product.workflowDescription}</h3>
            <Link href="?waitlist=true" scroll={false} className="inline-block px-4 py-3 bg-black text-white font-bold border-[3px] border-black hover:bg-white hover:text-black uppercase text-sm">
              Start Free Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
