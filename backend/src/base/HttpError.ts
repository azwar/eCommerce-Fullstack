export class ZHttpError extends Error {
  statusCode: number;
  message: string;
  errors: object;

  constructor(statusCode: number, message: string, errors: object) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}
