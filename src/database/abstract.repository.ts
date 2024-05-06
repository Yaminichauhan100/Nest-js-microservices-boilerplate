import { Logger, NotFoundException } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import {
  EntityManager,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class AbstractRepository<T extends AbstractEntity<T>> {
  protected abstract readonly logger: Logger;

  constructor(
    private readonly itemsRepository: Repository<T>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(entity: T): Promise<T> {
    try {
      return await this.entityManager.save(entity);
    } catch (error) {
      this.logger.error('Error creating entity', error);
      throw new Error('Failed to create entity');
    }
  }
  async findOne(
    where: any,
    relations?: FindOptionsRelations<T>,
  ): Promise<T | null> {
    try {
      const entity = await this.itemsRepository.findOne({ where, relations });
      if (!entity) {
        this.logger.warn('Entity not found with where', where);
        return null; // Return null if no entity is found
      }
      return entity;
    } catch (error) {
      this.logger.error('Error finding entity', error);
      throw new Error('Failed to find entity');
    }
  }

  async findOneAndUpdate(
    where: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<T> {
    try {
      const updateResult = await this.itemsRepository.update(
        where,
        partialEntity,
      );

      if (!updateResult.affected) {
        this.logger.warn('Entity not found with where', where);
        throw new NotFoundException('Entity not found.');
      }

      return this.findOne(where);
    } catch (error) {
      this.logger.error('Error updating entity', error);
      throw new Error('Failed to update entity');
    }
  }

  async find(where: FindOptionsWhere<T>): Promise<T[]> {
    try {
      return await this.itemsRepository.findBy(where);
    } catch (error) {
      this.logger.error('Error finding entities', error);
      throw new Error('Failed to find entities');
    }
  }

  async findOneAndDelete(where: FindOptionsWhere<T>): Promise<void> {
    try {
      await this.itemsRepository.delete(where);
    } catch (error) {
      this.logger.error('Error deleting entity', error);
      throw new Error('Failed to delete entity');
    }
  }
}
