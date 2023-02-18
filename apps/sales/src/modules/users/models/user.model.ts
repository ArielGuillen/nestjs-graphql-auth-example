import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'users', timestamps: true })
export class UserModel extends Document {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
