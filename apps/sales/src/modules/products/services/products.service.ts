import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductModel } from '../models/product.model';
import Service from 'libs/utils/service.class';

@Injectable()
export class ProductsService extends Service<ProductModel> {
  constructor(@InjectModel(ProductModel.name) model: Model<ProductModel>) {
    super(model);
  }
}
