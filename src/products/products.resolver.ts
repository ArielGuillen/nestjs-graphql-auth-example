import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductsService } from './services/';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query()
  async getProducts() {
    const response = await this.productsService.getProducts();
    return response;
  }
}
