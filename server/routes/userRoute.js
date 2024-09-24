import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/book-visit/:id", bookVisit);
router.post("/booked-visits", allBookings);
router.post("/cancel-booking/:id", cancelBooking);

export { router as userRoute };
