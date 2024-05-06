import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LocationAndSegmentation {
  @PrimaryGeneratedColumn()
  id: number;
}
