import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { RoleModel } from '../models/roles.model';
import Service from 'libs/utils/service.class';

@Injectable()
export class RolesService extends Service<RoleModel> {
  constructor(@InjectModel(RoleModel.name) model: Model<RoleModel>) {
    super(model);
  }
}
