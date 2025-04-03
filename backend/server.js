import express from "express";
import { configDotenv } from "dotenv";
import authRoute from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
const app = express();
configDotenv();
app.use("/api/auth", authRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
