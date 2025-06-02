import { getAllPosts } from "@/lib/blog";
import BlogListClient from "./BlogListClient";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Blog</h1>
      <BlogListClient allPosts={posts} />
    </div>
  );
}
