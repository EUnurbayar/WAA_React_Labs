import React from 'react';
import Post from './Post';

const Posts = ({ posts, updatePostTitle }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} post={post} updatePostTitle={updatePostTitle} />
      ))}
    </div>
  );
};

export default Posts;
