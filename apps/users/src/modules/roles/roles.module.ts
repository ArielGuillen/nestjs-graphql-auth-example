import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleModel, RoleSchema } from './models/roles.model';
import { RolesService } from './services/roles.service';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RoleModel.name,
        schema: RoleSchema,
      },
    ]),
  ],
  providers: [RolesService, RolesGuard],
  exports: [RolesService, RolesGuard],
})
export class RolesModule {}
