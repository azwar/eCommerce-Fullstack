import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  Column,
} from 'typeorm';
import {User} from './User';
import {OrderItem} from './OrderItem';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  orderDate: Date;

  @ManyToOne(() => User, user => user.orders)
  user: User;

  @Column()
  canceled?: boolean = false;

  @OneToMany(() => OrderItem, orderDetail => orderDetail.order)
  orderItems: OrderItem[];
}
