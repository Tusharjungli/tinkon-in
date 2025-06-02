"use client";

import * as React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMemo } from "react";
import { serialize } from "next-mdx-remote/serialize";

// Optional: Customize MDX elements (add more as needed)
const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  img: (props: any) => (
    <img className="rounded-lg my-8 mx-auto" style={{ maxWidth: "100%" }} {...props} />
  ),
  // Add more elements/styles as you want
};

type MDXContentProps = { source: string };

export default function MDXContent({ source }: MDXContentProps) {
  const mdxSource = useMemo(
    () => serialize(source, { parseFrontmatter: false }),
    [source]
  );

  // You can also add loading state if your MDX is dynamic/async
  return (
    <React.Suspense fallback={<div>Loading content…</div>}>
      <MDXRemote {...(mdxSource as any)} components={components} />
    </React.Suspense>
  );
}
