import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { UsersModule } from '../users/users.module';

@Module({
  // imports: [UsersModule],
  //   MongooseModule.forFeature([
  //     {
  //       name: RoleModel.name,
  //       schema: RoleSchema,
  //     },
  //   ]),
  // ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  // exports: [RolesService],
})
export class RolesModule {}
