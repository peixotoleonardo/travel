import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { SwaggerOptions } from '@app/common/extensions/swagger/options';

export const setSwagger = (app: INestApplication, options: SwaggerOptions) => {
  const config = new DocumentBuilder()
    .setTitle(options.title)
    .setDescription(options.description)
    .setVersion(options.version)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(options.path, app, document);
};
