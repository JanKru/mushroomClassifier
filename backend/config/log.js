const winston = require('winston');
const config = require('./config');

const {format} = winston;
const {combine, timestamp, simple, printf, label} = format;
let logger = {};

const loggerFormat = printf((info) => {
  return `[${info.timestamp}] [${info.label}] ${info.message}`;
});

winston.loggers.add('console', {
  level: 'silly',
  format: combine(

      label({label: 'dev'}),
      format.colorize({all: true}),
      format.splat(),
      format.simple(),
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      loggerFormat
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

winston.loggers.add('file', {
  format: combine(
      label({label: 'production'}),
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      simple(),
      printf(({level, message, label, timestamp}) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      })
  ),
  transports: [
    new winston.transports.File({
      filename: 'production.log',
    }),
  ],
});

if (config.env === 'development') {
  logger = winston.loggers.get('console');
  logger.remove('file');
} else {
  logger = winston.loggers.get('file');
  logger.remove('console');
}

module.exports = exports = logger;
