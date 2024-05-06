import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { LocationAndSegmentationService } from './location.segmentation.service';
import { LocationAndSegmentationController } from './location.segmentation.controller';
import { LocationAndSegmentation } from 'src/entity/location.segmentation.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([LocationAndSegmentation]),
    JwtModule.register({
      secret: APP_CONFIG.secret,
      signOptions: { expiresIn: APP_CONFIG.expires },
    }),
    LoggerModule,
  ],
  controllers: [LocationAndSegmentationController],
  providers: [
    LocationAndSegmentationService,
    ResponseHandler,
    Logger,
    LoggingInterceptor,
  ],
})
export class LocationAndSegmentationModule {}
