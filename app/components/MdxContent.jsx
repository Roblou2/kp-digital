"use client";

import { MDXRemote } from "next-mdx-remote";

export default function MdxContent(props) {
  return <MDXRemote {...props} />;
}
