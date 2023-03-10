import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'roles', timestamps: true })
export class RoleModel {
  @Prop({ type: String })
  role: string;

  @Prop([{ type: String }])
  permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(RoleModel);
