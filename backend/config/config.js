const Joi = require('joi');
require('dotenv').config();

const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
      .allow(['development', 'production', 'test', 'provision'])
      .default('development'),
  SERVER_PORT: Joi.number().default(8000),
  MONGO_HOST: Joi.string().required().description('Mongo DB host url'),
  MONGO_PORT: Joi.number().default(27017),
  JWT_SECRET: Joi.string().required(),
  JWT_EXP: Joi.string().required(),
  HIDDEN_LAYERS: Joi.array().required(),
  ITERATIONS: Joi.number().required(),
  ERRORTHRESH: Joi.number().required(),
  LEARNING_RATE: Joi.number().required(),
  TIMEOUT: Joi.number().required(),
  THRESHOLDTOBEPOISONOUS: Joi.number().required(),
}).unknown().required();

const {
  error,
  value: envVars,
} = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
  },
  nN: {
    hiddenLayers: envVars.HIDDEN_LAYERS,
    iterations: envVars.ITERATIONS,
    errorThresh: envVars.ERRORTHRESH,
    learningRate: envVars.LEARNING_RATE,
    timeout: envVars.TIMEOUT,
  },
  threshholdToBePoisonous: envVars.THRESHOLDTOBEPOISONOUS,
};

module.exports = config;
