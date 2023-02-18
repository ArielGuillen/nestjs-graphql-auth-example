import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'products', timestamps: true })
export class ProductModel extends Document {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: Number,
  })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductModel);
