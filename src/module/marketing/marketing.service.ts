import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Marketing } from 'src/entity/marketing.entity';
import { MarketingRepository } from './marketing.repositoty';

@Injectable()
export class MarketingService {
  constructor(
    @InjectRepository(Marketing)
    private readonly MarketingRepository: MarketingRepository,
  ) {}
}
