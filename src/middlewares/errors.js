/* eslint-disable no-unused-vars */

import { ApplicationError, DataValidationError } from "../utilities";

export function routeNotFoundHandler(req, res, next) {
  return next(
    new ApplicationError(
      404,
      `[${req.method.toUpperCase()}] ${req.path} does not exist`,
    ),
  );
}

export function globalErrorHandler(err, req, res, next) {
  if (err instanceof DataValidationError) {
    return res.status(422).json({ message: err.message, errors: err.errors });
  }
  if (err instanceof ApplicationError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res
    .status(500)
    .send("We are having system level issues, please try again later");
}
