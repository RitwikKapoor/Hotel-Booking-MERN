import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
} from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/create", jwtCheck, createResidency);
router.get("/all", getAllResidencies);
router.get("/resd/:id", getResidency);

export { router as residencyRoute };
