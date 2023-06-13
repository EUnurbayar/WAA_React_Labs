import React, { useState } from "react";
import Posts from "./Posts";

import PostDetails from "./PostDetails";
import "./Dashboard.css";

const Dashboard = () => {
  const initialPosts = [
    { id: 1, title: "Post 1", author: "Author 1" },
    { id: 2, title: "Post 2", author: "Author 2" },
    { id: 3, title: "Post 3", author: "Author 3" },
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleUpdateTitle = (postId, newTitle) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, title: newTitle } : post
    );
    setPosts(updatedPosts);
  };

  const handlePostClick = (postId) => {
    const post = posts.find((post) => post.id === postId);
    setSelectedPost(post);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    handleUpdateTitle(posts[0].id, inputValue);
    if(selectedPost) {
      if(selectedPost.id === posts[0].id) {
        const post = posts.find((post) => post.id === posts[0].id);
        post.title = inputValue
        setSelectedPost(post)
      }
    }
    setInputValue("");
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="post-container">
        <Posts key={posts.id} posts={posts} handlePostClick={handlePostClick} />
      </div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Change Title</button>
      </div>
      <div>{selectedPost ? <PostDetails post={selectedPost} /> : null}</div>
    </div>
  );
};

export default Dashboard;
