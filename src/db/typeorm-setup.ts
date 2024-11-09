import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeorm-config.service';
import { AppConfigService } from 'src/config/app-config.service';
import { AppConfigModule } from 'src/config/app-config.module';

export const TypeOrmSetUp = TypeOrmModule.forRootAsync({
  imports: [AppConfigModule],
  useClass: TypeOrmConfigService,
  inject: [AppConfigService],
});
