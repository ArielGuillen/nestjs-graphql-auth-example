import { load } from 'ts-dotenv';

const envSchema = {
  PORT: Number,
  NODE_ENV: String,
  MONGO_URI: String,
};

const env = load(envSchema);

export default env;
