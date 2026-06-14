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

  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-200 px-1 py-0.5 text-sm font-mono border-2 border-black font-bold">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold uppercase">$1</strong>');
  
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-12 mb-6 uppercase border-b-4 border-black pb-2 font-mono">$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-8 mb-4 uppercase font-mono">$1</h3>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-12 mb-6 uppercase border-b-8 border-black pb-2 font-mono">$1</h1>');
  
  html = html.replace(/^\d+\.\s+(.*$)/gim, '<li class="ml-6 list-decimal mb-2 font-mono font-bold">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 list-none mb-2 font-mono font-bold before:content-[\'[>]\'] before:mr-2"> $1</li>');
  
  const paragraphs = html.split(/\n\n+/).map(p => {
    if (p.trim().startsWith('<h') || p.trim().startsWith('___CODEBLOCK') || p.trim().startsWith('<li') || p.trim().startsWith('<br')) {
      return p;
    }
    return `<p class="mb-6 leading-relaxed text-lg font-mono">${p}</p>`;
  });
  
  html = paragraphs.join('\n');

  html = html.replace(/___CODEBLOCK_(\d+)___/g, (match, p1) => {
    return `<pre class="bg-black text-white p-4 overflow-x-auto text-sm my-6 font-mono border-4 border-black"><code>${codeBlocks[parseInt(p1)].trim()}</code></pre>`;
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
        <Link href="/blog" className="inline-block border-2 border-black px-4 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white mb-8 transition-none font-mono">
          [ BACK TO SYSTEM.LOG ]
        </Link>
        
        <header className="mb-12 border-4 border-black p-8 bg-white [box-shadow:8px_8px_0_0_#000]">
          <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase mb-6 font-mono">
            <span className="bg-black text-white px-3 py-1">{post.category}</span>
            <span className="border-2 border-black px-2 py-1">TTR: {post.readTime}</span>
            <span className="border-2 border-black px-2 py-1">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 leading-none tracking-tighter">
            {post.title}
          </h1>
          <p className="text-xl font-mono border-l-4 border-black pl-4 font-bold">
            {post.excerpt}
          </p>
        </header>

        <div className="border-4 border-black p-8 md:p-12 bg-white mb-16 [box-shadow:8px_8px_0_0_#000]">
          <div 
            className="prose-none max-w-none"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />
        </div>

        <div className="mt-16 bg-yellow-300 border-4 border-black p-8 lg:p-12 text-center [box-shadow:8px_8px_0_0_#000]">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-tighter">System Check Required</h2>
          <p className="text-lg font-mono mb-8 max-w-2xl mx-auto font-bold">
            RUN CODEAUDIT BEFORE DEPLOYMENT. AVOID CRITICAL FAILURES. JOIN THE QUEUE.
          </p>
          <Link
            href="/?waitlist=true"
            scroll={false}
            className="inline-block border-4 border-black bg-white text-black px-8 py-4 font-bold text-xl uppercase hover:bg-black hover:text-white transition-none"
          >
            [ INITIALIZE AUDIT ]
          </Link>
        </div>
      </div>
    </article>
  );
}
