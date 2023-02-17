import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';

import { ProductsModule } from './products/products.module';
import { GqlModuleConfig } from 'libs/config/app.gql';
import ENV from './config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>(GqlModuleConfig(ENV.APOLLO)),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
