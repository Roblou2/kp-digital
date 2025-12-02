import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc"; // 👈 RSC version
import BlogPostWrapper from "../../../app/components/BlogPostWrapper";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "app/blog/posts");
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function BlogPostPage({ params }) {
  const slug = params.slug;
  const postsDir = path.join(process.cwd(), "app/blog/posts");
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data: frontmatter, content } = matter(fileContents);

  return (
    <BlogPostWrapper
      title={frontmatter.title}
      hero_image={frontmatter.hero_image}
      hero_image_alt={frontmatter.hero_image_alt}
    >
      {/* MDXRemote RSC takes `source` (raw MDX string) */}
      <MDXRemote source={content} />
    </BlogPostWrapper>
  );
}
