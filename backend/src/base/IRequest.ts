import {Request} from 'express';

export interface IRequest extends Request {
  user?: Object; // or any other type
}
