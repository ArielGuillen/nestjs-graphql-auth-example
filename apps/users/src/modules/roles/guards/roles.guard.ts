import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

import { Role } from 'libs/auth/constants/roles.enum';
import { RolesService } from '../services/roles.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private roleService: RolesService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);

    const roles = ctx.getContext().ctx.roles;
    const hasRequiredRole = roles.some((role) => requiredRoles.includes(role));
    return hasRequiredRole;
  }
}
