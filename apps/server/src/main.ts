import { createApp } from './app.module';

const server = createApp();

/**
 * Run the server!
 */
const bootstrap = async () => {
  try {
    await server.listen({ port: 3000, host: 'localhost' });

    server.log.info(`🚀 Server ready at http://localhost:3000`);
  } catch (err) {
    // server.log.error(err);
    // process.exit(1);
  }
};
void bootstrap();
