import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { APP_CONFIG } from 'src/common/constant';
import { ServiceManagement } from 'src/entity/service.management.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: APP_CONFIG.host,
        port: 5432,
        password: APP_CONFIG.password,
        username: APP_CONFIG.userName,
        // autoLoadEntities: true,
        entities: [ServiceManagement],
        database: APP_CONFIG.database,
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: EntityClassOrSchema[]) {
    return TypeOrmModule.forFeature(models);
  }
}
