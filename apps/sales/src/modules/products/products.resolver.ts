import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { ProductsService } from './services/';
import { IProduct } from '../../graphql';
import { Roles } from '@/users/src/modules/roles/decorators/roles.decorator';
import { Role } from '@/users/src/modules/roles/roles.enum';

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
  async createProduct(@Args('product') product: IProduct) {
    const item = await this.productsService.create(product);
    return item;
  }

  @Mutation()
  async deleteProduct(@Args('id') id: string) {
    const item = await this.productsService.delete(id);
    return item;
  }
}
