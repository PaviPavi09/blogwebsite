import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/posts").then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container">
      <h2 className="post-list-title">Blog Posts</h2>
      <div className="post-list">
      {posts.map((post) => (
        <div key={post._id} className="card">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-author">Author: {post.author}</p>
          <p className="post-tags">Tags: {post.tags.join(", ")}</p>
          <Link to={`/posts/${post._id}`} className="read-more">Read More</Link>
          <Link to={`/edit/${post._id}`} className="edit-btn">Edit</Link>
        </div>
        
      ))}
    </div>
    </div>
  );
}

export default PostList;
