import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { RolesService } from '../services/roles.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private roleService: RolesService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const nomMutacion = context.getHandler().name;
    const ctx = GqlExecutionContext.create(context);
    const roles = ctx.getContext().ctx.roles;

    const rolesDb = await this.roleService.getByFields({
      name: { $in: roles },
    });
    const tienePermiso = rolesDb.some((rol) => rol.permissions.includes(nomMutacion));

    return tienePermiso;
  }
}
