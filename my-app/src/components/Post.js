import React from 'react';
import './Post.css';
const Post = ({ post, handlePostClick }) => {
  const handleClick = () => {
    handlePostClick(post.id);
  };

  return (
    <div className="post" >
      <h3>Title: {post.title}</h3>
      <p>Author: {post.author}</p>
      <button onClick={handleClick}>Details</button>
    </div>
  );
};

export default Post;
