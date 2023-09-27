import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from './guards/gql-auth.guard';
import { AuthService } from './services/auth.service';
import { LoginUserInput } from '../../graphql';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async login(@Context() context) {
    return this.authService.login(context.user);
  }

  @Mutation()
  async logout(@Context() context) {
    return this.authService.logout(context.req.session);
  }

  @Mutation()
  async singup(@Args('singupUserInput') singUserInput: LoginUserInput) {
    return this.authService.singup(singUserInput);
  }
}
