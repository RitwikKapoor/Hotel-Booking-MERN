import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFav,
  toFav,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/book/:id", jwtCheck, bookVisit);
router.post("/allBookings", jwtCheck, getAllBookings);
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:id", jwtCheck,toFav);
router.post("/allFav", jwtCheck, getAllFav);

export { router as userRoute };
