import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AppConfigService } from './config/app-config.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfigService = app.get(AppConfigService);
  const PORT = appConfigService.port;

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(PORT);
}

bootstrap();
