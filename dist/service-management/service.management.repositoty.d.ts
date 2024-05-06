import { Logger } from '@nestjs/common';
import { AbstractRepository } from 'src/database/abstract.repository';
import { ServiceManagement } from 'src/entity/service.management.entity';
import { EntityManager, Repository } from 'typeorm';
export declare class ServiceManagementRepository extends AbstractRepository<ServiceManagement> {
    protected readonly logger: Logger;
    constructor(itemsRepository: Repository<ServiceManagement>, entityManager: EntityManager);
}
