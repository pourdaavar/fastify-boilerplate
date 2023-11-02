import { FastifyLoggerOptions, FastifyServerOptions } from 'fastify';

export type CustomServerOptions = {
  readonly logger: FastifyLoggerOptions;
} & Partial<FastifyServerOptions>;

const formatter = {
  level(level: string) {
    return { level };
  },
};

export const serverOptions: CustomServerOptions = {
  logger: {
    level: 'info',
    formatters: formatter,
  },
};
