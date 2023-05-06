import { NestFactory } from '@nestjs/core';

import { GatewayModule } from '@gateway/gateway.module';
import { AppConfig } from '@gateway/config/app.factory-config';

(async () => {
  const app = await NestFactory.create(GatewayModule);

  const config = app.get<AppConfig>(AppConfig);

  await app.listen(config.port);
})();
