import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationAndSegmentation } from 'src/entity/location.segmentation.entity';
import { LocationAndSegmentationRepository } from './location.segmentation.repositoty';

@Injectable()
export class LocationAndSegmentationService {
  constructor(
    @InjectRepository(LocationAndSegmentation)
    private readonly locationAndSegmentationRepository: LocationAndSegmentationRepository,
  ) {}
}
