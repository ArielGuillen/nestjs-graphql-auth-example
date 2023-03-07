import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UserModel } from '../models/user.model';
import Service from 'libs/utils/service.class';
import { IUser } from '@/sales/src/graphql';

@Injectable()
export class UserService extends Service<UserModel> {
  constructor(
    @InjectModel(UserModel.name) model: Model<UserModel>,
    @Inject('RESOURCES_SERVICE') private resourceClient: ClientProxy,
  ) {
    super(model);
  }

  async createUser(user: IUser) {
    this.resourceClient.emit('resource_created', user);
    return null;
  }
}
