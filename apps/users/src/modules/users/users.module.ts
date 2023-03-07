import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './services/users.service';
import { UserModel, UserSchema } from './models/user.model';
import { RoleModel, RoleSchema } from './models/roles.model';
import { UsersResolver } from './users.resolver';
import { RolesService } from './services/roles.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: RoleModel.name,
        schema: RoleSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver, RolesService],
  exports: [UsersService],
})
export class UsersModule {}
