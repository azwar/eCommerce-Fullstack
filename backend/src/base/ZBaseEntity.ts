import {BaseEntity, CreateDateColumn, Entity, UpdateDateColumn} from 'typeorm';

@Entity()
export class ZBaseEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  upddatedAt: Date;
}
