import React from 'react';
import './Post.css';
import Post from "./Post";

const Posts = ({posts, handlePostClick}) => {

  return (
    <div className="posts" >
        {posts.map(
          (
            post
          ) => (
            <Post key={post.id} post={post} handlePostClick={handlePostClick} />
          )
        )}
    </div>
  );
};

export default Posts;
