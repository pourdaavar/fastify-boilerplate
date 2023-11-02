import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import Fastify from 'fastify';

import { serverOptions } from './config';

export const createApp = (opts = serverOptions) => {
  const app = Fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  return app;
};
