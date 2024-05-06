import { Injectable } from '@nestjs/common';
import { Marketing } from 'src/entity/marketing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MarketingRepository extends Repository<Marketing> {}
