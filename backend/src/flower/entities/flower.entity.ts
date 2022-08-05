import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flower {
  @PrimaryGeneratedColumn()
  flower_id: number;
  @Column()
  flower_name?: string;
  @Column()
  color?: string;
  @Column()
  flower_image?: string;
  @Column()
  price: number;
}
