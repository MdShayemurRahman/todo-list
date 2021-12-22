/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import {
  getAll,
  getById,
  postData,
  updateData,
  deleteData,
} from "./controller.js";

import express from "express";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", postData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
