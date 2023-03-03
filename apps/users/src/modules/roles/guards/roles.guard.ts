// import { UserService } from '@/sales/src/modules/users/services';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  // constructor(private userService: UserService) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);

    const userId = ctx.getContext().ctx.user;
    console.log(userId);

    return true;
  }
}
