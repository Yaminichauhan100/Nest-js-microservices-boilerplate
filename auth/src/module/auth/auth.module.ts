import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserDetails } from 'src/entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ResponseHandler } from 'src/lib/response.handler';
import { APP_CONFIG } from 'src/common/constant';
import { LoggerModule } from 'src/logger/logger.module';
import { UserRepository } from './auth.repositoty';
import { DatabaseModule } from 'src/database/database.module';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { LocalStategy } from 'src/strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
    DatabaseModule.forFeature([UserDetails]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => {
        return {
          secret: APP_CONFIG.secret,
          signOptions: {
            expiresIn: APP_CONFIG.expires,
          },
        };
      },
    }),
    // JwtModule.register({
    //   secret: APP_CONFIG.secret,
    //   signOptions: { expiresIn: APP_CONFIG.expires },
    // }),
    LoggerModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    ResponseHandler,
    UserRepository,
    LocalStategy,
    Logger,
    LoggingInterceptor,
    JwtStrategy,
  ],
})
export class AuthModule {}
