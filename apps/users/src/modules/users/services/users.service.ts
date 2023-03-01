import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApolloError } from 'apollo-server-core';

import Service from 'libs/utils/service.class';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService extends Service<UserModel> {
  constructor(@InjectModel(UserModel.name) model: Model<UserModel>) {
    super(model);
  }

  async getUser(username: string): Promise<UserModel> {
    try {
      const user = await this.model.findOne({ username });
      return user;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }
}
