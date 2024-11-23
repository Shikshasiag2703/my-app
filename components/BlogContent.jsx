import React from "react";

const BlogContent = ({ content }) => {
  return (
    <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default BlogContent;
