import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

//create a user function
export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating user controller");
  let { email } = req.body;
  const isUserExists = await prisma.user.findUnique({
    where: { email },
  });
  if (!isUserExists) {
    const user = await prisma.user.create({
      data: req.body,
    });
    res.send({
      message: "User created successfully",
      user: user,
    });
  } else {
    res.status(201).send({
      message: "User already registered with this email",
    });
  }
});

//create a booking function
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;
  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });
    if (!alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("Your visit is booked successfully");
    } else {
      res
        .status(400)
        .json({ message: "You already booked a visit for this property" });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

//get all booked visits
export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (error) {
    throw new Error(error.message);
  }
});

//cancel a booking function
export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      //delete one element from the array that matches the id
      user.bookedVisits.splice(index, 1);
      //update the user with the new bookedVisits array
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking cancelled successfully");
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

//make a favorite property function
export const makeFavorite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { PropertyId } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user.favPropertiesID.includes(PropertyId)) {
      //remove the property from the favorites array
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favPropertiesID: {
            set: user.favPropertiesID.filter((id) => id !== PropertyId),
          },
        },
      });
      res.send({ message: "Removed from favorites", user: updatedUser });
    } else {
      // add the property to the favorites array
      const updatedUser = await prisma.user.update({
        where: { email },
        data: {
          favPropertiesID: {
            push: PropertyId,
          },
        },
      });
      res.send({ message: "Added to favorites", user: updatedUser });
    }
  } catch (error) {
    throw new Error(error.message);
  }
});

//get all favorite properties function
export const getFavoritesProperties = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favoritesProperties = await prisma.user.findUnique({
      where: { email },
      select: { favPropertiesID: true },
    });
    res.status(200).send(favoritesProperties);
  } catch (error) {
    throw new Error(error.message);
  }
});
