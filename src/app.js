import { globalErrorHandler, routeNotFoundHandler } from "./middlewares/index";

import cors from "cors";
import express from "express";
import path from "path";
import { photoRoute } from "./routes/photos";
import { productRoute } from "./routes/products";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const staticPath = path.join(process.cwd(), "client");
app.use(express.static(staticPath));

app.get("/api/v1", (req, res) => {
  res.send("API is up and running");
});

app.use("/api/v1/products", productRoute);
app.use("/api/v1/photos", photoRoute);

app.use(routeNotFoundHandler);
app.use(globalErrorHandler);
