import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AuditLog } from 'src/entity/audit.log.entity';

@Injectable()
export class AuditLogRepository extends Repository<AuditLog> {}
