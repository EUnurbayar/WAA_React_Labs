import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";

import PostDetails from "./PostDetails";
import "./Dashboard.css";

const Dashboard = () => {

  const [body, setBody] = useState({ password: "123", email: "uinan@miu.edu" });
  const [token, setToken] = useState(null);
  const [posts, setPosts] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    axios
      .post("http://localhost:8080/api/v1/authenticate", body)
      .then((response) => {
        if (response.data.accessToken) {
          setToken(response.data.accessToken);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(token) {
      console.log(token);
      axios.get("http://localhost:8080/api/v1/posts",{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        console.log(`Data:`, response.data)
        setPosts(response.data)
      })
      .catch(error => {
        console.log(`Error:`, error)
      })
    }
  }, [token])

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
    if (selectedPost) {
      if (selectedPost.id === posts[0].id) {
        const post = posts.find((post) => post.id === posts[0].id);
        post.title = inputValue;
        setSelectedPost(post);
      }
    }
    setInputValue("");
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="post-container">
        {posts && (
          <Posts
            key={posts.id}
            posts={posts}
            handlePostClick={handlePostClick}
          />
        )}
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
