import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ENV from './config';

import * as session from 'express-session';
import * as passport from 'passport';

async function handler() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: true,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(ENV.PORT);

  console.log(`${ENV.ENVIROMENT} 🚀 Users App started in port ${ENV.PORT}`);
}

if (require.main === module) {
  handler();
}

export default handler;
