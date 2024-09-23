import asyncHandler from "express-async-handler";

import { prisma } from "../config/prismaConfig.js";

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
