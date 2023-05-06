import Joi from 'joi';
import { ConfigType, registerAs } from '@nestjs/config';

export const AppFactoryConfig = registerAs('app', () => ({
  port: process.env.GATEWAY_PORT,
  api: {
    globalPrefix: process.env.GATEWAY_API_GLOBAL_PREFIX,
    swagger: {
      title: process.env.GATEWAY_API_SWAGGER_TITLE,
      description: process.env.GATEWAY_API_SWAGGER_DESCRIPTION,
      version: process.env.GATEWAY_VERSION,
      path: process.env.GATEWAY_API_SWAGGER_PATH,
    },
  },
}));

export const AppConfig = AppFactoryConfig.KEY;

export type AppConfig = ConfigType<typeof AppFactoryConfig>;

export const AppConfigSchema = {
  GATEWAY_PORT: Joi.number().default(3000),
  GATEWAY_VERSION: Joi.string().default('0.0.1'),
  GATEWAY_API_GLOBAL_PREFIX: Joi.string().default('api'),
  GATEWAY_API_SWAGGER_TITLE: Joi.string().default('API Gateway Service'),
  GATEWAY_API_SWAGGER_DESCRIPTION: Joi.string().default(
    'Service to communicate with the others services',
  ),
  GATEWAY_API_SWAGGER_PATH: Joi.string().default('docs'),
};
