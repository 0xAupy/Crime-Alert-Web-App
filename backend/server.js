import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/mongodb.js";

import authRoutes from "./routes/auth.routes.js";
import protectRoute from "./middleware/auth.middleware.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

//api endpoints
app.get("/", (req, res) => {
  res.send("API working!");
});
app.use("/api/auth", authRoutes);

const port = process.env.SERVER_PORT || 3000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
