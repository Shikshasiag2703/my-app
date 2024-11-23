import Link from "next/link";
import React from "react";

const BlogItem = ({ title, imageUrl, link, slug, description }) => {
  return (
    <div className="space-y-5 relative">
      <div className="w-full h-[240px] rounded-md overflow-hidden shadow">
        <img src={imageUrl} alt={title} className="w-full h-full" />
      </div>
      <h6 className="font-bold text-lg text-dark leading-6 tracking-[-0.4px] break-words">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h6>
      <p>
        {description}...{" "}
        <Link href={`/blog/${slug}`} className="hover:underline text-gray-500">
          Read More
        </Link>
      </p>
    </div>
  );
};

export default BlogItem;
