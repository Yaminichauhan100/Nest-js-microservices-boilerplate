import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { ReportingAnalysis } from 'src/entity/reporting.analysis.entity';
import { ReportingAnalysisService } from './reporting.analysis.service';
import { ReportingAnalysisController } from './reporting.analysis.controller';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([ReportingAnalysis]),
    JwtModule.register({
      secret: APP_CONFIG.secret,
      signOptions: { expiresIn: APP_CONFIG.expires },
    }),
    LoggerModule,
  ],
  controllers: [ReportingAnalysisController],
  providers: [
    ReportingAnalysisService,
    ResponseHandler,
    Logger,
    LoggingInterceptor,
  ],
})
export class ReportingAnalysisModule {}
