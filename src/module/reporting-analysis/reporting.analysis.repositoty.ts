import { Injectable } from '@nestjs/common';
import { ReportingAnalysis } from 'src/entity/reporting.analysis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportingAnalysisRepository extends Repository<ReportingAnalysis> {}
