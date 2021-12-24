/* eslint-disable linebreak-style */
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import notFound from "./middlewares/notfound.js";
import errorHandler from "./middlewares/errorHandler.js";
import api from "./api/index.js";

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});

app.use("/api/v1", api);

const url =
  "mongodb+srv://todo:sayem@cluster0.kctko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("Database Connected");
});

app.use(notFound);
app.use(errorHandler);

export default app;
