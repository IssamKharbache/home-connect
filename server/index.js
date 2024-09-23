import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

//initializing the express app
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//running the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
