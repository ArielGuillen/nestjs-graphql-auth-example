import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.PORT);

  console.log(`${ENV.ENVIROMENT} 🚀 App iniciada en el puerto ${ENV.PORT}`);
}
bootstrap();
