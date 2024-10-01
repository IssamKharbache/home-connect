import express from "express";
import {
  allBookings,
  bookVisit,
  cancelBooking,
  createUser,
  getFavoritesProperties,
  makeFavorite,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();
//register endpoint
router.post("/register", jwtCheck, createUser);
//book a visit endpoint
router.post("/book-visit/:id", jwtCheck, bookVisit);
//get all booked visits endpoint
router.post("/booked-visits", allBookings);
//cancel a booking endpoint
router.post("/cancel-booking/:id", jwtCheck, cancelBooking);
//make a favorite property endpoint
router.post("/make-favorite/:PropertyId", jwtCheck, makeFavorite);
//get all favorite properties endpoint
router.post("/favorite-properties", jwtCheck, getFavoritesProperties);

export { router as userRoute };
