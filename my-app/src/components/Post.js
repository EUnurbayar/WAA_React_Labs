import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <h3>Title: {post.title}</h3>
      <p>Author: {post.author}</p>
    </div>
  );
};

export default Post;
