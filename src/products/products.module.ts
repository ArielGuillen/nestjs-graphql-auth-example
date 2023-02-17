import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule {}
