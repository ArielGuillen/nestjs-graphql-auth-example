import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './services/users.service';
import { UserModel, UserSchema } from './models/user.model';
import { UsersResolver } from './users.resolver';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    RolesModule,
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
