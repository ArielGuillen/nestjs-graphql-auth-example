import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import * as bcrypt from 'bcrypt';

import { LoginUserInput, User } from '@/users/src/graphql';
import { UserModel } from '../../users/models/user.model';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserModel> {
    const user = await this.userService.getUser(username);

    const valid = await bcrypt.compare(password, user.password);
    if (user && valid) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: User) {
    await this.cacheManager.set(user._id.toString(), user);
    return {
      accesToken: this.jwtService.sign({
        _id: user._id,
      }),
      user,
    };
  }

  async logout(user: string) {
    await this.cacheManager.del(user);
    return true;
  }

  async singup(singUserInput: LoginUserInput) {
    const user = await this.userService.getUser(singUserInput.username);
    if (user) throw new Error('User already exists!');

    const password = await bcrypt.hash(singUserInput.password, 10);

    return this.userService.create({ ...singUserInput, password });
  }
}
