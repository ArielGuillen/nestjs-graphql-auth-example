import { UseGuards } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';

import { RolesGuard } from '../roles/guards/roles.guard';
import { UsersService } from './services/users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';

import { Roles } from 'libs/auth/decorators/roles.decorator';
import { Role } from 'libs/auth/constants/roles.enum';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query()
  @Roles(Role.ADMIN)
  @UseGuards(AuthenticatedGuard)
  async getUsers() {
    return this.usersService.getAll();
  }
}
