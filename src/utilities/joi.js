import { ApplicationError, DataValidationError } from "./http";

/**
 * helper function for parsing all joi errors
 * @param {joiError} err
 * @returns
 */
export function parseJoiError(err) {
  const parsedError = {};

  for (const detail of err.details) {
    const key = detail.path[0];
    const value = detail.message.replaceAll('"', "");

    parsedError[key] = value;
  }

  return parsedError;
}

/**
 * generic request validator
 * @param {*} schema
 * @param {*} context
 * @returns
 */
export function validate(schema, context = "body") {
  return async (req, res, next) => {
    try {
      req[context] = await schema.validateAsync(req[context], {
        abortEarly: false,
        stripUnknown: true,
      });
      next();
    } catch (err) {
      return next(
        new DataValidationError(
          `Your request ${
            context === "body" ? "body is" : "parameters are"
          } invalid`,
          parseJoiError(err),
        ),
      );
    }
  };
}
