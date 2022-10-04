import slugify from "slugify";

/**
 * creates a slug out of the privided input
 * @param {*} input
 * @returns
 */
export function slug(input) {
  return slugify(input, { lower: true, replacement: "_", trim: "true" });
}
