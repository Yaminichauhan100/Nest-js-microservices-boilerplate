import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportingAnalysisModule } from './module/reporting-analysis/reporting.analysis.module';

@Module({
  imports: [ReportingAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
