"use client";

import BlogPostClient from "./BlogPostClient";

export default function ClientWrapper({ mdxSource }) {
  return <BlogPostClient mdxSource={mdxSource} />;
}