import { NestFactory } from '@nestjs/core';

import ENV from './config';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ResourcesModule } from './resources.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(ResourcesModule, {
    transport: Transport.TCP,
  });
  await app.listen();

  console.log(`${ENV.ENVIROMENT} 🚀 Resources microservice started`);
}
bootstrap();
