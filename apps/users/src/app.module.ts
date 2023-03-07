import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';

import { GqlModuleConfig } from 'libs/config/app.gql';
import ENV from './config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(GqlModuleConfig(ENV.APOLLO)),
    MongooseModule.forRoot(ENV.MONGO.URI, {
      useUnifiedTopology: true,
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
