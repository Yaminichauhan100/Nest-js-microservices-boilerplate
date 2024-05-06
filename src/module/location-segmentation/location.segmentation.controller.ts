import { Controller } from '@nestjs/common';
import { LocationAndSegmentationService } from './location.segmentation.service';

@Controller('location-segmentation')
export class LocationAndSegmentationController {
  constructor(
    private readonly locationAndSegmentation: LocationAndSegmentationService,
  ) {}
}
