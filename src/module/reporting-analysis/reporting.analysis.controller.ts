import { Controller } from '@nestjs/common';
import { ReportingAnalysisService } from './reporting.analysis.service';

@Controller('reporting-analysis')
export class ReportingAnalysisController {
  constructor(
    private readonly reportingAnalysisService: ReportingAnalysisService,
  ) {}
}
