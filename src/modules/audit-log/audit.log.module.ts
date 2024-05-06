import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { AuditLogController } from './audit.log.controller';
import { AuditLog } from 'src/entity/audit.log.entity';
import { AuditLogService } from './audit.log.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([AuditLog]),
    JwtModule.register({
      secret: APP_CONFIG.secret,
      signOptions: { expiresIn: APP_CONFIG.expires },
    }),
    LoggerModule,
  ],
  controllers: [AuditLogController],
  providers: [AuditLogService, ResponseHandler, Logger, LoggingInterceptor],
})
export class AuditLogModule {}
