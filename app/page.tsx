import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts[0]; // Show the latest as "Featured"

  return (
    <div>
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-3">Tink On It</h1>
        <p className="text-xl text-gray-600 mb-7">
          Where ideas, life, dogs & tech all meet — raw, real, and yours to read.
        </p>
        <Link
          href="/blog"
          className="px-8 py-3 bg-black text-white rounded-2xl font-semibold hover:bg-gray-900 transition mb-6"
        >
          Read the Blog
        </Link>
        <p className="text-sm text-gray-400">
          By Tushar Panchal — <Link href="/about" className="underline">Know me</Link>
        </p>
      </section>
      {/* FEATURED STORY */}
      {featured && (
        <section className="max-w-3xl mx-auto px-4 mb-12">
          <div className="rounded-2xl overflow-hidden border shadow bg-white">
            <Link href={`/${featured.slug}`} className="block">
              <div className="relative w-full h-64">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 text-left">
                <span className="text-xs text-gray-500 uppercase">{featured.category}</span>
                <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
                <p className="text-md text-gray-700">{featured.description}</p>
                <span className="text-xs text-gray-400">{featured.date}</span>
              </div>
            </Link>
          </div>
        </section>
      )}
      {/* TRENDING STORIES */}
      {posts.length > 1 && (
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <h2 className="text-lg font-bold mb-2">Trending</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {posts.slice(1, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="min-w-[220px] bg-gray-100 rounded-lg p-2 flex-shrink-0 hover:bg-gray-200 transition"
              >
                <div className="relative w-full h-24 mb-1 rounded overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1 truncate">{post.title}</h3>
                  <span className="text-xs text-gray-500">{post.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
