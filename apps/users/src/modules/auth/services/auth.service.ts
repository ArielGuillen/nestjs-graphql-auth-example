import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { LoginUserInput } from '@/users/src/graphql';
import { UserModel } from '../../users/models/user.model';
import { UsersService } from '../../users/services/users.service';
import { User } from '@/sales/src/graphql';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
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
    return {
      accesToken: this.jwtService.sign({
        _id: user._id,
      }),
      user,
    };
  }

  async singup(singUserInput: LoginUserInput) {
    const user = await this.userService.getUser(singUserInput.username);
    if (user) throw new Error('User already exists!');

    const password = await bcrypt.hash(singUserInput.password, 10);

    return this.userService.create({ ...singUserInput, password });
  }
}
