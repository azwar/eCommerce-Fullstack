import {Request, Response} from 'express';
import express from 'express';
import {OrderRepository} from '../repository/order.repo';
import {OrderService} from '../service/order.services';
import {authUser} from '../middleware/auth.middleware';
const router = express.Router();

const orderRepo = new OrderRepository();
const orderSvc = new OrderService(orderRepo);

export interface IReqQueryPaging {
  offset: number;
}
router.get('/', authUser, async (req: Request, res: Response) => {
  const offset = req.query.offset;
  const numOffset = parseInt(offset as string) || 0;
  const userId = req.header('user-id');

  try {
    const newOrder = await orderSvc.findAllByUser(
      parseInt(userId),
      5,
      numOffset
    );
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({message: 'Failed to list order'});
  }
});

router.post('/createOrder', authUser, async (req: Request, res: Response) => {
  const userId = req.header('user-id');
  const {arrOrderItems} = req.body;

  try {
    const newOrder = await orderSvc.createOrder(
      arrOrderItems,
      parseInt(userId)
    );
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({message: 'Failed to create order'});
  }
});

router.post('/cancelOrder', authUser, async (req: Request, res: Response) => {
  const userId = req.header('user-id');
  const {orderId} = req.body;

  try {
    const newOrder = await orderSvc.cancelOrder(orderId, parseInt(userId));
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Err cancelOrder', error);
    res.status(500).json({message: 'Failed to cancel order'});
  }
});

export const orderRouter = router;
