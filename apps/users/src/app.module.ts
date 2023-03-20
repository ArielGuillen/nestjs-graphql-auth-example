import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule, Module } from '@nestjs/common';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';

const redisStore = require('cache-manager-redis-store').redisStore;

import { GqlModuleConfig } from 'libs/config/app.gql';
import ENV from './config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      socket: {
        host: ENV.REDIS.URI,
        port: ENV.REDIS.PORT,
      },
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(GqlModuleConfig(ENV.APOLLO)),
    MongooseModule.forRoot(ENV.MONGO.URI, {
      useUnifiedTopology: true,
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    }),
    RolesModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
