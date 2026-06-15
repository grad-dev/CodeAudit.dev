import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface CompetitorData {
  id: string;
  name: string;
  keyword: string;
  description: string;
  whoItsFor: string;
  whoWeAreFor: string;
  whenToUseBoth: string;
  features: {
    feature: string;
    codeAudit: string;
    competitor: string;
  }[];
}

const competitors: Record<string, CompetitorData> = {
  snyk: {
    id: 'snyk',
    name: 'Snyk',
    keyword: 'Snyk alternative',
    description: 'CodeAudit.dev vs Snyk: Which Is Right for You?',
    whoItsFor: 'Snyk is built for large enterprise teams with mature DevSecOps pipelines. It excels at deeply integrating into CI/CD workflows, providing extensive vulnerability databases, and managing organization-wide security policies across massive codebases.',
    whoWeAreFor: 'CodeAudit.dev is built for indie hackers, startup founders, and agile teams shipping fast, particularly those using AI-generated code. It focuses on instant, zero-setup audits that catch vulnerabilities, performance bottlenecks, and architectural debt without requiring complex CI integration.',
    whenToUseBoth: 'You might use Snyk as your permanent, enterprise-grade CI gatekeeper for compliance, while using CodeAudit.dev during early development, for quick pre-launch sanity checks, or specifically to audit blocks of AI-generated code before committing them to the main branch.',
    features: [
      { feature: 'Setup Time', codeAudit: 'Instant (paste URL)', competitor: 'Requires CI/CD configuration' },
      { feature: 'Target Audience', codeAudit: 'Indie Hackers, Startups, Agencies', competitor: 'Enterprise DevSecOps Teams' },
      { feature: 'AI-Generated Code Checks', codeAudit: 'Specialized focus on "vibe coding" errors', competitor: 'General SAST focus' },
      { feature: 'Pricing Accessibility', codeAudit: 'Built for founders and freelancers', competitor: 'Enterprise pricing models' },
      { feature: 'Scope', codeAudit: 'Security, Performance & Architecture', competitor: 'Security & Open Source Dependencies' },
    ]
  },
  sonarqube: {
    id: 'sonarqube',
    name: 'SonarQube',
    keyword: 'SonarQube alternative',
    description: 'CodeAudit.dev vs SonarQube: Which Is Right for You?',
    whoItsFor: 'SonarQube is built for established development teams who need continuous code quality inspection. It is often hosted on-premise or integrated deeply into enterprise build pipelines to enforce strict code quality gates and maintainability ratings.',
    whoWeAreFor: 'CodeAudit.dev is built for developers who need an immediate, frictionless audit of their repository. It provides instant visibility into security flaws, performance issues, and the unique risks introduced by AI coding tools, without the overhead of hosting or configuring a SonarQube server.',
    whenToUseBoth: 'You might use SonarQube to enforce long-term quality gates across a large organization\'s repositories, while using CodeAudit.dev for quick, ad-hoc audits of new projects, freelance client work, or specific AI-assisted features before they enter the main pipeline.',
    features: [
      { feature: 'Setup Time', codeAudit: 'Instant (paste URL)', competitor: 'Server setup or CI integration needed' },
      { feature: 'Target Audience', codeAudit: 'Fast-shipping teams & founders', competitor: 'Enterprise QA & Security teams' },
      { feature: 'AI-Generated Code Checks', codeAudit: 'Dedicated AI code review models', competitor: 'Standard static analysis rules' },
      { feature: 'Pricing Accessibility', codeAudit: 'Accessible tiers for individuals', competitor: 'Developer-seat based enterprise pricing' },
      { feature: 'Hosting', codeAudit: 'Cloud-native, zero ops', competitor: 'Self-hosted or Cloud options' },
    ]
  },
  codeant: {
    id: 'codeant',
    name: 'CodeAnt',
    keyword: 'CodeAnt alternative',
    description: 'CodeAudit.dev vs CodeAnt: Which Is Right for You?',
    whoItsFor: 'CodeAnt focuses on auto-fixing and remediating code quality issues directly within the IDE or pull requests. It is built for developers who want automated pull requests generated to fix generic code smells and style issues.',
    whoWeAreFor: 'CodeAudit.dev provides a holistic overview of your codebase\'s health, focusing heavily on security vulnerabilities, structural performance bottlenecks, and the specific quirks of AI-generated code. We provide AI-ready fix prompts you can drop into your agent of choice.',
    whenToUseBoth: 'Use CodeAnt for continuous, automated PRs for minor style and quality fixes, and use CodeAudit.dev for comprehensive pre-launch security audits and deep architectural reviews of complex AI-generated implementations.',
    features: [
      { feature: 'Setup Time', codeAudit: 'Instant (paste URL)', competitor: 'GitHub App / IDE integration' },
      { feature: 'Primary Focus', codeAudit: 'Comprehensive Security & Architecture', competitor: 'Auto-remediation of code smells' },
      { feature: 'AI-Generated Code Checks', codeAudit: 'Identifies high-level logic and security flaws', competitor: 'General code quality auto-fixes' },
      { feature: 'Remediation Approach', codeAudit: 'AI-ready fix prompts for Claude/Cursor', competitor: 'Automated PRs' },
      { feature: 'Target Audience', codeAudit: 'Founders launching new products', competitor: 'Teams managing technical debt' },
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor: comp } = await params;
  const competitor = competitors[comp];
  if (!competitor) return {};
  
  return {
    title: `${competitor.keyword} | CodeAudit.dev`,
    description: `Compare CodeAudit.dev and ${competitor.name}. Find out which code audit tool is right for your startup, agency, or personal project.`,
    alternates: {
      canonical: `https://codeaudit.dev/compare/${comp}`,
    },
    openGraph: {
      title: `${competitor.keyword} | CodeAudit.dev`,
      description: `Compare CodeAudit.dev and ${competitor.name}. Find out which code audit tool is right for your startup, agency, or personal project.`,
      url: `https://codeaudit.dev/compare/${comp}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export function generateStaticParams() {
  return [
    { competitor: 'snyk' },
    { competitor: 'sonarqube' },
    { competitor: 'codeant' },
  ];
}

export default async function ComparePage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor: comp } = await params;
  const data = competitors[comp];
  
  if (!data) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Who is ${data.name} built for?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.whoItsFor
        }
      },
      {
        "@type": "Question",
        "name": "Who is CodeAudit.dev built for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.whoWeAreFor
        }
      },
      {
        "@type": "Question",
        "name": `When might I use both CodeAudit.dev and ${data.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": data.whenToUseBoth
        }
      }
    ]
  };

  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000015_2px,transparent_2px),linear-gradient(to_bottom,#00000015_2px,transparent_2px)] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-12 bg-black text-white p-6 md:p-10 border-[4px] border-black shadow-[8px_8px_0_0_rgba(0,0,255,1)]">
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-white text-black border-[2px] border-black mb-4 shadow-[2px_2px_0_0_rgba(255,0,0,1)]">
            <span className="text-[10px] font-black uppercase tracking-widest text-black">TOOL COMPARISON</span>
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white mb-4 uppercase leading-[1]">
            CodeAudit.dev vs {data.name}: Which Is Right for You?
          </h1>
          <p className="text-[10px] md:text-xs font-bold text-gray-300 leading-relaxed border-l-[4px] border-yellow-300 pl-4 py-2">
            A factual comparison to help you choose the right code analysis tool for your workflow.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto border-[4px] border-black mb-12 bg-white overflow-x-auto shadow-[12px_12px_0_0_#000]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-yellow-300 border-b-[4px] border-black">
                <th className="py-4 px-6 font-black text-black border-r-[4px] border-black uppercase tracking-widest text-xs w-1/4">Feature</th>
                <th className="py-4 px-6 font-black text-black border-r-[4px] border-black uppercase tracking-widest text-xs w-3/8 bg-blue-600 text-white">CodeAudit.dev</th>
                <th className="py-4 px-6 font-black text-black uppercase tracking-widest text-xs w-3/8">{data.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y-[4px] divide-black">
              {data.features.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-100 transition-colors">
                  <td className="py-4 px-6 text-black font-black uppercase text-[10px] tracking-widest border-r-[4px] border-black">{item.feature}</td>
                  <td className="py-4 px-6 text-black font-bold text-xs border-r-[4px] border-black leading-relaxed">{item.codeAudit}</td>
                  <td className="py-4 px-6 text-gray-600 font-bold text-xs leading-relaxed">{item.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Who it's for */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-[4px] border-black mb-12 shadow-[12px_12px_0_0_#000]">
          <div className="p-6 md:p-10 bg-white border-b-[4px] md:border-b-0 md:border-r-[4px] border-black flex flex-col h-full">
            <h2 className="text-base font-black text-black mb-4 uppercase inline-block bg-gray-200 border-[2px] border-black px-3 py-1 shadow-[2px_2px_0_0_#000]">Who {data.name} is built for</h2>
            <p className="text-black text-[10px] md:text-xs font-bold leading-relaxed">{data.whoItsFor}</p>
          </div>
          <div className="p-6 md:p-10 bg-blue-50 flex flex-col h-full">
            <h2 className="text-base font-black text-black mb-4 uppercase inline-block bg-blue-300 border-[2px] border-black px-3 py-1 shadow-[2px_2px_0_0_#000]">Who CodeAudit.dev is built for</h2>
            <p className="text-black text-[10px] md:text-xs font-bold leading-relaxed">{data.whoWeAreFor}</p>
          </div>
        </div>

        {/* When to use both */}
        <div className="max-w-4xl mx-auto bg-white border-[4px] border-black p-6 md:p-10 mb-16 shadow-[8px_8px_0_0_#000]">
          <h2 className="text-lg font-black text-black mb-4 uppercase border-b-[4px] border-black pb-2">When you might use both</h2>
          <p className="text-black text-[10px] md:text-xs font-bold leading-relaxed border-l-[4px] border-red-500 pl-4 py-2 bg-gray-100 mb-0">{data.whenToUseBoth}</p>
        </div>

        {/* CTA */}
        <div className="bg-yellow-300 border-[4px] border-black p-8 md:p-12 max-w-4xl mx-auto shadow-[12px_12px_0_0_#000] text-center mt-12">
          <h2 className="text-xl md:text-2xl font-black text-black mb-4 uppercase tracking-tighter leading-[1]">Ready to audit your code?</h2>
          <p className="text-[10px] md:text-xs text-black font-bold mb-8 max-w-2xl mx-auto leading-relaxed border-[4px] border-black bg-white p-3">
            Get instant visibility into security, performance, and architecture issues. Join the waitlist today.
          </p>
          <Link href="?waitlist=true" scroll={false} className="inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm font-black text-white bg-black hover:bg-gray-900 transition-colors border-[4px] border-black shadow-[6px_6px_0_0_rgba(255,255,255,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_0_rgba(255,255,255,1)] uppercase tracking-widest">
            JOIN WAITLIST
          </Link>
        </div>
      </div>
    </div>
  );
}
