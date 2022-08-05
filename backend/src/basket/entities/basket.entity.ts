import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  basket_id: number;
  @Column()
  user_id?: number;
  @Column()
  flower_id?: number;
  @Column()
  quantity?: number;
}
