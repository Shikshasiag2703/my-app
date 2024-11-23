import React from "react";
import { Blogs } from "@/app/helpers";
import BlogContent from "@/components/BlogContent";

export async function generateMetadata({ params }) {
  const blog = Blogs.find((b) => b.slug === params.slug);

  if (blog) {
    return {
      title: `${blog.title} - Shiksha Siag Blog`,
      description: blog.description,
      keywords: [
        "Shiksha Siag",
        "blog",
        "web development",
        "frontend development",
        "React",
        "Next.js",
        blog.title,
      ],
      openGraph: {
        title: `${blog.title} - Shiksha Siag Blog`,
        description: blog.description,
        url: `http://localhost:3000/blog/${params.slug}`,
        type: "article",
        images: [blog.imageUrl],
      },
      metadataBase: new URL(`http://localhost:3000/blog/${params.slug}`),
      alternates: {
        canonical: `/blog/${params.slug}`,
      },
    };
  } else {
    return {
      title: "Blog - Shiksha Siag",
      description:
        "Explore insights, ideas, and inspiration through Shiksha Siag's blog.",
    };
  }
}

export default async function page({ params }) {
  const blog = Blogs.find((b) => b.slug == params.slug);

  return (
    <div className="w-full bg-white">
      <div className="w-full m-auto pt-10 pb-20 px-4 max-w-[1100px] flex-1">
        <div className="space-y-10">
          <div className="space-y-10">
            <div
              className="w-full h-[380px] bg-white rounded-md overflow-hidden shadow"
              style={{
                background: `url('${blog.imageUrl}') no-repeat center center / cover`,
              }}
            />
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-dark">{blog.title}</h3>
            </div>
          </div>
          <div className="text-[17px]">
            <BlogContent content={blog.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
