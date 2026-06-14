import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'code audit tool waitlist | CodeAudit.dev',
  description: 'Join the waitlist for CodeAudit.dev. Get early access to the best security, performance, and architecture audit tool for modern codebases.',
  alternates: {
    canonical: 'https://codeaudit.dev/waitlist',
  },
  openGraph: {
    title: 'code audit tool waitlist | CodeAudit.dev',
    description: 'Join the waitlist for CodeAudit.dev. Get early access to the best security, performance, and architecture audit tool for modern codebases.',
    url: 'https://codeaudit.dev/waitlist',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function WaitlistPage() {
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
        "name": "Waitlist",
        "item": "https://codeaudit.dev/waitlist"
      }
    ]
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Get Early Access
          </h1>
          <p className="text-xl text-gray-400">
            CodeAudit.dev is launching soon. Join developers and founders getting priority access to automated security, performance, and architecture audits.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <form action="mailto:gradviseofficial@gmail.com" method="POST" encType="text/plain" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name (optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Jane Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label htmlFor="usecase" className="block text-sm font-medium text-gray-300 mb-2">
                What will you primarily audit?
              </label>
              <select
                id="usecase"
                name="usecase"
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
              >
                <option value="Personal project">Personal project</option>
                <option value="Startup">Startup</option>
                <option value="Client work">Client work</option>
                <option value="Agency">Agency</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="hidden">
              <label>Don't fill this out if you're human: <input type="text" name="bot-check" /></label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Join the Waitlist
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-500">
            We'll email you when we're ready. No spam, ever.
          </p>
        </div>
      </div>
    </div>
  );
}
