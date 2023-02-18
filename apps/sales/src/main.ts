import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from './config';

async function handler() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.PORT);

  console.log(`${ENV.ENVIROMENT} 🚀 Sales App started in port ${ENV.PORT}`);
}

if (require.main === module) {
  handler();
}

export default handler;
