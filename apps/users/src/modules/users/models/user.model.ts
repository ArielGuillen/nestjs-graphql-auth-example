import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

  @Prop([{ type: String }])
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
