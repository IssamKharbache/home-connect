import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createProperty = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    address,
    country,
    city,
    facilities,
    image,
    userEmail,
  } = req.body.data;
  console.log(req.body.data);
  try {
    const property = await prisma.property.create({
      data: {
        title,
        description,
        price,
        address,
        country,
        city,
        facilities,
        image,
        owner: {
          connect: { email: userEmail },
        },
      },
    });
    res.send({ message: "Property created successfully", property });
  } catch (error) {
    if (error === "P2002") {
      throw new Error("A property with this address already exists");
    }
    throw new Error(error.message);
  }
});

export const getAllProperties = asyncHandler(async (req, res) => {
  try {
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(properties);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Internal server error, while fetching properties" });
  }
});
