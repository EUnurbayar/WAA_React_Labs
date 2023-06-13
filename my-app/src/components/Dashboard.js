import React, { useState } from 'react';
import Posts from './Posts';

const Dashboard = () => {
  const initialPosts = [
    { id: 1, title: 'Post 1', author: 'Author 1' },
    { id: 2, title: 'Post 2', author: 'Author 2' },
    { id: 3, title: 'Post 3', author: 'Author 3' },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [updatedTitle, setUpdatedTitle] = useState('');

  const updateFirstPostTitle = () => {
    if (updatedTitle.trim() !== '') {
      const updatedPosts = [...posts];
      updatedPosts[0].title = updatedTitle;
      setPosts(updatedPosts);
      setUpdatedTitle('');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Posts posts={posts} />
      <div>
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <button onClick={updateFirstPostTitle}>Update Title</button>
      </div>
    </div>
  );
};

export default Dashboard;
