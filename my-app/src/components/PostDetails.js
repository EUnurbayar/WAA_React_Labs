import React, { useState } from 'react';
import './PostDetails.css';

const PostDetails = ({ post, handleUpdateTitle, handleDeletePost, handleBackToPosts }) => {
  const [newTitle, setNewTitle] = useState(post.title);

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleUpdateTitleClick = () => {
    handleUpdateTitle(post.id, newTitle);
  };

  return (
    <div className="post-details">
      <h2>Post Details</h2>
      <p>ID: {post.id}</p>
      <p>Title: <input type="text" value={newTitle} onChange={handleTitleChange} /></p>
      <p>Author: {post.author}</p>
      <button onClick={handleUpdateTitleClick}>Update Title</button>
      <button onClick={() => handleDeletePost(post.id)}>Delete</button>
      <button onClick={handleBackToPosts}>Back to Posts</button>
    </div>
  );
};

export default PostDetails;
