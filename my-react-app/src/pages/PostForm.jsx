import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    tags: "",
  });

  useEffect(() => {
    if (id) {
      API.get(`/posts/${id}`).then((res) =>
        setForm({ ...res.data, tags: res.data.tags.join(", ") })
      );
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()),
    };

    if (id) {
      await API.put(`/posts/${id}`, postData);
    } else {
      await API.post("/posts", postData);
    }

    navigate("/");
  };

  return (
    <div className="container-form">
      <h2>{id ? "Edit Post" : "Create Post"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          className="form-input"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          className="form-input"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          required
        />
        <input
          name="author"
          className="form-input"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <input
          name="tags"
          className="form-input"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
        />
        <button type="submit" className="form-btn">
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}

export default PostForm;
