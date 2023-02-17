import { ApolloError } from 'apollo-server-core';
import { isValidObjectId } from 'mongoose';

export const validateID = async (id: string, name?: string) => {
  if (!isValidObjectId(id))
    throw new ApolloError(
      `${name} ID: «${id}» is not an ObjectID, it has a not valid format. 
      An ObjectId is a 12-byte binary BSON type represented in 24 hexadecimal characters`,
      'Incorrect_ID_Format',
    );
  return true;
};

export const validateParams = async (params, validParams) => {
  if (params != null && validParams.length > 0) {
    const length = validParams.length;
    for (let i = 0; i < length; i++) {
      const validate = validParams[i];
      if (params[validate]) await validateID(params[validate], validate);
    }
  }
  return true;
};

export const validateIDExists = async (id: string, name: string, model) => {
  await validateID(id, name);
  const exists = await model.findById(id);
  if (!exists) return false;
  return exists;
};
