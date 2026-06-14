import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CodeAudit.dev',
  description: 'Terms of Service for CodeAudit.dev. Read our terms regarding the use of our code audit platform.',
  alternates: {
    canonical: 'https://codeaudit.dev/terms',
  },
  openGraph: {
    title: 'Terms of Service | CodeAudit.dev',
    description: 'Terms of Service for CodeAudit.dev. Read our terms regarding the use of our code audit platform.',
    url: 'https://codeaudit.dev/terms',
    type: 'website',
  },
};

export default function TermsPage() {
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
        "name": "Terms of Service",
        "item": "https://codeaudit.dev/terms"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 bg-white text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-black p-8 md:p-12 bg-white [box-shadow:12px_12px_0_0_#000] font-mono">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase border-b-8 border-black pb-4 mb-8 tracking-tighter">
            SYS_RULES
            <br/>
            <span className="text-2xl">{"// TERMS"}</span>
          </h1>
          <p className="font-bold bg-black text-white inline-block px-4 py-2 mb-8 border-2 border-black">LAST UPDATE: OCT_24_2026</p>
          
          <div className="space-y-8">
            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 1. HANDSHAKE</h2>
              <p className="font-medium">By accessing and joining the waitlist for CodeAudit.dev, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 2. QUEUE_ACCESS</h2>
              <p className="font-medium">Joining the waitlist does not guarantee immediate access to the platform upon launch. We reserve the right to grant access on a rolling basis.</p>
            </section>

            <section className="border-4 border-black p-6 bg-red-100">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2 text-red-900">&gt; 3. NO_WARRANTY_EXCEPTION</h2>
              <p className="font-medium text-red-900">CodeAudit.dev is provided "as is" without any representations or warranties, express or implied. The information provided in our audits (when launched) is for informational purposes and should not be considered a substitute for professional human security reviews or penetration testing.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 4. LIMITATION_OF_LIABILITY</h2>
              <p className="font-medium">CodeAudit.dev shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with your use of our waitlist or future platform.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 5. MUTATION_OF_TERMS</h2>
              <p className="font-medium">We reserve the right to modify these terms at any time. We will notify waitlist members of significant changes before the full launch of the platform.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 6. PING</h2>
              <p className="font-medium">For any queries regarding these terms, transmit to <a href="mailto:gradviseofficial@gmail.com" className="bg-black text-white px-2 hover:bg-white hover:text-black border-2 border-black ml-1 font-bold">gradviseofficial@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
