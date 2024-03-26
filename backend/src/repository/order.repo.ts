import {dataSource} from '../configs/data-source';
import {Order} from '../entity/Order';
import {IOrderItem, OrderItem} from '../entity/OrderItem';
import {DataSource, Repository} from 'typeorm';
import {IUser} from '../entity/User';

export class OrderRepository {
  dataSource: DataSource;
  repo: Repository<Order>;
  orderItemRepo: Repository<OrderItem>;

  constructor() {
    this.dataSource = dataSource;
    this.repo = dataSource.getRepository(Order);
    this.orderItemRepo = dataSource.getRepository(OrderItem);
  }

  async findAllByUser(
    userId: number,
    limit: number = 6,
    offset: number = 0
  ): Promise<Order[]> {
    const user = {id: userId};

    const result = await this.repo.find({
      where: {
        user: user,
      },
      take: limit,
      skip: offset,
      order: {orderDate: 'DESC'},
      relations: ['orderItems', 'orderItems.product'],
    });

    return result;
  }

  async createOrder(orderItems: IOrderItem[], user: IUser): Promise<Order> {
    const newOrder = this.repo.create({user: user});

    const createdOrderItems: OrderItem[] = await Promise.all(
      orderItems.map(async (item: IOrderItem) => {
        const orderItem = this.orderItemRepo.create(item);
        await this.orderItemRepo.save(orderItem);
        return orderItem;
      })
    );

    newOrder.orderItems = createdOrderItems;

    const result = await this.repo.save(newOrder);
    return result;
  }

  async cancelOrder(orderId: number, userId: number): Promise<Order> {
    const order = await this.repo.findOneBy({id: orderId, user: {id: userId}});

    if (!order) {
      throw Error(
        `Order with id: ${orderId} and by user ID: ${userId} can't be found`
      );
    }

    order.canceled = true;

    const result = await this.repo.save(order);
    return result;
  }
}
