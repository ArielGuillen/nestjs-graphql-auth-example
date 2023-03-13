import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RolesService } from './services/roles.service';
import { RoleModel, RoleSchema } from './models/roles.model';

import { RolesGuard } from './guards/roles.guard';
import { PermissionsGuard } from './guards/permissions.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RoleModel.name,
        schema: RoleSchema,
      },
    ]),
  ],
  providers: [RolesService, RolesGuard, PermissionsGuard],
  exports: [RolesService, RolesGuard, PermissionsGuard],
})
export class RolesModule {}
