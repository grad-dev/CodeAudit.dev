import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodeAudit.dev',
  description: 'Privacy Policy for CodeAudit.dev. Learn how we handle your data and code repositories.',
  alternates: {
    canonical: 'https://codeaudit.dev/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | CodeAudit.dev',
    description: 'Privacy Policy for CodeAudit.dev. Learn how we handle your data and code repositories.',
    url: 'https://codeaudit.dev/privacy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
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
        "name": "Privacy Policy",
        "item": "https://codeaudit.dev/privacy"
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
        <div className="border-4 border-black p-8 md:p-12 bg-white [box-shadow:12px_12px_0_0_#000] ">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase border-b-8 border-black pb-4 mb-8 tracking-tighter">
            DATA_PROTOCOL
            <br/>
            <span className="text-2xl">{"// PRIVACY"}</span>
          </h1>
          <p className="font-bold bg-black text-white inline-block px-4 py-2 mb-8 border-2 border-black">LAST UPDATE: OCT_24_2026</p>
          
          <div className="space-y-8">
            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 1. INITIALIZATION</h2>
              <p className="font-medium">At CodeAudit.dev, we take your privacy and the security of your code seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our waitlist and future services.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 2. DATA_COLLECTION</h2>
              <p className="mb-4 font-medium"><strong>STAGE_1 (Waitlist):</strong> We currently collect your name, email address, and use-case preferences when you join our waitlist or contact us.</p>
              <p className="font-medium"><strong>STAGE_2 (Launch):</strong> When the service launches, we will request access to the code repositories you explicitly authorize for scanning.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 3. DATA_USAGE</h2>
              <ul className="list-none space-y-2 font-medium">
                <li className="before:content-['[+]'] before:mr-2 before:font-bold">To notify you when CodeAudit.dev launches.</li>
                <li className="before:content-['[+]'] before:mr-2 before:font-bold">To respond to your inquiries and provide support.</li>
                <li className="before:content-['[+]'] before:mr-2 before:font-bold">To understand our waitlist demographic to better build the product.</li>
              </ul>
            </section>

            <section className="border-4 border-black p-6 bg-yellow-300">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 4. SECURITY_ENCLAVE</h2>
              <p className="font-medium">During the waitlist phase, no code is analyzed. When our full product launches, we will only access the repositories you authorize. We do not train AI models on your private code, and we do not store your source code permanently.</p>
            </section>

            <section className="border-4 border-black p-6">
              <h2 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2">&gt; 5. PING</h2>
              <p className="font-medium">If you have any questions about this Privacy Policy, ping us at <a href="mailto:gradviseofficial@gmail.com" className="bg-black text-white px-2 hover:bg-white hover:text-black border-2 border-black ml-1 font-bold">gradviseofficial@gmail.com</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
