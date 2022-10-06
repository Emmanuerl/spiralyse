import mongoose from "mongoose";
import { slug } from "../utilities";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

schema.pre("validate", function () {
  this.slug = slug(this.name);
});

export const Product = mongoose.model("products", schema);
