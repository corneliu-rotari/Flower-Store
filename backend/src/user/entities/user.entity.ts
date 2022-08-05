import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
