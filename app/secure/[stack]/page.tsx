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
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16 border-b border-gray-300 pb-16">
          <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight mb-6 uppercase text-gray-900">
            Security & Code Audit for {stack.name} Projects
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto mb-8 font-mono">
            CodeAudit.dev checks your {stack.name} codebase for the vulnerabilities, performance issues, and architecture problems most common to {stack.name} applications.
          </p>
          <Link
            href="?waitlist=true"
            scroll={false}
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 font-mono font-bold uppercase tracking-widest border border-gray-900 shadow-[4px_4px_0_0_#000] hover:translate-y-1 hover:shadow-none transition-all"
          >
            JOIN WAITLIST
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="border border-gray-300 bg-white">
            <div className="p-4 border-b border-gray-300 bg-gray-50">
              <h2 className="text-lg font-mono font-bold text-gray-900 uppercase">Common {stack.name} Issues</h2>
            </div>
            <div className="divide-y divide-gray-300">
              {stack.commonIssues.map((issue, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-mono text-gray-400 mt-0.5">{(idx + 1).toString().padStart(2, '0')}</div>
                  <span className="text-gray-900 font-mono">{issue}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-mono font-bold mb-4 uppercase border-b border-gray-300 pb-2 text-gray-900">Example Finding</h2>
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0_0_#000]">
              <div className="p-4 border-b border-gray-300 flex items-center bg-gray-50">
                <span className="px-2 py-1 text-xs font-mono font-bold border border-gray-300 bg-white text-gray-900 uppercase mr-3">
                  [{stack.exampleFinding.severity}]
                </span>
                <h3 className="font-mono font-bold text-gray-900">{stack.exampleFinding.title}</h3>
              </div>
              <div className="p-4 border-b border-gray-300">
                <p className="text-gray-900 text-sm font-mono mb-0">
                  {stack.exampleFinding.description}
                </p>
              </div>
              <div className="bg-gray-50 p-4">
                <strong className="font-mono text-gray-900 uppercase text-xs block mb-1">Fix:</strong>
                <span className="font-mono text-gray-900 text-sm">{stack.exampleFinding.fix}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-white border border-gray-300 shadow-[4px_4px_0_0_#000] p-8 lg:p-12">
          <h2 className="text-2xl font-mono font-bold mb-4 uppercase border-b border-gray-300 pb-4 text-gray-900">Why {stack.name} Projects Need Specialized Checks</h2>
          <p className="text-lg text-gray-900 leading-relaxed font-mono">
            {stack.whyNeedChecks}
          </p>
        </div>

        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-mono font-bold text-center mb-10 uppercase text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {stack.faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-300 p-0 bg-white shadow-[4px_4px_0_0_#000]">
                <div className="border-b border-gray-300 p-4 bg-gray-50">
                  <h3 className="font-mono font-bold text-gray-900">{faq.q}</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-900 font-mono text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-8 border-t border-gray-300 pt-16">
          <h2 className="text-3xl font-mono font-bold mb-4 uppercase text-gray-900">Ready to secure your {stack.name} app?</h2>
          <p className="text-gray-900 mb-8 max-w-xl mx-auto font-mono">
            Join the waitlist to get early access to CodeAudit.dev and make sure your code is production-ready.
          </p>
          <Link
            href="?waitlist=true"
            scroll={false}
            className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 font-mono font-bold uppercase tracking-widest border border-gray-900 shadow-[4px_4px_0_0_#000] hover:translate-y-1 hover:shadow-none transition-all"
          >
            JOIN WAITLIST
          </Link>
        </div>
      </div>
    </div>
  );
}
