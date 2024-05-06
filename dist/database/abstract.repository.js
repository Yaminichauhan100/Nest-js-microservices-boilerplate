"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
const common_1 = require("@nestjs/common");
console.log('I am in repository');
class AbstractRepository {
    constructor(itemsRepository, entityManager) {
        this.itemsRepository = itemsRepository;
        this.entityManager = entityManager;
    }
    async create(entity) {
        console.log('===============000000000000000000000000000');
        try {
            console.log('--------------', entity);
            return await this.entityManager.save(entity);
        }
        catch (error) {
            this.logger.error('Error creating entity', error);
            throw new Error('Failed to create entity');
        }
    }
    async findOne(where, relations) {
        try {
            console.log('0------inside try---------');
            const entity = await this.itemsRepository.findOne({ where, relations });
            console.log('enitty is', entity);
            if (!entity) {
                this.logger.warn('Entity not found with where', where);
                return null;
            }
            return entity;
        }
        catch (error) {
            this.logger.error('Error finding entity', error);
            throw new Error('Failed to find entity');
        }
    }
    async findOneAndUpdate(where, partialEntity) {
        try {
            const updateResult = await this.itemsRepository.update(where, partialEntity);
            if (!updateResult.affected) {
                this.logger.warn('Entity not found with where', where);
                throw new common_1.NotFoundException('Entity not found.');
            }
            return this.findOne(where);
        }
        catch (error) {
            this.logger.error('Error updating entity', error);
            throw new Error('Failed to update entity');
        }
    }
    async find(where) {
        try {
            return await this.itemsRepository.findBy(where);
        }
        catch (error) {
            this.logger.error('Error finding entities', error);
            throw new Error('Failed to find entities');
        }
    }
    async findOneAndDelete(where) {
        try {
            await this.itemsRepository.delete(where);
        }
        catch (error) {
            this.logger.error('Error deleting entity', error);
            throw new Error('Failed to delete entity');
        }
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map