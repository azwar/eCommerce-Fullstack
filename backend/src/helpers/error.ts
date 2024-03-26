import {IRequest} from '../base/IRequest';
import {ErrorRequestHandler, NextFunction, Response} from 'express';
import {ZHttpError} from '../base/HttpError';

export const globalError = (
  err: ErrorRequestHandler,
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ZHttpError) {
    const baseError = err as ZHttpError;
    res.status(baseError.statusCode).json(baseError);
    return next();
  }

  // const error = err as unknown as Error;
  // console.log(error.stack);
  // if this is not HTTP error and we are not in production, let express handle it the default way
  return next(err);
};
