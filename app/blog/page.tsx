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
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white text-black min-h-screen font-mono">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-16 border-b-4 border-black pb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            SYSTEM.LOG // BLOG
          </h1>
          <p className="text-xl">
            Insights on shipping secure, performant, and maintainable code.
          </p>
        </div>

        <div className="overflow-x-auto border-4 border-black [box-shadow:8px_8px_0_0_#000]">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-black text-white uppercase text-sm tracking-wider">
                <th className="p-4 border-r-2 border-white font-bold">Date</th>
                <th className="p-4 border-r-2 border-white font-bold">Title</th>
                <th className="p-4 border-r-2 border-white font-bold">Category</th>
                <th className="p-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.map((post) => (
                <tr key={post.slug} className="border-t-4 border-black hover:bg-gray-100 transition-none">
                  <td className="p-4 border-r-4 border-black whitespace-nowrap font-bold">{post.date}</td>
                  <td className="p-4 border-r-4 border-black font-bold text-lg">
                    <Link href={`/blog/${post.slug}`} className="hover:bg-black hover:text-white px-2 py-1 transition-none">
                      {post.title}
                    </Link>
                  </td>
                  <td className="p-4 border-r-4 border-black uppercase text-sm font-bold">{post.category}</td>
                  <td className="p-4 text-center">
                    <Link href={`/blog/${post.slug}`} className="inline-block bg-white text-black border-2 border-black px-4 py-1 font-bold uppercase hover:bg-black hover:text-white transition-none whitespace-nowrap">
                      [ READ ]
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
