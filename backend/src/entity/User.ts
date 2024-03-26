import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import {ZBaseEntity} from '../base/ZBaseEntity';
import {Order} from './Order';

@Entity()
export class User extends ZBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({default: 100})
  point?: number;

  @OneToMany(() => Order, order => order.user)
  orders: Order[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  point?: number;
  orders?: Order[];
}
