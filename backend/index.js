import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => {
  console.error("MongoDB Connection Error:", err);
  process.exit(1);
});

app.use("/api/posts", postRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
