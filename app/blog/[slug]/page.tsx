import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `https://codeaudit.dev/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://codeaudit.dev/blog/${post.slug}`,
      images: [`https://codeaudit.dev/og/blog-${post.slug}.png`],
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

function parseMarkdown(md: string) {
  let html = md;
  
  const codeBlocks: string[] = [];
  html = html.replace(/```([\s\S]*?)```/g, (match, p1) => {
    codeBlocks.push(p1);
    return `___CODEBLOCK_${codeBlocks.length - 1}___`;
  });

  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 py-0.5 text-[10px] md:text-xs font-mono border-[2px] border-black font-black shadow-[2px_2px_0_0_#000]">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-black uppercase">$1</strong>');
  
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-xl md:text-2xl font-black mt-12 mb-6 uppercase border-b-[4px] border-black pb-2 font-mono inline-block w-full">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg md:text-xl font-black mt-8 mb-4 uppercase font-mono bg-yellow-300 inline-block px-2 py-1 border-[2px] border-black shadow-[2px_2px_0_0_#000]">$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-2xl md:text-4xl font-black mt-12 mb-6 uppercase border-b-[6px] border-black pb-2 font-mono">$1</h1>');
  
  html = html.replace(/^\d+\.\s+(.*$)/gim, '<li class="ml-6 list-decimal mb-2 font-mono font-bold text-xs md:text-sm">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 list-none mb-2 font-mono font-bold text-xs md:text-sm before:content-[\'[>]\'] before:mr-2 before:font-black"> $1</li>');
  
  const paragraphs = html.split(/\n\n+/).map(p => {
    if (p.trim().startsWith('<h') || p.trim().startsWith('___CODEBLOCK') || p.trim().startsWith('<li') || p.trim().startsWith('<br')) {
      return p;
    }
    return `<p class="mb-6 leading-relaxed text-xs md:text-sm font-mono font-bold">${p}</p>`;
  });
  
  html = paragraphs.join('\n');

  html = html.replace(/___CODEBLOCK_(\d+)___/g, (match, p1) => {
    return `<pre class="bg-black text-white p-4 overflow-x-auto text-[10px] md:text-xs my-6 font-mono border-[4px] border-black shadow-[6px_6px_0_0_#000]"><code>${codeBlocks[parseInt(p1)].trim()}</code></pre>`;
  });

  return html;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "CodeAudit.dev"
    },
    image: `https://codeaudit.dev/og/blog-${post.slug}.png`,
  };

  const parsedContent = parseMarkdown(post.content);

  return (
    <article className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container px-4 mx-auto max-w-4xl">
        <Link href="/blog" className="inline-block border-[4px] border-black px-4 py-2 text-[10px] md:text-xs font-black uppercase hover:bg-black hover:text-white mb-8 transition-none font-mono shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 hover:shadow-none">
          [ BACK TO SYSTEM.LOG ]
        </Link>
        
        <header className="mb-12 border-[4px] border-black p-6 md:p-10 bg-white shadow-[8px_8px_0_0_#000]">
          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-black uppercase mb-6 font-mono tracking-widest">
            <span className="bg-black text-white px-3 py-1 shadow-[2px_2px_0_0_#000]">{post.category}</span>
            <span className="border-[2px] border-black px-2 py-1 shadow-[2px_2px_0_0_#000]">TTR: {post.readTime}</span>
            <span className="border-[2px] border-black px-2 py-1 shadow-[2px_2px_0_0_#000]">{post.date}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-[1.1] tracking-tighter bg-yellow-300 inline-block px-3 py-1 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
            {post.title}
          </h1>
          <p className="text-xs md:text-sm font-mono font-bold bg-gray-100 p-4 border-[4px] border-black shadow-[4px_4px_0_0_#000] leading-relaxed mt-4">
            <span className="bg-black text-white px-2 py-0.5 font-black uppercase tracking-widest mr-2 select-none text-[10px]">EXCERPT:</span>
            {post.excerpt}
          </p>
        </header>

        <div className="border-[4px] border-black p-6 md:p-10 bg-white mb-16 shadow-[12px_12px_0_0_#000]">
          <div 
            className="prose-none max-w-none"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        </div>

        <div className="mt-16 bg-yellow-300 border-[4px] border-black p-8 md:p-10 text-center shadow-[12px_12px_0_0_#000]">
          <h2 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter border-[4px] border-black inline-block px-4 py-2 bg-white shadow-[4px_4px_0_0_#000]">System Check Required</h2>
          <p className="text-xs md:text-sm font-mono mb-8 max-w-2xl mx-auto font-bold mt-6 leading-relaxed bg-black text-white p-4 border-[4px] border-black">
            RUN CODEAUDIT BEFORE DEPLOYMENT. AVOID CRITICAL FAILURES. JOIN THE QUEUE.
          </p>
          <Link
            href="/?waitlist=true"
            scroll={false}
            className="inline-block border-[4px] border-black bg-white text-black px-8 py-4 font-black text-xs md:text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            [ INITIALIZE AUDIT ]
          </Link>
        </div>
      </div>
    </article>
  );
}
