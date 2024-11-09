import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const envSchema = Joi.object({
  PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
}).unknown();

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Configuración de entorno no válida: ${error.message}`);
}

export const config = {
  port: value.PORT,
  databaseUrl: value.DATABASE_URL,
  JWT_SECRET: value.JWT_SECRET,
};
