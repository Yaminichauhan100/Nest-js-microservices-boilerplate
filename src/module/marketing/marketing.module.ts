import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { MarketingService } from './marketing.service';
import { MarketingController } from './marketing.controller';
import { Marketing } from 'src/entity/marketing.entity';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Marketing]),
    JwtModule.register({
      secret: APP_CONFIG.secret,
      signOptions: { expiresIn: APP_CONFIG.expires },
    }),
    LoggerModule,
  ],
  controllers: [MarketingController],
  providers: [MarketingService, ResponseHandler, Logger, LoggingInterceptor],
})
export class MarketingModule {}
