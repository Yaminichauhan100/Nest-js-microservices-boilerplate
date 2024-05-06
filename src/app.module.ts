import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceManagementModule } from './module/service-management/service.management.module';

@Module({
  imports: [ServiceManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
