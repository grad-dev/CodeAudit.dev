import { stacksData } from "@/data/stacks";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return stacksData.map((stack) => ({
    stack: stack.id,
  }));
}

export async function generateMetadata({ params }: { params: { stack: string } }): Promise<Metadata> {
  const stack = stacksData.find((s) => s.id === params.stack);
  if (!stack) return {};

  return {
    title: stack.seoTitle,
    description: stack.seoDescription,
    alternates: {
      canonical: `https://codeaudit.dev/secure/${stack.id}`,
    },
    openGraph: {
      title: stack.seoTitle,
      description: stack.seoDescription,
      url: `https://codeaudit.dev/secure/${stack.id}`,
      images: [`https://codeaudit.dev/og/secure-${stack.id}.png`],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function StackPage({ params }: { params: { stack: string } }) {
  const stack = stacksData.find((s) => s.id === params.stack);
  if (!stack) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stack.faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="container relative z-10 px-4 mx-auto max-w-[85rem] font-mono">
        
        {/* Header Section */}
        <div className="text-left mb-12 max-w-3xl bg-white p-6 md:p-8 border-[4px] border-black shadow-[8px_8px_0_0_#000]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border-[2px] border-black mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-white">
            <span className="w-2 h-2 bg-yellow-300 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{stack.name} AUDIT</span>
          </div>
          
          <h1 className="text-xl md:text-2xl font-black tracking-tighter mb-4 uppercase text-black leading-[1.1] bg-yellow-300 inline-block px-3 py-1 border-[4px] border-black">
            Security & Code Audit for {stack.name} Projects
          </h1>
          <p className="text-xs md:text-sm text-black font-black leading-relaxed border-l-[4px] border-black pl-4 bg-gray-100 py-3 mt-4 shadow-[4px_4px_0_0_#000]">
            CodeAudit.dev checks your {stack.name} codebase for the vulnerabilities, performance issues, and architecture problems most common to {stack.name} applications.
          </p>
          <div className="mt-8">
            <Link
              href="?waitlist=true"
              scroll={false}
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-xs md:text-sm font-black uppercase tracking-widest border-[4px] border-black shadow-[6px_6px_0_0_#fff] hover:bg-white hover:text-black hover:shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-all"
            >
              INITIALIZE SCAN
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Common Issues */}
          <div className="border-[4px] border-black bg-white shadow-[8px_8px_0_0_#000]">
            <div className="p-4 md:p-6 border-b-[4px] border-black bg-yellow-300">
              <h2 className="text-base md:text-lg font-black text-black uppercase tracking-tighter">Common {stack.name} Issues</h2>
            </div>
            <div className="divide-y-[4px] divide-black bg-gray-50">
              {stack.commonIssues.map((issue, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 md:p-5 hover:bg-yellow-100 transition-colors group">
                  <div className="font-mono text-black font-black text-[10px] md:text-xs bg-white border-[2px] border-black px-2 py-0.5 shadow-[2px_2px_0_0_#000] group-hover:bg-black group-hover:text-white transition-colors">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                  <span className="text-black font-bold text-[10px] md:text-xs mt-1">{issue}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Example Finding */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base md:text-lg font-black mb-0 uppercase text-black bg-yellow-300 px-4 py-2 border-[4px] border-black inline-block w-fit shadow-[4px_4px_0_0_#000]">Example Finding</h2>
            <div className="bg-white border-[4px] border-black shadow-[8px_8px_0_0_#000] flex-grow flex flex-col">
              <div className="p-4 md:p-5 border-b-[4px] border-black flex items-center bg-gray-200">
                <span className="px-2 py-1 text-[10px] md:text-xs font-mono font-black border-[2px] border-black bg-red-500 text-white uppercase mr-3 shadow-[2px_2px_0_0_#000]">
                  [{stack.exampleFinding.severity}]
                </span>
                <h3 className="font-black text-black text-xs md:text-sm uppercase tracking-tight leading-tight">{stack.exampleFinding.title}</h3>
              </div>
              <div className="p-5 md:p-6 border-b-[4px] border-black flex-grow bg-white">
                <p className="text-black text-[10px] md:text-xs font-bold leading-relaxed mb-0 bg-gray-50 p-3 border-[2px] border-black">
                  {stack.exampleFinding.description}
                </p>
              </div>
              <div className="bg-black p-5 md:p-6">
                <strong className="font-mono text-green-400 font-black uppercase text-[10px] tracking-widest block mb-3 border-b-[2px] border-gray-700 pb-2">Remediation:</strong>
                <pre className="font-mono text-white text-[10px] md:text-xs whitespace-pre-wrap leading-relaxed border-l-[4px] border-green-600 pl-3 bg-gray-900 p-3">{stack.exampleFinding.fix}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Why Specialized Checks */}
        <div className="mb-12 bg-white border-[4px] border-black shadow-[12px_12px_0_0_#000] p-6 lg:p-10">
          <h2 className="text-lg md:text-xl font-black mb-6 uppercase text-black tracking-tighter bg-yellow-300 inline-block px-3 py-1 border-[4px] border-black shadow-[4px_4px_0_0_#000]">Why {stack.name} Needs Specialized Checks</h2>
          <p className="text-xs md:text-sm text-black font-bold leading-relaxed border-l-[4px] border-black pl-4 py-3 bg-gray-100 pr-4">
            {stack.whyNeedChecks}
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-lg md:text-xl font-black text-center mb-8 uppercase text-black tracking-tighter bg-yellow-300 border-[4px] border-black py-3 shadow-[8px_8px_0_0_#000]">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {stack.faqs.map((faq, idx) => (
              <div key={idx} className="border-[4px] border-black bg-white shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <div className="border-b-[4px] border-black p-4 md:p-5 bg-gray-100">
                  <h3 className="font-black text-black text-xs md:text-sm uppercase tracking-tight flex items-center gap-3">
                    <span className="text-[10px] md:text-xs font-mono bg-black text-white px-2 py-0.5 border-[2px] border-black shadow-[2px_2px_0_0_#000]">Q</span>
                    {faq.q}
                  </h3>
                </div>
                <div className="p-4 md:p-5 bg-white">
                  <p className="text-gray-800 font-bold text-[10px] md:text-xs leading-relaxed flex items-start gap-3">
                    <span className="text-[10px] md:text-xs font-mono font-black bg-yellow-300 text-black px-2 py-0.5 mt-0.5 border-[2px] border-black shadow-[2px_2px_0_0_#000]">A</span>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pb-8 pt-12 border-t-[6px] border-black border-dashed">
          <h2 className="text-xl md:text-2xl font-black mb-6 uppercase text-black tracking-tighter bg-white inline-block px-4 py-2 border-[4px] border-black shadow-[6px_6px_0_0_#000]">Ready to secure your {stack.name} app?</h2>
          <p className="text-black mb-8 max-w-xl mx-auto font-bold text-[10px] md:text-xs bg-yellow-300 p-4 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
            Join the waitlist to get early access to CodeAudit.dev and make sure your code is production-ready.
          </p>
          <Link
            href="?waitlist=true"
            scroll={false}
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 text-xs md:text-sm font-black uppercase tracking-widest border-[4px] border-black shadow-[8px_8px_0_0_#000] hover:bg-white hover:text-black hover:translate-x-1 hover:-translate-y-1 transition-all"
          >
            REQUEST ACCESS
          </Link>
        </div>
      </div>
    </div>
  );
}
