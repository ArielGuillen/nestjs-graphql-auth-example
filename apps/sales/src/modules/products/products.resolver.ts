import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductsService } from './services/';
import { Roles } from 'libs/auth/decorators/roles.decorator';
import { Role } from 'libs/auth/constants/roles.enum';

@Resolver('Product')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query()
  async getProducts() {
    const item = await this.productsService.getAll();
    return item;
  }

  @Mutation()
  @Roles(Role.ADMIN)
  async createProduct(@Args('product') product) {
    const item = await this.productsService.create(product);
    return item;
  }

  @Mutation()
  async deleteProduct(@Args('id') id: string) {
    const item = await this.productsService.delete(id);
    return item;
  }
}
