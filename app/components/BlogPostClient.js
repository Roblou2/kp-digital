"use client";

import { MDXRemote } from "next-mdx-remote";

export default function BlogPostClient({ mdxSource }) {
  return <MDXRemote {...mdxSource} />;
}
