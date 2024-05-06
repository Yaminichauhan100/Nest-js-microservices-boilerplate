import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditLogModule } from './modules/audit-log/audit.log.module';

@Module({
  imports: [AuditLogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
