import { ApolloError } from 'apollo-server-core';
import { Model } from 'mongoose';

import { validateID } from './mongoose.tools';

export default abstract class Service<T> {
  readonly model: Model<T>;
  protected name: string;

  constructor(model: Model<T>) {
    this.model = model;
    this.name = this.model.modelName.replace('Model', '');
  }

  async get(id: string): Promise<T> {
    await validateID(id, this.name);

    try {
      const item = await this.model.findById(id);
      return item;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }

  async getByFields(fields): Promise<Array<T>> {
    try {
      const items = await this.model.find(fields);
      return items;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }

  async getAll(): Promise<Array<T>> {
    try {
      const items = await this.model.find();
      return items;
    } catch (error) {
      console.error(error.message);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }

  async create(item: Partial<T>): Promise<T> {
    try {
      const newItem = new this.model(item);
      await newItem.save();
      return newItem;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }

  async update(id: string, item: Partial<T>): Promise<T> {
    await validateID(id, this.name);
    try {
      const itemUpdated = await this.model.findByIdAndUpdate(id, item, {
        new: true,
      });
      return itemUpdated;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }

  async delete(id: string): Promise<T> {
    await validateID(id, this.name);
    try {
      const item = await this.model.findByIdAndDelete(id);
      return item;
    } catch (error) {
      console.error(error);
      throw new ApolloError(error.message, 'MONGO_ERROR');
    }
  }
}
