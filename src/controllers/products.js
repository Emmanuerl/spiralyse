import { ApplicationError, slug } from "../utilities";

import { Product } from "../models";

async function create(req, res, next) {
  try {
    const product = new Product(req.body);

    await product.save();

    return res.json(product);
  } catch (err) {
    if (err.code === 11000) {
      return next(
        new ApplicationError(
          409,
          "The product name you have provided already exist."
        )
      );
    }
    return next(err);
  }
}

async function find(req, res, next) {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ApplicationError(
        404,
        "You have prodvided is invalid product identifier"
      )
    );
  }

  return res.json(product);
}

async function list(req, res) {
  const products = await Product.find();
  return res.json(products);
}

async function update(req, res, next) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return next(
        new ApplicationError(
          404,
          "You have prodvided is invalid product identifier"
        )
      );
    }
    return res.json(product);
  } catch (err) {
    if (err.code === "11000") {
      return next(
        new ApplicationError(
          409,
          "The product name you have provided already exist."
        )
      );
    }
  }
}

async function destroy(req, res, next) {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(
      new ApplicationError(
        404,
        "You have prodvided an invalid product identifier"
      )
    );
  }
  return res.json(product);
}

export const productController = {
  create,
  find,
  list,
  update,
  destroy,
};
