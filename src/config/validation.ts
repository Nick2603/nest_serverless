import * as Joi from 'joi';

export const validationSchema = Joi.object({
  PORT: Joi.number().port(),
  DATABASE_URL: Joi.string(),
});

export const validationOptions = {
  abortEarly: true,
};
