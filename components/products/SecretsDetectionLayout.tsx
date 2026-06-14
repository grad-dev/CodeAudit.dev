import Link from 'next/link';
import type { ProductData } from '@/data/products';

export default function SecretsDetectionLayout({ product }: { product: ProductData }) {
  return (
    <div className="min-h-screen pt-32 pb-12 bg-gray-50 text-black font-mono px-4 md:px-8">
      <div className="max-w-4xl w-full mx-auto border-[3px] border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-4 md:p-6 relative mt-6 mb-6">
        {/* Top Secret Banner */}
        <div className="absolute top-0 left-0 w-full bg-black text-white text-center py-2 font-bold tracking-widest uppercase border-b-[3px] border-black text-xs md:text-sm">
          TOP SECRET // CLASSIFIED // {product.slug.toUpperCase()}
        </div>

        <div className="mt-6 mb-6 text-center border-b-[3px] border-black pb-6 border-dashed">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-3">
            {product.h1}
          </h1>
          <p className="text-sm md:text-base font-bold bg-black text-black inline-block px-2 select-none hover:text-white">
            {product.subheadline}
          </p>
        </div>

        <div className="space-y-4 text-xs md:text-sm leading-relaxed">
          <p>
            <span className="bg-black text-black select-none hover:text-white px-1 font-bold">CLASSIFIED MEMO:</span> {product.whatItDoes}
          </p>

          <div className="border-[3px] border-black p-3 md:p-4 bg-gray-50">
            <h2 className="text-sm md:text-base font-bold mb-3 uppercase underline decoration-[3px] underline-offset-4">Threat Vectors Detected</h2>
            <ul className="list-disc pl-6 space-y-2 font-bold">
              {product.checksFor?.map((check, idx) => (
                <li key={idx}>
                  <span className={idx % 2 === 0 ? "bg-black text-black select-none hover:text-white px-1" : ""}>
                    {check}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {product.exampleFinding && (
            <div className="border-[3px] border-black p-4 md:p-6 bg-white border-dashed">
              <h2 className="text-sm md:text-base font-bold mb-3 uppercase text-red-600 bg-red-100 inline-block px-2 border-[3px] border-black">Incident Report</h2>
              <div className="space-y-3">
                <p className="font-bold uppercase">Severity: <span className="bg-black text-black select-none hover:text-red-500 px-2 py-1 ml-2">{product.exampleFinding.severity}</span></p>
                <p className="font-bold uppercase border-b-[3px] border-black pb-2">Title: {product.exampleFinding.title}</p>
                <p className="pt-2"><span className="font-bold uppercase">Description:</span> {product.exampleFinding.description}</p>
                <p className="pt-2"><span className="font-bold uppercase">Required Action:</span> <span className="bg-black text-black select-none hover:text-green-500 px-2 py-1 block mt-2">{product.exampleFinding.fix}</span></p>
              </div>
            </div>
          )}

          <div className="pt-6 text-center border-t-[3px] border-black border-dashed mt-6">
            <p className="font-bold uppercase mb-4 text-sm md:text-base">{product.workflowDescription}</p>
            <Link href="?waitlist=true" scroll={false} className="inline-block px-6 py-3 bg-black text-white font-bold border-[3px] border-black hover:bg-white hover:text-black uppercase text-sm md:text-base shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px]">
              DECRYPT PROJECT
            </Link>
          </div>
        </div>
        
        {/* Bottom Banner */}
        <div className="mt-8 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest border-t-[3px] border-black pt-4">
          END OF REPORT // UNAUTHORIZED DISTRIBUTION PROHIBITED
        </div>
      </div>
    </div>
  );
}
