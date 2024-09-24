import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
  getFavoritesProperties,
  makeFavorite,
} from "../controllers/userController.js";

const router = express.Router();
//register endpoint
router.post("/register", createUser);
//book a visit endpoint
router.post("/book-visit/:id", bookVisit);
//get all booked visits endpoint
router.post("/booked-visits", allBookings);
//cancel a booking endpoint
router.post("/cancel-booking/:id", cancelBooking);
//make a favorite property endpoint
router.post("/make-favorite/:PropertyId", makeFavorite);
//get all favorite properties endpoint
router.post("/favorite-properties", getFavoritesProperties);

export { router as userRoute };
