import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { configFactories, configSchema } from '@gateway/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configFactories,
      validationSchema: configSchema,
    })
  ],
})
export class GatewayModule {}
