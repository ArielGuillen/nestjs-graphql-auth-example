import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './services/users.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  @UseGuards(JwtAuthGuard)
  async getUsers() {
    return this.usersService.getAll();
  }
}
