import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceManagement } from 'src/entity/service.management.entity';
import { ServiceManagementRepository } from './service.management.repositoty';

@Injectable()
export class ServiceManagementService {
  constructor(
    @InjectRepository(ServiceManagement)
    private readonly serviceManagementRepository: ServiceManagementRepository,
  ) {}
}
