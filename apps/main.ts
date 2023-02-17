// This file is only for development purposes. It is not used in production.
// You can use this file to import all apps and run them in a single process.
// If you add a new app, you need to import it here and add it to the bootstrap function.
// If you want to run a single app, you can run it directly from the app folder.
import productsHandler from '@/products/src/main';

async function bootstrap() {
  productsHandler();
}

bootstrap();
