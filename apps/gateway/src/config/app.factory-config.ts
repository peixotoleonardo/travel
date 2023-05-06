import { ConfigType, registerAs } from "@nestjs/config";
import Joi from "joi";

export const AppFactoryConfig = registerAs('app', () => ({
    port: process.env.GATEWAY_PORT
}));

export const AppConfig = AppFactoryConfig.KEY;

export type AppConfig = ConfigType<typeof AppFactoryConfig>;

export const AppConfigSchema = {
    GATEWAY_PORT: Joi.number().default(3000)
};
