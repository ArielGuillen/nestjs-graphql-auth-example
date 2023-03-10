import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ collection: 'users', timestamps: true })
export class UserModel {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  username: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'RoleModel' }])
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
