import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { setSwagger } from '@app/common';

import { AppConfig } from '@gateway/config';
import { GatewayModule } from '@gateway/gateway.module';

(async () => {
  const app = await NestFactory.create(GatewayModule);
  const config = app.get<AppConfig>(AppConfig);

  app.setGlobalPrefix(config.api.globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, skipMissingProperties: true }),
  );

  setSwagger(app, config.api.swagger);

  await app.listen(config.port);
})();
