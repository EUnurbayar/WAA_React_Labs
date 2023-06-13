import React, { useState } from "react";
import "./PostDetails.css";

const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h2>Post Details</h2>
      <p>ID: {post.id}</p>
      <p>
        {post.title}
      </p>
      <p>Author: {post.author}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default PostDetails;
