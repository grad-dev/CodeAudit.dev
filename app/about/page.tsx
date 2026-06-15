import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | CodeAudit.dev',
  description: 'Learn why CodeAudit.dev exists. We built a code audit tool to catch the security holes and architectural debt common in AI-generated code.',
  alternates: {
    canonical: 'https://codeaudit.dev/about',
  },
  openGraph: {
    title: 'About | CodeAudit.dev',
    description: 'Learn why CodeAudit.dev exists. We built a code audit tool to catch the security holes and architectural debt common in AI-generated code.',
    url: 'https://codeaudit.dev/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codeaudit.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://codeaudit.dev/about"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-12 text-center uppercase tracking-tighter border-b-8 border-black pb-4">
          ABOUT_SYS
        </h1>
        
        <div className=" text-lg space-y-6 bg-white border-4 border-black p-8 md:p-12 [box-shadow:12px_12px_0_0_#000]">
          <p className="border-l-4 border-black pl-4 font-bold">
            &gt; The way we write code has changed forever. With AI coding assistants and "vibe coding," developers are shipping faster than ever before. But this speed comes at a cost.
          </p>
          <p>
            AI tools are incredibly powerful at generating functionality, but they often lack context about security best practices, scalable architecture, and performance optimization. We found ourselves repeatedly catching the same mistakes: disabled row-level security, exposed API keys, unoptimized database queries, and bloated frontend bundles.
          </p>
          <p className="font-bold uppercase bg-black text-white p-2 inline-block">
            CodeAudit.dev exists to solve this problem.
          </p>
          <p>
            We built CodeAudit to be the automated sanity check you run before you deploy. It is specifically designed to catch the subtle security holes, performance bottlenecks, and architectural debt that AI coding tools tend to introduce.
          </p>
          <p>
            Our mission is to help indie hackers, startup founders, and freelance developers launch with confidence. You shouldn't need an enterprise security team to know if your SaaS is safe to ship.
          </p>
          <div className="mt-16 text-center border-t-4 border-black pt-12">
            <h3 className="text-3xl font-bold text-black mb-8 uppercase">Ready to ship better code?</h3>
            <Link href="/?waitlist=true" scroll={false} className="inline-block border-4 border-black bg-white text-black px-10 py-4 font-bold text-xl uppercase hover:bg-black hover:text-white transition-none [box-shadow:4px_4px_0_0_#000] hover:[box-shadow:0px_0px_0_0_#000] hover:translate-y-1 hover:translate-x-1">
              [ INITIATE REGISTRATION ]
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
