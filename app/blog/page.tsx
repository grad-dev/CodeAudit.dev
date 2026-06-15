import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | CodeAudit.dev",
  description: "Read the latest articles on code security, performance optimization, and architecture from the CodeAudit team.",
  alternates: {
    canonical: "https://codeaudit.dev/blog",
  },
};

export default function BlogIndex() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black min-h-screen ">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-12 border-b-[4px] border-black pb-8">
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 bg-yellow-300 inline-block px-4 py-2 border-[4px] border-black shadow-[4px_4px_0_0_#000]">
            CodeAudit Blog
          </h1>
          <p className="text-xs md:text-sm border-l-[4px] border-black pl-4 bg-gray-100 py-2 font-bold shadow-[4px_4px_0_0_#000] mt-4">
            Insights on shipping secure, performant, and maintainable code.
          </p>
        </div>

        <div className="overflow-x-auto border-[4px] border-black shadow-[8px_8px_0_0_#000]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-yellow-300 text-black uppercase text-xs md:text-sm tracking-widest border-b-[4px] border-black font-black">
                <th className="p-4 border-r-[4px] border-black font-black w-1/4">Date</th>
                <th className="p-4 border-r-[4px] border-black font-black w-1/2">Title</th>
                <th className="p-4 font-black w-1/4">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y-[4px] divide-black">
              {blogPosts.map((post) => (
                <tr key={post.slug} className="hover:bg-gray-100 transition-none group">
                  <td className="p-4 border-r-[4px] border-black whitespace-nowrap font-bold text-xs md:text-sm">{post.date}</td>
                  <td className="p-4 border-r-[4px] border-black font-black text-sm md:text-base">
                    <Link href={`/blog/${post.slug}`} className="hover:bg-black hover:text-white px-2 py-1 transition-none inline-block">
                      {post.title}
                    </Link>
                  </td>
                  <td className="p-4 uppercase text-[10px] md:text-xs font-bold">{post.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
