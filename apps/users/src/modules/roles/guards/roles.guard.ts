import { CACHE_MANAGER, CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

import { Cache } from 'cache-manager';
import { UserModel } from '../../users/models/user.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const id = ctx.getContext().ctx.user;
    const user: UserModel = await this.cacheManager.get(id.toString());
    console.log(user);

    const roles = user.roles;
    const hasRequiredRole = roles.some((role) => requiredRoles.includes(role));
    return hasRequiredRole;
  }
}
