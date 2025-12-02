import LayoutBlog from '../components/layout-blog';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = {
  title: "Blog | Sleek Digital Designs",
  description: "Insights, guides and tips to turbo-charge your digital marketing efforts",

  openGraph: {
    title: "Blog",
    description: "Insights, guides and tips to turbo-charge your digital marketing efforts",
    url: "https://sleekdigitaldesigns.com/blog",
    siteName: "Sleek Digital Designs",
    images: [
      {
        url: "https://sleek-digital-logo-black-250.png",
        width: 600,
        height: 300,
        alt: "Blog OG image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Insights, guides and tips to turbo-charge your digital marketing efforts",
    images: ["https://sleek-digital-logo-black-250.png"],
  },
};




const BlogPage = () => {
  const postsDir = path.join(process.cwd(), "app/blog/posts");

  const posts = fs.readdirSync(postsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const rawContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(rawContent); // parse frontmatter

      return {
        slug: file.replace(".mdx", ""),
        ...data,
      };
    });

  return (
    <LayoutBlog titleOne="The Blog">
      <div className="bg-black flex flex-wrap flex-row pt-[4rem] px-[15%] gap-6 justify-center">
        {posts.map((post) => (
          <div key={post.slug} className="border text-white p-4 rounded-md shadow max-w-sm">
            <img 
              src={post.hero_image} 
              alt={post.hero_image_alt || post.title} 
              className="rounded mb-4" 
            />

            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-lg text-gray-300">{post.excerpt}</p>

            <Link 
              href={`/blog/${post.slug}`} 
              className="text-blue-500 mt-4 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </LayoutBlog>
  );
};

export default BlogPage;
