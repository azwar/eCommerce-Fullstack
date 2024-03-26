import createHttpError from 'http-errors';
import {ZHttpError} from './HttpError';

export class ZValidationError extends ZHttpError {
  constructor(errors: object) {
    super(createHttpError.BadRequest().statusCode, 'Validation error', errors);
  }

  static send(errors: object) {
    return new ZValidationError(errors);
  }
}
