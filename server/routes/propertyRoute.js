import express from "express";
import {
  createProperty,
  getAllProperties,
  getProperty,
} from "../controllers/propertyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();
//create a property route
router.post("/create", jwtCheck, createProperty);
//get all properties route
router.get("/all-Properties", getAllProperties);
//get specific user properties
router.get("/:id", getProperty);

export { router as propertyRoute };
