/**
 * Appliication error used for business logic error reporting on client end
 */
export class ApplicationError extends Error {
  /**
   *
   * @param {*} statusCode status code to be sent
   * @param {*} message message to be passed
   */
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * Data validation for handliing all client side input validation error
 */
export class DataValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.message = message;
    this.errors = errors;
  }
}
