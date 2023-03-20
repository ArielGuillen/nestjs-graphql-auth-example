import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from './guards/gql-auth.guard';
import { AuthService } from './services/auth.service';
import { LoginUserInput } from '../../graphql';
import { User } from 'libs/auth/decorators/user.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async login(@Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation()
  async logout(@User() user: string) {
    return this.authService.logout(user);
  }

  @Mutation()
  async singup(@Args('singupUserInput') singUserInput: LoginUserInput) {
    return this.authService.singup(singUserInput);
  }
}
