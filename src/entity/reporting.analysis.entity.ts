import { AbstractEntity } from 'src/database/abstract.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportingAnalysis {
  @PrimaryGeneratedColumn()
  id: number;
}
