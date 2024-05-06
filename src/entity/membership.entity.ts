import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;
}
