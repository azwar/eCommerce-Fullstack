import {Request, Response} from 'express';

import express from 'express';
import {body, validationResult} from 'express-validator';
import {UserRepository} from '../repository/user.repo';
import {UserService} from '../service/user.services';
const router = express.Router();

const userRepo = new UserRepository();
const userSvc = new UserService(userRepo);

router.post(
  '/login',
  body('email').notEmpty().withMessage('Email can not be blank'),
  body('password').notEmpty().withMessage('Password can not be blank'),
  async (req: Request, res: Response) => {
    const validationRes = validationResult(req);

    if (!validationRes.isEmpty()) {
      return res.json({errors: validationRes.array()});
    }

    const {email, password} = req.body;

    try {
      const user = await userSvc.login(email, password);
      user.password = undefined;
      return res.json(user);
    } catch (error) {
      return res.status(401).json({
        message: 'Wrong username or password',
      });
    }
  }
);

router.post(
  '/register',
  body('email').notEmpty().withMessage('Email can not be blank'),
  body('password').notEmpty().withMessage('Password can not be blank'),
  body('firstName').notEmpty().withMessage('FirstName can not be blank'),
  body('lastName').notEmpty().withMessage('LastName can not be blank'),
  async (req: Request, res: Response) => {
    const validationRes = validationResult(req);

    if (!validationRes.isEmpty()) {
      return res.json({errors: validationRes.array()});
    }

    const {email, password, firstName, lastName} = req.body;

    try {
      const user = await userSvc.register(email, password, firstName, lastName);
      user.password = undefined;
      return res.json(user);
    } catch (error) {
      console.error('register', error);
      return res.status(500).json({
        message: 'Unable to register',
      });
    }
  }
);

export const userRouter = router;
