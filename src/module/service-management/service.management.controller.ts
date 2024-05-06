import { Controller } from '@nestjs/common';
import { ServiceManagementService } from './service.management.service';

@Controller('service-management')
export class ServiceManagementController {
  constructor(
    private readonly serviceManagementService: ServiceManagementService,
  ) {}
}
