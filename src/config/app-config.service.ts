import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { ConfigurationType } from './configuration';

@Injectable()
export class AppConfigService {
  constructor(
    private readonly configService: ConfigService<ConfigurationType, true>,
  ) {}

  get port() {
    return this.configService.get('port', { infer: true });
  }

  get dataBaseUrl() {
    return this.configService.get('databaseUrl', { infer: true });
  }
}
