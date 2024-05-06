import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ServiceManagement {
  @PrimaryGeneratedColumn()
  id: number;
}
