import {Response, NextFunction, Request} from 'express';

export function authUser(req: Request, res: Response, next: NextFunction) {
  const userId = req.header('user-id');

  if (!userId) {
    return res.status(401).json({
      message: 'User must login or privide auth token (user-id)',
    });
  }

  return next();
}
