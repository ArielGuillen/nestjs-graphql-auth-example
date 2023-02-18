import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';

import ENV from './config';
import { GqlModuleConfig } from 'libs/config/app.gql';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';

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
    ProductsModule,
    UsersModule,
  ],
})
export class AppModule {}
