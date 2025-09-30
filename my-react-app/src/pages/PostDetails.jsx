import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    await API.delete(`/posts/${id}`);
    navigate("/");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container-readmore">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <p className="post-author">Author: {post.author}</p>
      <p className="post-tags">Tags: {post.tags && Array.isArray(post.tags) ? post.tags.join(", ") : ""}</p>

      <button onClick={handleDelete} className="delete-btn">Delete</button>

    </div>
  );
}

export default PostDetails;