import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationAndSegmentationModule } from './module/location-segmentation/location.segmentation.module';

@Module({
  imports: [LocationAndSegmentationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
