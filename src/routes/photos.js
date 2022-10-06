import express from "express";
import { photoController } from "../controllers";

export const photoRoute = express.Router();
photoRoute.get("/", photoController.list);
