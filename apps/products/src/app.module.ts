import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';

import { ProductsModule } from './modules/products/products.module';
import { GqlModuleConfig } from 'libs/config/app.gql';
import ENV from './config';

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
  ],
})
export class AppModule {}
