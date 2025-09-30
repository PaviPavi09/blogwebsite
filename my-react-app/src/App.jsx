import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import PostForm from "./pages/PostForm";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
