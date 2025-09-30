import express from 'express';
import { createPost, getPosts, getPostById, updatePost, deletePost, addComment } from '../controllers/postController.js';

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.post("/:id/comments", addComment);

export default router;
