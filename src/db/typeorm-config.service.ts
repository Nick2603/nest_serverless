import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { AppConfigService } from 'src/config/app-config.service';
import { PluralNamingStrategy } from './naming.strategy';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly appConfigService: AppConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: this.appConfigService.dataBaseUrl,
      entities: [],
      namingStrategy: new PluralNamingStrategy(),
      synchronize: true,
      autoLoadEntities: true,
      logging: ['error', 'warn'],
    };
  }
}
