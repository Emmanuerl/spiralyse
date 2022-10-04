import {
  isCreateProductDTO,
  isProductID,
  isUpdateProducDTO,
} from "../middlewares";

import express from "express";
import { productController } from "../controllers";
import { validate } from "../utilities";

export const productRoute = express.Router();

productRoute.post("/", validate(isCreateProductDTO), productController.create);
productRoute.get("/", productController.list);

productRoute.get(
  "/:id",
  validate(isProductID, "params"),
  productController.find
);
productRoute.put(
  "/:id",
  validate(isProductID, "params"),
  validate(isUpdateProducDTO),
  productController.update
);
productRoute.delete(
  "/:id",
  validate(isProductID, "params"),
  productController.detroy
);
