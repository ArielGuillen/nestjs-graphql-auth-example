import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  async getProducts() {
    const products = [];
    products.push({
      _id: '123',
      name: 'Product Test',
      price: 12.3,
    });
    return products;
  }
}
