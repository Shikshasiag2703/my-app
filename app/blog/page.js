import BlogItem from "@/components/BlogItem";
import { Blogs } from "../helpers";

export const metadata = {
  title: "Blog - Shiksha Siag",
  description:
    "Dive into my blog to explore insights, ideas, and inspiration. From design trends and development tips to creative problem-solving, discover stories that bring my journey to life.",
  keywords: [
    "Shiksha Siag blog",
    "web development tips",
    "design trends",
    "frontend development",
    "problem-solving in tech",
    "React blog",
    "Next.js insights",
    "creative design ideas",
    "personal journey",
    "programming tutorials",
  ],
  openGraph: {
    title: "Blog - Shiksha Siag",
    description:
      "Dive into Shiksha Siag's blog to explore insights, ideas, and inspiration. From design trends and development tips to creative problem-solving, discover stories that bring her journey to life.",
    url: "http://localhost:3000",
    type: "website",
  },
};

export default function page() {
  return (
    <section id="blogs" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 mb-4">
          My Blogs
        </h2>
        <p className="block antialiased font-sans text-xl leading-relaxed text-inherit mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12">
          Discover a collection of articles and stories that explore the art of
          creation, innovation, and problem-solving. Whether you're seeking
          inspiration or practical tips, my blogs are here to guide and inspire.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {Blogs.map((blog) => (
          <BlogItem key={blog.slug} {...blog} />
        ))}
      </div>
    </section>
  );
}
