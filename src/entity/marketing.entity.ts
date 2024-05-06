import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Marketing {
  @PrimaryGeneratedColumn()
  id: number;
}
