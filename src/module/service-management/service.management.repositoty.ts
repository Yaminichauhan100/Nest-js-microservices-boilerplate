import { Injectable } from '@nestjs/common';
import { ServiceManagement } from 'src/entity/service.management.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceManagementRepository extends Repository<ServiceManagement> {}
