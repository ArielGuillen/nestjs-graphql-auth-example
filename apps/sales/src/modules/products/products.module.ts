import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductModel, ProductSchema } from './models/product.model';
import { ProductsService } from './services/products.service';
import { ProductsResolver } from './products.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProductModel.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
