import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserService } from './services';
import { IUser } from '../../graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query()
  async getUsers() {
    const item = await this.userService.getAll();
    return item;
  }

  @Mutation()
  async createUser(@Args('user') user: IUser) {
    const item = await this.userService.createUser(user);
    return item;
  }

  @Mutation()
  async deleteUser(@Args('id') id: string) {
    const item = await this.userService.delete(id);
    return item;
  }
}
