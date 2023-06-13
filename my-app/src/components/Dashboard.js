import { useState } from 'react';
import Posts from './Posts';

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Initial Title 1', content: 'This is the first post' },
    { id: 2, title: 'Initial Title 2', content: 'This is the second post' },
    { id: 3, title: 'Initial Title 3', content: 'This is the third post' },
  ]);

  const updatePostTitle = (postId, newTitle) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postId ? { ...post, title: newTitle } : post))
    );
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <Posts posts={posts} updatePostTitle={updatePostTitle} />
    </div>
  );
};

export default Dashboard;
