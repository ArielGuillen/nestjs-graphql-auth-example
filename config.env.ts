import { load } from 'ts-dotenv';

const envSchema = {
  SECRET: String,
  NODE_ENV: String,
  SALES_PORT: Number,
  USERS_PORT: Number,
  MONGO_SALES_URI: String,
  MONGO_USERS_URI: String,
};

const env = load(envSchema);

export default env;
