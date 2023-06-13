import React, { useState } from 'react';
import Posts from './Posts';
import PostDetails from './PostDetails';


const Dashboard = () => {
  const initialPosts = [
    { id: 1, title: 'Post 1', author: 'Author 1' },
    { id: 2, title: 'Post 2', author: 'Author 2' },
    { id: 3, title: 'Post 3', author: 'Author 3' },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleUpdateTitle = (postId, newTitle) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, title: newTitle } : post
    );
    setPosts(updatedPosts);
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };

  const handlePostClick = (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const handleBackToPosts = () => {
    setSelectedPost(null);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {selectedPost ? (
        <PostDetails
          post={selectedPost}
          handleUpdateTitle={handleUpdateTitle}
          handleDeletePost={handleDeletePost}
          handleBackToPosts={handleBackToPosts}
        />
      ) : (
        <Posts posts={posts} handlePostClick={handlePostClick} />
      )}
    </div>
  );
};

export default Dashboard;
