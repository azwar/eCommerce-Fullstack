import {Order} from '../entity/Order';
import {IOrderItem} from '../entity/OrderItem';
import {User} from '../entity/User';
import {OrderRepository} from '../repository/order.repo';

export class OrderService {
  constructor(private readonly repo: OrderRepository) {}

  async createOrder(
    arrOrderItem: IOrderItem[],
    userId: number
  ): Promise<Order> {
    const user = new User();
    user.id = userId;
    return await this.repo.createOrder(arrOrderItem, user);
  }

  async findAllByUser(
    userId: number,
    limit: number,
    offset: number
  ): Promise<Order[]> {
    return await this.repo.findAllByUser(userId, limit, offset);
  }

  async cancelOrder(orderId: number, userId: number): Promise<Order> {
    return await this.repo.cancelOrder(orderId, userId);
  }
}
