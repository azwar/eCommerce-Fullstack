import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import {Order} from './Order';
import {Product} from './Product';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, order => order.orderItems)
  order: Order;

  @ManyToOne(() => Product, product => product.orderDetails)
  product: Product;

  @Column()
  currentPrice: number;

  @Column()
  quantity: number;

  @Column()
  discount: number;

  @Column()
  total: number;
}

export interface IOrderItem {
  id: number;
  order: Order;
  product: Product;
  currentPrice: number;
  quantity: number;
  discount: number;
  total: number;
}
