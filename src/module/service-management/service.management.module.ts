import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ServiceManagementController } from './service.management.controller';
import { ServiceManagementService } from './service.management.service';
import { ServiceManagement } from 'src/entity/service.management.entity';
// import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([ServiceManagement]),
    JwtModule.register({
      secret: APP_CONFIG.secret,
      signOptions: { expiresIn: APP_CONFIG.expires },
    }),
    LoggerModule,
  ],
  controllers: [ServiceManagementController],
  providers: [
    ServiceManagementService,
    ResponseHandler,
    ServiceManagement,
    Logger,
    LoggingInterceptor,
  ],
})
export class ServiceManagementModule {}
