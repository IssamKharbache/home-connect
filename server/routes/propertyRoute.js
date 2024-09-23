import express from "express";
import {
  createProperty,
  getAllProperties,
} from "../controllers/propertyController.js";

const router = express.Router();
//create a property route
router.post("/create", createProperty);
//get a property route
router.get("/all-Properties", getAllProperties);

export { router as propertyRoute };
