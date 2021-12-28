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

import faker from "faker"; // import faker
import fakerModel from "./Database/model.js";

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

app.post("/api/v1/task/random", (req, res) => {
  let fakeTask = [];
  for (let i = 0; i < 3; i++) {
    let genTitle = new fakerModel({
      title: faker.hacker.phrase(),
    });
    fakeTask.push(genTitle);
  }
  res.json(fakeTask);
});

app.post("/api/v1/task/random/add", async (req, res) => {
  const addData = req.body;
  const newData = new fakerModel(addData);

  try {
    await newData.save();
    res.send("successfully stored data");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/v1", api);

const url =
  "mongodb+srv://todo:sayem@cluster0.kctko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true }).then(() => {
  try {
    console.log("Database Connected");
  } catch (error) {
    console.log("error in connection");
  }
});

app.use(notFound);
app.use(errorHandler);

export default app;
