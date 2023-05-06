import Joi from "joi";

import { AppConfigSchema, AppFactoryConfig } from "@gateway/config/app.factory-config";

export const configFactories = [
    AppFactoryConfig,
];

export const configSchema = Joi.object({
    ...AppConfigSchema,
});

