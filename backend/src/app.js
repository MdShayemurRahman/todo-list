/* eslint-disable linebreak-style */
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

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

app.use(notFound);
app.use(errorHandler);

export default app;
