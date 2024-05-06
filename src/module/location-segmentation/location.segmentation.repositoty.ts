import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LocationAndSegmentation } from 'src/entity/location.segmentation.entity';

@Injectable()
export class LocationAndSegmentationRepository extends Repository<LocationAndSegmentation> {}
