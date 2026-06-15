import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | CodeAudit.dev',
  description: 'Get in touch with the CodeAudit.dev team. We are here to answer your questions about our code audit tools.',
  alternates: {
    canonical: 'https://codeaudit.dev/contact',
  },
  openGraph: {
    title: 'Contact | CodeAudit.dev',
    description: 'Get in touch with the CodeAudit.dev team. We are here to answer your questions about our code audit tools.',
    url: 'https://codeaudit.dev/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function ContactPage() {
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
        "name": "Contact",
        "item": "https://codeaudit.dev/contact"
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
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-4 uppercase tracking-tighter border-b-8 border-black pb-4">
            COMM_LINK
          </h1>
          <p className="text-xl mt-8 border-4 border-black inline-block px-4 py-2 bg-yellow-300 font-bold uppercase [box-shadow:4px_4px_0_0_#000]">
            STATUS: AWAITING INPUT
          </p>
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 [box-shadow:12px_12px_0_0_#000]">
          <form action="mailto:gradviseofficial@gmail.com" method="POST" encType="text/plain" className="space-y-8 ">
            <div>
              <label htmlFor="name" className="block text-lg font-bold text-black mb-2 uppercase">
                &gt; Identify (Name)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-gray-100 rounded-none shadow-none font-bold"
                placeholder="_enter_name_"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-lg font-bold text-black mb-2 uppercase">
                &gt; Return Address (Email)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-gray-100 rounded-none shadow-none font-bold"
                placeholder="_enter_email_"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-bold text-black mb-2 uppercase">
                &gt; Payload (Message)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-white border-4 border-black px-4 py-3 text-black focus:outline-none focus:bg-gray-100 rounded-none shadow-none font-bold"
                placeholder="_enter_data_"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border-4 border-black text-xl font-bold text-white bg-black hover:bg-white hover:text-black focus:outline-none transition-none uppercase"
            >
              [ TRANSMIT ]
            </button>
          </form>
          
          <div className="mt-12 text-center border-t-4 border-black pt-8">
            <p className="text-black font-bold">
              DIRECT PROTOCOL: <a href="mailto:gradviseofficial@gmail.com" className="bg-black text-white px-2 hover:bg-white hover:text-black border-2 border-black ml-2">gradviseofficial@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
