"use client";

import { BlogMeta } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type BlogListClientProps = {
  allPosts: BlogMeta[];
};

export default function BlogListClient({ allPosts }: BlogListClientProps) {
  const [selected, setSelected] = useState<string>("All");

  const categories = useMemo<string[]>(() => {
    const cats = allPosts.map((p) => p.category);
    return ["All", ...Array.from(new Set(cats))];
  }, [allPosts]);

  const filtered: BlogMeta[] =
    selected === "All"
      ? allPosts
      : allPosts.filter(
          (p) => p.category.toLowerCase() === selected.toLowerCase()
        );

  return (
    <div>
      {/* Trending Section */}
      {allPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">Trending</h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {allPosts.slice(0, 3).map((post) => (
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
                  <h3 className="font-semibold text-sm mb-1 truncate">
                    {post.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {post.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Filter Bar */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full border font-medium transition ${
              selected === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">
            No blogs found.
          </div>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="group border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white flex flex-col"
            >
              <div className="relative w-full h-48 mb-3 rounded-xl overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-gray-500 uppercase mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-semibold mb-1 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{post.description}</p>
                <span className="mt-auto text-xs text-gray-400">{post.date}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
