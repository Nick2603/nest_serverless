import { Module } from '@nestjs/common';
import { ConfigSetUp } from '../config/config-setup';
import { AppController } from './app.controller';
import { AppConfigModule } from 'src/config/app-config.module';
import { TypeOrmSetUp } from 'src/db/typeorm-setup';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ConfigSetUp, AppConfigModule, TypeOrmSetUp, UserModule],
  controllers: [AppController],
})
export class AppModule {}
