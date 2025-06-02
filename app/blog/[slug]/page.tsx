import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

// Optional: Explicitly mark as static for Vercel
export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Not found | Tink On It",
      description: "Sorry, this post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://tinkon.in/blog/${params.slug}`,
      images: [
        {
          url: post.coverImage || "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage || "/images/og-image.jpg"],
    },
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-2xl object-cover"
        />
      </div>
      <span className="text-xs text-gray-500 uppercase">{post.category}</span>
      <h1 className="text-4xl font-bold mb-4 mt-2">{post.title}</h1>
      <p className="text-md text-gray-700 mb-6">{post.description}</p>
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} />
      </div>
      <div className="mt-8 text-xs text-gray-400">{post.date}</div>
    </article>
  );
}
