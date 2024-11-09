import { validationSchema, validationOptions } from './validation';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

export const ConfigSetUp = ConfigModule.forRoot({
  load: [configuration],
  validationSchema,
  validationOptions,
  cache: true,
  expandVariables: true,
});
