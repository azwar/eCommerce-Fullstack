/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {ZBaseEntity} from '../base/ZBaseEntity';
import {Length} from 'class-validator';
import {OrderItem} from './OrderItem';

export enum Tag {
  Fiction = 'fiction',
  NonFiction = 'non-fiction',
}

@Entity()
export class Product extends ZBaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @Length(5, 200)
  public title: string;

  @Column()
  @Length(5, 100)
  public writer: string;

  @Column()
  @Length(5, 250)
  public coverImage: string;

  @Column({type: 'integer'})
  public point_price: number;

  @Column({type: 'boolean', default: true})
  public active: boolean;

  @Column('simple-array')
  public tag: Tag[];

  @Column({type: 'boolean', default: false})
  public deleted: boolean;

  @OneToMany(() => OrderItem, orderItem => orderItem.product)
  orderDetails: OrderItem[];

  @BeforeInsert()
  @BeforeUpdate()
  validatePriceTier() {}
}
