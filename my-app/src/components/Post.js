import React, { useState } from 'react';

const Post = ({ post, updatePostTitle }) => {
  const [newTitle, setNewTitle] = useState(post.title);

  const handleUpdateTitle = () => {
    updatePostTitle(post.id, newTitle);
  };

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleUpdateTitle}>Update Title</button>
      </div>
    </div>
  );
};

export default Post;
