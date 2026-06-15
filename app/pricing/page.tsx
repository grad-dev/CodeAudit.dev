import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const metadata: Metadata = {
  title: 'code audit tool pricing | CodeAudit.dev',
  description: 'Pricing plans for CodeAudit.dev. Free one-time audits, unlimited Pro scans, and Team tiers for agencies managing multiple client projects.',
  alternates: {
    canonical: 'https://codeaudit.dev/pricing',
  },
  openGraph: {
    title: 'code audit tool pricing | CodeAudit.dev',
    description: 'Pricing plans for CodeAudit.dev. Free one-time audits, unlimited Pro scans, and Team tiers for agencies managing multiple client projects.',
    url: 'https://codeaudit.dev/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'One-time audit for a single public repository.',
    features: [
      '1 repository audit',
      'Security, performance, and architecture findings',
      'Severity-rated report'
    ],
  },
  {
    name: 'Pro',
    price: 'Coming soon',
    description: 'For founders and freelancers shipping multiple projects.',
    features: [
      'Unlimited repository audits',
      'AI-ready fix prompts',
      'Private repository support',
      'Re-scan and track progress over time'
    ],
    highlight: true,
  },
  {
    name: 'Team / Agency',
    price: 'Coming soon',
    description: 'For agencies and teams managing multiple client projects.',
    features: [
      'Everything in Pro',
      'Multiple projects / client workspaces',
      'Shareable client-facing reports',
      'Priority support'
    ],
  }
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CodeAudit.dev",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 border-b border-gray-300 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 uppercase">
            Simple pricing for modern teams
          </h1>
          <p className="text-xl text-gray-600">
            CodeAudit.dev is currently in waitlist mode. Exact pricing will be announced at launch. Waitlist members get early-access pricing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-20 border border-gray-300 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-300">
            {tiers.map((tier) => (
              <div key={tier.name} className={`p-8 flex flex-col ${tier.highlight ? 'bg-gray-100' : 'bg-white'}`}>
                {tier.highlight && (
                  <div className="mb-4">
                    <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wide border border-black">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black mb-2 uppercase">{tier.name}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{tier.description}</p>
                <div className="mb-8 border-t border-b border-gray-300 py-4">
                  <span className="text-4xl font-bold text-black">{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-black mr-3 font-bold mt-1"><Check className="w-4 h-4 stroke-[3]" /></span>
                      <span className="text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="?waitlist=true" scroll={false} className="w-full py-3 px-4 font-bold text-center border border-black transition-colors duration-200 bg-gray-900 text-white hover:bg-black uppercase">
                  Join Waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
