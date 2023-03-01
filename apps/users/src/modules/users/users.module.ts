import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './services/users.service';
import { UserModel, UserSchema } from './models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
