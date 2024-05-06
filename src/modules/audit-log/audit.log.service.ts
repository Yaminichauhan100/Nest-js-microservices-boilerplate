import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuditLog } from 'src/entity/audit.log.entity';
import { AuditLogRepository } from './audit.log.repositoty';

@Injectable()
export class AuditLogService {
  constructor(
    @InjectRepository(AuditLog)
    private readonly auditLogRepository: AuditLogRepository,
  ) {}
}
