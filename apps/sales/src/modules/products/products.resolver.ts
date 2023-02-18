import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductsService } from './services/';
import { IProduct } from '../../graphql';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query()
  async getProducts() {
    const item = await this.productsService.getAll();
    return item;
  }

  @Mutation()
  async addProduct(@Args('product') product: IProduct) {
    const item = await this.productsService.add(product);
    return item;
  }

  @Mutation()
  async deleteProduct(@Args('id') id: string) {
    const item = await this.productsService.delete(id);
    return item;
  }
}
