import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportingAnalysisRepository } from './reporting.analysis.repositoty';
import { ReportingAnalysis } from 'src/entity/reporting.analysis.entity';

@Injectable()
export class ReportingAnalysisService {
  constructor(
    @InjectRepository(ReportingAnalysis)
    private readonly reportingAnalysisRepository: ReportingAnalysisRepository,
  ) {}
}
